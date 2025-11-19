import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

export const CTA = () => {
  return (
    <section
      id="get-started"
      className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5"
    >
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto border-0 bg-gradient-to-br from-primary/10 to-secondary/10 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/80 backdrop-blur-sm rounded-lg"></div>
          <CardContent className="relative z-10 p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Streamline Your
              <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Community Management?
              </span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join HOAs and property managers who are already improving resident satisfaction
              and operational efficiency with our AI-powered platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <a
                  href="https://calendly.com/jain-amay04/30min"
                  target="_blank"
                >
                  Schedule Demo
                </a>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-md mx-auto">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>jain.amay04@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>(484) 300-7933</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
