import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BeforeAfter } from "@/components/BeforeAfter";
import { PainPoints } from "@/components/PainPoints";
import { ProductShowcase } from "@/components/ProductShowcase";
import { ToolsGrid } from "@/components/ToolsGrid";
import { Comparison } from "@/components/Comparison";
import { StatsCounter } from "@/components/StatsCounter";
import { Testimonials } from "@/components/Testimonials";
import { UseCases } from "@/components/UseCases";
import { Community } from "@/components/Community";
import { FAQ } from "@/components/FAQ";
import { Pricing } from "@/components/Pricing";
import { Guarantee } from "@/components/Guarantee";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BeforeAfter />
      <PainPoints />
      <ProductShowcase />
      <ToolsGrid />
      <Comparison />
      <StatsCounter />
      <Testimonials />
      <UseCases />
      <Community />
      <FAQ />
      <Pricing />
      <Guarantee />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
