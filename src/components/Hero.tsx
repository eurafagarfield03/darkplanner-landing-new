import AnimatedShaderHero from "@/components/ui/animated-shader-hero";
import { TrendingUp } from "lucide-react";

export const Hero = () => {
  return (
    <AnimatedShaderHero
      trustBadge={{
        text: "Criado por equipe que gerencia +15 canais Dark com +50M views"
      }}
      headline={{
        line1: "Organize, Planeje e Escale:",
        line2: "Sistema Completo Para Gerenciar Seus Canais Dark e Sua Equipe"
      }}
      subtitle="Centralize prompts, roteiros, thumbnails e multiplique sua produção. De 1 vídeo por dia para 15+ vídeos."
      buttons={{
        primary: {
          text: "Quero Organizar Meus Canais Agora",
          onClick: () => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
        }
      }}
    />
  );
};
