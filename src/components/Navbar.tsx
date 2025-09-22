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
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
          <img 
            src="/logo.webp" 
            alt="HoneyBadger Charging" 
            className="h-12 w-auto object-contain"
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            className="text-foreground hover:text-primary transition-colors"
            onClick={() => navigate('/host-charger')}
          >
            Host a Charger
          </button>
          <button 
            className="text-foreground hover:text-primary transition-colors"
            onClick={() => navigate('/find-charger')}
          >
            Find a Charger
          </button>
          <button 
            className="text-foreground hover:text-primary transition-colors"
            onClick={() => navigate('/blog')}
          >
            Blog
          </button>
          <button className="text-foreground hover:text-primary transition-colors">
            FAQ
          </button>
          <button className="text-foreground hover:text-primary transition-colors">
            Support
          </button>
        </div>

        <Button size="sm" className="hidden md:block">
          Get Started
        </Button>
      </div>
    </nav>
  );
};