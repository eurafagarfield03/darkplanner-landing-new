import { MessageCircle, Rocket, Zap, Users, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: MessageCircle,
    title: "Acesso Direto ao Grupo Exclusivo",
    description: "WhatsApp com creators que estão escalando canais Dark. Troca de experiências, estratégias e networking real."
  },
  {
    icon: Rocket,
    title: "Ferramentas Lançadas Mensalmente",
    description: "Baseadas 100% em feedback da comunidade. Você não é só usuário - você define o que construímos."
  },
  {
    icon: Zap,
    title: "Suporte Rápido em Português",
    description: "Equipe e comunidade prontas para ajudar. Respostas rápidas de quem realmente entende de canais Dark."
  }
];

const stats = [
  { number: "500+", label: "Creators Ativos" },
  { number: "15+", label: "Canais Gerenciados" },
  { number: "50M+", label: "Views Totais" }
];

export const CreatorsFocus = () => {
  return (
    <section className="py-8 md:py-12 px-4 md:px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container max-w-7xl relative z-10">
        {/* Main Statement */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-8">
            <Users className="w-5 h-5 text-primary" />
            <span className="font-bold text-primary text-sm">Comunidade de Creators</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Uma ferramenta feita{" "}
            <span className="text-gradient block mt-2">
              POR creators, PARA creators
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Diferente de softwares genéricos, o Dark Planner é construído com base nas necessidades reais de quem produz conteúdo faceless. Você não é só um usuário — você é parte do time de desenvolvimento.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="glass-card rounded-2xl p-4 md:p-6 border-2 border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl md:text-4xl font-black text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-8 border-2 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-success/10 border border-success/30 mb-6">
            <Sparkles className="w-5 h-5 text-success" />
            <span className="text-success font-bold">
              Faça parte da comunidade que está escalando canais Dark
            </span>
          </div>
          
          <div>
            <Button
              size="lg"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-12 py-6 text-lg font-black rounded-full glow-effect group"
            >
              <span>Começar Agora</span>
              <TrendingUp className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
