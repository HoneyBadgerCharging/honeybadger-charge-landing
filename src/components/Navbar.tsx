import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger expansion animation after mount
    const timer = setTimeout(() => {
      setIsExpanded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav 
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-background/95 backdrop-blur-md border border-border rounded-full transition-all duration-300 max-w-6xl w-[calc(100%-2rem)] overflow-hidden translate-y-0 opacity-100"
    >
      <div className="px-6 sm:px-8 py-3 overflow-x-hidden">
        <div className="flex items-center justify-between gap-4 w-full">
          {/* Logo - Animated expansion */}
          <div 
            className={`flex-shrink-0 cursor-pointer transition-all duration-500 ease-out overflow-hidden ${
              isExpanded ? "w-[140px] sm:w-[160px] opacity-100" : "w-0 opacity-0"
            }`}
            onClick={() => navigate('/')}
          >
            <img 
              src="/logo.webp" 
              alt="HoneyBadger Charging" 
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </div>
          
          {/* Navigation - Center aligned with flex-grow */}
          <div className="hidden md:flex flex-grow items-center justify-center gap-4 lg:gap-8 max-w-2xl overflow-x-hidden">
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

          {/* CTA Button - Animated expansion */}
          <div className={`flex-shrink-0 hidden md:block text-right transition-all duration-500 ease-out overflow-hidden ${
            isExpanded ? "w-[100px] sm:w-[120px] opacity-100" : "w-0 opacity-0"
          }`}>
            <Button size="sm" className="w-full whitespace-nowrap">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
