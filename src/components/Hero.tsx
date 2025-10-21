import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard-real.png";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4 md:px-6 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
        <div className="hero-orb hero-orb-4"></div>
        <div className="hero-orb hero-orb-5"></div>
      </div>

      <div className="container max-w-7xl relative z-10 px-2 md:px-4">
        <div className="text-center space-y-6 md:space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-block px-2">
            <div className="glass-card px-3 md:px-6 py-2 md:py-3 rounded-full border border-primary/20">
              <p className="text-xs md:text-sm lg:text-base font-semibold text-gradient">
                Criado por equipe que gerencia +15 canais Dark com +50M views
              </p>
            </div>
          </div>
          
          {/* Headline */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight max-w-5xl mx-auto mb-6 md:mb-8 px-2">
            <span className="text-gradient">Organize, Planeje e Escale:</span> Sistema Completo Para Gerenciar Seus Canais Dark e Sua Equipe
          </h1>

          {/* Subheadline */}
          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Centralize prompts, roteiros, thumbnails e multiplique sua produção. De 1 vídeo por dia para 15+ vídeos.
          </p>

          {/* CTA Button */}
          <div className="pt-4 md:pt-6 px-2">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-4 md:px-8 lg:px-12 py-5 md:py-6 text-sm md:text-base lg:text-lg font-black rounded-full glow-effect w-full sm:w-auto"
            >
              <span className="hidden sm:inline">Quero Organizar Meus Canais Agora</span>
              <span className="inline sm:hidden">Organizar Canais</span>
              <TrendingUp className="w-4 h-4 md:w-5 md:h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 md:mt-24 px-2">
          <div className="relative max-w-6xl mx-auto perspective-1000">
            <div className="hero-image-wrapper rounded-3xl overflow-hidden">
              <img 
                src={heroDashboard} 
                alt="Dark Planner - Sistema completo para gerenciar canais dark e equipes" 
                className="relative rounded-3xl border-2 border-primary/20 w-full transform transition-all duration-500 hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
