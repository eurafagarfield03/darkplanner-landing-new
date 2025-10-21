import { MessageCircle, Rocket, Zap } from "lucide-react";

export const Community = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5 pointer-events-none"></div>
      
      <div className="container max-w-6xl relative z-10">
        <div className="glass-card rounded-3xl p-6 md:p-8 lg:p-12 border-2 border-primary/30">
          <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-4 md:mb-6 text-center">
            Uma ferramenta feita <span className="text-gradient">POR creators, PARA creators</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-6 md:mb-8">
            Diferente de softwares genéricos, o Dark Planner é construído com base nas necessidades reais de quem produz conteúdo faceless. Você não é só um usuário — você é parte do time de desenvolvimento.
          </p>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <p className="text-xs md:text-sm lg:text-base text-muted-foreground">
                Acesso direto ao grupo exclusivo de creators no WhatsApp
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center">
                <Rocket className="w-6 h-6 md:w-8 md:h-8 text-secondary" />
              </div>
              <p className="text-xs md:text-sm lg:text-base text-muted-foreground">
                Novas ferramentas lançadas mensalmente baseadas em feedback
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <p className="text-xs md:text-sm lg:text-base text-muted-foreground">
                Suporte rápido da comunidade e equipe em português
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
