import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  ChevronRight,
  LineChart,
  PieChart,
  TrendingUp,
} from "lucide-react";

interface KeyFindingProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  category: string;
  color: string;
}

const KeyFindingCard = ({
  icon,
  title,
  value,
  description,
  category,
  color,
}: KeyFindingProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border-none bg-white">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <Badge variant="outline" className={`${color} text-white`}>
            {category}
          </Badge>
          <div className={`text-primary`}>{icon}</div>
        </div>
        <CardTitle className="text-lg mt-2">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
          {value}
        </div>
      </CardContent>
    </Card>
  );
};

const KeyFindings = () => {
  const findings = [
    {
      icon: <TrendingUp size={24} />,
      title: "Automotive Revenue Growth",
      value: "46.48%",
      description:
        "The automotive industry has seen the highest revenue growth from AI implementation",
      category: "Revenue",
      color: "bg-indigo-500",
    },
    {
      icon: <BarChart size={24} />,
      title: "Automotive AI Adoption",
      value: "92.96%",
      description: "Automotive had the highest rate of AI adoption in 2025",
      category: "Adoption",
      color: "bg-purple-500",
    },
    {
      icon: <PieChart size={24} />,
      title: "Consumer Trust Leader",
      value: "Germany",
      description: "Germany is the leading country in consumer trust in AI",
      category: "Trust",
      color: "bg-pink-500",
    },
    {
      icon: <LineChart size={24} />,
      title: "Gaming AI Content",
      value: "1,200.7 TBs",
      description: "The gaming industry had the highest AI generated content",
      category: "Content",
      color: "bg-blue-500",
    },
    {
      icon: <ChevronRight size={24} />,
      title: "Most Used AI Tools",
      value: "Midjourney & Claude",
      description: "The most widely adopted AI tools across industries",
      category: "Tools",
      color: "bg-teal-500",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
            Key Findings
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Critical insights from our comprehensive analysis of AI impact
            across industries and countries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {findings.map((finding, index) => (
            <KeyFindingCard
              key={index}
              icon={finding.icon}
              title={finding.title}
              value={finding.value}
              description={finding.description}
              category={finding.category}
              color={finding.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFindings;
