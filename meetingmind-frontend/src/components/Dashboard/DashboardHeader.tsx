"use client";

import UserProfile from "../UserProfile";
import { Sparkles } from "lucide-react";

export default function DashboardHeader() {
  return (
    <section className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

      <div>

        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">

          <Sparkles className="w-4 h-4" />

          AI Meeting Workspace

        </div>

        <h1 className="mt-5 text-5xl font-bold text-white">

          Welcome back 👋

        </h1>

        <p className="mt-5 max-w-2xl text-slate-400 text-lg leading-8">

          Analyze meeting transcripts, retrieve historical context,
          extract action items and generate professional follow-up
          emails—all from one intelligent workspace.

        </p>

      </div>

      <UserProfile />

    </section>
  );
}