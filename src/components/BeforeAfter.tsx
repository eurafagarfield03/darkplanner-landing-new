import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const problems = [
  {
    emoji: "😤",
    title: '"Onde salvei aquele prompt?"',
    description: "Você perde 30+ minutos procurando prompts em conversas antigas do ChatGPT ou arquivos de texto soltos",
  },
  {
    emoji: "🤦",
    title: '"Qual thumbnail era dessa?"',
    description: "Na hora do upload, você não lembra qual referência de thumbnail usar porque não anotou em lugar nenhum",
  },
  {
    emoji: "😩",
    title: '"Esse roteiro é de qual vídeo?"',
    description: "Roteiros salvos aleatoriamente sem conexão com os títulos dos vídeos causam confusão total",
  },
];

export const BeforeAfter = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-destructive/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="container max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Reconhece essa <span className="text-destructive">rotina</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Se você já perdeu horas procurando arquivos ou refazendo trabalho que já tinha pronto, você precisa do Dark Planner
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-8 border-2 border-destructive/30 hover:border-destructive/50 transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-6xl mb-6 text-center">{problem.emoji}</div>
              <h3 className="text-xl font-black mb-4 text-center">{problem.title}</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-12 py-7 text-lg font-black rounded-full glow-effect"
          >
            Sim, quero organizar minha produção agora
            <ArrowRight className="w-6 h-6 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
