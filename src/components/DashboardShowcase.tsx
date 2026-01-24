import { motion } from "framer-motion";
import dashboardImage from "@/assets/dashboard-home-new.png";
import { useTranslation } from "react-i18next";

export const DashboardShowcase = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-8 md:py-16 px-4 -mt-20 md:-mt-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow Effect Behind */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-primary/5 to-transparent rounded-3xl blur-3xl scale-95" />
          
          {/* Main Dashboard Container */}
          <div className="relative glass-card-elevated rounded-2xl md:rounded-3xl p-2 md:p-3 border border-primary/10 animate-pulse-glow shine-effect">
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-success/60" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1.5 rounded-full bg-muted/50 text-xs text-muted-foreground font-medium">
                  app.darkplanner.com.br
                </div>
              </div>
            </div>
            
            {/* Dashboard Image */}
            <div className="relative overflow-hidden rounded-b-xl md:rounded-b-2xl">
              <img
                src={dashboardImage}
                alt={t("dashboard.imageAlt")}
                className="w-full h-auto"
                draggable={false}
              />
              
              {/* Bottom Gradient Fade */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            </div>
          </div>
          
          {/* Floating Feature Pills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute -left-4 md:-left-8 top-1/4 hidden lg:block"
          >
            <div className="glass-card px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
              {t("dashboard.pills.management")}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute -right-4 md:-right-8 top-1/3 hidden lg:block"
          >
            <div className="glass-card px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
              {t("dashboard.pills.viralNiches")}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="absolute -left-4 md:-left-8 bottom-1/3 hidden lg:block"
          >
            <div className="glass-card px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
              {t("dashboard.pills.prompts")}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
