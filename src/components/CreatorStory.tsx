import { Quote } from "lucide-react";

export const CreatorStory = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Por que eu criei o <span className="text-gradient">Dark Planner</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A história de quem viveu o problema na pele
          </p>
        </div>

        <div className="glass-card rounded-3xl p-12 md:p-16 border-2 border-primary/30">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-5xl font-black">
                RG
              </div>
              <div className="text-center mt-4">
                <div className="font-black text-xl">Rafael Garfield</div>
                <div className="text-muted-foreground">Criador do Dark Planner</div>
              </div>
            </div>

            <div className="flex-1 space-y-6">
              <Quote className="w-12 h-12 text-primary opacity-50" />
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <span className="text-foreground font-bold">Em 2023, eu gerenciava 4 canais dark.</span> Passava mais tempo procurando arquivos do que criando conteúdo. Prompts perdidos em conversas antigas do ChatGPT. Roteiros salvos sem nome claro. Referências de thumbnails espalhadas em 3 pastas diferentes.
                </p>
                
                <p>
                  Um dia, <span className="text-destructive font-bold">perdi um roteiro completo</span> que tinha dado trabalho fazer. Passei 2 horas procurando. Foi quando percebi: <span className="text-foreground font-bold">o problema não era falta de tempo ou talento. Era desorganização pura.</span>
                </p>

                <p>
                  Criei o Dark Planner primeiro pra mim. Depois mostrei pra alguns amigos creators. Eles pediram acesso. Em 3 meses, <span className="text-foreground font-bold">minha produção triplicou</span> e eu estava ajudando dezenas de creators a fazer o mesmo.
                </p>

                <p className="text-foreground font-bold text-xl pt-4">
                  Hoje, o Dark Planner organiza milhares de vídeos e economiza centenas de horas por semana pra creators que estão escalando de verdade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};