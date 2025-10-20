import { MessageCircle, Target, Rocket } from "lucide-react";

export const Community = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5 pointer-events-none"></div>
      
      <div className="container max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-6">
            <MessageCircle className="w-5 h-5 text-primary" />
            <span className="font-bold text-primary">INCLUSO EM TODOS OS PLANOS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Faça parte da <span className="text-gradient">Comunidade Dark Planner</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Não é só uma ferramenta. É um ecossistema colaborativo onde SUA voz molda o futuro do produto.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-500/10 flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Grupo Exclusivo no WhatsApp</h3>
            <p className="text-muted-foreground leading-relaxed">
              Conecte-se com centenas de creators faceless, troque experiências, estratégias e aprenda com quem está escalando canais Dark todos os dias.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Sugira Novas Ferramentas</h3>
            <p className="text-muted-foreground leading-relaxed">
              Precisa de uma funcionalidade específica? Sugira na comunidade! As features mais votadas entram no roadmap de desenvolvimento do próximo mês.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/10 flex items-center justify-center mb-6">
              <Rocket className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Ferramentas Novas Todo Mês</h3>
            <p className="text-muted-foreground leading-relaxed">
              O Dark Planner evolui constantemente. Receba atualizações mensais com novas funcionalidades criadas a partir do feedback da comunidade.
            </p>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-8 md:p-12 border-2 border-primary/30">
          <h3 className="text-2xl md:text-3xl font-black mb-6 text-center">
            Uma ferramenta feita <span className="text-gradient">POR creators, PARA creators</span>
          </h3>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
            Diferente de softwares genéricos, o Dark Planner é construído com base nas necessidades reais de quem produz conteúdo faceless. Você não é só um usuário — você é parte do time de desenvolvimento.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <MessageCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <p className="text-muted-foreground">
                Acesso direto ao grupo exclusivo de creators no WhatsApp
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Rocket className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <p className="text-muted-foreground">
                Novas ferramentas lançadas mensalmente baseadas em feedback
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Target className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <p className="text-muted-foreground">
                Suporte rápido da comunidade e equipe em português
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
