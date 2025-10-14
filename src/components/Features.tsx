import { Calendar, Zap, Layout, BarChart, Sparkles, Target } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Planejamento Mensal",
    description: "Visualize e organize todo o seu mês de conteúdo em segundos"
  },
  {
    icon: Zap,
    title: "Automação Inteligente",
    description: "Sistema que sugere ideias e otimiza seu workflow automaticamente"
  },
  {
    icon: Layout,
    title: "Multi-Canais",
    description: "Gerencie quantos canais quiser em um único dashboard"
  },
  {
    icon: BarChart,
    title: "Analytics Avançado",
    description: "Acompanhe métricas e tome decisões baseadas em dados reais"
  },
  {
    icon: Target,
    title: "Templates Prontos",
    description: "Centenas de templates testados para você começar imediatamente"
  },
  {
    icon: Sparkles,
    title: "IA Integrada",
    description: "Gere roteiros, ideias e thumbnails com inteligência artificial"
  }
];

export const Features = () => {
  return (
    <section className="py-24 px-6" id="features">
      <div className="container max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Tudo que você precisa para <span className="text-gradient">dominar o YouTube</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma plataforma completa com todas as ferramentas necessárias para escalar seus canais faceless
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-8 hover:border-primary/50 transition-all hover:-translate-y-2 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
