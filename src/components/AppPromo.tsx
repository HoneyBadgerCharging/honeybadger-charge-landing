import { Check, Apple, Download } from 'lucide-react';

const features = [
  'Find stations near you',
  'Real-time charger status',
  'Easy payments via app',
  '24/7 help and support',
  'Available for iPhone and Android'
];

export const AppPromo = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Find, Charge,
              <br />
              <span className="text-primary">Get Moving.</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Download the app and start charging in minutes. Find nearby stations, 
              check availability, and manage your charging sessions effortlessly.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-xl hover:bg-foreground/90 transition-colors">
                <Apple className="w-5 h-5" />
                <span>Download on iOS</span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-xl hover:bg-foreground/90 transition-colors">
                <Download className="w-5 h-5" />
                <span>Download on Android</span>
              </button>
            </div>
          </div>

          {/* Right Phone Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl" />
            <img 
              src="/phone-rfid.png" 
              alt="HoneyBadger Charging App" 
              className="relative z-10 h-full w-auto object-contain"
            />
            
            {/* App Screenshots */}
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 space-y-4">
              <div className="w-48 h-32 bg-background/80 backdrop-blur-sm rounded-2xl shadow-lg border border-border p-4 transform hover:scale-105 transition-transform">
                <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center text-primary">
                  Map View
                </div>
              </div>
              <div className="w-48 h-32 bg-background/80 backdrop-blur-sm rounded-2xl shadow-lg border border-border p-4 transform hover:scale-105 transition-transform">
                <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center text-primary">
                  Charging Status
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};