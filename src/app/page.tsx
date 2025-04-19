import React from "react";
import HeroSection from "@/components/HeroSection";
import MainDashboard from "@/components/MainDashboard";
import KeyFindings from "@/components/KeyFindings";
import ResearchMethodology from "@/components/ResearchMethodology";
import PersonalLinks from "@/components/PersonalLinks";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <div className="container px-4 md:px-6 py-12 space-y-12 w-full">
        <div className="space-y-4" id="dashboard">
          <h2
            className="text-3xl font-bold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600"
            id="dashboard-title"
          >
            AI Impact Analysis Dashboard
          </h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8 text-lg">
            Explore the comprehensive impact of AI through our interactive
            visualization. Discover insights on adoption, revenue growth, and
            industry transformation.
          </p>

          {/* Main Dashboard */}
          <MainDashboard />
        </div>

        {/* Key Findings Section */}
        <KeyFindings />

        {/* Research Methodology Section */}
        <ResearchMethodology />

        {/* Personal Links */}
        <PersonalLinks />
      </div>

      {/* Footer */}
      <footer className="w-full py-8 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center justify-center space-x-2">
              <div className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
                Made by Abdullahi
              </div>
              <span className="text-muted-foreground">•</span>
              <div className="text-muted-foreground">
                {new Date().getFullYear()}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AI Impact Analysis. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
