"use client";

import LoginButton from "./LoginButton";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-[#08111F] py-24">

      <div className="max-w-5xl mx-auto px-6">

        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-[#0d1f38] p-14 text-center">

          <h2 className="text-4xl font-bold text-white">
            Ready to Make Your Meetings More Productive?
          </h2>

          <p className="mt-5 text-slate-400 text-lg max-w-2xl mx-auto">
            Transform lengthy meeting transcripts into structured insights,
            action items, historical context, and AI-generated follow-up emails.
          </p>

          <div className="mt-10 flex justify-center">

            <div className="flex items-center gap-4">

              <LoginButton />

              <ArrowRight className="text-blue-400" />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}