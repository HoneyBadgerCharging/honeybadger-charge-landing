import { Button } from "@/components/ui/button";
import { Apple, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  
  const menuItems = [
    { label: "Download the app", action: () => {} },
    { label: "Install / Host chargers", action: () => navigate('/host-charger') },
    { label: "Electrify my fleet", action: () => navigate('/host-charger') },
    { label: "Provide charging subscriptions", action: () => navigate('/host-charger') },
  ];
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/woman-shopping-charge.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Card */}
          <div className="bg-background rounded-3xl p-12 shadow-2xl max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
              Australia's
              <span className="block">EV charging</span>
              <span className="block">platform</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We make hosting and managing chargers easy for organisations and destinations, and partner with fleet managers, vehicle manufacturers and hire-car providers to keep drivers moving.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-foreground hover:bg-foreground/90 text-background px-6 py-6 text-base font-semibold rounded-xl"
              >
                <Apple className="mr-2 h-5 w-5" />
                <span>Download on iOS</span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background px-6 py-6 text-base font-semibold rounded-xl"
              >
                <Download className="mr-2 h-5 w-5" />
                <span>Download on Android</span>
              </Button>
            </div>
          </div>

          {/* Right Floating Menu */}
          <div className="hidden lg:flex justify-end">
            <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl max-w-sm">
              <p className="text-muted-foreground mb-4 font-medium">I want to...</p>
              <div className="space-y-3">
                {menuItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={item.action}
                    className="w-full text-left px-6 py-4 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all text-foreground font-medium"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};