import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Apple, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);


  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/charger-closeup-bokeh.png)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      {/* Content */}
      <div className="relative z-20 w-full px-36 py-20">
        <div className="max-w-[1600px]">
          {/* Left Content Card */}
          <div className={`bg-background rounded-3xl p-20 shadow-2xl max-w-3xl mx-auto lg:mx-0 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight text-foreground">
              Zero-Cost
              <span className="block">EV Charging</span>
              <span className="block">Solutions</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl">
              HoneyBadger Charging offers 100% free EV charging solutions,
              covering everything from site visits to installation. Our experts
              handle it all—consultations, parking design, electrical upgrades,
              and charger setup—at no cost to you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="border-2 border-transparent bg-foreground hover:bg-foreground/90 text-background px-8 py-6 text-base font-semibold rounded-xl"
              >
                <span>Become a Site Host</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background px-8 py-6 text-base font-semibold rounded-xl"
              >
                <span>Find a Charger</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
