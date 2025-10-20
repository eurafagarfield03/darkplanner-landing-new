import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Play, CheckCircle2, TrendingUp, Users, Clock } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard-real.png";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6">
      <div className="container max-w-7xl">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <Badge className="inline-flex bg-gradient-to-r from-primary/30 to-secondary/30 border-2 border-primary/50 text-primary px-6 py-3 text-base font-bold animate-fade-in-down backdrop-blur-sm">
            <Sparkles className="w-5 h-5 mr-2" />
            Criado por equipe que gerencia +15 canais Dark com 50M+ views
          </Badge>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight max-w-5xl mx-auto mb-6">
            Produza <span className="text-gradient">3-5 vídeos por dia</span> sem perder roteiros, prompts ou thumbnails
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground max-w-4xl mx-auto leading-relaxed font-bold mb-6">
            O sistema completo que organiza seus canais faceless para você escalar com consistência profissional
          </p>
          
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Centralize prompts, roteiros, thumbnails e multiplique sua produção. De 1 vídeo por dia para 15+ vídeos. Simples assim.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-12 py-7 text-lg font-black rounded-full glow-effect animate-glow-pulse"
            >
              Começar Agora com 7 Dias de Garantia
              <TrendingUp className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary/30 hover:border-primary/50 px-12 py-7 text-lg font-bold rounded-full glass-card hover:bg-primary/5 transition-all"
            >
              <Play className="w-5 h-5 mr-2" />
              Ver Como Funciona
            </Button>
          </div>

          {/* Microcopy */}
          <p className="text-sm text-muted-foreground font-medium">
            Garantia incondicional de 7 dias • Acesso imediato • Cancele quando quiser
          </p>

          {/* Trust Items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 max-w-4xl mx-auto">
            <div className="glass-card rounded-xl p-4 flex flex-col items-center gap-2 hover:border-primary/50 transition-all">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              <span className="font-semibold text-sm text-center">Sem contrato</span>
            </div>
            <div className="glass-card rounded-xl p-4 flex flex-col items-center gap-2 hover:border-primary/50 transition-all">
              <Users className="w-6 h-6 text-primary" />
              <span className="font-semibold text-sm text-center">Pagamento 100% seguro</span>
            </div>
            <div className="glass-card rounded-xl p-4 flex flex-col items-center gap-2 hover:border-primary/50 transition-all">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              <span className="font-semibold text-sm text-center">Suporte em português</span>
            </div>
            <div className="glass-card rounded-xl p-4 flex flex-col items-center gap-2 hover:border-primary/50 transition-all">
              <Clock className="w-6 h-6 text-primary" />
              <span className="font-semibold text-sm text-center">Acesso em 2 minutos</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-20 animate-scale-in">
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <img 
              src={heroDashboard} 
              alt="Dark Planner Dashboard" 
              className="relative rounded-3xl border-2 border-primary/30 shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
