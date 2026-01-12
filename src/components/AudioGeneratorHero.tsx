import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Volume2, Mic, Sparkles, Zap } from "lucide-react";
import geradorAudioImage from "@/assets/gerador-audio.png";

export const AudioGeneratorHero = () => {
  return (
    <section className="py-16 md:py-24 px-4 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Vozes Ultra-Realistas</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            <span className="text-gradient">Gerador de Áudio</span> com IA
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforme texto em áudio com vozes ultra-realistas. Mais de 190 vozes premium para seus vídeos Dark.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image - Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card-elevated rounded-2xl overflow-hidden border border-primary/10 animate-pulse-glow">
              <img
                src={geradorAudioImage}
                alt="Interface do Gerador de Áudio do Dark Planner com vozes ElevenLabs"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Content - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-5 border border-border hover-glow transition-all">
                <Volume2 className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-1">+190 Vozes Premium</h3>
                <p className="text-sm text-muted-foreground">Biblioteca completa de vozes profissionais</p>
              </div>
              
              <div className="glass-card rounded-xl p-5 border border-border hover-glow transition-all">
                <Mic className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-1">Ultra-Realista</h3>
                <p className="text-sm text-muted-foreground">Tecnologia de IA de última geração</p>
              </div>
              
              <div className="glass-card rounded-xl p-5 border border-border hover-glow transition-all">
                <Zap className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-1">Rápido</h3>
                <p className="text-sm text-muted-foreground">Gere áudios em segundos</p>
              </div>
              
              <div className="glass-card rounded-xl p-5 border border-border hover-glow transition-all">
                <Sparkles className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-1">Fácil</h3>
                <p className="text-sm text-muted-foreground">Cole o texto e clique em gerar</p>
              </div>
            </div>

            {/* Features List */}
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>Controle de velocidade de 0.5x a 2x</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>Até 120.000 caracteres por áudio</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>Download direto em MP3 de alta qualidade</span>
              </li>
            </ul>

            <Button
              size="lg"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground px-8 py-6 text-base font-bold rounded-xl glow-effect"
            >
              Experimentar Gerador de Áudio
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};