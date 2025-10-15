import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Play, CheckCircle2, TrendingUp, Users, Clock } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6">
      <div className="container max-w-7xl">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <Badge className="bg-gradient-to-r from-success/20 to-success/10 border-success text-success px-6 py-3 text-base font-bold animate-fade-in-down">
            <Sparkles className="w-5 h-5 mr-2" />
            +2000 creators já usam
          </Badge>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-5xl mx-auto">
            O sistema definitivo
            <br />
            <span className="text-gradient">para canais Dark</span>
          </h1>

          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-foreground max-w-3xl mx-auto leading-relaxed font-bold mb-4">
            Organize, escale e domine seus canais faceless
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Centralize prompts, roteiros, thumbnails e multiplique sua produção. De 1 vídeo por semana para 15+ vídeos. Simples assim.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-12 py-7 text-lg font-black rounded-full glow-effect animate-glow-pulse"
            >
              Começar Teste Grátis
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-border hover:border-primary/50 px-12 py-7 text-lg font-bold rounded-full glass-card"
            >
              <Play className="w-5 h-5 mr-2" />
              Ver Demonstração
            </Button>
          </div>

          {/* Microcopy */}
          <p className="text-sm text-muted-foreground font-medium">
            ✓ Teste 7 dias grátis • ✓ Cancele quando quiser • ✓ Suporte dedicado
          </p>

          {/* Trust Items */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span className="font-semibold">Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span className="font-semibold">Acesso imediato</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span className="font-semibold">Suporte em português</span>
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
