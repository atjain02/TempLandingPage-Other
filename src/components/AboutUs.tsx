import { Card, CardContent } from "@/components/ui/card";
import { Mail, Users, Target, Lightbulb } from "lucide-react";

export const AboutUs = () => {
  return (
    <section id="about-us" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We're building the future of community management by combining AI technology
            with deep understanding of HOA and property management needs.
          </p>

          <div className="max-w-4xl mx-auto text-left bg-background/80 rounded-2xl p-8 border">
            <h3 className="text-2xl font-semibold mb-6 text-center">Our Story</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Brix began as <strong>Candor</strong> during our high school years when we were working on student council voting systems.
              We quickly realized that the challenge of organizing voices and managing community feedback extended far beyond school hallways.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              As we looked at neighborhood HOAs, we discovered a universal truth: <strong>people everywhere need better ways to voice their concerns</strong> and have them addressed efficiently. Whether it's a broken streetlight, a noisy neighbor, or a maintenance issue,
              communities struggled with the same fundamental problem: how to turn complaints into action.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, Brix represents our evolution from that initial insight. We've built an AI-powered platform that doesn't just collect complaints,
              but intelligently routes them to the right people, tracks their progress, and ensures nothing falls through the cracks.
              Because every community deserves a voice and every voice deserves to be heard.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 bg-background shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To streamline community management through intelligent automation,
                making neighborhood issues resolution faster and more efficient.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-background shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                A world where every community runs smoothly through AI-powered tools
                that connect residents, HOAs, and property managers seamlessly.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-background shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Team</h3>
              <p className="text-muted-foreground">
                Experienced developers and property management professionals
                working together to solve real-world community challenges.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-0 bg-gradient-to-br from-primary/10 to-secondary/10 shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                Have questions about our platform or want to learn more?
                We'd love to hear from you!
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  {/* <div className="font-semibold text-lg mb-2">Amay Jain</div> */}
                  <a
                    href="mailto:jain.amay04@gmail.com"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    jain.amay04@gmail.com
                  </a>
                </div>
                <div className="text-center">
                  {/* <div className="font-semibold text-lg mb-2">Srikar Parsi</div> */}
                  <a
                    href="mailto:sparsi@gmail.com"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    sparsi@gmail.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};