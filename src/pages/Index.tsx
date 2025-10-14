import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { Features } from "@/components/Features";
import { Results } from "@/components/Results";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PainPoints />
      <Features />
      <Results />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
