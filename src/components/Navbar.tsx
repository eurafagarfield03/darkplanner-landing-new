import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "@/assets/logo.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "./LanguageSelector";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const menuItems = [
    { href: "#how-it-works", label: t("navbar.resources") },
    { href: "#nichos-virais", label: t("navbar.viralNiches") },
    { href: "#audio-generator", label: t("navbar.audioGenerator") },
    { href: "#pricing", label: t("navbar.price") },
    { href: "#faq", label: t("navbar.faq") },
  ];

  const handleMenuClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl px-2">
      <div className="glass-card rounded-full px-4 md:px-6 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/30 blur-xl rounded-xl"></div>
            <img src={logo} alt="Dark Planner Logo" className="relative w-10 h-10 md:w-12 md:h-12 rounded-xl" />
          </div>
          <span className="font-bold text-base md:text-lg">Dark Planner</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <LanguageSelector />
          <Button 
            variant="ghost" 
            className="font-bold text-sm md:text-base"
            onClick={() => window.location.href = 'https://app.darkplanner.com.br/'}
          >
            {t("common.login")}
          </Button>
          <Button 
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity font-bold text-sm md:text-base px-4 md:px-6"
            onClick={() => handleMenuClick('#pricing')}
          >
            {t("common.startNow")}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSelector />
          <Button 
            size="sm"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity font-bold text-xs px-3"
            onClick={() => handleMenuClick('#pricing')}
          >
            {t("common.start")}
          </Button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <img src={logo} alt="Dark Planner Logo" className="w-10 h-10 rounded-xl" />
                  <span className="font-bold text-lg">Dark Planner</span>
                </div>

                <nav className="flex flex-col gap-4">
                  {menuItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleMenuClick(item.href)}
                      className="text-left text-base font-semibold text-muted-foreground hover:text-foreground transition-colors py-2"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                <div className="flex flex-col gap-3 pt-4 border-t border-border">
                  <Button 
                    variant="outline" 
                    className="w-full font-bold"
                    onClick={() => {
                      setIsOpen(false);
                      window.location.href = 'https://app.darkplanner.com.br/';
                    }}
                  >
                    {t("common.login")}
                  </Button>
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity font-bold"
                    onClick={() => handleMenuClick('#pricing')}
                  >
                    {t("common.startNow")}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
