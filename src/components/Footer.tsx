import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-border">
      {/* Animated Energy Lines at Top */}
      <div className="absolute top-0 left-0 w-full h-px">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-energy-flow" />
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center cursor-pointer">
              <img 
                src="/logo.webp" 
                alt="HoneyBadger Charging" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Zero-cost EV charging solutions that power the future. Start earning revenue from day one with our complete charging infrastructure.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <a href="/host-charger" className="text-muted-foreground hover:text-primary transition-colors">
                  Host a Charger
                </a>
              </li>
              <li>
                <a href="/find-charger" className="text-muted-foreground hover:text-primary transition-colors">
                  Find a Charger
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Fleet Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Property Management
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Installation Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Mobile App
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  24/7 Support
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  System Status
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">24/7 Support</p>
                  <a href="tel:+1-800-CHARGE-1" className="text-foreground hover:text-primary transition-colors font-medium">
                    1-800-CHARGE-1
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">General Inquiries</p>
                  <a href="mailto:info@honeybadgercharge.com" className="text-foreground hover:text-primary transition-colors font-medium">
                    info@honeybadgercharge.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">Headquarters</p>
                  <p className="text-foreground">
                    123 Energy Way<br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Powered Up</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest updates on EV charging technology, new locations, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-border space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
            <p>&copy; {currentYear} HoneyBadger Charging. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Powered by clean energy</span>
            <Zap className="w-4 h-4 text-primary animate-pulse" />
          </div>
        </div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>
    </footer>
  );
};
