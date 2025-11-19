import { cn } from "@/lib/utils";
import {
  Calculator,
  CheckCircle2,
  FileText,
  MapPin,
  MessageSquare,
  Pen,
  School,
} from "lucide-react";

const features = [
  {
    id: "neighborhood-issue-reporting",
    icon: MessageSquare,
    title: "Smart Issue Reporting",
    description:
      "Residents report issues through a simple form that automatically routes complaints to the right party—HOA board, property manager, or vendor—using AI text analysis. Updates are permanent and trackable.",
    benefits: [
      "AI automatically routes issues to correct department",
      "Permanent tracking with real-time status updates",
      "Reduced response time and improved communication",
      "Complete audit trail for all neighborhood issues",
    ],
    gradient: "from-blue-500/10 to-blue-600/10",
    image: "photo-1670261197418-40e922b570d2",
  },
  {
    id: "review-pay-applications",
    icon: FileText,
    title: "Review Contractor Applications",
    description:
      "Automatically validate contractor pay applications for HOA projects—check required backup, reconcile quantities and costs, apply retainage, and flag variances before approval.",
    benefits: [
      "Fewer payment errors & chargebacks",
      "Compliance controls",
      "Auto-flag non-billable hardware/tools",
    ],
    gradient: "from-green-500/10 to-green-600/10",
    image: "photo-1670261197418-40e922b570d2",
  },
  {
    id: "property-management",
    icon: MapPin,
    title: "Property Management Tools",
    description:
      "Comprehensive tools for property managers and HOAs including parcel information, zoning data, owner records, and maintenance scheduling with integrated vendor management.",
    benefits: [
      "Centralized property and resident information",
      "Integrated vendor management and scheduling",
      "Compliance tracking and documentation",
      "Automated maintenance reminders and workflows",
    ],
    gradient: "from-purple-500/10 to-purple-600/10",
    image: "photo-1722082839841-45473f5a15cf",
  },
  {
    id: "document-management",
    icon: Pen,
    title: "Document Management",
    description:
      "Automatically process HOA documents, lease agreements, and governing documents into searchable summaries. Track important dates, obligations, and covenants with AI-powered analysis.",
    benefits: [
      "Important date tracking and reminders",
      "Searchable document repository",

    ],
    gradient: "from-orange-500/10 to-orange-600/10",
    image: "photo-1521791055366-0d553872125f",
  },
  {
    id: "vendor-bid-analysis",
    icon: Calculator,
    title: "Vendor Bid Analysis",
    description:
      "Parse bids from contractors and vendors for HOA projects, normalize units and cost codes, and auto-build comparison tables that highlight scope gaps and pricing anomalies.",
    benefits: [
      "Streamlined vendor selection process",
      "Side-by-side bid comparisons",
      "Automated scope and pricing analysis",
      "Transparent contractor selection",
    ],
    gradient: "from-red-500/10 to-red-600/10",
    image: "photo-1542621334-a254cf47733d",
  },
];

const processLabels = ["Report", "Process", "Manage", "Analyze", "Compare"];

const industryLabels = [
  "Issue Reporting",
  "Project Management",
  "Property Management",
  "Document Management",
  "Vendor Management",
];

export const Features = () => {
  return (
    <>
      {features.map((feature, index) => (
        <section
          key={index}
          id={feature.id}
          className={`py-24 scroll-mt-16 ${
            index % 2 === 0 ? "bg-background" : "bg-muted/30"
          }`}
        >
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <feature.icon className="w-4 h-4" />
                  {processLabels[index]}
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {feature.title}
                </h2>

                <p className="text-xl text-muted-foreground mb-8">
                  {feature.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* <Button size="lg" className="text-lg px-8 py-6 group">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button> */}
              </div>

              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative">
                  {/* Background decoration */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl transform rotate-3 scale-105`}
                  ></div>

                  {/* Main image container */}
                  <div className="relative bg-background rounded-2xl overflow-hidden shadow-2xl border">
                    <img
                      src={
                        index === 0
                          ? `payapps.png`
                          : `https://images.unsplash.com/${feature.image}?auto=format&fit=crop&w=800&h=600&q=80`
                      }
                      alt={feature.title}
                      className={cn("w-full h-80 object-cover", {
                        "object-top": index === 0,
                      })}
                    />

                    {/* Overlay with icon */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent">
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-primary/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-primary/20">
                            <feature.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground">
                              {feature.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              AI-Powered Solution
                            </p>
                          </div>
                        </div>

                        {/* Progress indicators */}
                        <div className="flex gap-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div
                              key={i}
                              className="h-1 bg-primary/20 rounded-full flex-1"
                            >
                              <div
                                className="h-full bg-primary rounded-full transition-all duration-1000"
                                style={{ width: i <= index ? "100%" : "0%" }}
                              ></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating accent elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full blur-sm"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/10 rounded-full blur-md"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};
