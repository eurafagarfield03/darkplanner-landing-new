import { motion } from "framer-motion";
import { Star, Quote, Users, Video, TrendingUp, Clock } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    role: "3 Canais Dark • 150K inscritos",
    content: "Tinha prompts soltos em 3 docs diferentes. Agora tá tudo aqui. Produção subiu 300%.",
    avatar: "C"
  },
  {
    name: "Ana Ribeiro",
    role: "Canal de curiosidades • 80K",
    content: "Salvei todos os vídeos que deram mais de 500K views. Cresci 70K em 2 meses.",
    avatar: "A"
  },
  {
    name: "Marcos Silva",
    role: "5 canais • 400K total",
    content: "Gerencio 5 canais sozinho com o Planner. Escalo sem contratar ninguém.",
    avatar: "M"
  }
];

const stats = [
  { icon: Users, value: "500+", label: "Creators ativos" },
  { icon: Video, value: "10K+", label: "Vídeos organizados" },
  { icon: TrendingUp, value: "3x", label: "Aumento médio" },
  { icon: Clock, value: "15h", label: "Economizadas/semana" }
];

export const SocialProof = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Stats */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              Números que <span className="text-gradient">provam</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 md:p-8 text-center border border-border hover-glow transition-all"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-2xl md:text-3xl lg:text-4xl font-black text-gradient mb-2">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              O que dizem quem <span className="text-gradient">já usa</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8 border border-border hover-lift hover-glow transition-all"
              >
                <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-lg font-bold text-primary-foreground">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};