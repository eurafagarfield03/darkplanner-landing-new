import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Zap, Shield, Lock, Volume2, Crown, Star, Headphones, Rocket } from "lucide-react";
import { getCheckoutURL } from "@/lib/affiliate-tracking";
import { useTranslation } from "react-i18next";

export const Pricing = () => {
  const { t } = useTranslation();

  // Plan data with translation keys
  const allPlans = [
    {
      name: t("pricing.plans.basic.name"),
      periodLabel: t("pricing.monthly"),
      subtitle: t("pricing.plans.basic.subtitle"),
      price: "49,90",
      period: t("pricing.perMonth"),
      features: [
        { text: t("pricing.features.audioGenerator"), highlight: true, icon: Check },
        { text: t("pricing.features.noLoyalty"), highlight: false },
        { text: t("pricing.features.cancelAnytime"), highlight: false },
      ],
      blockedFeatures: [
        t("pricing.features.viralVideos"),
        t("pricing.features.viralNiches"),
        t("pricing.features.nicheList"),
        t("pricing.features.channelInsights"),
      ],
      audioFeatures: {
        audiosPerDay: 15,
        maxChars: "80 mil",
      },
      cta: t("common.getStarted"),
      paymentUrl: "https://pay.kirvano.com/5cb87d4f-3150-4b00-bd2b-c91369512239",
      popular: false,
      badge: null,
      badgeIcon: null,
      tier: "audio",
    },
    {
      name: t("pricing.plans.lite.name"),
      periodLabel: t("pricing.monthly"),
      subtitle: t("pricing.plans.lite.subtitle"),
      price: "79,90",
      period: t("pricing.perMonth"),
      features: [
        { text: t("pricing.features.audioGenerator"), highlight: true, icon: Check },
        { text: t("pricing.features.noLoyalty"), highlight: false },
        { text: t("pricing.features.cancelAnytime"), highlight: false },
      ],
      blockedFeatures: [
        t("pricing.features.viralVideos"),
        t("pricing.features.viralNiches"),
        t("pricing.features.nicheList"),
        t("pricing.features.channelInsights"),
      ],
      audioFeatures: {
        audiosPerDay: 25,
        maxChars: "120 mil",
      },
      cta: t("common.getStarted"),
      paymentUrl: "https://pay.kirvano.com/ca7b9f83-6b1b-444a-aefa-b34454db213c",
      popular: false,
      badge: null,
      badgeIcon: null,
      tier: "audio",
    },
    {
      name: t("pricing.plans.pro.name"),
      periodLabel: t("pricing.monthly"),
      subtitle: t("pricing.plans.pro.subtitle"),
      price: "109,90",
      period: t("pricing.perMonth"),
      features: [
        { text: t("pricing.features.audioGenerator"), highlight: true, icon: Check },
        { text: t("pricing.features.unlimitedChannels"), highlight: false },
        { text: t("pricing.features.promptLibrary"), highlight: false },
        { text: t("pricing.features.scriptManagement"), highlight: false },
        { text: t("pricing.features.srtGenerator"), highlight: false },
        { text: t("pricing.features.viralVideosImmediate"), highlight: true, icon: Zap },
        { text: t("pricing.features.viralNichesImmediate"), highlight: true, icon: Zap },
        { text: t("pricing.features.nicheListImmediate"), highlight: true, icon: Zap },
        { text: t("pricing.features.channelInsightsImmediate"), highlight: true, icon: Zap },
        { text: t("pricing.features.whatsappCommunity"), highlight: false },
      ],
      blockedFeatures: null,
      audioFeatures: {
        audiosPerDay: 50,
        maxChars: "150 mil",
      },
      cta: t("pricing.plans.pro.cta"),
      paymentUrl: "https://pay.kirvano.com/a5698a44-0780-4af0-8176-4c1ba41ae597",
      popular: true,
      badge: t("pricing.plans.pro.badge"),
      badgeIcon: Star,
      tier: "complete",
    },
    {
      name: t("pricing.plans.plus.name"),
      periodLabel: t("pricing.monthly"),
      subtitle: t("pricing.plans.plus.subtitle"),
      price: "149,90",
      period: t("pricing.perMonth"),
      features: [
        { text: t("pricing.features.audioGenerator"), highlight: true, icon: Check },
        { text: t("pricing.features.unlimitedChannels"), highlight: false },
        { text: t("pricing.features.promptLibrary"), highlight: false },
        { text: t("pricing.features.scriptManagement"), highlight: false },
        { text: t("pricing.features.srtGenerator"), highlight: false },
        { text: t("pricing.features.viralVideosImmediate"), highlight: true, icon: Zap },
        { text: t("pricing.features.viralNichesImmediate"), highlight: true, icon: Zap },
        { text: t("pricing.features.nicheListImmediate"), highlight: true, icon: Zap },
        { text: t("pricing.features.channelInsightsImmediate"), highlight: true, icon: Zap },
        { text: t("pricing.features.prioritySupport"), highlight: true, icon: Crown },
        { text: t("pricing.features.whatsappCommunity"), highlight: false },
      ],
      blockedFeatures: null,
      audioFeatures: {
        audiosPerDay: 60,
        maxChars: "200 mil",
      },
      cta: t("pricing.plans.plus.cta"),
      paymentUrl: "https://pay.kirvano.com/5a583fa7-f20d-4e42-808a-1fa736c78be5",
      popular: false,
      badge: t("pricing.plans.plus.badge"),
      badgeIcon: Rocket,
      tier: "complete",
    },
  ];

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
            {t("pricing.title")} <span className="text-gradient">{t("pricing.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("pricing.subtitle")}
          </p>
        </motion.div>

        {/* Todos os planos lado a lado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 items-center">
          {allPlans.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} index={index} t={t} />
          ))}
        </div>

        {/* Plano Personalizado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 glass-card rounded-2xl border border-border p-6 md:p-8 text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Headphones className="w-6 h-6 text-primary" />
            <h3 className="text-xl md:text-2xl font-black">{t("pricing.customPlan.title")}</h3>
          </div>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            {t("pricing.customPlan.description")}
          </p>
          <Button
            size="lg"
            variant="outline"
            className="font-bold text-base px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a 
              href="https://wa.me/5577988744698?text=Ol%C3%A1%21%20Quero%20comprar%20um%20plano%20personalizado." 
              target="_blank" 
              rel="noopener noreferrer"
            >
              💬 {t("common.talkOnWhatsApp")}
            </a>
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

interface PlanCardProps {
  plan: {
    name: string;
    periodLabel: string;
    subtitle: string;
    price: string;
    period: string;
    features: { text: string; highlight: boolean; icon?: React.ComponentType<{ className?: string }> }[];
    blockedFeatures: string[] | null;
    audioFeatures: { audiosPerDay: number; maxChars: string };
    cta: string;
    paymentUrl: string;
    popular: boolean;
    badge: string | null;
    badgeIcon: React.ComponentType<{ className?: string }> | null;
    tier: string;
  };
  index: number;
  t: (key: string) => string;
}

const PlanCard = ({ plan, index, t }: PlanCardProps) => {
  const BadgeIcon = plan.badgeIcon;
  const hasBlockedFeatures = plan.blockedFeatures && plan.blockedFeatures.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
      viewport={{ once: true }}
      className={`glass-card rounded-2xl border-2 transition-all hover-lift flex flex-col relative ${
        plan.popular 
          ? "border-primary scale-100 md:scale-110 shadow-2xl shadow-primary/30 p-6 md:p-8 z-10 bg-gradient-to-b from-primary/5 to-transparent" 
          : "border-border p-4 md:p-5"
      }`}
    >
      {plan.badge && (
        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 font-bold text-xs rounded-full flex items-center gap-1.5 whitespace-nowrap ${
          plan.popular 
            ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg"
            : "bg-muted text-foreground"
        }`}>
          {BadgeIcon && <BadgeIcon className="w-3 h-3" />}
          {plan.badge}
        </div>
      )}

      <div className={`mb-3 ${plan.popular ? 'pt-4' : 'pt-2'}`}>
        <h3 className={`font-black ${plan.popular ? 'text-xl md:text-2xl' : 'text-lg'}`}>
          {plan.name}
        </h3>
        <p className="text-xs text-muted-foreground">{plan.subtitle}</p>
      </div>

      <div className="mb-4">
        <div className="flex items-baseline gap-1">
          <span className="text-xs text-muted-foreground">R$</span>
          <span className={`font-black ${plan.popular ? 'text-4xl md:text-5xl text-primary' : 'text-2xl md:text-3xl'}`}>{plan.price}</span>
          <span className="text-xs text-muted-foreground">{plan.period}</span>
        </div>
      </div>

      {/* Audio Features Section */}
      <div className={`glass-card rounded-xl p-3 mb-3 border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 ${plan.popular ? 'p-4' : ''}`}>
        <div className="flex items-center gap-2 mb-2">
          <Volume2 className={`text-primary ${plan.popular ? 'w-5 h-5' : 'w-4 h-4'}`} />
          <span className={`font-bold text-primary ${plan.popular ? 'text-sm' : 'text-xs'}`}>{t("pricing.features.audioGenerator")}</span>
        </div>
        <ul className={`space-y-1.5 ${plan.popular ? 'text-sm' : 'text-xs'}`}>
          <li className="flex items-center gap-2 text-muted-foreground">
            <Check className="w-3 h-3 text-success flex-shrink-0" />
            <span><strong className="text-foreground">{plan.audioFeatures.audiosPerDay} {t("pricing.audiosPerDay")}</strong>{t("pricing.perDay")}</span>
          </li>
          <li className="flex items-center gap-2 text-muted-foreground">
            <Check className="w-3 h-3 text-success flex-shrink-0" />
            <span>{t("pricing.upTo")} <strong className="text-foreground">{plan.audioFeatures.maxChars}</strong> {t("pricing.charsPerAudio")}</span>
          </li>
        </ul>
      </div>

      <ul className={`space-y-1.5 mb-4 flex-grow ${plan.popular ? 'text-sm' : 'text-xs'}`}>
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
        {hasBlockedFeatures && plan.blockedFeatures?.map((feature, fIndex) => (
          <li key={`blocked-${fIndex}`} className="flex items-start gap-2 opacity-50">
            <span className="w-3 h-3 mt-0.5 flex-shrink-0 text-destructive">✕</span>
            <span className="text-muted-foreground line-through">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        size={plan.popular ? "lg" : "sm"}
        className={`w-full font-bold ${plan.popular ? 'text-base py-6' : 'text-sm py-5'} ${
          plan.popular 
            ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg" 
            : ""
        }`}
        asChild
      >
        <a href={getCheckoutURL(plan.paymentUrl)} target="_blank" rel="noopener noreferrer">
          {plan.cta}
        </a>
      </Button>

      <div className={`flex items-center justify-center gap-3 mt-3 text-muted-foreground ${plan.popular ? 'text-sm' : 'text-xs'}`}>
        <div className="flex items-center gap-1">
          <Shield className="w-3 h-3" />
          <span>{t("common.guarantee")}</span>
        </div>
        <div className="flex items-center gap-1">
          <Lock className="w-3 h-3" />
          <span>{t("common.secure")}</span>
        </div>
      </div>
    </motion.div>
  );
};
