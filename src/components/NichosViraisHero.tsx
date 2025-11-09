import * as React from "react";
import { Button } from "@/components/ui/button";
import nichosImage from "@/assets/nichos-virais-hero.png";

export const NichosViraisHero = () => {
  return (
    <section className="py-8 md:py-12 px-4 md:px-6 overflow-hidden">
      <div className="relative mx-auto max-w-7xl">
        <div className="relative z-10 mx-auto max-w-3xl text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            Descubra os <span className="text-gradient">Nichos Mais Promissores</span> do YouTube
          </h2>
          <p className="mx-auto my-6 max-w-2xl text-base md:text-lg text-muted-foreground">
            Encontre oportunidades antes da concorrência.
          </p>

          <Button
            size="lg"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-6 text-base font-black rounded-full glow-effect"
          >
            Explorar Nichos Agora
          </Button>
        </div>

        <div className="mx-auto -mt-4 max-w-7xl [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="[perspective:1200px] [mask-image:linear-gradient(to_right,black_60%,transparent_100%)] -mr-8 pl-8 lg:-mr-32 lg:pl-32">
            <div className="[transform:rotateX(15deg)]">
              <div className="lg:h-[40rem] relative skew-x-[.25rad]">
                <img
                  className="rounded-2xl z-[2] relative border-2 border-primary/20 shadow-2xl"
                  src={nichosImage}
                  alt="Interface de Nichos Virais do Dark Planner mostrando análise de canais por nicho"
                  width={2880}
                  height={2074}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
