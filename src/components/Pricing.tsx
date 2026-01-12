import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Clock, Zap, Gift, Shield, CheckCircle2, Lock, Volume2, Flame, Crown, Star } from "lucide-react";
import { getCheckoutURL } from "@/lib/affiliate-tracking";

const plans = [
  {
    name: "STARTER",
    periodLabel: "mensal",
    subtitle: "Ideal para testar o sistema",
    price: "119,90",
    period: "/mês",
    monthlyEquivalent: null,
    savingsTag: null,
    savingsDetail: null,
    features: [
      { text: "Sem fidelidade", highlight: false },
      { text: "Cancele quando quiser", highlight: false },
      { text: "Pagamento mês a mês", highlight: false },
      { text: "Canais ilimitados", highlight: false },
      { text: "Biblioteca de prompts", highlight: false },
      { text: "Gestão de roteiros", highlight: false },
      { text: "Gerador de SRT", highlight: false },
      { text: "Buscador de Virais (após 7 dias)", icon: Clock },
      { text: "Nichos Virais (após 7 dias)", icon: Clock },
      { text: "Insights de Canal (após 7 dias)", icon: Clock },
      { text: "Comunidade WhatsApp", highlight: false },
    ],
    audioFeatures: {
      audiosPerDay: 20,
      simultaneous: true,
      maxChars: "80 mil",
    },
    cta: "Começar Agora",
    paymentUrl: "https://pay.kirvano.com/f9e086f7-6385-432d-8735-c6e4df12b8eb",
    popular: false,
    badge: null,
    badgeIcon: null,
  },
  {
    name: "CREATOR",
    periodLabel: "semestral",
    subtitle: "Melhor equilíbrio entre preço e compromisso",
    price: "499,90",
    period: "/6 meses",
    monthlyEquivalent: "83,32",
    savingsTag: "Economize 30%",
    savingsDetail: "De R$ 719,40 por apenas R$ 499,90",
    features: [
      { text: "Pague menos e ganhe previsibilidade", highlight: true },
      { text: "Canais ilimitados", highlight: false },
      { text: "Biblioteca de prompts", highlight: false },
      { text: "Gestão de roteiros", highlight: false },
      { text: "Gerador de SRT", highlight: false },
      { text: "Buscador de Virais IMEDIATO", highlight: true, icon: Zap },
      { text: "Nichos Virais IMEDIATO", highlight: true, icon: Zap },
      { text: "Insights de Canal (após 7 dias)", icon: Clock },
      { text: "Comunidade WhatsApp", highlight: false },
    ],
    audioFeatures: {
      audiosPerDay: 30,
      simultaneous: true,
      maxChars: "100 mil",
    },
    cta: "Garantir Semestral",
    paymentUrl: "https://pay.kirvano.com/b88f6afb-3fb9-45cd-a47d-6318edff1ec7",
    popular: true,
    badge: "MAIS VENDIDO",
    badgeIcon: Star,
  },
  {
    name: "MASTER",
    periodLabel: "anual",
    subtitle: "Máxima economia • Zero preocupação por 1 ano",
    price: "719,40",
    period: "/12 meses",
    monthlyEquivalent: "59,95",
    savingsTag: "Economize 50%",
    savingsDetail: "De R$ 1.438,80 por apenas R$ 719,40",
    features: [
      { text: "O menor preço possível", highlight: true },
      { text: "Canais ilimitados", highlight: false },
      { text: "Biblioteca de prompts", highlight: false },
      { text: "Gestão de roteiros", highlight: false },
      { text: "Gerador de SRT", highlight: false },
      { text: "Buscador de Virais IMEDIATO", highlight: true, icon: Zap },
      { text: "Nichos Virais IMEDIATO", highlight: true, icon: Zap },
      { text: "Insights de Canal IMEDIATO", highlight: true, icon: Zap },
      { text: "Suporte prioritário", highlight: true },
      { text: "Acesso antecipado a novos recursos e ferramentas", highlight: true, icon: Gift },
    ],
    audioFeatures: {
      audiosPerDay: 40,
      simultaneous: true,
      maxChars: "120 mil",
    },
    cta: "Garantir Anual",
    paymentUrl: "https://pay.kirvano.com/3f0f75c5-97fa-40f7-8832-d73fac2384ac",
    popular: false,
    badge: "MELHOR CUSTO-BENEFÍCIO",
    badgeIcon: Crown,
  },
];

