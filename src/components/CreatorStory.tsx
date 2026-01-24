import { Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

export const CreatorStory = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {t("creatorStory.title")} <span className="text-gradient">{t("creatorStory.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("creatorStory.subtitle")}
          </p>
        </div>

        <div className="glass-card rounded-3xl p-12 md:p-16 border-2 border-primary/30">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-5xl font-black">
                RG
              </div>
              <div className="text-center mt-4">
                <div className="font-black text-xl">{t("creatorStory.creatorName")}</div>
                <div className="text-muted-foreground">{t("creatorStory.creatorRole")}</div>
              </div>
            </div>

            <div className="flex-1 space-y-6">
              <Quote className="w-12 h-12 text-primary opacity-50" />
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <span className="text-foreground font-bold">{t("creatorStory.story.p1")}</span> {t("creatorStory.story.p1b")}
                </p>
                
                <p>
                  {t("creatorStory.story.p2")} <span className="text-destructive font-bold">{t("creatorStory.story.p2b")}</span> {t("creatorStory.story.p2c")} <span className="text-foreground font-bold">{t("creatorStory.story.p2d")}</span>
                </p>

                <p>
                  {t("creatorStory.story.p3")} <span className="text-foreground font-bold">{t("creatorStory.story.p3b")}</span> {t("creatorStory.story.p3c")}
                </p>

                <p className="text-foreground font-bold text-xl pt-4">
                  {t("creatorStory.story.p4")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
