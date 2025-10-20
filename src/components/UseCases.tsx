import { TrendingUp, Zap, Search, BarChart3, CheckCircle2 } from "lucide-react";

const cases = [
  {
    number: "1",
    icon: BarChart3,
    title: "Produzir vídeos em escala sem caos",
    description: "Você acorda, abre o Dark Planner, vê os 3 próximos vídeos de cada canal com roteiros prontos e referências de thumbnail conectadas. Em 2 horas você produz tudo sem procurar arquivos.",
    result: "De 2-3 vídeos/semana para 15+ vídeos/semana",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "2",
    icon: Zap,
    title: "Reutilizar prompts que funcionam",
    description: "Aquele prompt de roteiro que gerou um vídeo com 100K views? Está salvo e organizado. Você encontra em 5 segundos, adapta para outro nicho e produz um novo sucesso.",
    result: "Economiza 1-2 horas por dia em criação de prompts",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "3",
    icon: Search,
    title: "Analisar concorrentes rapidamente",
    description: "Você salva os 10 melhores canais do seu nicho na biblioteca de referências. Quando precisa de inspiração, acessa todos em segundos e analisa o que está funcionando.",
    result: "Pesquisa de mercado em 10 minutos ao invés de horas",
    color: "from-orange-500 to-red-500",
  },
  {
    number: "4",
    icon: TrendingUp,
    title: "Escalar para múltiplos canais",
    description: "Você gerencia 3, 5 ou 10 canais sem confusão. Cada canal tem suas próprias pastas de prompts, roteiros e referências. Tudo separado e organizado.",
    result: "Gerencia 5+ canais com a mesma facilidade de 1",
    color: "from-green-500 to-emerald-500",
  },
];

export const UseCases = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            O que você vai conseguir fazer <span className="text-gradient">com o Dark Planner</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Cenários reais de uso no dia a dia de creators faceless
          </p>
        </div>

        <div className="space-y-8">
          {cases.map((useCase, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-8 md:p-10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-black text-2xl">{useCase.number}</span>
                </div>

                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-4">
                    <useCase.icon className="w-6 h-6 text-primary mt-1" />
                    <h3 className="text-2xl font-black">{useCase.title}</h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {useCase.description}
                  </p>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-primary font-bold text-sm">{useCase.result}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
