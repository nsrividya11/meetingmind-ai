"use client";

import TranscriptForm from "../TranscriptForm";
import { FileText } from "lucide-react";

interface TranscriptCardProps {
  onResult: (result: any) => void;
}

export default function TranscriptCard({
  onResult,
}: TranscriptCardProps) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-8">

      <div className="flex items-center gap-4">

        <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">

          <FileText className="w-7 h-7 text-white" />

        </div>

        <div>

          <h2 className="text-3xl font-bold text-white">
            Analyze New Meeting
          </h2>

          <p className="mt-1 text-slate-400">
            Paste a meeting transcript and let MeetingMind AI generate insights,
            tasks, historical context and follow-up emails.
          </p>

        </div>

      </div>

      <div className="mt-8">

        <TranscriptForm onResult={onResult} />

      </div>

    </section>
  );
}