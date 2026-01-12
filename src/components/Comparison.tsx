import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const withoutItems = [
  "Prompts perdidos em conversas antigas",
  "Roteiros sem conexão com os vídeos",
  "Thumbnails esquecidas na hora do upload",
  "Canais de referência salvos aleatoriamente",
  "Perde 2-3 horas por dia procurando arquivos",
];

const withItems = [
  "Prompts organizados com busca rápida",
  "Roteiros conectados diretamente ao vídeo",
  "Referências sempre à mão para upload",
  "Biblioteca organizada por nicho",
  "Economiza 8+ horas e produz 3-5x mais",
];

export const Comparison = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            A diferença entre <span className="text-gradient">1 vídeo</span> e <span className="text-gradient">5 por dia</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Não é falta de ideias. É falta de organização.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Sem Dark Planner */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 border border-destructive/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-xl font-bold">Sem Dark Planner</h3>
            </div>

            <ul className="space-y-4">
              {withoutItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Com Dark Planner */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 border border-success/20 bg-success/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-success" />
              </div>
              <h3 className="text-xl font-bold">Com Dark Planner</h3>
            </div>

            <ul className="space-y-4">
              {withItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};