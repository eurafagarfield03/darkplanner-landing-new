import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, TrendingUp, Scissors, FileText, BookmarkCheck, MessageSquare, Youtube, LayoutDashboard, Volume2, Type } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "react-i18next";

import dashboardHome from "@/assets/dashboard-home-new.png";
import comunidade from "@/assets/comunidade.png";
import videosVirais from "@/assets/videos-virais.png";
import divisorTexto from "@/assets/divisor-texto.png";
import geradorSrt from "@/assets/gerador-srt.png";
import referenciasCanais from "@/assets/referencias-canais.png";
import promptsCanal from "@/assets/prompts-canal.png";
import gestaoCanais from "@/assets/gestao-canais-new.png";
import geradorAudio from "@/assets/gerador-audio-full.png";
import editorTexto from "@/assets/editor-texto.png";

export const HowItWorks = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("dashboard");

  const features = [
    {
      id: "dashboard",
      label: t("howItWorks.features.dashboard.label"),
      icon: LayoutDashboard,
      title: t("howItWorks.features.dashboard.title"),
      description: t("howItWorks.features.dashboard.description"),
      image: dashboardHome,
    },
    {
      id: "gestao",
      label: t("howItWorks.features.management.label"),
      icon: Youtube,
      title: t("howItWorks.features.management.title"),
      description: t("howItWorks.features.management.description"),
      image: gestaoCanais,
    },
    {
      id: "audio",
      label: t("howItWorks.features.audio.label"),
      icon: Volume2,
      title: t("howItWorks.features.audio.title"),
      description: t("howItWorks.features.audio.description"),
      image: geradorAudio,
    },
    {
      id: "editor",
      label: t("howItWorks.features.editor.label"),
      icon: Type,
      title: t("howItWorks.features.editor.title"),
      description: t("howItWorks.features.editor.description"),
      image: editorTexto,
    },
    {
      id: "prompts",
      label: t("howItWorks.features.prompts.label"),
      icon: MessageSquare,
      title: t("howItWorks.features.prompts.title"),
      description: t("howItWorks.features.prompts.description"),
      image: promptsCanal,
    },
    {
      id: "referencias",
      label: t("howItWorks.features.references.label"),
      icon: BookmarkCheck,
      title: t("howItWorks.features.references.title"),
      description: t("howItWorks.features.references.description"),
      image: referenciasCanais,
    },
    {
      id: "srt",
      label: t("howItWorks.features.srt.label"),
      icon: FileText,
      title: t("howItWorks.features.srt.title"),
      description: t("howItWorks.features.srt.description"),
      image: geradorSrt,
    },
    {
      id: "divisor",
      label: t("howItWorks.features.divider.label"),
      icon: Scissors,
      title: t("howItWorks.features.divider.title"),
      description: t("howItWorks.features.divider.description"),
      image: divisorTexto,
    },
    {
      id: "videos",
      label: t("howItWorks.features.viral.label"),
      icon: TrendingUp,
      title: t("howItWorks.features.viral.title"),
      description: t("howItWorks.features.viral.description"),
      image: videosVirais,
    },
    {
      id: "comunidade",
      label: t("howItWorks.features.community.label"),
      icon: Users,
      title: t("howItWorks.features.community.title"),
      description: t("howItWorks.features.community.description"),
      image: comunidade,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((currentTab) => {
        const currentIndex = features.findIndex((f) => f.id === currentTab);
        const nextIndex = (currentIndex + 1) % features.length;
        return features[nextIndex].id;
      });
    }, 30000);

    return () => clearInterval(interval);
  }, [features]);

  const activeFeature = features.find(f => f.id === activeTab);

  return (
    <section id="how-it-works" className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            {t("howItWorks.title")} <span className="text-gradient">{t("howItWorks.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("howItWorks.subtitle")}
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-5 md:grid-cols-10 gap-1 md:gap-2 h-auto bg-card/50 p-2 mb-8 w-full rounded-xl border border-border">
            {features.map((feature) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className="flex flex-col items-center gap-1 md:gap-2 p-2 md:p-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all rounded-lg"
              >
                <feature.icon className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-[10px] md:text-xs font-medium text-center leading-tight hidden md:block">{feature.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((feature) => (
            <TabsContent
              key={feature.id}
              value={feature.id}
              className="mt-0"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
              >
                <div className="space-y-6 order-2 md:order-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
                    <feature.icon className="w-5 h-5" />
                    <span className="text-sm font-semibold">{feature.label}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-black leading-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  <button
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all hover:scale-105"
                  >
                    {t("common.getStarted")}
                  </button>
                </div>

                <div className="order-1 md:order-2">
                  <div className="relative glass-card-elevated rounded-2xl overflow-hidden border border-primary/10">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
