"use client";

import React from "react";
import {
  Github,
  Newspaper,
  BookText,
  Mail,
  Linkedin,
  ExternalLink,
  PenSquare,
} from "lucide-react";

interface PersonalLinksProps {
  mediumUrl?: string;
  substackUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  emailAddress?: string;
  hashnodeUrl?: string;
}

const PersonalLinks = ({
  mediumUrl = "https://medium.com/@yourusername",
  substackUrl = "https://yourusername.substack.com",
  githubUrl = "https://github.com/yourusername",
  linkedinUrl = "https://linkedin.com/in/yourusername",
  emailAddress = "your.email@example.com",
  hashnodeUrl = "https://hashnode.com/@yourusername",
}: PersonalLinksProps) => {
  const cards = [
    {
      icon: <BookText className="h-6 w-6" />,
      title: "Medium Blog",
      buttonText: "Visit My Blog",
      url: mediumUrl,
    },
    {
      icon: <Newspaper className="h-6 w-6" />,
      title: "Substack Newsletter",
      buttonText: "Subscribe",
      url: substackUrl,
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub Profile",
      buttonText: "View Projects",
      url: githubUrl,
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn Profile",
      buttonText: "Connect",
      url: linkedinUrl,
    },
    {
      icon: <PenSquare className="h-6 w-6" />,
      title: "Hashnode Blog",
      buttonText: "Read Articles",
      url: hashnodeUrl,
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Me",
      buttonText: "Send Email",
      url: `mailto:${emailAddress}`,
    },
  ];

  return (
    <section
      id="connect"
      className="py-20 bg-gradient-to-b from-white to-indigo-50 text-center"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
          Connect With Me
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Let's collaborate on AI research and data analysis projects.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-lg border border-gray-200 hover:border-violet-400 hover:bg-violet-50 transition duration-300"
            >
              <div className="text-gray-600 group-hover:text-violet-600 transition">
                {card.icon}
              </div>
              <div className="text-left">
                <h3 className="font-medium text-gray-800 group-hover:text-violet-600 transition">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  {card.buttonText} <ExternalLink className="h-4 w-4" />
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalLinks;
