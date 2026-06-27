"use client";

import CTASection from "./CTASection";
import Footer from "./Footer";

import HeroSection from "./HeroSection";
import FeaturesSection from "./FeatureSection";
import WorkflowSection from "./WorkflowSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#08111F] text-white">

      <HeroSection />

      <FeaturesSection />

      <WorkflowSection />

      <CTASection />

      <Footer />

    </div>
  );
}