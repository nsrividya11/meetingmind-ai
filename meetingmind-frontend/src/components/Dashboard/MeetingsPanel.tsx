"use client";

interface MeetingsPanelProps {
  meetings: any[];
  filteredMeetings: any[];
  search: string;
  setSearch: (value: string) => void;
  setSelectedMeeting: (meeting: any) => void;
  approveMeeting: (id: number) => void;
}

export default function MeetingsPanel({
  meetings,
  filteredMeetings,
  search,
  setSearch,
  setSelectedMeeting,
  approveMeeting,
}: MeetingsPanelProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-6">

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Previous Meetings
          </h2>

          <p className="text-slate-400 mt-1">
            Browse previously analyzed meetings.
          </p>

        </div>

      </div>

      <input
        type="text"
        placeholder="Search meetings..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none mb-8"
      />

      {meetings.length === 0 ? (

        <div className="rounded-xl border border-dashed border-slate-700 p-8 text-center text-slate-500">

          No meetings available.

        </div>

      ) : (

        filteredMeetings.map((meeting) => (

          <div
            key={meeting.id}
            className="rounded-2xl border border-slate-800 bg-slate-950 p-6 mb-5 hover:border-blue-500 transition-all"
          >

            <div className="flex items-center justify-between">

              <h3 className="text-xl font-semibold text-white">

                Meeting #{meeting.id}

              </h3>

              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  meeting.approval_status === "approved"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }`}
              >
                {meeting.approval_status}
              </span>

            </div>

            <div className="mt-5">

              <p className="text-blue-400 font-medium">

                AI Summary

              </p>

              <p className="text-slate-300 mt-2 line-clamp-4">

                {meeting.analysis}

              </p>

            </div>

            <div className="flex gap-3 mt-6">

              <button
                onClick={() => setSelectedMeeting(meeting)}
                className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 text-white font-medium hover:opacity-90"
              >
                View Details
              </button>

              {meeting.approval_status !== "approved" && (

                <button
                  onClick={() => approveMeeting(meeting.id)}
                  className="rounded-xl border border-green-500 text-green-400 px-5 py-2 hover:bg-green-500/10"
                >
                  Approve
                </button>

              )}

            </div>

          </div>

        ))

      )}

    </div>
  );
}