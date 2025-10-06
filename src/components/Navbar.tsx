import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { LanguageSelect } from "@/components/ui/language-select";
import SearchDialog from "@/components/ui/search-dialog";

export const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
      if (scrolled && !isHovered) {
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHovered]);

  // Initial expansion
  useEffect(() => {
    if (!isScrolled) {
      const timer = setTimeout(() => {
        setIsExpanded(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isScrolled]);

  return (
    <nav 
      onMouseEnter={() => {
        setIsHovered(true);
        setIsExpanded(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        if (isScrolled) {
          setIsExpanded(false);
        }
      }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-background/95 backdrop-blur-md border border-border rounded-full transition-all duration-500 ease-out translate-y-0 opacity-100 ${
        isExpanded ? "max-w-6xl w-[calc(100%-2rem)]" : "max-w-2xl w-auto"
      }`}
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
              className="h-10 sm:h-12 w-auto object-contain mt-1.5"
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

          {/* Right Actions - Language, Search, CTA */}
          <div className={`flex-shrink-0 hidden md:flex items-center gap-2 transition-all duration-500 ease-out overflow-hidden ${
            isExpanded ? "w-auto opacity-100" : "w-0 opacity-0"
          }`}>
            <LanguageSelect className="text-foreground hover:text-primary transition-colors" />
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <Button size="sm" className="whitespace-nowrap">
              Get Started
            </Button>
          </div>
          
          {/* Search Dialog */}
          <SearchDialog 
            isOpen={isSearchOpen} 
            onClose={() => setIsSearchOpen(false)} 
          />
        </div>
      </div>
    </nav>
  );
};
