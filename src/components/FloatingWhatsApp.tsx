import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const pricingSection = document.getElementById("pricing");
      if (pricingSection) {
        const rect = pricingSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/5577988744698?text=Ol%C3%A1%21%20Tenho%20d%C3%BAvidas%20sobre%20os%20planos%20do%20Dark%20Planner.";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3"
          >
            {/* Tooltip */}
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden sm:block bg-background/95 backdrop-blur-sm text-foreground text-sm font-medium px-4 py-2 rounded-full shadow-lg border border-border"
            >
              {t("floatingWhatsApp.tooltip")}
            </motion.span>

            {/* Button */}
            <div className="relative">
              {/* Pulse animation */}
              <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
              
              <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <MessageCircle className="w-7 h-7 text-white" fill="white" />
              </div>
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};