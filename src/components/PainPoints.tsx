import { AlertCircle, Clock, BarChart3 } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "Perda de Tempo",
    description: "Horas gastas em tarefas repetitivas que não geram resultado"
  },
  {
    icon: BarChart3,
    title: "Falta de Consistência",
    description: "Dificuldade em manter uma rotina de publicações diárias"
  },
  {
    icon: AlertCircle,
    title: "Desorganização Total",
    description: "Ideias perdidas, prazos estourados e caos na produção"
  }
];

export const PainPoints = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Você está <span className="text-gradient">perdendo dinheiro</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enquanto você luta com a desorganização, seus concorrentes estão escalando
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-8 border-2 border-destructive/30 hover:border-destructive/60 transition-all hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-destructive/20 to-destructive/10 flex items-center justify-center mb-6">
                <point.icon className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-bold mb-3">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl font-bold text-destructive">
            Cada dia sem sistema = Dinheiro jogado fora 💸
          </p>
        </div>
      </div>
    </section>
  );
};
