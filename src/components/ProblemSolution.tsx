import { motion } from "framer-motion";
import { Clock, BarChart3, AlertCircle, Zap, TrendingUp, CheckCircle2, ArrowDown } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Tempo jogado fora",
    description: "2-3 horas por dia procurando arquivos, prompts e referências espalhados."
  },
  {
    icon: BarChart3,
    title: "Zero consistência",
    description: "Fez um vídeo viral, mas não consegue replicar porque não tem sistema."
  },
  {
    icon: AlertCircle,
    title: "Produção travada",
    description: "Só consegue 2-3 vídeos/semana enquanto concorrentes passam na frente."
  }
];

const solutions = [
  {
    icon: Zap,
    title: "Tudo centralizado",
    description: "Prompts, roteiros, thumbnails e referências em um só lugar."
  },
  {
    icon: TrendingUp,
    title: "Replique sucessos",
    description: "Salve vídeos virais e adapte o que já funcionou."
  },
  {
    icon: CheckCircle2,
    title: "Escale produção",
    description: "De 2-3 vídeos por semana para 15+ vídeos."
  }
];

export const ProblemSolution = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Problems */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            O que você está <span className="text-destructive">perdendo</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada dia sem sistema é dinheiro e tempo jogados fora
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problems.map((point, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-destructive/20 hover-lift transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6">
                <point.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-xl font-bold mb-3">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Arrow Separator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="flex flex-col items-center gap-2 text-primary">
            <ArrowDown className="w-8 h-8 animate-bounce" />
            <span className="text-lg font-bold">Com Dark Planner</span>
            <ArrowDown className="w-8 h-8 animate-bounce" />
          </div>
        </motion.div>

        {/* Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            A <span className="text-gradient">solução completa</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Sistema profissional para organizar e escalar seus canais
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-primary/20 hover-lift hover-glow transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <solution.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{solution.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};