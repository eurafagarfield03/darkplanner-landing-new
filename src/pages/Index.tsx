import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SectionConnector } from "@/components/SectionConnector";
import { BeforeAfter } from "@/components/BeforeAfter";
import { PainPoints } from "@/components/PainPoints";
import { HowItWorks } from "@/components/HowItWorks";
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
      <SectionConnector />
      <BeforeAfter />
      <SectionConnector />
      <PainPoints />
      <SectionConnector />
      <HowItWorks />
      <SectionConnector />
      <ToolsGrid />
      <SectionConnector />
      <Comparison />
      <SectionConnector />
      <StatsCounter />
      <SectionConnector />
      <Testimonials />
      <SectionConnector />
      <UseCases />
      <SectionConnector />
      <Community />
      <SectionConnector />
      <FAQ />
      <SectionConnector />
      <Pricing />
      <SectionConnector />
      <Guarantee />
      <SectionConnector />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
