import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Clock, Zap, Gift, Shield, Lock, Volume2, Flame, Crown, Star, Headphones, Rocket } from "lucide-react";
import { getCheckoutURL } from "@/lib/affiliate-tracking";

// Planos Apenas Áudio
const audioOnlyPlans = [
  {
    name: "BASIC",
    periodLabel: "mensal",
    subtitle: "Para quem só precisa de TTS",
    price: "49,90",
    period: "/mês",
    monthlyEquivalent: null,
    savingsTag: null,
    savingsDetail: null,
    features: [
      { text: "Gerador de Áudio IA", highlight: true, icon: Check },
      { text: "Sem fidelidade", highlight: false },
      { text: "Cancele quando quiser", highlight: false },
    ],
    blockedFeatures: [
      "Vídeos Virais",
      "Nichos Virais",
      "Lista de Nichos",
      "Insights de Canal",
    ],
    audioFeatures: {
      audiosPerDay: 15,
      maxChars: "80 mil",
    },
    cta: "Começar Agora",
    paymentUrl: "https://pay.kirvano.com/5cb87d4f-3150-4b00-bd2b-c91369512239",
    popular: false,
    badge: null,
    badgeIcon: null,
  },
  {
    name: "LITE",
    periodLabel: "mensal",
    subtitle: "Mais áudios para produtores de conteúdo",
    price: "79,90",
    period: "/mês",
    monthlyEquivalent: null,
    savingsTag: null,
    savingsDetail: null,
    features: [
      { text: "Gerador de Áudio IA", highlight: true, icon: Check },
      { text: "Sem fidelidade", highlight: false },
      { text: "Cancele quando quiser", highlight: false },
    ],
    blockedFeatures: [
      "Vídeos Virais",
      "Nichos Virais",
      "Lista de Nichos",
      "Insights de Canal",
    ],
    audioFeatures: {
      audiosPerDay: 25,
      maxChars: "120 mil",
    },
    cta: "Começar Agora",
    paymentUrl: "https://pay.kirvano.com/ca7b9f83-6b1b-444a-aefa-b34454db213c",
    popular: false,
    badge: "MAIS ÁUDIOS",
    badgeIcon: Headphones,
  },
];

// Planos Sistema Completo Mensal
const monthlyPlans = [
  {
    name: "PRO",
    periodLabel: "mensal",
    subtitle: "Sistema completo liberado imediatamente",
    price: "109,90",
    period: "/mês",
    monthlyEquivalent: null,
    savingsTag: null,
    savingsDetail: null,
    features: [
      { text: "Gerador de Áudio IA", highlight: true, icon: Check },
      { text: "Canais ilimitados", highlight: false },
      { text: "Biblioteca de prompts", highlight: false },
      { text: "Gestão de roteiros", highlight: false },
      { text: "Gerador de SRT", highlight: false },
      { text: "Vídeos Virais IMEDIATO", highlight: true, icon: Zap },
      { text: "Nichos Virais IMEDIATO", highlight: true, icon: Zap },
      { text: "Lista de Nichos IMEDIATO", highlight: true, icon: Zap },
      { text: "Insights de Canal IMEDIATO", highlight: true, icon: Zap },
      { text: "Comunidade WhatsApp", highlight: false },
    ],
    audioFeatures: {
      audiosPerDay: 50,
      maxChars: "150 mil",
    },
    cta: "Garantir PRO",
    paymentUrl: "https://pay.kirvano.com/a5698a44-0780-4af0-8176-4c1ba41ae597",
    popular: true,
    badge: "RECOMENDADO",
    badgeIcon: Star,
  },
  {
    name: "PLUS",
    periodLabel: "mensal",
    subtitle: "Máximo poder mensal para profissionais",
    price: "149,90",
    period: "/mês",
    monthlyEquivalent: null,
    savingsTag: null,
    savingsDetail: null,
    features: [
      { text: "Gerador de Áudio IA", highlight: true, icon: Check },
      { text: "Canais ilimitados", highlight: false },
      { text: "Biblioteca de prompts", highlight: false },
      { text: "Gestão de roteiros", highlight: false },
      { text: "Gerador de SRT", highlight: false },
      { text: "Vídeos Virais IMEDIATO", highlight: true, icon: Zap },
      { text: "Nichos Virais IMEDIATO", highlight: true, icon: Zap },
      { text: "Lista de Nichos IMEDIATO", highlight: true, icon: Zap },
      { text: "Insights de Canal IMEDIATO", highlight: true, icon: Zap },
      { text: "Suporte prioritário", highlight: true },
      { text: "Comunidade WhatsApp", highlight: false },
    ],
    audioFeatures: {
      audiosPerDay: 60,
      maxChars: "200 mil",
    },
    cta: "Garantir PLUS",
    paymentUrl: "https://pay.kirvano.com/5a583fa7-f20d-4e42-808a-1fa736c78be5",
    popular: false,
    badge: "MAIS PODER",
    badgeIcon: Rocket,
  },
];


interface PlanCardProps {
  plan: typeof audioOnlyPlans[0] | typeof monthlyPlans[0];
  index: number;
  compact?: boolean;
}

