import { MessagesSquare, Pencil, HardHat, Wrench, Battery, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    icon: MessagesSquare,
    title: "Consultation & Assessment",
    description: "Free consultation to assess your property's EV charging potential"
  },
  {
    icon: Pencil,
    title: "Parking Stall Design",
    description: "Custom design and layout planning for optimal charging integration"
  },
  {
    icon: HardHat,
    title: "Infrastructure Upgrades",
    description: "Necessary electrical upgrades and infrastructure preparation at no cost"
  },
  {
    icon: Wrench,
    title: "Installation",
    description: "Professional installation by certified technicians, completely free"
  },
  {
    icon: Battery,
    title: "Charger Setup",
    description: "Final configuration and testing to ensure optimal performance"
  }
];

export const ValueProposition = () => {
  const navigate = useNavigate();
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(new Array(steps.length).fill(false));
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From initial consultation to final setup, our proven process makes EV charging installation completely effortless and free
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Progress Line */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-muted z-0">
            <div className="h-full bg-primary origin-left transform transition-all duration-2000 ease-out" 
                 style={{ 
                   width: `${(visibleSteps.filter(Boolean).length / steps.length) * 100}%` 
                 }} 
            />
          </div>

          <div className="grid md:grid-cols-5 gap-6 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isVisible = visibleSteps[index];
              
              return (
                <div
                  key={index}
                  ref={el => refs.current[index] = el}
                  className={`relative text-center transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Step Number */}
                  <div className="relative mb-6 z-10">
                    <div className={`w-16 h-16 mx-auto rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
                      isVisible 
                        ? 'bg-primary border-primary text-primary-foreground' 
                        : 'bg-background border-muted text-muted-foreground'
                    }`}>
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              );
            })}
          </div>

          </div>

          {/* Learn More Button */}
          <div className="mt-16 text-center">
            <Button
              onClick={() => navigate('/host-charger')}
              className="group"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};