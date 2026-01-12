import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Clock, Zap, Gift, Shield, CheckCircle2, Lock, Volume2 } from "lucide-react";
import { getCheckoutURL } from "@/lib/affiliate-tracking";

const plans = [
  {
    name: "STARTER",
    subtitle: "Para quem está começando",
    price: "99,80",
    period: "/mês",
    discount: "Plano mensal",
    features: [
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
      audiosPerDay: 10,
      simultaneous: true,
      maxChars: "120 mil",
    },
    cta: "Começar com Starter",
    paymentUrl: "https://pay.kirvano.com/f9e086f7-6385-432d-8735-c6e4df12b8eb",
    popular: false,
  },
  {
    name: "CREATOR",
    subtitle: "Ideal para crescimento",
    price: "299,40",
    period: "/semestre",
    discount: "Equivale a 3 meses",
    features: [
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
      audiosPerDay: 20,
      simultaneous: true,
      maxChars: "120 mil",
    },
    cta: "Escolher Creator",
    paymentUrl: "https://pay.kirvano.com/b88f6afb-3fb9-45cd-a47d-6318edff1ec7",
    popular: true,
  },
  {
    name: "MASTER",
    subtitle: "Melhor custo-benefício",
    price: "499,00",
    period: "/ano",
    discount: "Equivale a 5 meses",
    features: [
      { text: "Canais ilimitados", highlight: false },
      { text: "Biblioteca de prompts", highlight: false },
      { text: "Gestão de roteiros", highlight: false },
      { text: "Gerador de SRT", highlight: false },
      { text: "Buscador de Virais IMEDIATO", highlight: true, icon: Zap },
      { text: "Nichos Virais IMEDIATO", highlight: true, icon: Zap },
      { text: "Insights de Canal IMEDIATO", highlight: true, icon: Zap },
      { text: "Suporte prioritário", highlight: true },
      { text: "Acesso antecipado", highlight: true, icon: Gift },
    ],
    audioFeatures: {
      audiosPerDay: 30,
      simultaneous: true,
      maxChars: "120 mil",
    },
    cta: "Garantir Master",
    paymentUrl: "https://pay.kirvano.com/3f0f75c5-97fa-40f7-8832-d73fac2384ac",
    popular: false,
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
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              viewport={{ once: true }}
              className={`glass-card rounded-2xl p-6 md:p-8 border-2 transition-all hover-lift flex flex-col relative ${
                plan.popular ? "border-primary md:scale-105" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold text-xs rounded-full">
                  MAIS POPULAR
                </div>
              )}

              <div className="mb-6 pt-2">
                <h3 className="text-xl font-black">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-xs text-muted-foreground">R$</span>
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{plan.discount}</p>
              </div>

              <ul className="space-y-3 mb-4 flex-grow">
                {plan.features.map((feature, fIndex) => {
                  const Icon = feature.icon;
                  return (
                    <li key={fIndex} className="flex items-start gap-3">
                      {Icon ? (
                        <Icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${feature.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                      ) : (
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-success" />
                      )}
                      <span className={`text-sm ${feature.highlight ? 'font-bold' : 'text-muted-foreground'}`}>
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
                className={`w-full font-bold ${plan.popular ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90" : ""}`}
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
          ))}
        </div>
      </div>
    </section>
  );
};