import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-5xl">
        <div className="glass-card rounded-3xl p-12 md:p-16 text-center relative overflow-hidden border-2 border-primary/30">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
          
          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/50">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-bold text-primary">Oferta Limitada</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black">
              Comece a escalar <span className="text-gradient">hoje mesmo</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Junte-se a milhares de creators que já transformaram seus canais com Dark Planner
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-16 py-8 text-xl font-black rounded-full glow-effect"
              >
                Começar Agora
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground font-medium">
              ✓ 7 dias grátis • ✓ Cancele quando quiser • ✓ Suporte dedicado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
