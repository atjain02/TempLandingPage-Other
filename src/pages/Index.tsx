import { AboutUs } from "@/components/AboutUs";
import { CTA } from "@/components/CTA";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Stats } from "@/components/Stats";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Stats />
      <AboutUs />
      <CTA />

      <footer className="bg-muted/50 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center text-muted-foreground">
            {/* <p>&copy; 2025 Brix. All rights reserved.</p> */}
            <p className="mt-2">
              Bringing artificial intelligence to community and property management
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