export const Pricing = () => {
  return (
    <section className="py-16 md:py-24 px-4" id="pricing">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            Escolha seu <span className="text-gradient">plano</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Todos os planos incluem acesso às ferramentas principais
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, index) => {
            const BadgeIcon = plan.badgeIcon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                className={`glass-card rounded-2xl p-6 md:p-8 border-2 transition-all hover-lift flex flex-col relative ${
                  plan.popular 
                    ? "border-primary md:scale-105 shadow-lg shadow-primary/20" 
                    : plan.badge === "MELHOR CUSTO-BENEFÍCIO"
                    ? "border-amber-500/50"
                    : "border-border"
                }`}
              >
                {plan.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 font-bold text-xs rounded-full flex items-center gap-1.5 whitespace-nowrap ${
                    plan.popular 
                      ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                      : "bg-gradient-to-r from-amber-500 to-orange-500 text-white"
                  }`}>
                    {BadgeIcon && <BadgeIcon className="w-3 h-3" />}
                    {plan.badge}
                  </div>
                )}

                <div className="mb-4 pt-2">
                  <h3 className="text-xl font-black">
                    {plan.name} <span className="text-sm font-normal text-muted-foreground">({plan.periodLabel})</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                </div>

                {/* Savings Tag */}
                {plan.savingsTag && (
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/20 text-success text-sm font-bold">
                      <Flame className="w-4 h-4" />
                      {plan.savingsTag}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1.5">
                      {plan.savingsDetail}
                    </p>
                  </div>
                )}

                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-muted-foreground">R$</span>
                    <span className="text-4xl font-black">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>
                  
                  {plan.monthlyEquivalent && (
                    <div className="mt-2 p-2 rounded-lg bg-primary/10 border border-primary/20">
                      <p className="text-sm font-bold text-primary">
                        ➡️ Apenas R$ {plan.monthlyEquivalent} por mês
                      </p>
                    </div>
                  )}
                </div>

                <ul className="space-y-2.5 mb-4 flex-grow">
                  {plan.features.map((feature, fIndex) => {
                    const Icon = feature.icon;
                    return (
                      <li key={fIndex} className="flex items-start gap-2.5">
                        {Icon ? (
                          <Icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${feature.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                        ) : (
                          <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-success" />
                        )}
                        <span className={`text-sm ${feature.highlight ? 'font-bold text-foreground' : 'text-muted-foreground'}`}>
                          {feature.text}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {/* Audio Features Section */}
                <div className="glass-card rounded-xl p-4 mb-6 border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
                  <div className="flex items-center gap-2 mb-3">
                    <Volume2 className="w-4 h-4 text-primary" />
                    <span className="text-sm font-bold text-primary">Gerador de Áudio IA</span>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <Check className="w-3 h-3 text-success flex-shrink-0" />
                      <span><strong className="text-foreground">{plan.audioFeatures.audiosPerDay} áudios</strong> por dia</span>
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <Check className="w-3 h-3 text-success flex-shrink-0" />
                      <span>Gerações simultâneas</span>
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <Check className="w-3 h-3 text-success flex-shrink-0" />
                      <span>Até {plan.audioFeatures.maxChars} caracteres por áudio</span>
                    </li>
                  </ul>
                </div>

                <Button
                  size="lg"
                  className={`w-full font-bold text-base py-6 ${
                    plan.popular 
                      ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90" 
                      : plan.badge === "MELHOR CUSTO-BENEFÍCIO"
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 hover:opacity-90 text-white"
                      : ""
                  }`}
                  asChild
                >
                  <a href={getCheckoutURL(plan.paymentUrl)} target="_blank" rel="noopener noreferrer">
                    {plan.cta}
                  </a>
                </Button>

                <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    <span>7 dias garantia</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    <span>Seguro</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
