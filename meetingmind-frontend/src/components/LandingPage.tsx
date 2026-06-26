"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/services/supabase";

export default function LandingPage() {
  async function handleGoogleLogin() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin
      }
    });
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans overflow-x-hidden selection:bg-indigo-600 selection:text-white">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-12"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

      {/* Navbar */}
      <nav className="border-b border-slate-900 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
              MeetingMind AI
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-slate-400 hover:text-white transition">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-400 hover:text-white transition">How it Works</a>
            <button
              onClick={handleGoogleLogin}
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition shadow-md shadow-indigo-600/10 hover:shadow-indigo-500/20 hover:-translate-y-0.5 cursor-pointer"
            >
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-indigo-400 mb-6 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            Powered by LangGraph, Pinecone, & Voyage AI
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Unlock the Hidden Value of <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">
              Your Team Meetings
            </span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            MeetingMind AI automatically processes raw transcripts, retrieves historical meeting memory, extracts assignees and task lists, and generates professional follow-up emails in seconds.
          </p>

          <div className="mt-10 flex justify-center">
            <button
              onClick={handleGoogleLogin}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition flex items-center justify-center gap-3 cursor-pointer"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>
              Get Started with Google
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6 bg-slate-950/30 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Full-Stack Intelligence Features</h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">Everything you need to turn raw conversations into robust, indexed organization archives.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* feature 1 */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 hover:border-slate-700 hover:-translate-y-1 transition duration-300 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">Multi-Agent Workflows</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Utilizes LangGraph to structure the processing pipeline across isolated analysis, extraction, retrieval, and generation steps.
              </p>
            </div>

            {/* feature 2 */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 hover:border-slate-700 hover:-translate-y-1 transition duration-300 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">Semantic Historical Recall</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Embeds summaries via Voyage AI and indexes them in Pinecone. Recalls related historical summaries automatically.
              </p>
            </div>

            {/* feature 3 */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 hover:border-slate-700 hover:-translate-y-1 transition duration-300 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">Structured Task Lists</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Extracts complete action item registries including task content, designated assignees, and target timelines in clean tables.
              </p>
            </div>

            {/* feature 4 */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 hover:border-slate-700 hover:-translate-y-1 transition duration-300 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">Review & Approval Stages</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Enables users to preview, modify, and officially sign off on follow-up drafts and task assignees before they are finalized.
              </p>
            </div>

            {/* feature 5 */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 hover:border-slate-700 hover:-translate-y-1 transition duration-300 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">One-click PDF Reports</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Generate professional, beautifully formatted PDF reports including meeting metadata, summaries, tasks, and follow-ups.
              </p>
            </div>

            {/* feature 6 */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 hover:border-slate-700 hover:-translate-y-1 transition duration-300 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">Google OAuth Authentication</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Secure multi-tenant authentication powered by Supabase. Your transcripts, summaries, and action items remain private.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Flow */}
      <section id="how-it-works" className="py-20 px-6 border-t border-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Simplified Project Architecture</h2>
            <p className="mt-4 text-slate-400">How your transcript data flows through the multi-agent AI framework.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-indigo-950 border border-indigo-900 flex items-center justify-center text-lg font-bold text-indigo-400 mb-4 shadow-lg shadow-indigo-950/50">
                01
              </div>
              <h4 className="text-md font-bold text-white">Paste Transcript</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">Upload raw video transcripts or meeting scripts via the secure portal.</p>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-indigo-950 border border-indigo-900 flex items-center justify-center text-lg font-bold text-indigo-400 mb-4 shadow-lg shadow-indigo-950/50">
                02
              </div>
              <h4 className="text-md font-bold text-white">LangGraph Analysis</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">Multi-stage graph retrieves history, summarizes notes, and extracts task structures.</p>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-indigo-950 border border-indigo-900 flex items-center justify-center text-lg font-bold text-indigo-400 mb-4 shadow-lg shadow-indigo-950/50">
                03
              </div>
              <h4 className="text-md font-bold text-white">Memory Storage</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">Saves meeting records in Supabase and upserts semantic embeddings to Pinecone.</p>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-indigo-950 border border-indigo-900 flex items-center justify-center text-lg font-bold text-indigo-400 mb-4 shadow-lg shadow-indigo-950/50">
                04
              </div>
              <h4 className="text-md font-bold text-white">Track Dashboard</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">Review emails, mark checklist items as completed, and export PDF summaries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 px-6 border-t border-slate-900 bg-gradient-to-t from-slate-950 to-slate-900/30 text-center relative">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">Ready to Run Productive Meetings?</h2>
          <p className="mt-6 text-slate-400 leading-relaxed text-md md:text-lg">
            Stop losing track of notes, owners, and timelines. Start managing your organizational history with AI intelligence.
          </p>
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleGoogleLogin}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition cursor-pointer"
            >
              Get Started Free with Google OAuth
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12 px-6 text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="text-sm text-slate-500">
            © {new Date().getFullYear()} MeetingMind AI. All rights reserved.
          </span>
          <div className="flex gap-4">
            <a href="https://github.com/nsrividya11" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition">
              GitHub
            </a>
            <a href="https://linkedin.com/in/srividya-narra-332092237" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
