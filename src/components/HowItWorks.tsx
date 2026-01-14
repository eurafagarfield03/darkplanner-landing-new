import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, TrendingUp, Scissors, FileText, BookmarkCheck, MessageSquare, Youtube, LayoutDashboard, Volume2, Type } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import dashboardHome from "@/assets/dashboard-home.png";
import comunidade from "@/assets/comunidade.png";
import videosVirais from "@/assets/videos-virais.png";
import divisorTexto from "@/assets/divisor-texto.png";
import geradorSrt from "@/assets/gerador-srt.png";
import referenciasCanais from "@/assets/referencias-canais.png";
import promptsCanal from "@/assets/prompts-canal.png";
import gestaoCanais from "@/assets/gestao-canais.png";
import geradorAudio from "@/assets/gerador-audio-new.png";
import editorTexto from "@/assets/editor-texto.png";

const features = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    title: "Dashboard Completo",
    description: "Visualize todas as métricas e ferramentas em um só lugar. Controle total sobre sua operação.",
    image: dashboardHome,
  },
  {
    id: "gestao",
    label: "Gestão",
    icon: Youtube,
    title: "Gestão de Canais",
    description: "Gerencie múltiplos canais com organização profissional. Cada canal com suas pastas separadas.",
    image: gestaoCanais,
  },
  {
    id: "audio",
    label: "Áudio",
    icon: Volume2,
    title: "Gerador de Áudio IA",
    description: "Transforme texto em áudio com mais de 190 Vozes Premium ultra-realistas e controle de velocidade. Geramos automaticamente o arquivo .srt sincronizado perfeitamente com a fala para você importar no Premiere/CapCut.",
    image: geradorAudio,
  },
  {
    id: "editor",
    label: "Editor",
    icon: Type,
    title: "Editor de Texto",
    description: "Contador de caracteres, palavras e tempo de narração. Exporte para SRT ou TXT com um clique.",
    image: editorTexto,
  },
  {
    id: "prompts",
    label: "Prompts",
    icon: MessageSquare,
    title: "Biblioteca de Prompts",
    description: "Salve e organize todos os prompts que funcionam. Busca rápida e tags para encontrar em segundos.",
    image: promptsCanal,
  },
  {
    id: "referencias",
    label: "Referências",
    icon: BookmarkCheck,
    title: "Referências de Canais",
    description: "Organize canais de referência por nicho. Nunca mais perca uma inspiração.",
    image: referenciasCanais,
  },
  {
    id: "srt",
    label: "SRT",
    icon: FileText,
    title: "Gerador de Legendas",
    description: "Crie legendas profissionais para CapCut automaticamente. Presets otimizados.",
    image: geradorSrt,
  },
  {
    id: "divisor",
    label: "Divisor",
    icon: Scissors,
    title: "Divisor de Texto",
    description: "Divida textos longos em partes menores para diferentes plataformas.",
    image: divisorTexto,
  },
  {
    id: "videos",
    label: "Virais",
    icon: TrendingUp,
    title: "Buscador de Virais",
    description: "Encontre vídeos que estão explodindo agora. Filtre por views, país e data.",
    image: videosVirais,
  },
  {
    id: "comunidade",
    label: "Comunidade",
    icon: Users,
    title: "Comunidade Exclusiva",
    description: "Conecte-se com outros creators no WhatsApp. Troca de experiências e networking real.",
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
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const activeFeature = features.find(f => f.id === activeTab);

  return (
    <section id="how-it-works" className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            Como Funciona <span className="text-gradient">na Prática</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            10 ferramentas que eliminam o caos e multiplicam sua produção
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-5 md:grid-cols-10 gap-1 md:gap-2 h-auto bg-card/50 p-2 mb-8 w-full rounded-xl border border-border">
            {features.map((feature) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className="flex flex-col items-center gap-1 md:gap-2 p-2 md:p-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all rounded-lg"
              >
                <feature.icon className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-[10px] md:text-xs font-medium text-center leading-tight hidden md:block">{feature.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((feature) => (
            <TabsContent
              key={feature.id}
              value={feature.id}
              className="mt-0"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
              >
                <div className="space-y-6 order-2 md:order-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
                    <feature.icon className="w-5 h-5" />
                    <span className="text-sm font-semibold">{feature.label}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-black leading-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  <button
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all hover:scale-105"
                  >
                    Começar Agora
                  </button>
                </div>

                <div className="order-1 md:order-2">
                  <div className="relative glass-card-elevated rounded-2xl overflow-hidden border border-primary/10">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};