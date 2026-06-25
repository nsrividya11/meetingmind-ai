"use client";

import { useState } from "react";
import API from "@/services/api";
import { supabase } from "@/services/supabase";

import toast from "react-hot-toast";

export default function TranscriptForm({ onResult }: any) {
  const [transcript, setTranscript] = useState("");
  const [loading, setLoading] = useState(false);

  async function analyze() {

    if (!transcript.trim()) return;

    try {

        setLoading(true);

        const {

            data: { session }

        } = await supabase.auth.getSession();

        const res = await API.post(

            "/process-meeting",

            {

                transcript

            },

            {

                headers: {

                    Authorization:

                        `Bearer ${session?.access_token}`

                }

            }

        );

        onResult(res.data);

        toast.success("Meeting analyzed successfully!");

        setTranscript("");

    }

    catch (e) {

        toast.error("Backend Error");

        console.log(e);

    }

    finally {

        setLoading(false);

    }

}

  return (
    <div className="bg-white shadow rounded-xl p-6 text-gray-900">

      <h2 className="text-2xl font-bold mb-4">
        Upload Meeting Transcript
      </h2>

      <textarea
        rows={10}
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
        className="border rounded-lg w-full p-4 text-gray-900"
        placeholder="Paste transcript..."
      />

      <button
        onClick={analyze}
        className="mt-5 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg"
      >
        {loading ? "Analyzing..." : "Analyze Meeting"}
      </button>

    </div>
  );
}