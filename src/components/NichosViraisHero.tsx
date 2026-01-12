import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import nichosImage from "@/assets/nichos-virais-new.png";

export const NichosViraisHero = () => {
  return (
    <section className="py-16 md:py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <span className="text-sm font-semibold">🔥 Nichos Virais</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
              Descubra os <span className="text-gradient">Nichos Mais Promissores</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sistema inteligente que categoriza canais por potencial de crescimento. Encontre oportunidades antes da concorrência.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span><strong className="text-foreground">Explodindo:</strong> Canais com menos de 15 dias e +100K views</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span><strong className="text-foreground">Em Alta:</strong> 15-60 dias postando com +500K views</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span><strong className="text-foreground">Crescendo:</strong> Canais em ascensão consistente</span>
              </li>
            </ul>

            <Button
              size="lg"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground px-8 py-6 text-base font-bold rounded-xl glow-effect"
            >
              Explorar Nichos
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card-elevated rounded-2xl overflow-hidden border border-primary/10 animate-pulse-glow">
              <img
                src={nichosImage}
                alt="Interface de Nichos Virais do Dark Planner mostrando canais categorizados por crescimento"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};