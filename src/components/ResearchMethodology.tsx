"use client";

import React from "react";
import { FileSpreadsheet, Database, Beaker, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MethodologyItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const MethodologyItem = ({
  icon,
  title,
  description,
}: MethodologyItemProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border-none bg-white">
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const ResearchMethodology = () => {
  const methodologies = [
    {
      icon: <FileSpreadsheet size={32} />,
      title: "Data Cleaning",
      description:
        "Used Excel to clean and prepare raw data, handling missing values and standardizing formats.",
    },
    {
      icon: <Database size={32} />,
      title: "SQL Analysis",
      description:
        "Performed in-depth analysis with SQL queries to extract key patterns and relationships.",
    },
    {
      icon: <Beaker size={32} />,
      title: "Hypothesis Testing",
      description:
        "Tested key hypotheses about AI impact across industries and countries.",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Visualization",
      description:
        "Created interactive visualizations using Tableau to communicate findings.",
    },
  ];

  return (
    <section id="methodology" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-3">
            <span className="text-black">Research</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              Methodology
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            The analytical approach that powered this comprehensive study of
            AI's global impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodologies.map((methodology, index) => (
            <MethodologyItem
              key={index}
              icon={methodology.icon}
              title={methodology.title}
              description={methodology.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchMethodology;
