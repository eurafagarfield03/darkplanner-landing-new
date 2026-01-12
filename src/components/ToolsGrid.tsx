import { motion } from "framer-motion";
import { FileText, Scissors, TrendingUp, Search, Sparkles, Calendar, Video, Volume2, Flame, BarChart3 } from "lucide-react";

const tools = [
  {
    icon: Calendar,
    name: "Gestão de Canais",
    description: "Gerencie quantos canais quiser com pastas e roteiros separados.",
  },
  {
    icon: FileText,
    name: "Biblioteca de Prompts",
    description: "Salve e reutilize prompts que funcionam em segundos.",
  },
  {
    icon: Video,
    name: "Gestão de Roteiros",
    description: "Conecte roteiros aos vídeos automaticamente.",
  },
  {
    icon: Volume2,
    name: "Gerador de Áudio",
    description: "189 vozes ElevenLabs ultra-realistas para seus vídeos.",
    highlight: true,
  },
  {
    icon: Scissors,
    name: "Gerador de SRT",
    description: "Legendas para CapCut com timestamp perfeito.",
  },
  {
    icon: TrendingUp,
    name: "Buscador de Virais",
    description: "Encontre vídeos explodindo agora com filtros avançados.",
  },
  {
    icon: Flame,
    name: "Nichos Virais",
    description: "Descubra nichos promissores antes da concorrência.",
  },
  {
    icon: BarChart3,
    name: "Insights de Canal",
    description: "Análise profissional de qualquer canal do YouTube.",
  },
  {
    icon: Search,
    name: "Referências",
    description: "Salve canais e ideias organizados por nicho.",
  },
  {
    icon: Sparkles,
    name: "Comunidade",
    description: "Networking com creators no grupo exclusivo.",
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
            <span className="text-gradient">10 ferramentas</span> em um lugar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para escalar seus canais Dark
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              viewport={{ once: true }}
              className={`glass-card rounded-2xl p-5 border hover-lift hover-glow transition-all group cursor-pointer ${(tool as any).highlight ? 'border-primary/30 bg-primary/5' : 'border-border'}`}
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