const PlanCard = ({ plan, index, compact = false }: PlanCardProps) => {
  const BadgeIcon = plan.badgeIcon;
const hasBlockedFeatures = 'blockedFeatures' in plan && plan.blockedFeatures;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
      viewport={{ once: true }}
      className={`glass-card rounded-2xl p-5 md:p-6 border-2 transition-all hover-lift flex flex-col relative ${
        plan.popular 
          ? "border-primary md:scale-105 shadow-lg shadow-primary/20" 
          : plan.badge === "MELHOR CUSTO-BENEFÍCIO"
          ? "border-amber-500/50"
          : "border-border"
      } ${compact ? 'h-full' : ''}`}
    >
      {plan.badge && (
        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 font-bold text-xs rounded-full flex items-center gap-1.5 whitespace-nowrap ${
          plan.popular 
            ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground"
            : plan.badge === "MELHOR CUSTO-BENEFÍCIO"
            ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white"
            : "bg-muted text-foreground"
        }`}>
          {BadgeIcon && <BadgeIcon className="w-3 h-3" />}
          {plan.badge}
        </div>
      )}

      <div className="mb-3 pt-2">
        <h3 className="text-lg font-black">
          {plan.name} <span className="text-xs font-normal text-muted-foreground">({plan.periodLabel})</span>
        </h3>
        <p className="text-xs text-muted-foreground">{plan.subtitle}</p>
      </div>

      {/* Savings Tag */}
      {plan.savingsTag && (
        <div className="mb-3">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-success/20 text-success text-xs font-bold">
            <Flame className="w-3 h-3" />
            {plan.savingsTag}
          </span>
          <p className="text-xs text-muted-foreground mt-1">
            {plan.savingsDetail}
          </p>
        </div>
      )}

      <div className="mb-3">
        <div className="flex items-baseline gap-1">
          <span className="text-xs text-muted-foreground">R$</span>
          <span className="text-3xl font-black">{plan.price}</span>
          <span className="text-xs text-muted-foreground">{plan.period}</span>
        </div>
        
        {plan.monthlyEquivalent && (
          <div className="mt-2 p-2 rounded-lg bg-primary/10 border border-primary/20">
            <p className="text-xs font-bold text-primary">
              ➡️ Apenas R$ {plan.monthlyEquivalent} por mês
            </p>
          </div>
        )}
      </div>

      {/* Audio Features Section */}
      <div className="glass-card rounded-xl p-3 mb-3 border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="flex items-center gap-2 mb-2">
          <Volume2 className="w-4 h-4 text-primary" />
          <span className="text-xs font-bold text-primary">Gerador de Áudio IA</span>
        </div>
        <ul className="space-y-1 text-xs">
          <li className="flex items-center gap-2 text-muted-foreground">
            <Check className="w-3 h-3 text-success flex-shrink-0" />
            <span><strong className="text-foreground">{plan.audioFeatures.audiosPerDay} áudios</strong>/dia</span>
          </li>
          <li className="flex items-center gap-2 text-muted-foreground">
            <Check className="w-3 h-3 text-success flex-shrink-0" />
            <span>Até {plan.audioFeatures.maxChars} caracteres</span>
          </li>
        </ul>
      </div>

      <ul className="space-y-1.5 mb-3 flex-grow text-xs">
        {plan.features.map((feature, fIndex) => {
          const Icon = feature.icon;
          return (
            <li key={fIndex} className="flex items-start gap-2">
              {Icon ? (
                <Icon className={`w-3 h-3 mt-0.5 flex-shrink-0 ${feature.highlight ? 'text-primary' : 'text-success'}`} />
              ) : (
                <Check className="w-3 h-3 mt-0.5 flex-shrink-0 text-success" />
              )}
              <span className={`${feature.highlight ? 'font-bold text-foreground' : 'text-muted-foreground'}`}>
                {feature.text}
              </span>
            </li>
          );
        })}


        {/* Blocked Features */}
        {hasBlockedFeatures && (plan as typeof audioOnlyPlans[0]).blockedFeatures?.map((feature, fIndex) => (
          <li key={`blocked-${fIndex}`} className="flex items-start gap-2 opacity-50">
            <span className="w-3 h-3 mt-0.5 flex-shrink-0 text-destructive">✕</span>
            <span className="text-muted-foreground line-through">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        size="sm"
        className={`w-full font-bold text-sm py-5 ${
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

      <div className="flex items-center justify-center gap-3 mt-3 text-xs text-muted-foreground">
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
};

export const Pricing = () => {
  return (
    <section className="py-16 md:py-24 px-4" id="pricing">
      <div className="max-w-7xl mx-auto">
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
            Do básico ao profissional, temos o plano ideal para você
          </p>
        </motion.div>

        {/* Planos Apenas Áudio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <Headphones className="w-5 h-5 text-muted-foreground" />
            <h3 className="text-lg font-bold text-muted-foreground">Apenas Áudio</h3>
            <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">Ideal para TTS</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl">
            {audioOnlyPlans.map((plan, index) => (
              <PlanCard key={plan.name} plan={plan} index={index} compact />
            ))}
          </div>
        </motion.div>

        {/* Planos Sistema Completo Mensal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <Rocket className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold">Sistema Completo Mensal</h3>
            <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">Todas as ferramentas</span>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {monthlyPlans.map((plan, index) => (
              <PlanCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
