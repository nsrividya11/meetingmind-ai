"use client";

import {
  FileText,
  CheckSquare,
  CheckCircle2,
} from "lucide-react";

interface DashboardStatsProps {
  meetings: any[];
  tasks: any[];
}

export default function DashboardStats({
  meetings,
  tasks,
}: DashboardStatsProps) {

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const stats = [
    {
      title: "Meetings",
      value: meetings.length,
      subtitle: "Total meetings analyzed",
      icon: FileText,
    },
    {
      title: "Pending Tasks",
      value: pendingTasks,
      subtitle: "Require your attention",
      icon: CheckSquare,
    },
    {
      title: "Completed",
      value: completedTasks,
      subtitle: "Finished action items",
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="grid md:grid-cols-3 gap-6">

      {stats.map((stat, index) => {

        const Icon = stat.icon;

        return (

          <div
            key={index}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-6 transition-all duration-300 hover:border-blue-500 hover:-translate-y-1"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-slate-400 text-sm">

                  {stat.title}

                </p>

                <h2 className="mt-3 text-4xl font-bold text-white">

                  {stat.value}

                </h2>

                <p className="mt-3 text-sm text-slate-500">

                  {stat.subtitle}

                </p>

              </div>

              <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">

                <Icon className="w-7 h-7 text-white" />

              </div>

            </div>

          </div>

        );

      })}

    </section>
  );
}