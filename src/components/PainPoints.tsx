import { AlertCircle, Clock, BarChart3 } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "Tempo jogado fora",
    description: "2-3 horas por dia procurando arquivos, prompts e referências. Se seu tempo vale R$ 50/hora, você perde R$ 3.000/mês só em desorganização."
  },
  {
    icon: BarChart3,
    title: "Zero consistência",
    description: "Você fez um vídeo viral, mas não consegue replicar. Porque? Não tem sistema. Seu canal cresce aos trancos, sem previsibilidade."
  },
  {
    icon: AlertCircle,
    title: "Produção travada",
    description: "Você tem capacidade, mas só consegue fazer 2-3 vídeos/semana. O caos te impede de escalar. Concorrentes organizados estão passando na frente."
  }
];

export const PainPoints = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            O que você está <span className="text-danger">perdendo agora</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada dia sem sistema é dinheiro jogado fora
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
            💸 Cada minuto conta quando você está escalando
          </p>
        </div>
      </div>
    </section>
  );
};
