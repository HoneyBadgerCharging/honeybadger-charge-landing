import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { Experience } from "@/components/Experience";
import { TrustSection } from "@/components/TrustSection";
import { Footer } from "@/components/Footer";
import { BlogSection } from "@/components/BlogSection";
import { Navbar } from "@/components/Navbar";
import { AppPromo } from "@/components/AppPromo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ValueProposition />
      <AppPromo />
      <Experience />
      <TrustSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
