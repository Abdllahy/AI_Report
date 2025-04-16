"use client";

import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const MainDashboard = () => {
  useEffect(() => {
    // Load Tableau script
    const loadTableauScript = () => {
      const script = document.createElement("script");
      script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    };

    const cleanup = loadTableauScript();

    // Initialize Tableau visualization after script is loaded
    const initTableau = () => {
      const divElement = document.getElementById("viz1744782631002");
      if (divElement) {
        const vizElement = divElement.getElementsByTagName("object")[0];
        if (vizElement) {
          // Set fixed height for better visibility without scrolling
          vizElement.style.width = "100%";
          vizElement.style.height = "600px";
          vizElement.style.display = "block";
        }
      }
    };

    // Try to initialize immediately and also set up an interval as backup
    initTableau();

    const interval = setInterval(() => {
      const vizElement = document.querySelector(".tableauViz");
      if (vizElement) {
        clearInterval(interval);
        initTableau();
      }
    }, 100);

    // Cleanup interval after 5 seconds regardless to prevent memory leaks
    const timeoutId = setTimeout(() => {
      clearInterval(interval);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
      cleanup();
    };
  }, []);

  return (
    <Card
      className="w-full overflow-hidden border-none shadow-lg rounded-xl bg-white"
      id="dashboard"
    >
      <CardContent className="p-0">
        <div
          className="tableauPlaceholder"
          id="viz1744782631002"
          style={{ position: "relative" }}
        >
          <noscript>
            <a href="#">
              <img
                alt="Impact of AI on Different Industries "
                src="https://public.tableau.com/static/images/AI/AI_Impact_Dashboard/Dashboard1/1_rss.png"
                style={{ border: "none" }}
              />
            </a>
          </noscript>
          <object className="tableauViz" style={{ display: "none" }}>
            <param
              name="host_url"
              value="https%3A%2F%2Fpublic.tableau.com%2F"
            />
            <param name="embed_code_version" value="3" />
            <param name="site_root" value="" />
            <param name="name" value="AI_Impact_Dashboard&#47;Dashboard1" />
            <param name="tabs" value="no" />
            <param name="toolbar" value="yes" />
            <param
              name="static_image"
              value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;AI&#47;AI_Impact_Dashboard&#47;Dashboard1&#47;1.png"
            />
            <param name="animate_transition" value="yes" />
            <param name="display_static_image" value="yes" />
            <param name="display_spinner" value="yes" />
            <param name="display_overlay" value="yes" />
            <param name="display_count" value="yes" />
            <param name="language" value="en-US" />
          </object>
        </div>
      </CardContent>
    </Card>
  );
};

export default MainDashboard;
