"use client";

import DashboardHeader from "./DashboardHeader";
import DashboardStats from "./DashboardStats";
import TranscriptCard from "./TranscriptCard";
import AnalysisSection from "./AnalysisSection";
import MeetingsPanel from "./MeetingsPanel";
import TasksPanel from "./TasksPanel";

import MeetingModal from "../MeetingModal";

interface DashboardProps {
  meetings: any[];
  tasks: any[];
  result: any;

  search: string;
  setSearch: (value: string) => void;

  filteredMeetings: any[];

  selectedMeeting: any;
  setSelectedMeeting: (meeting: any | null) => void;

  refreshDashboard: (result: any) => void;

  approveMeeting: (id: number) => void;

  completeTask: (id: number) => void;
}

export default function Dashboard({
  meetings,
  tasks,
  result,

  search,
  setSearch,

  filteredMeetings,

  selectedMeeting,
  setSelectedMeeting,

  refreshDashboard,

  approveMeeting,

  completeTask,
}: DashboardProps) {
  return (
    <main className="min-h-screen bg-[#08111F] text-white">

      <div className="max-w-7xl mx-auto px-8 py-10">

        <DashboardHeader />

        <div className="mt-12">

          <DashboardStats
            meetings={meetings}
            tasks={tasks}
          />

        </div>

        <div className="mt-12">

          <TranscriptCard
            onResult={refreshDashboard}
          />

        </div>

        <div className="mt-10">

          <AnalysisSection
            result={result}
          />

        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          <MeetingsPanel
            meetings={meetings}
            filteredMeetings={filteredMeetings}
            search={search}
            setSearch={setSearch}
            setSelectedMeeting={setSelectedMeeting}
            approveMeeting={approveMeeting}
          />

          <TasksPanel
            tasks={tasks}
            completeTask={completeTask}
          />

        </div>

      </div>

      {selectedMeeting && (

        <MeetingModal
          meeting={selectedMeeting}
          onClose={() => setSelectedMeeting(null)}
          onApprove={approveMeeting}
        />

      )}

    </main>
  );
}