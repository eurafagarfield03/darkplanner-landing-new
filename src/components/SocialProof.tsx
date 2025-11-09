import { Star, Quote, Users, Video, TrendingUp, Clock } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    role: "3 Canais Dark • 150K inscritos",
    content: "Tinha prompts soltos em 3 docs diferentes. Agora tá tudo aqui. Produção subiu 300% e eu sei exatamente onde tá cada coisa.",
    rating: 5,
    avatar: "C"
  },
  {
    name: "Ana Ribeiro",
    role: "Canal de curiosidades • 80K",
    content: "Salvei todos os vídeos que deram mais de 500K views. Agora só adapto o que já funcionou. Cresci 70K em 2 meses.",
    rating: 5,
    avatar: "A"
  },
  {
    name: "Marcos Silva",
    role: "5 canais • 400K total",
    content: "Gerencio 5 canais sozinho com o Planner. Cada canal tem sua pasta, seus prompts. Escalo sem contratar ninguém.",
    rating: 5,
    avatar: "M"
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
    <section className="py-16 md:py-24 px-4 md:px-6 overflow-x-hidden bg-[#1a1f2e]">
      <div className="container max-w-7xl space-y-24">
        {/* Stats */}
        <div>
          <div className="text-center mb-12 md:mb-16">
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
                className="glass-card rounded-2xl p-6 md:p-8 text-center hover:border-primary/50 transition-all hover:-translate-y-2"
              >
                <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mx-auto mb-4" />
                <div className="text-2xl md:text-3xl lg:text-4xl font-black text-gradient mb-2">{stat.value}</div>
                <div className="text-xs md:text-sm lg:text-base text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4">
              O que dizem quem <span className="text-gradient">já usa</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 px-2 md:px-0">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all hover:-translate-y-2"
              >
                <Quote className="w-10 h-10 text-primary mb-4 opacity-50" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div>
          <div className="text-center mb-12 md:mb-16">
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
                className="glass-card rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all hover:-translate-y-2"
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