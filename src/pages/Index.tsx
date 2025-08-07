import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { BenefitsGrid } from "@/components/BenefitsGrid";
import { TrustSection } from "@/components/TrustSection";
import { BlogSection } from "@/components/BlogSection";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ValueProposition />
      <BenefitsGrid />
      <TrustSection />
      <BlogSection />
    </div>
  );
};

export default Index;
