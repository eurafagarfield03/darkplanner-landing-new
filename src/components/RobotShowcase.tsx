import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function RobotShowcase() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Card className="w-full h-[500px] bg-background/50 backdrop-blur-sm border-primary/20 relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="hsl(var(--primary))"
      />
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            Tecnologia de Ponta
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg text-lg">
            Automatize sua produção de conteúdo com inteligência artificial avançada. 
            Crie vídeos virais para seus canais Dark com apenas alguns cliques.
          </p>
          <Button 
            onClick={scrollToPricing}
            className="mt-6 w-fit group"
            size="lg"
          >
            Começar Agora
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Right content - 3D Robot */}
        <div className="flex-1 relative min-h-[300px] md:min-h-0">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}
