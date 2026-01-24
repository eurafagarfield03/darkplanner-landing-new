import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export const CTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6">
      <div className="container max-w-5xl">
        <div className="glass-card rounded-3xl p-12 md:p-16 text-center relative overflow-hidden border-2 border-primary/30">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
          
          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/50">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-bold text-primary">{t("cta.badge")}</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black">
              {t("cta.title")} <span className="text-gradient">{t("cta.titleHighlight")}</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("cta.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 md:px-16 py-6 md:py-8 text-base md:text-lg lg:text-xl font-black rounded-full glow-effect"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t("common.getStarted")}
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2" />
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>{t("common.tryFree")}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>{t("common.cancelAnytime")}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>{t("common.totalGuarantee")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
