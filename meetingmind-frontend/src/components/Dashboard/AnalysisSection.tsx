"use client";

import AnalysisPanel from "../AnalysisPanel";
import { BrainCircuit } from "lucide-react";

interface AnalysisSectionProps {
  result: any;
}

export default function AnalysisSection({
  result,
}: AnalysisSectionProps) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-8">

      <div className="flex items-center gap-4">

        <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">

          <BrainCircuit className="w-7 h-7 text-white" />

        </div>

        <div>

          <h2 className="text-3xl font-bold text-white">
            AI Analysis Results
          </h2>

          <p className="mt-1 text-slate-400">
            Review the generated summary, historical context,
            action items and AI-generated follow-up email.
          </p>

        </div>

      </div>

      <div className="mt-8">

        <AnalysisPanel result={result} />

      </div>

    </section>
  );
}