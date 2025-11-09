import { Star, Quote } from "lucide-react";

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

export const Testimonials = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Quem usa, <span className="text-gradient">recomenda</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja o que creators reais estão dizendo
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
