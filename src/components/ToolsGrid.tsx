import { FileText, Scissors, TrendingUp, Search, Sparkles, Calendar, Video, BarChart } from "lucide-react";

const tools = [
  {
    icon: Calendar,
    name: "Gestão de Canais",
    description: "Crie quantos canais quiser. Cada um com suas pastas, roteiros e referências separadas.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: FileText,
    name: "Biblioteca de Prompts",
    description: "Salve todos os prompts que funcionam. Reutilize o que já deu certo em segundos.",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: Video,
    name: "Gestão de Roteiros",
    description: "Conecte roteiros aos vídeos. Nunca mais procure \"aquele\" roteiro específico.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Scissors,
    name: "Gerador de SRT",
    description: "Crie legendas para CapCut com timestamp perfeito. Cole e pronto.",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: TrendingUp,
    name: "Buscador de Virais",
    description: "Encontre vídeos que estão explodindo AGORA. Filtre por views, país, data.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Search,
    name: "Referências de Canais",
    description: "Salve canais, links e ideias. Acesse tudo em um clique quando precisar.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: BarChart,
    name: "Planejamento de Vídeos",
    description: "Veja os próximos 30 dias do canal. Saiba exatamente o que produzir.",
    color: "from-yellow-500 to-green-500",
  },
  {
    icon: Sparkles,
    name: "Comunidade",
    description: "Conecte-se com outros creators, compartilhe estratégias e faça networking no grupo exclusivo.",
    color: "from-green-500 to-cyan-500",
  },
];

export const ToolsGrid = () => {
  return (
    <section id="tools" className="py-24 px-6">
      <div className="container max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Tudo que você precisa <span className="text-gradient">em um lugar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            8 ferramentas que eliminam o caos e multiplicam sua produção
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
