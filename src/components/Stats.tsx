import { CheckCircle2, Clock, TrendingUp } from "lucide-react";

export const Stats = () => {
  return (
    <section id="benefits" className="py-24 bg-muted/30 scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proven Results for
            <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Real Estate Leaders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the impact our AI tools have on development workflows
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Save 80% Time</h3>
            <p className="text-muted-foreground">
              Reduce manual processing from hours to minutes
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Increase Accuracy</h3>
            <p className="text-muted-foreground">
              AI-powered verification eliminates human error
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Ensure Compliance</h3>
            <p className="text-muted-foreground">
              Automated checks maintain industry standards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
