"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newOpacity = Math.max(1 - scrollPosition / 500, 0);
      setScrollOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-blob animation-delay-3000" />
      </div>

      <div className="container px-4 md:px-6 mx-auto z-10 text-center">
        <div className="flex flex-col items-center justify-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            <span className="block text-gray-900">The Global Impact of</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              Artificial Intelligence
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
            A comprehensive analysis of how AI is transforming industries across
            different countries.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg rounded-lg"
              onClick={() => {
                const findingsElement = document.getElementById("dashboard");
                if (findingsElement) {
                  findingsElement.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Explore Findings
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 px-8 py-6 text-lg rounded-lg"
              asChild
            >
              <a
                href="https://abdullahybashir.hashnode.dev/how-ai-is-reshaping-global-industries-a-data-driven-analysis"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 h-5 w-5" /> Read Full Report
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-300"
          style={{ opacity: scrollOpacity }}
        >
          <p className="text-gray-500 mb-2">Scroll to Discover</p>
          <ChevronDown className="h-6 w-6 text-gray-500 animate-bounce" />
        </div>
      </div>

      {/* Add custom animation keyframes */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
