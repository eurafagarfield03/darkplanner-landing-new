import { Shield, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-5xl space-y-16">
        {/* Guarantee */}
        <div className="glass-card rounded-3xl p-12 md:p-16 border-2 border-primary/30 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/50 mb-6">
            <Shield className="w-10 h-10 text-primary" />
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4">
            Garantia Incondicional de <span className="text-gradient">7 Dias</span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
            Teste o Dark Planner por 7 dias completos. Se não sentir que está economizando tempo e produzindo mais, devolvemos 100% do seu dinheiro.
          </p>

          <div className="glass-card rounded-2xl p-6 max-w-2xl mx-auto border-2 border-primary/30">
            <p className="text-base md:text-lg lg:text-xl font-black mb-2">
              Sem perguntas. Sem burocracia.
            </p>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <p className="text-primary font-bold">
                Reembolso total em até 48 horas
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="glass-card rounded-3xl p-12 md:p-16 text-center border-2 border-primary/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
          
          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/50">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-bold text-primary">Transforme sua produção hoje</span>
            </div>

            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black">
              Organize, escale e <span className="text-gradient">multiplique seus resultados</span>
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Enquanto você está lendo isso, outros creators já estão organizando seus canais e escalando produção com o Dark Planner.
            </p>

            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 md:px-12 lg:px-16 py-6 md:py-8 text-base md:text-lg lg:text-xl font-black rounded-full glow-effect"
              >
                Começar Agora com 7 Dias de Garantia
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2" />
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Acesso imediato</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Garantia de 7 dias</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Cancele quando quiser</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};