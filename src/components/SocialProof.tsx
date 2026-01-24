import { motion } from "framer-motion";
import { Star, Quote, Users, Video, TrendingUp, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

export const SocialProof = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      nameKey: "socialProof.testimonials.carlos.name",
      roleKey: "socialProof.testimonials.carlos.role",
      contentKey: "socialProof.testimonials.carlos.content",
      avatar: "C"
    },
    {
      nameKey: "socialProof.testimonials.ana.name",
      roleKey: "socialProof.testimonials.ana.role",
      contentKey: "socialProof.testimonials.ana.content",
      avatar: "A"
    },
    {
      nameKey: "socialProof.testimonials.marcos.name",
      roleKey: "socialProof.testimonials.marcos.role",
      contentKey: "socialProof.testimonials.marcos.content",
      avatar: "M"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", labelKey: "socialProof.stats.creators" },
    { icon: Video, value: "10K+", labelKey: "socialProof.stats.videos" },
    { icon: TrendingUp, value: "3x", labelKey: "socialProof.stats.increase" },
    { icon: Clock, value: "15h", labelKey: "socialProof.stats.hours" }
  ];

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Stats */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              {t("socialProof.statsTitle")} <span className="text-gradient">{t("socialProof.statsTitleHighlight")}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 md:p-8 text-center border border-border hover-glow transition-all"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-2xl md:text-3xl lg:text-4xl font-black text-gradient mb-2">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{t(stat.labelKey)}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              {t("socialProof.testimonialsTitle")} <span className="text-gradient">{t("socialProof.testimonialsTitleHighlight")}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8 border border-border hover-lift hover-glow transition-all"
              >
                <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{t(testimonial.contentKey)}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-lg font-bold text-primary-foreground">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{t(testimonial.nameKey)}</div>
                    <div className="text-xs text-muted-foreground">{t(testimonial.roleKey)}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
