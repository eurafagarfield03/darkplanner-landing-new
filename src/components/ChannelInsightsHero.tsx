import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import insightsImage from "@/assets/insights-canal.png";
import { useTranslation } from "react-i18next";

export const ChannelInsightsHero = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative order-2 md:order-1"
          >
            <div className="glass-card-elevated rounded-2xl overflow-hidden border border-primary/10 animate-pulse-glow">
              <img
                src={insightsImage}
                alt={t("channelInsights.title")}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 md:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <span className="text-sm font-semibold">{t("channelInsights.badge")}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
              <span className="text-gradient">{t("channelInsights.title")}</span> {t("channelInsights.titleHighlight")}
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("channelInsights.subtitle")}
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
                {t("channelInsights.features.metrics")}
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
                {t("channelInsights.features.titles")}
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
                {t("channelInsights.features.patterns")}
              </li>
            </ul>

            <Button
              size="lg"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground px-8 py-6 text-base font-bold rounded-xl glow-effect"
            >
              {t("channelInsights.cta")}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
