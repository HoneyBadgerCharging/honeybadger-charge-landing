import { Calendar, FileText, Wrench, DollarSign } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    icon: Calendar,
    title: "Request Consultation",
    description: "Schedule a free consultation to assess your property's EV charging potential"
  },
  {
    icon: FileText,
    title: "Custom Design",
    description: "Our experts create a tailored charging solution that fits your space and needs"
  },
  {
    icon: Wrench,
    title: "Free Installation",
    description: "Professional installation at zero cost to you, handled by certified technicians"
  },
  {
    icon: DollarSign,
    title: "Start Earning",
    description: "Begin generating revenue immediately with our revenue-sharing model"
  }
];

export const ValueProposition = () => {
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
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From consultation to revenue generation, our proven process makes EV charging adoption effortless
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Progress Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-muted">
            <div className="h-full bg-primary origin-left transform transition-all duration-2000 ease-out" 
                 style={{ 
                   width: `${(visibleSteps.filter(Boolean).length / steps.length) * 100}%` 
                 }} 
            />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
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
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 mx-auto rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
                      isVisible 
                        ? 'bg-primary border-primary text-primary-foreground' 
                        : 'bg-background border-muted text-muted-foreground'
                    }`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};