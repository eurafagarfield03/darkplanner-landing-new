'use client'

import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Bot, Sparkles } from "lucide-react";

export function RobotShowcase() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Card className="w-full h-[500px] bg-background/80 backdrop-blur-sm border-primary/20 relative overflow-hidden group">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="hsl(var(--primary))"
      />
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-8 lg:p-12 relative z-10 flex flex-col justify-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full w-fit">
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">IA Avançada</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gradient leading-tight">
            Tecnologia de Ponta para Seus Vídeos
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
            Automatize sua produção de conteúdo com inteligência artificial de última geração. 
            Crie vídeos virais para seus canais Dark em minutos, não em horas.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground">Geração automática de legendas</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground">Análise de vídeos virais</span>
            </div>
          </div>

          <Button 
            onClick={scrollToPricing}
            className="w-fit group/btn"
            size="lg"
          >
            Começar Agora
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>

        {/* Right content - 3D Robot */}
        <div className="flex-1 relative min-h-[300px] md:min-h-0">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/80 z-10 pointer-events-none md:block hidden" />
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}
