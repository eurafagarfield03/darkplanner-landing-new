import { Users, Video, TrendingUp, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Creators ativos" },
  { icon: Video, value: "10K+", label: "Vídeos organizados" },
  { icon: TrendingUp, value: "3x", label: "Aumento médio de produção" },
  { icon: Clock, value: "15h", label: "Economizadas por semana" }
];

const useCases = [
  {
    profile: "Solo Creator",
    channels: "1-2 canais",
    problem: "Desorganização e tempo perdido",
    result: "De 3 para 10 vídeos/semana sem perder qualidade"
  },
  {
    profile: "Multi-Canal",
    channels: "3-5 canais",
    problem: "Confusão entre projetos e prompts",
    result: "Sistema claro por canal, produção previsível"
  },
  {
    profile: "Com Equipe",
    channels: "5+ canais",
    problem: "Comunicação e delegação caótica",
    result: "Equipe alinhada, cada um sabe o que fazer"
  }
];

export const SocialProof = () => {
  return (
    <section className="py-8 md:py-12 px-4 md:px-6 overflow-x-hidden">
      <div className="container max-w-7xl space-y-24">
        {/* Stats */}
        <div>
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4">
              Números que <span className="text-gradient">provam</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
              Resultados reais de creators reais
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-2 md:px-0">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 md:p-8 text-center hover:border-primary/50 transition-all hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mx-auto mb-4" />
                <div className="text-2xl md:text-3xl lg:text-4xl font-black text-gradient mb-2">{stat.value}</div>
                <div className="text-xs md:text-sm lg:text-base text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div>
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4">
              Para qualquer <span className="text-gradient">estágio</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
              Do creator solo ao multi-canal com equipe
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 px-2 md:px-0">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-xl md:text-2xl font-black mb-2">{useCase.profile}</div>
                <div className="text-primary font-bold mb-4">{useCase.channels}</div>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-bold text-muted-foreground mb-1">Problema:</div>
                    <div className="text-sm">{useCase.problem}</div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-1">Com Dark Planner:</div>
                    <div className="text-sm font-bold">{useCase.result}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};