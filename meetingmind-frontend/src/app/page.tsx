"use client";

import { useEffect, useState } from "react";

import API from "@/services/api";

import TranscriptForm from "@/components/TranscriptForm";
import AnalysisPanel from "@/components/AnalysisPanel";
import TaskTable from "@/components/TaskTable";
import LoginButton from "@/components/LoginButton";
import UserProfile from "@/components/UserProfile";
import MeetingModal from "@/components/MeetingModal";
import StatsCards from "@/components/StatsCards";

import { Toaster } from "react-hot-toast";

export default function Home() {

  const [result, setResult] = useState<any>(null);

  const [meetings, setMeetings] = useState<any[]>([]);

  const [tasks, setTasks] = useState<any[]>([]);

  const [search, setSearch] = useState("");

  const [selectedMeeting, setSelectedMeeting] = useState<any>(null);

  async function loadData() {

    try {

      const meetingResponse = await API.get("/meetings");

      setMeetings(meetingResponse.data);

      const taskResponse = await API.get("/tasks");

      setTasks(taskResponse.data);

    }

    catch (err) {

      console.log(err);

    }

  }

  useEffect(() => {

    loadData();

  }, []);

  function refreshDashboard(data: any) {

    setResult(data);

    loadData();

  }

  async function completeTask(id: number) {

    await API.put(`/complete-task/${id}`);

    loadData();

  }

  async function approveMeeting(id: number) {

    await API.put(`/approve-meeting/${id}`);

    loadData();

  }

  const filteredMeetings = meetings.filter((meeting) => {

  const text = (
    meeting.analysis +
    meeting.followup_email +
    meeting.related_context
  ).toLowerCase();

  return text.includes(search.toLowerCase());

});

  return (

    <main className="min-h-screen bg-slate-100">

        <Toaster
    position="top-right"
/>

      <div className="max-w-7xl mx-auto p-8">

        <h1 className="text-5xl font-bold text-center text-blue-700">

          MeetingMind AI

        </h1>

        <div className="flex justify-end my-6">

        <UserProfile />

        <LoginButton />

        </div>

        <p className="text-center text-gray-600 mt-3">

          AI Powered Meeting Intelligence Platform

        </p>

        <div className="mt-10">

    <StatsCards

        meetings={meetings}

        tasks={tasks}

    />

</div>

        <div className="mt-10">

          <TranscriptForm

            onResult={refreshDashboard}

          />

        </div>

        <div className="mt-8">

          <AnalysisPanel

            result={result}

          />

        </div>

        

        <div className="grid md:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow-lg p-6">

  <h2 className="text-2xl font-bold text-gray-900 mb-6">
    Previous Meetings
  </h2>

  <input
    type="text"
    placeholder="Search meetings..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full border rounded-lg p-3 mb-6 focus:ring-2 focus:ring-blue-500 outline-none"
/>

  {meetings.length === 0 ? (

    <p className="text-gray-500">
      No meetings found.
    </p>

  ) : (

    filteredMeetings.map((meeting) => (

      <div
        key={meeting.id}
        className="border rounded-xl p-5 mb-5 shadow-sm hover:shadow-md transition"
      >

        <div className="flex justify-between">

          <h3 className="text-lg font-bold text-gray-900">
            Meeting #{meeting.id}
          </h3>

          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              meeting.approval_status === "approved"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {meeting.approval_status}
          </span>

        </div>

        <div className="mt-4">

          <p className="font-semibold text-gray-800">
            Summary
          </p>

          <p className="text-gray-600 mt-1 line-clamp-4">

            {meeting.analysis}

          </p>

        </div>

        <div className="flex gap-3 mt-5">

          <button
            className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg"
            onClick={() =>

    setSelectedMeeting(meeting)

}
          >
            View Email
          </button>

          {meeting.approval_status !== "approved" && (

            <button
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
              onClick={() => approveMeeting(meeting.id)}
            >
              Approve
            </button>

          )}

        </div>

      </div>

    ))

  )}

</div>

          <div className="bg-white rounded-xl shadow-lg p-6">

  <h2 className="text-2xl font-bold text-gray-900 mb-6">
    Pending Tasks
  </h2>

  {tasks.length === 0 ? (

    <p className="text-gray-700">
      No pending tasks.
    </p>

  ) : (

    tasks.map((task) => (

      <div
        key={task.id}
        className="border rounded-xl p-5 mb-5 shadow-sm hover:shadow-md transition"
      >

        <div className="flex justify-between">

          <h3 className="font-bold text-lg text-gray-900">

            {task.assignee}

          </h3>

          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              task.status === "Completed"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {task.status}
          </span>

        </div>

        <p className="text-gray-700 mt-3">

          {task.task}

        </p>

        <p className="text-gray-700 mt-2">

          Due:
          {" "}
          {task.due_date}

        </p>

        {task.status === "Pending" && (

          <button
            className="mt-5 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg"
            onClick={() => completeTask(task.id)}
          >
            Complete
          </button>

        )}

      </div>

    ))

  )}

</div>

        </div>

      </div>

      {
    selectedMeeting && (

        <MeetingModal

            meeting={selectedMeeting}

            onClose={() =>

                setSelectedMeeting(null)

            }

            onApprove={approveMeeting}

        />

    )

}

    </main>

  );

}