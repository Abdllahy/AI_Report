import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Newspaper, BookText } from "lucide-react";

interface PersonalLinksProps {
  mediumUrl?: string;
  substackUrl?: string;
  githubUrl?: string;
}

const PersonalLinks = ({
  mediumUrl = "https://medium.com/@yourusername",
  substackUrl = "https://yourusername.substack.com",
  githubUrl = "https://github.com/yourusername",
}: PersonalLinksProps) => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
          Connect With Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-none">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4 mt-4">
                <BookText className="h-8 w-8 text-indigo-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Medium Blog</h3>
              <p className="text-muted-foreground mb-4">
                Read my in-depth articles and analysis on AI trends and impacts.
              </p>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
              >
                <a href={mediumUrl} target="_blank" rel="noopener noreferrer">
                  Visit My Blog
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-none">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-4 mt-4">
                <Newspaper className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Substack Newsletter
              </h3>
              <p className="text-muted-foreground mb-4">
                Subscribe to my newsletter for regular updates on AI research
                and insights.
              </p>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
              >
                <a href={substackUrl} target="_blank" rel="noopener noreferrer">
                  Subscribe
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-none">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-pink-100 flex items-center justify-center mb-4 mt-4">
                <Github className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">GitHub Profile</h3>
              <p className="text-muted-foreground mb-4">
                Explore my code repositories and technical projects related to
                AI and data analysis.
              </p>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  View Projects
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PersonalLinks;
