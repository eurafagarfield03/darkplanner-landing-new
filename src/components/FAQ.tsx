import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

export const FAQ = () => {
  const { t } = useTranslation();

  const faqKeys = [
    "audioGenerator",
    "unlimited",
    "charLimit",
    "voiceQuality",
    "capcut",
    "viralNiches",
    "channels",
    "niche",
    "difficulty",
    "cancel",
    "guarantee",
    "install",
  ];

  return (
    <section className="py-16 md:py-24 px-4" id="faq">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            {t("faq.title")} <span className="text-gradient">{t("faq.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("faq.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqKeys.map((key, index) => (
              <AccordionItem
                key={key}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border border-border hover-glow transition-all data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-bold hover:text-primary transition-colors py-5 hover:no-underline">
                  {t(`faq.questions.${key}.question`)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {t(`faq.questions.${key}.answer`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
