import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Image, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

export const BeforeAfter = () => {
  const { t } = useTranslation();

  const problems = [
    {
      icon: Search,
      title: t("beforeAfter.problems.prompt.title"),
      description: t("beforeAfter.problems.prompt.description"),
    },
    {
      icon: Image,
      title: t("beforeAfter.problems.thumbnail.title"),
      description: t("beforeAfter.problems.thumbnail.description"),
    },
    {
      icon: FileText,
      title: t("beforeAfter.problems.script.title"),
      description: t("beforeAfter.problems.script.description"),
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-destructive/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="container max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {t("beforeAfter.title")} <span className="text-destructive">{t("beforeAfter.titleHighlight")}</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("beforeAfter.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-8 border-2 border-destructive/30 hover:border-destructive/50 transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-destructive/20 to-destructive/10 flex items-center justify-center mb-6 mx-auto">
                <problem.icon className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-black mb-4 text-center">{problem.title}</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-6 md:px-12 py-6 md:py-7 text-base md:text-lg font-black rounded-full glow-effect"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t("beforeAfter.cta")}
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
