'use client'

import { SplineScene } from "@/components/ui/spline";
import { MessageCircle, Rocket, Zap } from "lucide-react";

export function RobotShowcase() {
  return (
    <section className="py-8 md:py-12 px-4 md:px-6 relative overflow-hidden">
      
      <div className="container max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Robô 3D */}
          <div className="w-full h-[500px] md:h-[600px] relative overflow-hidden rounded-3xl animate-fade-in">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>

          {/* Conteúdo */}
          <div className="glass-card rounded-3xl p-6 md:p-8 lg:p-10 border-2 border-primary/30 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 md:mb-6">
              Uma ferramenta feita <span className="text-gradient">POR creators, PARA creators</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
              Diferente de softwares genéricos, o Dark Planner é construído com base nas necessidades reais de quem produz conteúdo faceless. Você não é só um usuário — você é parte do time de desenvolvimento.
            </p>

            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <p className="text-sm md:text-base text-muted-foreground pt-2">
                  Acesso direto ao grupo exclusivo de creators no WhatsApp
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-6 h-6 md:w-7 md:h-7 text-secondary" />
                </div>
                <p className="text-sm md:text-base text-muted-foreground pt-2">
                  Novas ferramentas lançadas mensalmente baseadas em feedback
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <p className="text-sm md:text-base text-muted-foreground pt-2">
                  Suporte rápido da comunidade e equipe em português
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
