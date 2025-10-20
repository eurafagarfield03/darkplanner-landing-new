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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight max-w-6xl mx-auto mb-8">
            Organize, Planeje e Escale:
            <br />
            <span className="text-gradient">Sistema Completo Para Gerenciar</span>
            <br />
            Seus Canais Dark e Sua Equipe
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Centralize prompts, roteiros, thumbnails e multiplique sua produção. De 1 vídeo por dia para 15+ vídeos.
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-16 py-8 text-xl font-black rounded-full glow-effect animate-glow-pulse"
            >
              Começar Agora com 7 Dias de Garantia
              <TrendingUp className="w-6 h-6 ml-3" />
            </Button>
          </div>

          {/* Microcopy */}
          <p className="text-sm text-muted-foreground font-medium pt-4">
            Garantia incondicional de 7 dias • Acesso imediato • Cancele quando quiser
          </p>
        </div>

        {/* Hero Image */}
        <div className="mt-24 animate-scale-in">
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl blur-2xl animate-pulse"></div>
            <img 
              src={heroDashboard} 
              alt="Dark Planner - Sistema completo para gerenciar canais dark e equipes" 
              className="relative rounded-3xl border border-foreground/10 shadow-2xl w-full transform hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
