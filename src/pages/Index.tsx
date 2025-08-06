import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { BenefitsGrid } from "@/components/BenefitsGrid";
import { TrustSection } from "@/components/TrustSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ValueProposition />
      <BenefitsGrid />
      <TrustSection />
    </div>
  );
};

export default Index;
