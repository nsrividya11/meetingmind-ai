"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/services/supabase";

export default function UserProfile() {

    const [user, setUser] = useState<any>(null);

    useEffect(() => {

        supabase.auth.getUser()

            .then(({ data }) => {

                console.log(data.user);

                setUser(data.user);

            });

    }, []);

    async function logout() {

        await supabase.auth.signOut();

        location.reload();

    }

    if (!user) return null;

    return (

        <div className="flex items-center gap-4">

            <img
                    src={
                        user.user_metadata.avatar_url ||
                        user.user_metadata.picture
                    }
                    width={40}
                    height={40}
                    className="rounded-full"
                    alt="Profile"
                />

            <div>

                <div>

                    {user.user_metadata.full_name}

                </div>

                <div className="text-sm text-gray-500">

                    {user.email}

                </div>

            </div>

            <button

                onClick={logout}

                className="bg-red-600 text-white px-4 py-2 rounded"

            >

                Logout

            </button>

        </div>

    );

}