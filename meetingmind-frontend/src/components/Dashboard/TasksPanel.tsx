"use client";

interface TasksPanelProps {
  tasks: any[];
  completeTask: (id: number) => void;
}

export default function TasksPanel({
  tasks,
  completeTask,
}: TasksPanelProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-6">

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-white">
          Pending Tasks
        </h2>

        <p className="mt-1 text-slate-400">
          Track and complete action items extracted from meetings.
        </p>

      </div>

      {tasks.length === 0 ? (

        <div className="rounded-xl border border-dashed border-slate-700 p-8 text-center text-slate-500">

          No pending tasks.

        </div>

      ) : (

        tasks.map((task) => (

          <div
            key={task.id}
            className="rounded-2xl border border-slate-800 bg-slate-950 p-6 mb-5 hover:border-blue-500 transition-all"
          >

            <div className="flex items-center justify-between">

              <h3 className="text-lg font-semibold text-white">

                {task.assignee}

              </h3>

              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  task.status === "Completed"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }`}
              >
                {task.status}
              </span>

            </div>

            <div className="mt-5">

              <p className="text-slate-300 leading-7">

                {task.task}

              </p>

            </div>

            <div className="mt-5 flex items-center justify-between">

              <span className="text-slate-500 text-sm">

                Due: {task.due_date}

              </span>

              {task.status === "Pending" && (

                <button
                  onClick={() => completeTask(task.id)}
                  className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 text-white font-medium hover:opacity-90"
                >
                  Mark Complete
                </button>

              )}

            </div>

          </div>

        ))

      )}

    </div>
  );
}