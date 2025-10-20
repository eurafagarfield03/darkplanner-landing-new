import { useState, useEffect } from "react";
import { Users, TrendingUp, Scissors, FileText, BookmarkCheck, MessageSquare, Youtube, LayoutDashboard } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import dashboardHome from "@/assets/dashboard-home.png";
import comunidade from "@/assets/comunidade.png";
import videosVirais from "@/assets/videos-virais.png";
import divisorTexto from "@/assets/divisor-texto.png";
import geradorSrt from "@/assets/gerador-srt.png";
import referenciasCanais from "@/assets/referencias-canais.png";
import promptsCanal from "@/assets/prompts-canal.png";
import gestaoCanais from "@/assets/gestao-canais.png";

const features = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    title: "Dashboard Completo",
    description: "Visualize todas as métricas e ferramentas em um só lugar",
    image: dashboardHome,
  },
  {
    id: "gestao",
    label: "Gestão de Canais",
    icon: Youtube,
    title: "Gestão de Canais",
    description: "Gerencie múltiplos canais e organize todos os seus vídeos",
    image: gestaoCanais,
  },
  {
    id: "prompts",
    label: "Prompts",
    icon: MessageSquare,
    title: "Prompts por Canal",
    description: "Gerencie prompts organizados por canal com facilidade",
    image: promptsCanal,
  },
  {
    id: "referencias",
    label: "Referências",
    icon: BookmarkCheck,
    title: "Referências de Canais",
    description: "Organize canais de referência por nicho para inspiração",
    image: referenciasCanais,
  },
  {
    id: "srt",
    label: "Gerador de SRT",
    icon: FileText,
    title: "Gerador de Legendas",
    description: "Crie legendas profissionais automaticamente com presets otimizados",
    image: geradorSrt,
  },
  {
    id: "divisor",
    label: "Divisor de Texto",
    icon: Scissors,
    title: "Divisor de Texto",
    description: "Divida textos longos em partes menores para diferentes plataformas",
    image: divisorTexto,
  },
  {
    id: "videos",
    label: "Vídeos Virais",
    icon: TrendingUp,
    title: "Encontre Vídeos Virais",
    description: "Busque tendências e vídeos populares com filtros avançados",
    image: videosVirais,
  },
  {
    id: "comunidade",
    label: "Comunidade",
    icon: Users,
    title: "Comunidade Dark Planner",
    description: "Conecte-se com outros creators e faça parte da comunidade",
    image: comunidade,
  },
];

export const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState(features[0].id);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((currentTab) => {
        const currentIndex = features.findIndex((f) => f.id === currentTab);
        const nextIndex = (currentIndex + 1) % features.length;
        return features[nextIndex].id;
      });
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="como-funciona" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
      
      <div className="container max-w-7xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black">
            Como Funciona <span className="text-gradient">na Prática</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore cada funcionalidade do Dark Planner de forma interativa
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 h-auto bg-card/50 p-2 mb-8">
            {features.map((feature) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className="flex flex-col items-center gap-2 p-3 md:p-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all hover:scale-105"
              >
                <feature.icon className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-[10px] md:text-xs font-medium text-center leading-tight">{feature.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((feature) => (
            <TabsContent
              key={feature.id}
              value={feature.id}
              className="mt-8 animate-fade-in"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6 order-2 md:order-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
                    <feature.icon className="w-5 h-5" />
                    <span className="text-sm font-semibold">{feature.label}</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-black leading-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="pt-4">
                    <a
                      href="#pricing"
                      className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:scale-105"
                    >
                      Começar Agora
                    </a>
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <div className="relative rounded-xl overflow-hidden border-2 border-primary/20 shadow-2xl hover:border-primary/40 transition-all duration-300 hover:scale-[1.02]">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
