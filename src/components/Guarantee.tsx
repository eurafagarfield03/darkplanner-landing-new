import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Guarantee = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-5xl">
        <div className="glass-card rounded-3xl p-12 md:p-16 border-2 border-primary/30 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
          
          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/50 mb-4">
              <Shield className="w-10 h-10 text-primary" />
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-4">
              🛡️ Garantia Incondicional de <span className="text-gradient">7 Dias</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Teste o Dark Planner por 7 dias completos. Explore todas as ferramentas, organize seus canais, teste o Buscador de Virais. Se você não sentir que está economizando tempo e produzindo mais, devolvemos 100% do seu dinheiro.
            </p>

            <div className="glass-card rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-2xl font-black mb-2">
                Sem perguntas. Sem burocracia. Sem letras miúdas.
              </p>
              <p className="text-success font-bold">
                ✅ Reembolso total em até 48 horas após solicitação
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-3xl font-black mb-6">
                Você está a um clique de <span className="text-gradient">transformar sua produção</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Enquanto você está lendo isso, outros creators já estão organizando seus canais, economizando horas e escalando produção com o Dark Planner.
              </p>
              <p className="text-xl font-bold text-foreground mb-8">
                Não deixe mais um dia passar produzindo apenas 20% do que você poderia.
              </p>

              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-16 py-8 text-xl font-black rounded-full glow-effect"
              >
                Sim, quero escalar meus canais agora
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>

              <p className="text-sm text-muted-foreground font-medium mt-6">
                ✓ Acesso imediato após pagamento • ✓ Garantia de 7 dias • ✓ Cancele quando quiser
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
