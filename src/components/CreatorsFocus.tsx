import { motion } from "framer-motion";
import { MessageCircle, Rocket, Zap, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

export const CreatorsFocus = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: MessageCircle,
      titleKey: "creatorsFocus.benefits.group.title",
      descriptionKey: "creatorsFocus.benefits.group.description"
    },
    {
      icon: Rocket,
      titleKey: "creatorsFocus.benefits.updates.title",
      descriptionKey: "creatorsFocus.benefits.updates.description"
    },
    {
      icon: Zap,
      titleKey: "creatorsFocus.benefits.support.title",
      descriptionKey: "creatorsFocus.benefits.support.description"
    }
  ];

  const stats = [
    { number: "500+", labelKey: "creatorsFocus.stats.creators" },
    { number: "15+", labelKey: "creatorsFocus.stats.channels" },
    { number: "50M+", labelKey: "creatorsFocus.stats.views" }
  ];

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t("creatorsFocus.badge")}</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            {t("creatorsFocus.title")} <span className="text-gradient">{t("creatorsFocus.titleHighlight")}</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("creatorsFocus.subtitle")}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-16"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-4 md:p-6 glass-card rounded-2xl border border-border hover-glow transition-all"
            >
              <div className="text-2xl md:text-4xl font-black text-gradient mb-1">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                {t(stat.labelKey)}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border hover-lift hover-glow transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {t(benefit.titleKey)}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {t(benefit.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
