import { motion } from "framer-motion";
import { Clock, BarChart3, AlertCircle, Zap, TrendingUp, CheckCircle2, ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export const ProblemSolution = () => {
  const { t } = useTranslation();

  const problems = [
    {
      icon: Clock,
      titleKey: "problemSolution.problems.time.title",
      descriptionKey: "problemSolution.problems.time.description"
    },
    {
      icon: BarChart3,
      titleKey: "problemSolution.problems.consistency.title",
      descriptionKey: "problemSolution.problems.consistency.description"
    },
    {
      icon: AlertCircle,
      titleKey: "problemSolution.problems.production.title",
      descriptionKey: "problemSolution.problems.production.description"
    }
  ];

  const solutions = [
    {
      icon: Zap,
      titleKey: "problemSolution.solutions.centralized.title",
      descriptionKey: "problemSolution.solutions.centralized.description"
    },
    {
      icon: TrendingUp,
      titleKey: "problemSolution.solutions.replicate.title",
      descriptionKey: "problemSolution.solutions.replicate.description"
    },
    {
      icon: CheckCircle2,
      titleKey: "problemSolution.solutions.scale.title",
      descriptionKey: "problemSolution.solutions.scale.description"
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Problems */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            {t("problemSolution.problemTitle")} <span className="text-destructive">{t("problemSolution.problemHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("problemSolution.problemSubtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problems.map((point, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-destructive/20 hover-lift transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6">
                <point.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t(point.titleKey)}</h3>
              <p className="text-muted-foreground leading-relaxed">{t(point.descriptionKey)}</p>
            </motion.div>
          ))}
        </div>

        {/* Arrow Separator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="flex flex-col items-center gap-2 text-primary">
            <ArrowDown className="w-8 h-8 animate-bounce" />
            <span className="text-lg font-bold">{t("problemSolution.transition")}</span>
            <ArrowDown className="w-8 h-8 animate-bounce" />
          </div>
        </motion.div>

        {/* Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            {t("problemSolution.solutionTitle")} <span className="text-gradient">{t("problemSolution.solutionHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("problemSolution.solutionSubtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-primary/20 hover-lift hover-glow transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <solution.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{t(solution.titleKey)}</h3>
              <p className="text-muted-foreground leading-relaxed">{t(solution.descriptionKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
