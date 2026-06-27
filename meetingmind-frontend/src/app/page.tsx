"use client";

import { useEffect, useState } from "react";

import API from "@/services/api";
import { supabase } from "@/services/supabase";

import LandingPage from "@/components/LandingPage";
import Dashboard from "@/components/Dashboard/Dashboard";

import { Toaster } from "react-hot-toast";

export default function Home() {

  const [result, setResult] = useState<any>(null);

  const [meetings, setMeetings] = useState<any[]>([]);

  const [tasks, setTasks] = useState<any[]>([]);

  const [search, setSearch] = useState("");

  const [selectedMeeting, setSelectedMeeting] = useState<any>(null);

  const [user, setUser] = useState<any>(null);

  const [authLoading, setAuthLoading] = useState(true);

  async function loadData() {

    try {

      const meetingResponse = await API.get("/meetings");

      setMeetings(meetingResponse.data);

      const taskResponse = await API.get("/tasks");

      setTasks(taskResponse.data);

    }

    catch (err) {

      console.error(err);

    }

  }

  useEffect(() => {

    try {

      const checkAuth = Promise.race([

        supabase.auth.getUser(),

        new Promise<any>((_, reject) =>

          setTimeout(() => reject(new Error("Timeout")), 2000)

        )

      ]);

      checkAuth

        .then(({ data }) => {

          setUser(data?.user ?? null);

          if (data?.user) {

            loadData();

          }

        })

        .catch((err) => {

          console.error(err);

          setUser(null);

        })

        .finally(() => {

          setAuthLoading(false);

        });

      const {

        data: { subscription }

      } = supabase.auth.onAuthStateChange((_event, session) => {

        setUser(session?.user ?? null);

        if (session?.user) {

          loadData();

        }

        else {

          setMeetings([]);

          setTasks([]);

          setResult(null);

        }

      });

      return () => {

        subscription.unsubscribe();

      };

    }

    catch (err) {

      console.error(err);

      setAuthLoading(false);

    }

  }, []);

  function refreshDashboard(data: any) {

    setResult(data);

    loadData();

  }

  async function approveMeeting(id: number) {

    await API.put(`/approve-meeting/${id}`);

    loadData();

  }

  async function completeTask(id: number) {

    await API.put(`/complete-task/${id}`);

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

  if (authLoading) {

    return (

      <div className="min-h-screen bg-[#08111F] flex items-center justify-center">

        <div className="flex flex-col items-center gap-6">

          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 animate-spin" />

          <p className="text-slate-300">

            Initializing Session...

          </p>

        </div>

      </div>

    );

  }

  if (!user) {

    return <LandingPage />;

  }

    return (
    <>
      <Toaster position="top-right" />

      <Dashboard
        meetings={meetings}
        tasks={tasks}
        result={result}
        search={search}
        setSearch={setSearch}
        filteredMeetings={filteredMeetings}
        selectedMeeting={selectedMeeting}
        setSelectedMeeting={setSelectedMeeting}
        refreshDashboard={refreshDashboard}
        approveMeeting={approveMeeting}
        completeTask={completeTask}
      />
    </>
  );
}