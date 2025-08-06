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
          
          <div className="grid md:grid-cols-3 gap-6" role="list" aria-label="Customer testimonials">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300" role="listitem">
                <CardContent className="p-6">
                  <div className="flex mb-4" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="text-foreground mb-4 italic" cite={testimonial.author}>
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold" role="term">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground" role="definition">{testimonial.property}</div>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center" role="group" aria-label="Success story actions">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold group transition-all"
              aria-label="View detailed success stories from our customers"
              aria-describedby="success-stories-description"
            >
              <span>View Success Stories</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold transition-all"
              aria-label="Schedule a free consultation with our EV charging experts"
              aria-describedby="consultation-description"
            >
              <span>Get Free Consultation</span>
            </Button>
          </div>
          
          {/* Screen reader descriptions */}
          <div className="sr-only">
            <p id="success-stories-description">Read case studies and testimonials from property owners who have successfully implemented HoneyBadger charging solutions.</p>
            <p id="consultation-description">Book a no-obligation consultation to discuss your property's EV charging potential and revenue opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  );
};