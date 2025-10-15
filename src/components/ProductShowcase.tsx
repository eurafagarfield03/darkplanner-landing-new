import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoIcon, FileText, Scissors, TrendingUp, Search, BarChart3 } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.png";
import channelManagement from "@/assets/channel-management.png";
import srtGenerator from "@/assets/srt-generator.png";
import viralVideos from "@/assets/viral-videos.png";

const tools = [
  {
    id: "dashboard",
    label: "Dashboard Central",
    icon: BarChart3,
    title: "Todo o sistema em uma tela",
    description: "Veja seus canais, próximos vídeos, roteiros pendentes e prompts mais usados. Tudo organizado para você começar o dia sabendo exatamente o que fazer.",
    image: dashboardPreview,
  },
  {
    id: "channels",
    label: "Gestão de Canais",
    icon: VideoIcon,
    title: "Quantos canais você quiser",
    description: "Cada canal tem suas pastas, roteiros, prompts e referências. Você alterna entre eles em 1 clique. Escale sem confusão.",
    image: channelManagement,
  },
  {
    id: "srt",
    label: "Gerador SRT",
    icon: FileText,
    title: "Legendas perfeitas para o CapCut",
    description: "Cole seu roteiro, ajuste o timing e gere o arquivo SRT. Importa direto no CapCut com as palavras sincronizadas. Economiza 20+ minutos por vídeo.",
    image: srtGenerator,
  },
  {
    id: "viral",
    label: "Buscador de Virais",
    icon: TrendingUp,
    title: "Copie o que está funcionando",
    description: "Busque vídeos virais filtrados por país, views, data. Veja o que está explodindo agora e adapte para o seu canal. Pare de adivinhar.",
    image: viralVideos,
  },
];

export const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5 pointer-events-none"></div>
      
      <div className="container max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Como funciona <span className="text-gradient">na prática</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja as principais ferramentas do sistema em ação
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2 bg-transparent h-auto p-2 mb-12">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <TabsTrigger
                  key={tool.id}
                  value={tool.id}
                  className="glass-card data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105 flex flex-col gap-2 h-auto"
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-bold text-sm">{tool.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {tools.map((tool, index) => (
            <TabsContent 
              key={tool.id} 
              value={tool.id}
              className="animate-fade-in mt-0"
            >
              <div className="glass-card rounded-3xl p-8 md:p-12 border-2 border-primary/20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30">
                      <tool.icon className="w-5 h-5 text-primary" />
                      <span className="font-bold text-primary">{tool.label}</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-black">
                      {tool.title}
                    </h3>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {tool.description}
                    </p>

                    <div className="flex flex-wrap gap-3 pt-4">
                      <div className="px-4 py-2 rounded-full bg-success/10 border border-success/30">
                        <span className="text-sm font-semibold text-success">✓ Rápido e simples</span>
                      </div>
                      <div className="px-4 py-2 rounded-full bg-success/10 border border-success/30">
                        <span className="text-sm font-semibold text-success">✓ Economiza horas</span>
                      </div>
                      <div className="px-4 py-2 rounded-full bg-success/10 border border-success/30">
                        <span className="text-sm font-semibold text-success">✓ Aumenta produção</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                    <img
                      src={tool.image}
                      alt={tool.title}
                      className="relative rounded-2xl border-2 border-primary/30 shadow-2xl w-full transform group-hover:scale-[1.02] transition-all duration-500"
                    />
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
