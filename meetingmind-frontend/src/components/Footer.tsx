"use client";

import { BrainCircuit } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#08111F]">

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-5">

        <div className="flex items-center gap-3">

          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">

            <BrainCircuit className="w-5 h-5 text-white" />

          </div>

          <div>

            <h3 className="text-white font-semibold">
              MeetingMind AI
            </h3>

            <p className="text-sm text-slate-500">
              AI-Powered Meeting Intelligence
            </p>

          </div>

        </div>

        <div className="text-slate-500 text-sm text-center md:text-right">
          © {new Date().getFullYear()} MeetingMind AI.
          <br />
          Built using Next.js, FastAPI, LangGraph, Pinecone & Groq.
        </div>

      </div>

    </footer>
  );
}