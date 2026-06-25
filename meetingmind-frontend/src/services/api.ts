import axios from "axios";
import { supabase } from "./supabase";

const API = axios.create({

    baseURL: "http://127.0.0.1:8000"

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