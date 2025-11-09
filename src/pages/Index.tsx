import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Community } from "@/components/Community";
import { SectionConnector } from "@/components/SectionConnector";
import { ProblemSolution } from "@/components/ProblemSolution";
import { RobotShowcase } from "@/components/RobotShowcase";
import { HowItWorks } from "@/components/HowItWorks";
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
      <SectionConnector />
      <div className="container mx-auto px-4 py-12">
        <RobotShowcase />
      </div>
      <SectionConnector />
      <Community />
      <SectionConnector />
      <ProblemSolution />
      <SectionConnector />
      <HowItWorks />
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
