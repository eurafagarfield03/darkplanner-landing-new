import logo from "@/assets/logo.png";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 blur-xl rounded-xl"></div>
              <img src={logo} alt="Dark Planner Logo" className="relative w-10 h-10 md:w-12 md:h-12 rounded-xl" />
            </div>
            <span className="font-bold text-lg">Dark Planner</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            {t("footer.description")}
          </p>
          
          <div className="pt-6 border-t border-border w-full max-w-2xl">
            <p className="text-sm text-muted-foreground mb-2">{t("footer.copyright")}</p>
            <p className="text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">{t("footer.terms")}</a>
              {" • "}
              <a href="#" className="hover:text-foreground transition-colors">{t("footer.privacy")}</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
