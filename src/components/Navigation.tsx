import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Calculator, FileText, MapPin, Menu, Pen, School } from "lucide-react";
import { useState } from "react";

// Feature data matching the Features component
const features = [
  {
    id: "review-pay-applications",
    icon: FileText,
    title: "Review Pay Applications",
    description:
      "Automatically validate pay applications with compliance controls.",
  },
  {
    id: "find-land-parcels",
    icon: MapPin,
    title: "Find Land Parcels",
    description:
      "Search nationwide parcels with verified owner data and zoning information.",
  },
  {
    id: "abstract-leases",
    icon: Pen,
    title: "Abstract Leases",
    description:
      "Transform complex leases into structured, searchable summaries.",
  },
  {
    id: "standardize-bids",
    icon: Calculator,
    title: "Standardize Bids",
    description:
      "Parse and normalize vendor bids for apples-to-apples comparison.",
  },
  {
    id: "track-competitor-listings",
    icon: School,
    title: "Track Competitor Listings",
    description:
      "Monitor competitor apartment listings with daily updates and alerts.",
  },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleFeatureClick = (featureId: string) => {
    const element = document.getElementById(featureId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-3 items-center h-16">
          <div className="flex items-center gap-2 justify-start">
            {/* <div className="w-20 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
              <img
                src="/logo.svg"
                alt="Brix Logo"
                className="invert"
                width={0}
                height={0}
                style={{ width: "auto", height: "1.5rem" }}
              />
            </div> */}
            <img
              src="/logo.svg"
              alt="Brix Logo"
              width={0}
              height={0}
              style={{ width: "auto", height: "2.25rem" }}
            />
          </div>

          <div className="hidden md:flex items-center justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                    Features
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-3 p-4">
                      <div className="row-span-3">
                        <div className="mb-2 text-lg font-medium">
                          AI-Powered Real Estate Tools
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Transform your development workflow with
                          market-leading AI solutions.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {features.map((feature) => (
                          <NavigationMenuLink key={feature.id} asChild>
                            <button
                              className={cn(
                                "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left w-full"
                              )}
                              onClick={() => handleFeatureClick(feature.id)}
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <feature.icon className="w-4 h-4 text-primary" />
                                <div className="text-sm font-medium leading-none">
                                  {feature.title}
                                </div>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {feature.description}
                              </p>
                            </button>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "cursor-pointer bg-transparent hover:bg-transparent focus:bg-transparent"
                    )}
                    onClick={() => handleFeatureClick("benefits")}
                  >
                    Benefits
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "cursor-pointer bg-transparent hover:bg-transparent focus:bg-transparent"
                    )}
                    onClick={() => handleFeatureClick("get-started")}
                  >
                    Get Started
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "cursor-pointer bg-transparent hover:bg-transparent focus:bg-transparent"
                    )}
                    onClick={() => handleFeatureClick("about-us")}
                  >
                    About Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden md:flex items-center gap-3 justify-end">
            <Button size="sm" asChild>
              <a href="https://apps.apple.com/in/app/candor-simplify-change/id6449984811" target="_blank">
                For HOAs
              </a>
            </Button>
            <Button size="sm" asChild>
              <a href="https://brix-ai.com" target="_blank">
                For Property Managers
              </a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <div className="text-sm font-medium text-muted-foreground mb-2">
                Features
              </div>
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => {
                    handleFeatureClick(feature.id);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-3 text-left text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-accent"
                >
                  <feature.icon className="w-4 h-4 text-primary" />
                  <div>
                    <div className="font-medium">{feature.title}</div>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </button>
              ))}
              <hr className="border-border/50" />
              <button
                onClick={() => {
                  handleFeatureClick("benefits");
                  setIsMenuOpen(false);
                }}
                className="text-left text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-accent"
              >
                Benefits
              </button>
              <button
                onClick={() => {
                  handleFeatureClick("get-started");
                  setIsMenuOpen(false);
                }}
                className="text-left text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-accent"
              >
                Get Started
              </button>
              <button
                onClick={() => {
                  handleFeatureClick("about-us");
                  setIsMenuOpen(false);
                }}
                className="text-left text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-accent"
              >
                About Us
              </button>
              <hr className="border-border/50" />
              <div className="flex flex-col gap-2">
                <Button size="sm" asChild>
                  <a href="https://apps.apple.com/in/app/candor-simplify-change/id6449984811" target="_blank">
                    For HOAs
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href="https://brix-ai.com" target="_blank">
                    For Property Managers
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
