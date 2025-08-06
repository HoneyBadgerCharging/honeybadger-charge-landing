import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-video-bg.jpg";

export const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)'
        }}
      />
      
      {/* Animated Energy Lines */}
      <div className="absolute inset-0 z-10">
        <div className="relative w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-energy-flow" />
          <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-energy-flow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-energy-flow" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Zap className="w-8 h-8 text-primary mr-3 animate-glow" />
            <span className="text-lg font-medium text-primary">HoneyBadger Charging</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            EV Charging
            <span className="block text-primary">Made Simple</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto">
            Zero-cost installation for your property. Start earning revenue from day one with our complete EV charging solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center" role="group" aria-label="Get started options">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold group transition-all"
              aria-label="Get started with business EV charging solutions"
              aria-describedby="business-description"
            >
              <span>For Business</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold transition-all"
              aria-label="Get started with home EV charging solutions"
              aria-describedby="home-description"
            >
              <span>For Home</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold transition-all group"
              onClick={() => navigate('/find-charger')}
              aria-label="Find nearest EV charging station"
            >
              <MapPin className="mr-2 h-5 w-5" aria-hidden="true" />
              <span>Find a Charger</span>
            </Button>
          </div>
          
          {/* Screen reader descriptions */}
          <div className="sr-only">
            <p id="business-description">Learn about zero-cost EV charging installation for commercial properties and start earning revenue from day one.</p>
            <p id="home-description">Discover convenient home EV charging solutions for residential properties.</p>
          </div>
        </div>
      </div>
    </section>
  );
};