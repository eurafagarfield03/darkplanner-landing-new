import { Button } from "@/components/ui/button";
import { Check, Clock, Zap, Gift, Shield, CheckCircle2, Lock, MessageCircle } from "lucide-react";

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
    cta: "Garantir Master Agora",
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 px-4 md:px-6 overflow-x-hidden" id="pricing">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16 px-2">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4">
            Escolha o plano ideal para <span className="text-gradient">seu crescimento</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-4">
            Todos os planos incluem acesso às ferramentas principais. Escolha a frequência que faz mais sentido para você.
          </p>
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-destructive/10 border border-destructive/30">
            <Clock className="w-4 h-4 text-destructive" />
            <span className="text-destructive font-bold text-xs md:text-sm">
              Oferta de Lançamento: 37% OFF no plano mensal • Termina em breve
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-8 mb-12 max-w-full">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card rounded-3xl p-4 md:p-6 lg:p-8 border-2 transition-all duration-300 hover:-translate-y-2 relative max-w-full ${
                plan.popular ? "border-primary shadow-2xl md:scale-105" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 px-3 md:px-6 py-1 md:py-2 bg-gradient-to-r from-primary to-secondary text-white font-black text-xs md:text-sm rounded-full whitespace-nowrap">
                  MAIS POPULAR
                </div>
              )}

              <div className="mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl lg:text-2xl font-black mb-1">{plan.name}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">{plan.subtitle}</p>
              </div>

              <div className="mb-4 md:mb-6">
                <div className="flex flex-wrap items-baseline gap-1 mb-2">
                  <span className="text-xs text-muted-foreground">R$</span>
                  <span className="text-3xl md:text-4xl lg:text-5xl font-black">{plan.price}</span>
                  <span className="text-xs md:text-sm text-muted-foreground whitespace-nowrap">{plan.period}</span>
                </div>
                {plan.originalPrice && (
                  <p className="text-xs md:text-sm text-muted-foreground line-through mb-1">
                    R$ {plan.originalPrice} {plan.discount}
                  </p>
                )}
                <p className="text-xs md:text-sm text-muted-foreground">{plan.discount}</p>
              </div>

              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {plan.features.map((feature, fIndex) => {
                  const Icon = feature.icon;
                  return (
                    <li key={fIndex} className="flex items-start gap-2 md:gap-3">
                      {Icon ? (
                        <Icon className={`w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0 ${feature.highlight ? 'text-primary' : 'text-success'}`} />
                      ) : (
                        <Check className={`w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0 ${feature.highlight ? 'text-primary' : 'text-success'}`} />
                      )}
                      <span className={`text-xs md:text-sm ${feature.highlight ? 'font-bold text-foreground' : 'text-muted-foreground'}`}>
                        {feature.text}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <Button
                size="lg"
                className={`w-full font-black text-sm md:text-base lg:text-lg py-5 md:py-6 ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                    : ""
                }`}
              >
                {plan.name === "MASTER" && <Zap className="w-4 h-4 md:w-5 md:h-5 mr-2" />}
                {plan.cta}
              </Button>

              <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2 mt-3 md:mt-4 text-[10px] md:text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  <span>Acesso imediato</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Shield className="w-3 h-3 text-primary" />
                  <span>Garantia de 7 dias</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  <span>Cancele quando quiser</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center glass-card rounded-2xl p-4 md:p-6 max-w-3xl mx-auto border-2 border-primary/30">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-xs md:text-sm font-bold">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              <span>Garantia incondicional de 7 dias em todos os planos</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mt-3 md:mt-4 text-[10px] md:text-xs text-muted-foreground">
            <div className="flex items-center gap-1 md:gap-2">
              <Lock className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              <span>Pagamento 100% seguro</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1 md:gap-2">
              <Zap className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              <span>Acesso imediato após pagamento</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1 md:gap-2">
              <MessageCircle className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              <span>Suporte em português</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
