import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "João Silva",
    role: "Creator Dark • 3 canais",
    content: "Dark Planner mudou completamente meu workflow. Consegui escalar de 1 para 3 canais mantendo a qualidade. Economizo pelo menos 15 horas por semana!",
    rating: 5,
    avatar: "🎯"
  },
  {
    name: "Maria Santos",
    role: "Produtora de Conteúdo",
    content: "A ferramenta de planejamento mensal é sensacional. Consigo visualizar todo meu conteúdo e nunca mais perco prazos. Vale cada centavo!",
    rating: 5,
    avatar: "✨"
  },
  {
    name: "Pedro Costa",
    role: "Creator Faceless • 5 canais",
    content: "Gerencio 5 canais sozinho graças ao Dark Planner. O sistema de automação e templates me permitiu escalar sem contratar equipe.",
    rating: 5,
    avatar: "🚀"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            O que dizem nossos <span className="text-gradient">creators</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Milhares de creators já transformaram seus canais
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-primary mb-4 opacity-50" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
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
    </section>
  );
};
