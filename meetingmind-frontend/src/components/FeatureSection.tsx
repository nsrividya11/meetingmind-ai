"use client";

import {
  BrainCircuit,
  History,
  CheckSquare,
  Mail,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Meeting Analysis",
    description:
      "Analyze meeting transcripts and automatically identify key decisions, discussion points, and insights.",
  },
  {
    icon: History,
    title: "Historical Context",
    description:
      "Retrieve relevant information from previous meetings using semantic search powered by vector embeddings.",
  },
  {
    icon: CheckSquare,
    title: "Action Item Extraction",
    description:
      "Automatically identify owners, deadlines, and pending tasks from meeting discussions.",
  },
  {
    icon: Mail,
    title: "Follow-up Emails",
    description:
      "Generate professional meeting recap emails that are ready to review and send.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-[#08111F]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-blue-400 font-semibold uppercase tracking-widest text-sm">
            Features
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Everything You Need After Every Meeting
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
            MeetingMind AI transforms unstructured meeting conversations into
            organized knowledge, helping teams stay aligned and productive.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <div
                key={index}
                className="group rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-8 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2"
              >

                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">

                  <Icon className="w-7 h-7 text-white" />

                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">

                  {feature.title}

                </h3>

                <p className="mt-4 text-slate-400 leading-7">

                  {feature.description}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}