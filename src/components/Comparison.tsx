import { X, Check } from "lucide-react";

const withoutItems = [
  "Prompts perdidos em conversas antigas e arquivos de texto desorganizados",
  "Roteiros sem conexão com os vídeos - você não sabe qual é qual",
  "Thumbnails esquecidas na hora do upload porque não anotou",
  "Canais de referência salvos aleatoriamente sem organização",
  "Perde 2-3 horas por dia procurando arquivos e refazendo trabalho",
];

const withItems = [
  "Prompts organizados por canal com busca rápida e tags para encontrar em 5 segundos",
  "Roteiros salvos por título conectados diretamente ao vídeo correspondente",
  "Referências de thumbnails sempre à mão quando você for fazer upload",
  "Biblioteca de canais organizada por nicho para análise rápida",
  "Economiza 8+ horas por semana e produz 3-5x mais vídeos",
];

export const Comparison = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            A diferença entre produzir <span className="text-gradient">1 vídeo por semana</span> e <span className="text-gradient">5 por dia</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Não é falta de ideias. É falta de organização.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Sem Dark Planner */}
          <div className="glass-card rounded-3xl p-8 border-2 border-destructive/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center">
                <X className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-black">Sem Dark Planner</h3>
            </div>

            <ul className="space-y-4">
              {withoutItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Com Dark Planner */}
          <div className="glass-card rounded-3xl p-8 border-2 border-success/30 bg-success/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center">
                <Check className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-2xl font-black">Com Dark Planner</h3>
            </div>

            <ul className="space-y-4">
              {withItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
