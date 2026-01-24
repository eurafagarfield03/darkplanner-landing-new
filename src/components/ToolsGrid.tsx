import { motion } from "framer-motion";
import { FileText, Scissors, TrendingUp, Search, Sparkles, Calendar, Video, Volume2, Flame, BarChart3 } from "lucide-react";
import { useTranslation } from "react-i18next";

export const ToolsGrid = () => {
  const { t } = useTranslation();

  const tools = [
    {
      icon: Calendar,
      nameKey: "toolsGrid.tools.channelManagement.name",
      descriptionKey: "toolsGrid.tools.channelManagement.description",
    },
    {
      icon: FileText,
      nameKey: "toolsGrid.tools.promptLibrary.name",
      descriptionKey: "toolsGrid.tools.promptLibrary.description",
    },
    {
      icon: Video,
      nameKey: "toolsGrid.tools.scriptManagement.name",
      descriptionKey: "toolsGrid.tools.scriptManagement.description",
    },
    {
      icon: Volume2,
      nameKey: "toolsGrid.tools.audioGenerator.name",
      descriptionKey: "toolsGrid.tools.audioGenerator.description",
      highlight: true,
    },
    {
      icon: Scissors,
      nameKey: "toolsGrid.tools.srtGenerator.name",
      descriptionKey: "toolsGrid.tools.srtGenerator.description",
    },
    {
      icon: TrendingUp,
      nameKey: "toolsGrid.tools.viralFinder.name",
      descriptionKey: "toolsGrid.tools.viralFinder.description",
    },
    {
      icon: Flame,
      nameKey: "toolsGrid.tools.viralNiches.name",
      descriptionKey: "toolsGrid.tools.viralNiches.description",
    },
    {
      icon: BarChart3,
      nameKey: "toolsGrid.tools.channelInsights.name",
      descriptionKey: "toolsGrid.tools.channelInsights.description",
    },
    {
      icon: Search,
      nameKey: "toolsGrid.tools.references.name",
      descriptionKey: "toolsGrid.tools.references.description",
    },
    {
      icon: Sparkles,
      nameKey: "toolsGrid.tools.community.name",
      descriptionKey: "toolsGrid.tools.community.description",
    },
  ];

  return (
    <section id="tools" className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            <span className="text-gradient">{t("toolsGrid.title")}</span> {t("toolsGrid.titleHighlight")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("toolsGrid.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              viewport={{ once: true }}
              className={`glass-card rounded-2xl p-5 border hover-lift hover-glow transition-all group cursor-pointer ${tool.highlight ? 'border-primary/30 bg-primary/5' : 'border-border'}`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <tool.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base md:text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {t(tool.nameKey)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(tool.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
