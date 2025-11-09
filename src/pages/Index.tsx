import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DashboardShowcase } from "@/components/DashboardShowcase";
import { SectionConnector } from "@/components/SectionConnector";
import { ProblemSolution } from "@/components/ProblemSolution";
import { CreatorsFocus } from "@/components/CreatorsFocus";
import { HowItWorks } from "@/components/HowItWorks";
import { NichosViraisHero } from "@/components/NichosViraisHero";
import { ToolsGrid } from "@/components/ToolsGrid";
import { TestimonialsMarquee } from "@/components/TestimonialsMarquee";
import { SocialProof } from "@/components/SocialProof";
import { Comparison } from "@/components/Comparison";
import { FAQ } from "@/components/FAQ";
import { Pricing } from "@/components/Pricing";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <DashboardShowcase />
      <SectionConnector />
      <CreatorsFocus />
      <SectionConnector />
      <ProblemSolution />
      <SectionConnector />
      <HowItWorks />
      <SectionConnector />
      <NichosViraisHero />
      <SectionConnector />
      <ToolsGrid />
      <SectionConnector />
      <SocialProof />
      <SectionConnector />
      <TestimonialsMarquee />
      <SectionConnector />
      <Comparison />
      <SectionConnector />
      <FAQ />
      <SectionConnector />
      <Pricing />
      <SectionConnector />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
