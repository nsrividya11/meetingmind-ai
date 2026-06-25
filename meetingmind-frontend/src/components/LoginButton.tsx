"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/services/supabase";

export default function LoginButton() {

    const [user, setUser] = useState<any>(null);

    useEffect(() => {

        supabase.auth.getUser().then(({ data }) => {

            setUser(data.user);

        });

    }, []);

    async function login() {

        await supabase.auth.signInWithOAuth({

            provider: "google"

        });

    }

    if (user) return null;

    return (

        <button

            onClick={login}

            className="bg-blue-700 text-white px-6 py-3 rounded-lg"

        >

            Continue with Google

        </button>

    );

}