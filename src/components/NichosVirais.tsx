import { Flame, TrendingUp, Users, Video, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const nichos = [
  {
    name: "Relaxamento e Cura Espiritual",
    channels: 3,
    totalViews: "17.4M",
    avgScore: 77,
    icon: "🧘",
    growth: "+15%"
  },
  {
    name: "Histórias de Guerra Medieval",
    channels: 1,
    totalViews: "4.5M",
    avgScore: 70,
    icon: "⚔️",
    growth: "+28%"
  },
  {
    name: "Finanças (Documentário)",
    channels: 4,
    totalViews: "7.2M",
    avgScore: 69,
    icon: "💰",
    growth: "+12%"
  },
  {
    name: "Histórias Inspiradoras",
    channels: 2,
    totalViews: "3.0M",
    avgScore: 70,
    icon: "✨",
    growth: "+22%"
  },
  {
    name: "Astronomia e Ciência do Universo",
    channels: 6,
    totalViews: "8.9M",
    avgScore: 67,
    icon: "🌌",
    growth: "+18%"
  },
  {
    name: "Saúde",
    channels: 2,
    totalViews: "10.4M",
    avgScore: 78,
    icon: "❤️",
    growth: "+9%"
  },
];

export const NichosVirais = () => {
  return (
    <section className="py-8 md:py-12 px-4 md:px-6 overflow-x-hidden">
      <div className="container max-w-7xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-6">
            <Flame className="w-5 h-5 text-primary" />
            <span className="font-bold text-primary text-sm">Descubra Nichos Virais</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4">
            Os Nichos Que Estão <span className="text-gradient">Bombando Agora</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra os canais mais promissores organizados por nicho, com métricas reais de crescimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          {nichos.map((nicho, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 border-2 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{nicho.icon}</div>
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-success/10 text-success text-xs font-bold">
                  <TrendingUp className="w-3 h-3" />
                  {nicho.growth}
                </div>
              </div>

              <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                {nicho.name}
              </h3>

              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                    <Users className="w-3 h-3" />
                    <span className="text-xs">Canais</span>
                  </div>
                  <div className="font-bold text-sm">{nicho.channels}</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                    <Video className="w-3 h-3" />
                    <span className="text-xs">Views</span>
                  </div>
                  <div className="font-bold text-sm">{nicho.totalViews}</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                    <Flame className="w-3 h-3" />
                    <span className="text-xs">Score</span>
                  </div>
                  <div className="font-bold text-sm">{nicho.avgScore}</div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border/50">
                <span className="text-xs text-muted-foreground">Ver canais</span>
                <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <p className="text-muted-foreground mb-6">
            Encontre seu nicho perfeito e comece a produzir conteúdo viral hoje mesmo
          </p>
          <Button
            size="lg"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-6 text-base font-black rounded-full glow-effect"
          >
            Explorar Todos os Nichos
          </Button>
        </div>
      </div>
    </section>
  );
};
