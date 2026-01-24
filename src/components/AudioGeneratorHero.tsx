import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Volume2, Mic, Sparkles, Zap } from "lucide-react";
import geradorAudioImage from "@/assets/gerador-audio-full.png";
import { useTranslation } from "react-i18next";

export const AudioGeneratorHero = () => {
  const { t } = useTranslation();

  return (
    <section id="audio-generator" className="py-16 md:py-24 px-4 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">{t("audioGenerator.badge")}</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            <span className="text-gradient">{t("audioGenerator.title")}</span> {t("audioGenerator.titleHighlight")}
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("audioGenerator.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image - Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card-elevated rounded-2xl overflow-hidden border border-primary/10 animate-pulse-glow">
              <img
                src={geradorAudioImage}
                alt={t("audioGenerator.title")}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Content - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-5 border border-border hover-glow transition-all">
                <Volume2 className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-1">{t("audioGenerator.features.voices.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("audioGenerator.features.voices.description")}</p>
              </div>
              
              <div className="glass-card rounded-xl p-5 border border-border hover-glow transition-all">
                <Mic className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-1">{t("audioGenerator.features.realistic.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("audioGenerator.features.realistic.description")}</p>
              </div>
              
              <div className="glass-card rounded-xl p-5 border border-border hover-glow transition-all">
                <Zap className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-1">{t("audioGenerator.features.fast.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("audioGenerator.features.fast.description")}</p>
              </div>
              
              <div className="glass-card rounded-xl p-5 border border-border hover-glow transition-all">
                <Sparkles className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-1">{t("audioGenerator.features.easy.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("audioGenerator.features.easy.description")}</p>
              </div>
            </div>

            {/* Features List */}
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>{t("audioGenerator.list.speed")}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>{t("audioGenerator.list.volume")}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>{t("audioGenerator.list.wordsPerLine")}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>{t("audioGenerator.list.casing")}</span>
              </li>
            </ul>
            
            <div className="glass-card rounded-xl p-4 border border-primary/20 bg-primary/5">
              <p className="text-sm font-medium text-primary text-center">
                {t("audioGenerator.highlight")}
              </p>
            </div>

            <Button
              size="lg"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground px-8 py-6 text-base font-bold rounded-xl glow-effect"
            >
              {t("audioGenerator.cta")}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
