import { Users, Video, TrendingUp, Clock } from "lucide-react";
import { TestimonialCard } from "@/components/ui/testimonial-card";

const testimonials = [
  {
    author: {
      name: "Gabao",
      handle: "@Gabao",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face"
    },
    text: "Minerar com a ferramenta da darkplanner ta dando resultado mesmo kkkkkkk 🔥💚🚀"
  },
  {
    author: {
      name: "Marina Costa",
      handle: "@marinacontent",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Finalmente uma ferramenta feita pensando em quem realmente produz conteúdo faceless. O gerador de SRT com presets é genial, economizo 30 minutos por vídeo."
  },
  {
    author: {
      name: "Rafael Santos",
      handle: "@rafaeldark",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "A comunidade do Dark Planner é o diferencial. Troco ideias com outros creators, aprendo estratégias novas todo dia. Meu canal cresceu 300% em 3 meses!"
  },
  {
    author: {
      name: "Júlia Mendes",
      handle: "@juliavirals",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "O filtro de vídeos virais é uma mina de ouro. Encontro trends antes da galera e adapto pro meu nicho. Já tive 3 vídeos com +1M de views usando essa estratégia."
  },
  {
    author: {
      name: "Pedro Oliveira",
      handle: "@pedrotech",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Organizei todas as referências dos meus nichos em um lugar só. Agora quando vou criar conteúdo, tenho tudo na mão. Produtividade aumentou absurdamente!"
  },
  {
    author: {
      name: "Camila Rocha",
      handle: "@camilacanais",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "Suporte em português que realmente entende do mercado brasileiro. Sempre que preciso, tenho resposta rápida e de gente que sabe o que tá fazendo."
  }
];

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

        {/* Testimonials Marquee */}
        <div>
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              O que dizem quem <span className="text-gradient">já usa</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Mais de 500 creators já transformaram sua produção com o Dark Planner
            </p>
          </div>

          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
              <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                {[...Array(4)].map((_, setIndex) => (
                  testimonials.map((testimonial, i) => (
                    <TestimonialCard 
                      key={`${setIndex}-${i}`}
                      {...testimonial}
                    />
                  ))
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
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