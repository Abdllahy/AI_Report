"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

const OtherDashboards = () => {
  const [selectedDashboard, setSelectedDashboard] = useState("ai-content");

  // Dashboard URLs
  const dashboards = [
    {
      id: "ai-content",
      title: "AI Generated Content",
      url: "https://public.tableau.com/views/BiggestAIcontentgeneratedbycountry/BiggestAIContentbycountry",
      description:
        "Explore the volume of AI-generated content across different countries.",
    },
    {
      id: "ai-adoption",
      title: "AI Adoption Rates",
      url: "https://public.tableau.com/views/HighestAIadoptionindifferentcountries/HighestAIAdoption",
      description:
        "Compare AI adoption rates across different countries and industries.",
    },
    {
      id: "revenue-impact",
      title: "Revenue Impact",
      url: "https://public.tableau.com/views/HighestincreaseinrevenueduetoAI/HighestincreaseinrevenueduetoAI",
      description:
        "Analyze how AI implementation has impacted revenue across industries.",
    },
    {
      id: "job-loss",
      title: "Job Loss Statistics",
      url: "https://public.tableau.com/views/JoblossduetoAI/JoblossduetoAI",
      description:
        "Examine job displacement statistics due to AI automation by country.",
    },
    {
      id: "ai-tools",
      title: "Top AI Tools",
      url: "https://public.tableau.com/views/TopAItools/TopAItools",
      description:
        "Discover which AI tools are most widely used across different sectors.",
    },
    {
      id: "consumer-trust",
      title: "Consumer Trust",
      url: "https://public.tableau.com/views/RelationshipbetweenAIandconsumertrust/AIandConsumertrust",
      description:
        "Understand the relationship between AI implementation and consumer trust.",
    },
    {
      id: "market-share",
      title: "AI Market Share",
      url: "https://public.tableau.com/views/AImarketsharebycountry/AImarketsharebycountry",
      description: "Compare AI market share of companies by country.",
    },
    {
      id: "regulation-trust",
      title: "Regulation & Trust",
      url: "https://public.tableau.com/views/Howregulationtypesaffecttrustlevels/Howdoregulationtypesaffecttrustlevels",
      description:
        "Analyze how different regulation types affect trust in AI technologies.",
    },
  ];

  const selectedDashboardData = dashboards.find(
    (d) => d.id === selectedDashboard,
  );

  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-6 mb-12">
      <h2 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
        Additional Insights
      </h2>

      <div className="mb-6">
        <Select value={selectedDashboard} onValueChange={setSelectedDashboard}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Dashboard" />
          </SelectTrigger>
          <SelectContent>
            {dashboards.map((dashboard) => (
              <SelectItem key={dashboard.id} value={dashboard.id}>
                {dashboard.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Card className="border rounded-lg overflow-hidden">
        <CardContent className="p-0">
          <div className="relative w-full" style={{ height: "600px" }}>
            <iframe
              src={`${selectedDashboardData?.url}?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Fpublic.tableau.com%2F&:embed_code_version=3&:tabs=no&:toolbar=yes&:animate_transition=yes&:display_static_image=no&:display_spinner=yes&:display_overlay=yes&:display_count=yes&:language=en-US`}
              frameBorder="0"
              className="absolute top-0 left-0 w-full h-full"
              title={selectedDashboardData?.title}
              allowFullScreen
            />
          </div>
          <div className="p-4 bg-muted/10">
            <h3 className="font-medium">{selectedDashboardData?.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {selectedDashboardData?.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OtherDashboards;
