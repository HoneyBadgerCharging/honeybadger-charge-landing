import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav 
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-background/95 backdrop-blur-md border border-border rounded-full transition-all duration-300 max-w-6xl w-[calc(100%-2rem)] overflow-hidden translate-y-0 opacity-100"
    >
      <div className="px-6 sm:px-8 py-3 overflow-x-hidden">
        <div className="flex items-center justify-between gap-4 w-full">
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
