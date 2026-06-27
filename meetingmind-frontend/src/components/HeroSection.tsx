"use client";

import { BrainCircuit } from "lucide-react";
import { supabase } from "@/services/supabase";

export default function HeroSection() {
  async function handleGoogleLogin() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin,
      },
    });
  }

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-[#0F172A]/90 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <BrainCircuit className="w-5 h-5 text-white" />
            </div>

            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-white">
                MeetingMind
              </h1>

              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-2 py-1 rounded-md font-semibold">
                AI
              </span>
            </div>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-[#0C4D35] transition-colors text-white px-5 py-2 rounded-lg font-medium"
          >
            Continue with Google
          </button>

        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">

        {/* Background Glow */}
        <div className="absolute left-1/2 top-28 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full"></div>

        <div className="relative max-w-5xl mx-auto px-6 py-28 text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">

            <BrainCircuit className="w-4 h-4" />

            AI-Powered Meeting Intelligence

          </div>

          <p className="mt-10 text-lg text-slate-400">

            Every meeting contains decisions.

            <br />

            We make sure none of them are lost.

          </p>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight text-white">

            Turn Every Meeting

            <br />

            <span className="bg-gradient-to-r from-blue-400 to-purple-400
bg-clip-text
text-transparent">

              Into Actionable Intelligence

            </span>

          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-slate-300">

            Analyze meeting transcripts, retrieve historical context,
            extract action items, and generate AI-powered follow-up
            emails—all in one place.

          </p>

          <div className="mt-12">

            <button
              onClick={handleGoogleLogin}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-colors text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-black/20"
            >
              Continue with Google
            </button>

            <p className="mt-4 text-sm text-slate-500">

              Secure authentication powered by Google & Supabase

            </p>

          </div>

        </div>

      </section>
    </>
  );
}