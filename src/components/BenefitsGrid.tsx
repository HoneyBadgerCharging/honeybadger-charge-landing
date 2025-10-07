import { CheckCircle, Gauge, HeadphonesIcon, Smartphone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const benefits = [
  {
    icon: Gauge,
    title: "2.5x Faster Charging",
    description: "Advanced DC fast charging technology delivers rapid charging speeds",
    feature: "speedometer"
  },
  {
    icon: CheckCircle,
    title: "Zero Installation Cost",
    description: "Complete installation and equipment provided at no upfront cost",
    feature: "checkmark"
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock monitoring and instant technical support",
    feature: "status"
  },
  {
    icon: Smartphone,
    title: "Mobile App Control",
    description: "Manage charging sessions, payments, and analytics from your phone",
    feature: "phone"
  }
];

export const BenefitsGrid = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(benefits.length).fill(false));
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => {
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

  const renderFeature = (feature: string, isVisible: boolean) => {
    switch (feature) {
      case "speedometer":
        return (
          <div className="relative w-16 h-16 mx-auto mb-4">
            <div className="w-16 h-16 rounded-full border-4 border-muted relative">
              <div 
                className={`absolute inset-0 rounded-full border-4 border-primary transition-all duration-1000 ${
                  isVisible ? 'border-r-primary border-t-primary' : 'border-muted'
                }`}
                style={{ 
                  transform: isVisible ? 'rotate(270deg)' : 'rotate(0deg)',
                  borderTopColor: isVisible ? 'hsl(var(--primary))' : 'transparent',
                  borderRightColor: isVisible ? 'hsl(var(--primary))' : 'transparent'
                }}
              />
              <div className="absolute inset-2 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">2.5x</span>
              </div>
            </div>
          </div>
        );
      case "checkmark":
        return (
          <div className="relative w-16 h-16 mx-auto mb-4">
            <div className={`w-16 h-16 rounded-full border-4 border-primary flex items-center justify-center transition-all duration-500 ${
              isVisible ? 'bg-primary scale-110' : 'bg-transparent scale-100'
            }`}>
              <CheckCircle className={`w-8 h-8 transition-all duration-300 ${
                isVisible ? 'text-primary-foreground' : 'text-primary'
              }`} />
            </div>
          </div>
        );
      case "status":
        return (
          <div className="relative w-16 h-16 mx-auto mb-4">
            <div className="w-16 h-16 rounded-full border-4 border-primary flex items-center justify-center bg-primary">
              <div className={`w-4 h-4 rounded-full bg-primary-foreground ${
                isVisible ? 'animate-pulse' : ''
              }`} />
            </div>
            <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 ${
              isVisible ? 'animate-ping' : ''
            }`} />
          </div>
        );
      case "phone":
        return (
          <div className="relative w-16 h-16 mx-auto mb-4">
            <div className="w-10 h-16 bg-primary rounded-lg flex flex-col items-center justify-center mx-auto">
              <div className="w-6 h-8 bg-primary-foreground rounded-sm mb-1" />
              <div className="w-2 h-2 bg-primary-foreground rounded-full" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose HoneyBadger?
          </h2>
          <p className="text-xl text-foreground max-w-2xl mx-auto">
            Industry-leading technology and service that delivers results for your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isVisible = visibleCards[index];
            
            return (
              <div
                key={index}
                ref={el => refs.current[index] = el}
                className={`glass-card rounded-2xl p-8 text-center transition-all duration-700 hover:shadow-lg ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {renderFeature(benefit.feature, isVisible)}
                
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-lg text-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};