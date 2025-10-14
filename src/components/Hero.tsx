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
          <Badge className="bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/50 text-primary px-6 py-2 text-sm font-bold animate-fade-in-down">
            <Sparkles className="w-4 h-4 mr-2" />
            Ferramenta #1 para Creators Dark
          </Badge>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-5xl mx-auto">
            Dark Planner
            <br />
            <span className="text-gradient">O sistema completo</span>
            <br />
            para canais faceless
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-semibold">
            Escale sua produção, gerencie múltiplos canais e poste todos os dias.
            <br />
            Tudo em um único lugar.
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
            ✨ Sem cartão de crédito • Cancele quando quiser
          </p>

          {/* Trust Items */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-semibold">2.000+ creators</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="font-semibold">5M+ vídeos gerados</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-semibold">Economize 20h/semana</span>
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
