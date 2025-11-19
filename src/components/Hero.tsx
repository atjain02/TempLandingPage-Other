import { Button } from "@/components/ui/button";
import { ArrowRight, Users, MessageSquare } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-secondary/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
          <Users className="w-4 h-4" />
          Smart Neighborhood Management Platform
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Streamline Your
          <br />
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Community Management
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
          AI-powered neighborhood issue reporting that automatically routes complaints to the right party,
          provides instant updates, and keeps your community running smoothly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <a href="https://calendly.com/jain-amay04/30min" target="_blank">
              Schedule Demo
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 group"
            onClick={() => {
              const element = document.getElementById(
                "neighborhood-issue-reporting"
              );
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Learn more
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
