import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Zap, TrendingUp, BarChart3, Users, FolderOpen } from "lucide-react";
import nichosImage1 from "@/assets/nichos-virais-new.png";
import nichosImage2 from "@/assets/nichos-virais-alt.png";
import { useTranslation } from "react-i18next";

const images = [nichosImage1, nichosImage2];

export const NichosViraisHero = () => {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);

  const categories = [
    {
      icon: Zap,
      title: t("viralNiches.categories.exploding.title"),
      description: t("viralNiches.categories.exploding.description"),
      color: "text-yellow-500"
    },
    {
      icon: TrendingUp,
      title: t("viralNiches.categories.trending.title"),
      description: t("viralNiches.categories.trending.description"),
      color: "text-primary"
    },
    {
      icon: BarChart3,
      title: t("viralNiches.categories.growing.title"),
      description: t("viralNiches.categories.growing.description"),
      color: "text-green-500"
    },
    {
      icon: Users,
      title: t("viralNiches.categories.newChannels.title"),
      description: t("viralNiches.categories.newChannels.description"),
      color: "text-blue-500"
    },
    {
      icon: FolderOpen,
      title: t("viralNiches.categories.others.title"),
      description: t("viralNiches.categories.others.description"),
      color: "text-muted-foreground"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="nichos-virais" className="py-16 md:py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <span className="text-sm font-semibold">{t("viralNiches.badge")}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
              {t("viralNiches.title")} <span className="text-gradient">{t("viralNiches.titleHighlight")}</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("viralNiches.subtitle")}
            </p>
            
            <ul className="space-y-4">
              {categories.map((category) => (
                <li key={category.title} className="flex items-start gap-3">
                  <category.icon className={`w-5 h-5 mt-0.5 ${category.color} flex-shrink-0`} />
                  <div>
                    <strong className="text-foreground">{category.title}:</strong>
                    <span className="text-muted-foreground ml-1">{category.description}</span>
                  </div>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground px-8 py-6 text-base font-bold rounded-xl glow-effect"
            >
              {t("viralNiches.cta")}
            </Button>
          </motion.div>

          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="glass-card-elevated rounded-2xl overflow-hidden border border-primary/10">
              <div className="relative aspect-[4/3] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={images[currentImage]}
                    alt={t("viralNiches.titleHighlight")}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImage 
                        ? "bg-primary w-6" 
                        : "bg-muted-foreground/50 hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
