import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

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
              Hora de organizar e <span className="text-gradient">multiplicar</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Você já sabe criar conteúdo. Agora aprenda a escalar de verdade.
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

            <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Teste 7 dias grátis</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Cancele quando quiser</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Garantia total</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
