import { ShieldCheck, Smartphone, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: ShieldCheck,
    title: "Reliable",
    description: "HoneyBadger's chargers are built with the latest technology and undergo rigorous testing to ensure optimal performance and durability. Say goodbye to any worries about malfunctions or disruptions while charging."
  },
  {
    icon: Smartphone,
    title: "Easy",
    description: "HoneyBadger chargers come equipped with a large LCD display for effortless user navigation. Our mobile app enhances the charging experience by enabling easy pre-booking, convenient mobile wallet integration, and live charging status updates."
  },
  {
    icon: Zap,
    title: "Fast",
    description: "Experience the future of charging with solutions designed to deliver power up to 2.5x faster than competing Level 2 chargers, empowering drivers to get back on the road quickly and hassle-free."
  }
];

export const Experience = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<boolean[]>(new Array(features.length).fill(false));
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleFeatures(prev => {
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
            The HoneyBadger Experience
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleFeatures[index];
            
            return (
              <div
                key={index}
                ref={el => refs.current[index] = el}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6 z-10">
                  <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                    isVisible 
                      ? 'bg-primary/10 border-primary text-primary' 
                      : 'bg-muted border-muted text-muted-foreground'
                  }`}>
                    <Icon className="w-8 h-8" />
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};