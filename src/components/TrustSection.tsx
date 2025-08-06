import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";

const partners = [
  "Tesla", "ChargePoint", "EVgo", "Electrify America", "Blink Charging"
];

const testimonials = [
  {
    quote: "HoneyBadger transformed our parking lot into a revenue generator. Installation was seamless and support is exceptional.",
    author: "Sarah Chen",
    property: "Downtown Office Complex",
    rating: 5
  },
  {
    quote: "Zero upfront costs and immediate returns. Our tenants love the convenience and we love the additional income.",
    author: "Mike Rodriguez", 
    property: "Riverside Apartments",
    rating: 5
  },
  {
    quote: "The mobile app makes management effortless. We can track usage and earnings in real-time.",
    author: "Jennifer Kim",
    property: "Tech Campus Plaza",
    rating: 5
  }
];

export const TrustSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Partners Section */}
        <div className="text-center mb-16">
          <h3 className="text-lg font-medium text-muted-foreground mb-8">
            Trusted by leading EV charging networks
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partners.map((partner, index) => (
              <div key={index} className="text-2xl font-bold text-foreground">
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Success Stories
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.property}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Case Study CTA */}
        <div className="text-center bg-primary rounded-2xl p-12 text-primary-foreground">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Success Story?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of property owners already earning with HoneyBadger Charging
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-4 text-lg font-semibold group"
            >
              View Success Stories
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg font-semibold"
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};