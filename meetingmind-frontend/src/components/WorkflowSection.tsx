"use client";

import {
  FileText,
  BrainCircuit,
  Database,
  CheckSquare,
  Mail,
  ArrowDown,
} from "lucide-react";

const workflow = [
  {
    icon: FileText,
    title: "Meeting Transcript",
    description: "Upload or paste meeting transcripts.",
  },
  {
    icon: BrainCircuit,
    title: "AI Analysis",
    description: "LangGraph orchestrates Groq LLM analysis.",
  },
  {
    icon: Database,
    title: "Historical Memory",
    description: "Retrieve relevant context from Pinecone.",
  },
  {
    icon: CheckSquare,
    title: "Action Items",
    description: "Extract tasks, owners and deadlines.",
  },
  {
    icon: Mail,
    title: "Follow-up Email",
    description: "Generate professional meeting summaries.",
  },
];

export default function WorkflowSection() {
  return (
    <section className="bg-[#08111F] py-24">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">

          <span className="text-blue-400 font-semibold uppercase tracking-widest text-sm">
            Workflow
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            How MeetingMind AI Works
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
            From a raw transcript to structured insights in just a few AI-powered
            steps.
          </p>

        </div>

        <div className="mt-20 flex flex-col items-center">

          {workflow.map((step, index) => {

            const Icon = step.icon;

            return (

              <div
                key={index}
                className="flex flex-col items-center"
              >

                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">

                  <Icon className="w-9 h-9 text-white" />

                </div>

                <h3 className="mt-5 text-xl font-semibold text-white">

                  {step.title}

                </h3>

                <p className="mt-2 text-center max-w-sm text-slate-400">

                  {step.description}

                </p>

                {index !== workflow.length - 1 && (

                  <ArrowDown className="w-8 h-8 text-blue-400 my-8" />

                )}

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}