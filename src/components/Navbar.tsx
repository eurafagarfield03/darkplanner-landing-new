import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
      <div className="glass-card rounded-full px-6 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-white font-black text-sm">DP</span>
          </div>
          <span className="font-bold text-lg">Dark Planner</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#benefits" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
            Benefícios
          </a>
          <a href="#tools" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
            Recursos
          </a>
          <a href="#pricing" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
            Preço
          </a>
          <a href="#faq" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden sm:inline-flex font-bold">
            Login
          </Button>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity font-bold">
            Comece agora
          </Button>
        </div>
      </div>
    </nav>
  );
};
