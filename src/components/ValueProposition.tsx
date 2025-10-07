import { useState as useCardHover } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "1",
    title: "Consultation & Site Visit",
    description: "To understand our client, we start your journey to assess the electrical infrastructure and understand your specific business needs, laying the foundation for a customized charging station solution.",
    image: "/stock-photos/consultation-site-visit.png"
  },
  {
    number: "2",
    title: "Design",
    description: "We design a creative solution that perfectly aligns with your property requirements, streamlining the installation. We also offer tailored parking stall and wall designs to complement your business and property aesthetics.",
    image: "/stock-photos/design.png"
  },
  {
    number: "3",
    title: "Pre-Installation",
    description: "Before installation, our expert electricians and technicians perform necessary infrastructure upgrades to ensure a smooth and seamless installation process.",
    image: "/stock-photos/pre-installation.png"
  },
  {
    number: "4",
    title: "Installation",
    description: "Once the groundwork is laid, we proceed to order and install the charging terminals, seamlessly integrating them into your property to deliver a hassle-free charging experience.",
    image: "/stock-photos/installation.png"
  },
  {
    number: "5",
    title: "Network Connection",
    description: "Following installation, our charging terminals are swiftly connected to the operational management software, forming a reliable and efficient network. This will allow drivers to find and book your charger and make payments directly through the HoneyBadger mobile app.",
    image: "/stock-photos/network-connection.png"
  },
  {
    number: "6",
    title: "Support & Maintenance",
    description: "The HoneyBadger team provides zero-cost maintenance and service. Our dedicated team is here to alleviate any concerns, providing ongoing support to ensure optimal performance and a worry-free experience.",
    image: "/stock-photos/support-maintenance.png"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
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
                <div className="relative p-8 z-10">
                  {/* Number and Title */}
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className={`text-2xl font-bold transition-colors duration-500 ${
                      isHovered ? 'text-white/80' : 'text-foreground'
                    }`}>{step.number}</span>
                    <h3 className={`text-xl font-bold transition-colors duration-500 ${
                      isHovered ? 'text-white' : 'text-foreground'
                    }`}>{step.title}</h3>
                  </div>
                  
                  {/* Description */}
                  <p className={`text-lg leading-relaxed transition-colors duration-500 ${
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