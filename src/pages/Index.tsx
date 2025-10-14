import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { ProductShowcase } from "@/components/ProductShowcase";
import { ToolsGrid } from "@/components/ToolsGrid";
import { StatsCounter } from "@/components/StatsCounter";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PainPoints />
      <ProductShowcase />
      <ToolsGrid />
      <StatsCounter />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
