import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollY = window.scrollY;
      setIsVisible(scrollY > heroHeight * 0.3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo - Fixed width to prevent movement */}
          <div 
            className="flex-shrink-0 w-[140px] sm:w-[160px] cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <img 
              src="/logo.webp" 
              alt="HoneyBadger Charging" 
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </div>
          
          {/* Navigation - Center aligned with flex-grow */}
          <div className="hidden md:flex flex-grow items-center justify-center gap-4 lg:gap-8 max-w-2xl">
            <button 
              className="text-foreground hover:text-primary transition-colors whitespace-nowrap text-sm lg:text-base"
              onClick={() => navigate('/host-charger')}
            >
              Host a Charger
            </button>
            <button 
              className="text-foreground hover:text-primary transition-colors whitespace-nowrap text-sm lg:text-base"
              onClick={() => navigate('/find-charger')}
            >
              Find a Charger
            </button>
            <button 
              className="text-foreground hover:text-primary transition-colors whitespace-nowrap text-sm lg:text-base"
              onClick={() => navigate('/blog')}
            >
              Blog
            </button>
            <button className="text-foreground hover:text-primary transition-colors whitespace-nowrap text-sm lg:text-base">
              FAQ
            </button>
            <button className="text-foreground hover:text-primary transition-colors whitespace-nowrap text-sm lg:text-base">
              Support
            </button>
          </div>

          {/* CTA Button - Fixed width */}
          <div className="flex-shrink-0 w-[100px] sm:w-[120px] hidden md:block text-right">
            <Button size="sm" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
