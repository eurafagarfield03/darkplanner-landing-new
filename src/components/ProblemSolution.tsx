import { AlertCircle, Clock, BarChart3, CheckCircle2, TrendingUp, Zap } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Tempo jogado fora",
    description: "2-3 horas por dia procurando arquivos, prompts e referências espalhados em vários lugares."
  },
  {
    icon: BarChart3,
    title: "Zero consistência",
    description: "Você fez um vídeo viral, mas não consegue replicar porque não tem sistema para organizar o que funciona."
  },
  {
    icon: AlertCircle,
    title: "Produção travada",
    description: "Você tem capacidade, mas só consegue fazer 2-3 vídeos/semana enquanto concorrentes organizados passam na frente."
  }
];

const solutions = [
  {
    icon: Zap,
    title: "Tudo centralizado",
    description: "Prompts, roteiros, thumbnails e referências organizados por canal em um só lugar."
  },
  {
    icon: TrendingUp,
    title: "Replique sucessos",
    description: "Salve seus vídeos virais e adapte o que já funcionou para multiplicar resultados."
  },
  {
    icon: CheckCircle2,
    title: "Escale produção",
    description: "De 2-3 vídeos por semana para 15+ vídeos sem contratar mais gente."
  }
];

export const ProblemSolution = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 px-4 md:px-6 overflow-x-hidden">
      <div className="container max-w-7xl">
        {/* Problems */}
        <div className="mb-24">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4">
              O que você está <span className="text-destructive">perdendo agora</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada dia sem sistema é dinheiro e tempo jogados fora
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 px-2 md:px-0">
            {problems.map((point, index) => (
              <div 
                key={index}
                className="glass-card rounded-2xl p-6 md:p-8 border-2 border-destructive/30 hover:border-destructive/60 transition-all hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-destructive/20 to-destructive/10 flex items-center justify-center mb-6">
                  <point.icon className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3">{point.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow Down Separator */}
        <div className="flex justify-center my-12">
          <div className="flex flex-col items-center gap-3">
            <div className="text-4xl font-black text-primary">↓</div>
            <p className="text-xl font-bold text-primary">Com o Dark Planner</p>
            <div className="text-4xl font-black text-primary">↓</div>
          </div>
        </div>

        {/* Solutions */}
        <div>
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4">
              A <span className="text-gradient">solução completa</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Sistema profissional para organizar e escalar seus canais dark
            </p>
          </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 px-2 md:px-0">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-6 md:p-8 border-2 border-primary/30 hover:border-primary/60 transition-all hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};