import axios from "axios";
import { supabase } from "./supabase";

const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});

API.interceptors.request.use(
    async (config) => {

        const {
            data: { session }
        } = await supabase.auth.getSession();

        if (session) {
            config.headers.Authorization =
                `Bearer ${session.access_token}`;
        }

        return config;
    }
);

export default API;