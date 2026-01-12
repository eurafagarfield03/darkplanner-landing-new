import { motion } from "framer-motion";
import { MessageCircle, Rocket, Zap, Users } from "lucide-react";

const benefits = [
  {
    icon: MessageCircle,
    title: "Grupo Exclusivo",
    description: "WhatsApp com creators que escalam canais Dark. Networking real."
  },
  {
    icon: Rocket,
    title: "Atualizações Mensais",
    description: "Novas ferramentas baseadas 100% no feedback da comunidade."
  },
  {
    icon: Zap,
    title: "Suporte Rápido",
    description: "Equipe em português pronta para ajudar. Respostas em até 2h."
  }
];

const stats = [
  { number: "500+", label: "Creators" },
  { number: "15+", label: "Canais gerenciados" },
  { number: "50M+", label: "Views totais" }
];

export const CreatorsFocus = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Comunidade</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Feita <span className="text-gradient">por creators, para creators</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Diferente de softwares genéricos, o Dark Planner é construído com base nas necessidades reais de quem produz conteúdo faceless.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-16"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-4 md:p-6 glass-card rounded-2xl border border-border hover-glow transition-all"
            >
              <div className="text-2xl md:text-4xl font-black text-gradient mb-1">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border hover-lift hover-glow transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};