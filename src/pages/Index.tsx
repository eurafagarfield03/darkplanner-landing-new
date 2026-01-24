import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DashboardShowcase } from "@/components/DashboardShowcase";
import { SectionDivider } from "@/components/SectionDivider";
import { CreatorsFocus } from "@/components/CreatorsFocus";
import { ProblemSolution } from "@/components/ProblemSolution";
import { HowItWorks } from "@/components/HowItWorks";
import { NichosViraisHero } from "@/components/NichosViraisHero";
import { ChannelInsightsHero } from "@/components/ChannelInsightsHero";
import { AudioGeneratorHero } from "@/components/AudioGeneratorHero";
import { ToolsGrid } from "@/components/ToolsGrid";
import { SocialProof } from "@/components/SocialProof";
import { Comparison } from "@/components/Comparison";
import { FAQ } from "@/components/FAQ";
import { Pricing } from "@/components/Pricing";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <DashboardShowcase />
      <SectionDivider />
      <CreatorsFocus />
      <SectionDivider />
      <ProblemSolution />
      <SectionDivider />
      <HowItWorks />
      <SectionDivider />
      <NichosViraisHero />
      <SectionDivider />
      <ChannelInsightsHero />
      <SectionDivider />
      <AudioGeneratorHero />
      <SectionDivider />
      <ToolsGrid />
      <SectionDivider />
      <SocialProof />
      <SectionDivider />
      <Comparison />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <Pricing />
      <SectionDivider />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;