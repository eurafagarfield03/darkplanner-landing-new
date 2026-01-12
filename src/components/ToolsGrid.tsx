import { motion } from "framer-motion";
import { FileText, Scissors, TrendingUp, Search, Sparkles, Calendar, Video, BarChart } from "lucide-react";

const tools = [
  {
    icon: Calendar,
    name: "Gestão de Canais",
    description: "Crie quantos canais quiser. Cada um com suas pastas e roteiros separados.",
  },
  {
    icon: FileText,
    name: "Biblioteca de Prompts",
    description: "Salve todos os prompts que funcionam. Reutilize em segundos.",
  },
  {
    icon: Video,
    name: "Gestão de Roteiros",
    description: "Conecte roteiros aos vídeos. Nunca mais procure aquele roteiro.",
  },
  {
    icon: Scissors,
    name: "Gerador de SRT",
    description: "Crie legendas para CapCut com timestamp perfeito.",
  },
  {
    icon: TrendingUp,
    name: "Buscador de Virais",
    description: "Encontre vídeos explodindo agora. Filtre por views e data.",
  },
  {
    icon: Search,
    name: "Referências de Canais",
    description: "Salve canais e ideias. Acesse tudo em um clique.",
  },
  {
    icon: BarChart,
    name: "Planejamento",
    description: "Veja os próximos 30 dias. Saiba exatamente o que produzir.",
  },
  {
    icon: Sparkles,
    name: "Comunidade",
    description: "Conecte-se com creators. Compartilhe estratégias.",
  },
];

export const ToolsGrid = () => {
  return (
    <section id="tools" className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            Tudo em <span className="text-gradient">um lugar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            8 ferramentas que eliminam o caos e multiplicam sua produção
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 border border-border hover-lift hover-glow transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <tool.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base md:text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};