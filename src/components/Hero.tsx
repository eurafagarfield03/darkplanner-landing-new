import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard-real.png";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-7xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Headline */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight max-w-5xl mx-auto mb-8">
            Organize, Planeje e Escale: Sistema Completo Para Gerenciar Seus Canais Dark e Sua Equipe
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Centralize prompts, roteiros, thumbnails e multiplique sua produção. De 1 vídeo por dia para 15+ vídeos.
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-12 py-6 text-lg font-black rounded-full glow-effect"
            >
              Quero Organizar Meus Canais Agora
              <TrendingUp className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-24">
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
