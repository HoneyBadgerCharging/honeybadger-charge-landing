import { useState as useCardHover } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "1",
    title: "Start",
    description: "We start by assessing your electrical infrastructure and understanding your specific business needs. Then we design a creative solution that perfectly aligns with your property requirements, including tailored parking stall and wall designs to complement your business aesthetics.",
    image: "/stock-photos/consultation-site-visit.png"
  },
  {
    number: "2",
    title: "Install",
    description: "Our expert electricians perform necessary infrastructure upgrades to ensure a smooth installation process. Once the groundwork is complete, we proceed to order and install the charging terminals, seamlessly integrating them into your property.",
    image: "/stock-photos/installation.png"
  },
  {
    number: "3",
    title: "Support",
    description: "Following installation, our charging terminals are connected to the operational management software, forming a reliable network. Drivers can find and book your charger through the HoneyBadger mobile app. Plus, we provide zero-cost maintenance and ongoing support for optimal performance.",
    image: "/stock-photos/network-connection.png"
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
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            How It Works
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-full mx-auto mb-12">
          {steps.map((step, index) => {
            const isVisible = visibleSteps[index];
            const [isHovered, setIsHovered] = useState(false);
            
            return (
              <div
                key={index}
                ref={el => refs.current[index] = el}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-700
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Background Image with Overlay */}
                <div 
                  className="absolute inset-0 transition-all duration-500 ease-out"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${step.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                
                {/* Content */}
                <div className="relative p-10 z-10">
                  {/* Number and Title */}
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className={`text-3xl font-bold transition-colors duration-500 ${
                      isHovered ? 'text-white/80' : 'text-foreground'
                    }`}>{step.number}</span>
                    <h3 className={`text-2xl font-bold transition-colors duration-500 ${
                      isHovered ? 'text-white' : 'text-foreground'
                    }`}>{step.title}</h3>
                  </div>
                  
                  {/* Description */}
                  <p className={`text-xl leading-relaxed transition-colors duration-500 ${
                    isHovered ? 'text-white/90' : 'text-foreground'
                  }`}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-lg text-foreground mb-6">
            Reliable. Easy. Fast.
          </p>
          <Button
            onClick={() => navigate('/host-charger')}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl"
          >
            Book a Site Visit
          </Button>
        </div>
      </div>
    </section>
  );
};