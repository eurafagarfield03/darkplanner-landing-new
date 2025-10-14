import { FileText, Scissors, TrendingUp, Search, Sparkles, Calendar, Video, BarChart } from "lucide-react";

const tools = [
  {
    icon: Calendar,
    name: "Gestão de Canais",
    description: "Organize múltiplos canais e planeje seu conteúdo mensal",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: FileText,
    name: "Editor de Roteiro",
    description: "Escreva roteiros com contador de tempo e caracteres",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: Video,
    name: "Gerador de SRT",
    description: "Crie legendas profissionais automaticamente",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Scissors,
    name: "Divisor de Texto",
    description: "Divida textos longos para diferentes plataformas",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: TrendingUp,
    name: "Vídeos Virais",
    description: "Encontre tendências e vídeos que estão bombando",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Search,
    name: "Referências de Canais",
    description: "Acompanhe e analise canais de sucesso no seu nicho",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: BarChart,
    name: "Analytics",
    description: "Acompanhe o desempenho de todos os seus vídeos",
    color: "from-yellow-500 to-green-500",
  },
  {
    icon: Sparkles,
    name: "IA Integrada",
    description: "Geração automática de ideias e otimizações",
    color: "from-green-500 to-cyan-500",
  },
];

export const ToolsGrid = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-gradient">8 ferramentas poderosas</span> em uma plataforma
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para produzir, planejar e escalar seus canais faceless
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <tool.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
