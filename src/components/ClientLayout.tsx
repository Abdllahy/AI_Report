"use client";

import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function ClientLayout() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link
            href="/"
            className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600"
          >
            AI Impact Analysis
          </Link>
          <nav className="flex items-center space-x-4">
            <Link
              href="https://www.kaggle.com/datasets/atharvasoundankar/impact-of-ai-on-digital-media-2020-2025?resource=download"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-md transition-colors"
            >
              Dataset
            </Link>
            <Link
              href="#dashboard"
              className="text-sm font-medium hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-md transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const dashboardSection = document.getElementById("dashboard");
                if (dashboardSection) {
                  dashboardSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Dashboard
            </Link>
            <Link
              href="#findings"
              className="text-sm font-medium hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-md transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const findingsSection = document.getElementById("findings");
                if (findingsSection) {
                  findingsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Findings
            </Link>
            <Link
              href="#methodology"
              className="text-sm font-medium hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-md transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const methodologySection =
                  document.getElementById("methodology");
                if (methodologySection) {
                  methodologySection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Methodology
            </Link>
            <Link
              href="#connect"
              className="text-sm font-medium hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-md transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const connectSection = document.getElementById("connect");
                if (connectSection) {
                  connectSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact
            </Link>
            <div className="ml-2">
              <ThemeSwitcher />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
