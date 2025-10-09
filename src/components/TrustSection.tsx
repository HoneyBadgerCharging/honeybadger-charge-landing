import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";

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
                    <div className="text-lg text-foreground" role="definition">{testimonial.property}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};