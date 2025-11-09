import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DashboardShowcase } from "@/components/DashboardShowcase";
import { SectionConnector } from "@/components/SectionConnector";
import { ProblemSolution } from "@/components/ProblemSolution";
import { RobotShowcase } from "@/components/RobotShowcase";
import { HowItWorks } from "@/components/HowItWorks";
import { NichosVirais } from "@/components/NichosVirais";
import { NichosViraisHero } from "@/components/NichosViraisHero";
import { ToolsGrid } from "@/components/ToolsGrid";
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
      <RobotShowcase />
      <SectionConnector />
      <ProblemSolution />
      <SectionConnector />
      <HowItWorks />
      <SectionConnector />
      <NichosVirais />
      <SectionConnector />
      <NichosViraisHero />
      <SectionConnector />
      <ToolsGrid />
      <SectionConnector />
      <SocialProof />
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
