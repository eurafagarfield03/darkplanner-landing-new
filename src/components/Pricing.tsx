import { Button } from "@/components/ui/button";
import { Check, Clock, Zap, Gift } from "lucide-react";

const plans = [
  {
    name: "STARTER",
    subtitle: "Para quem está começando",
    price: "24,99",
    originalPrice: "39,99",
    discount: "Economize R$ 15/mês",
    period: "/mês",
    features: [
      { text: "Canais ilimitados - gerencie quantos quiser", highlight: false },
      { text: "Biblioteca de prompts organizada com busca", highlight: false },
      { text: "Gestão de roteiros conectados aos vídeos", highlight: false },
      { text: "Referências de thumbnails", highlight: false },
      { text: "Gerador de SRT para CapCut", highlight: false },
      { text: "Buscador de Virais liberado após 7 dias", highlight: false, icon: Clock },
      { text: "Comunidade Dark Planner no WhatsApp", highlight: false },
      { text: "Atualizações mensais com novas ferramentas", highlight: false },
      { text: "Suporte em português", highlight: false },
    ],
    cta: "Começar com Starter",
    popular: false,
  },
  {
    name: "CREATOR",
    subtitle: "Ideal para crescimento",
    price: "125,94",
    originalPrice: null,
    discount: "Equivale a R$ 20,99/mês • Economize 16% vs mensal",
    period: "/semestre",
    features: [
      { text: "Canais ilimitados - gerencie quantos quiser", highlight: false },
      { text: "Biblioteca de prompts organizada com busca", highlight: false },
      { text: "Gestão de roteiros conectados aos vídeos", highlight: false },
      { text: "Referências de thumbnails", highlight: false },
      { text: "Gerador de SRT para CapCut", highlight: false },
      { text: "Buscador de Virais IMEDIATO - acesso instantâneo", highlight: true, icon: Zap },
      { text: "Comunidade Dark Planner no WhatsApp", highlight: false },
      { text: "Atualizações mensais com novas ferramentas", highlight: false },
      { text: "Suporte em português", highlight: false },
    ],
    cta: "Escolher Creator",
    popular: true,
  },
  {
    name: "MASTER",
    subtitle: "Melhor custo-benefício",
    price: "215,88",
    originalPrice: null,
    discount: "Equivale a R$ 17,99/mês • Economize R$ 84/ano (28%)",
    period: "/ano",
    features: [
      { text: "Canais ilimitados - gerencie quantos quiser", highlight: false },
      { text: "Biblioteca de prompts organizada com busca", highlight: false },
      { text: "Gestão de roteiros conectados aos vídeos", highlight: false },
      { text: "Referências de thumbnails", highlight: false },
      { text: "Gerador de SRT para CapCut", highlight: false },
      { text: "Buscador de Virais IMEDIATO - acesso instantâneo", highlight: true, icon: Zap },
      { text: "Comunidade Dark Planner no WhatsApp", highlight: false },
      { text: "Suporte prioritário - respostas em até 2h", highlight: true },
      { text: "Acesso antecipado a novas ferramentas", highlight: true, icon: Gift },
      { text: "Atualizações mensais garantidas", highlight: false },
    ],
    cta: "🚀 Garantir Master Agora",
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 px-6" id="pricing">
      <div className="container max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Escolha o plano ideal para <span className="text-gradient">seu crescimento</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-2">
            Todos os planos incluem acesso às ferramentas principais. Escolha a frequência que faz mais sentido para você.
          </p>
          <p className="text-destructive font-bold text-lg">
            ⏰ Oferta de Lançamento: 37% OFF no plano mensal • Termina em breve
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card rounded-3xl p-8 border-2 transition-all duration-300 hover:-translate-y-2 relative ${
                plan.popular ? "border-primary shadow-2xl scale-105" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white font-black text-sm rounded-full">
                  MAIS POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-black mb-1">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.subtitle}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                {plan.originalPrice && (
                  <p className="text-sm text-muted-foreground line-through mb-1">
                    R$ {plan.originalPrice} {plan.discount}
                  </p>
                )}
                <p className="text-sm text-muted-foreground">{plan.discount}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => {
                  const Icon = feature.icon;
                  return (
                    <li key={fIndex} className="flex items-start gap-3">
                      {Icon ? (
                        <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${feature.highlight ? 'text-primary' : 'text-success'}`} />
                      ) : (
                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${feature.highlight ? 'text-primary' : 'text-success'}`} />
                      )}
                      <span className={`text-sm ${feature.highlight ? 'font-bold text-foreground' : 'text-muted-foreground'}`}>
                        {feature.text}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <Button
                size="lg"
                className={`w-full font-black text-lg ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                    : ""
                }`}
              >
                {plan.cta}
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                ✓ Acesso imediato • ✓ Garantia de 7 dias • ✓ Cancele quando quiser
              </p>
            </div>
          ))}
        </div>

        <div className="text-center glass-card rounded-2xl p-6 max-w-2xl mx-auto">
          <p className="font-bold text-lg mb-2">✅ Garantia incondicional de 7 dias em todos os planos</p>
          <p className="text-sm text-muted-foreground">
            🔒 Pagamento 100% seguro • ⚡ Acesso imediato após pagamento • 💬 Suporte em português
          </p>
        </div>
      </div>
    </section>
  );
};
