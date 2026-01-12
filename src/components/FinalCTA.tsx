import { motion } from "framer-motion";
import { Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 md:p-12 text-center border border-primary/20"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4">
            Garantia de <span className="text-gradient">7 Dias</span>
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Teste por 7 dias completos. Se não sentir que está economizando tempo, devolvemos 100% do seu dinheiro.
          </p>

          <p className="text-primary font-bold">Sem perguntas. Sem burocracia.</p>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 md:p-12 text-center border border-primary/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4">
              Organize e <span className="text-gradient">multiplique seus resultados</span>
            </h2>

            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Enquanto você está lendo isso, outros creators já estão escalando com o Dark Planner.
            </p>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 px-8 py-6 text-base font-bold rounded-xl glow-effect"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Começar Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Garantia de 7 dias</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};