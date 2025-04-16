"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FileText, BarChart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
              Global AI Analytics 2025
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              AI Impact Analysis Dashboard
            </h1>
            <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl">
              Discover how AI is transforming industries worldwide through our
              comprehensive analysis of adoption rates, revenue impact, and
              consumer trust metrics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white"
                onClick={() => {
                  const dashboardElement = document.getElementById("dashboard");
                  if (dashboardElement) {
                    dashboardElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Explore Dashboard
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" /> View Full Report (PDF)
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl" />
              <div className="relative z-10 w-full h-auto rounded-2xl shadow-xl bg-white p-6 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <BarChart className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">
                  AI Impact Analysis
                </h3>
                <p className="text-sm text-center text-muted-foreground">
                  Comprehensive data analysis of AI adoption across industries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
