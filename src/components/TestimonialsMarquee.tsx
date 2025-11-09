import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

const testimonials = [
  {
    author: {
      name: "Lucas Silva",
      handle: "@lucascreator",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "O Dark Planner mudou completamente minha rotina de produção. Consigo gerenciar 5 canais sem perder o controle. A organização de prompts salvou horas do meu tempo!"
  },
  {
    author: {
      name: "Marina Costa",
      handle: "@marinacontent",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Finalmente uma ferramenta feita pensando em quem realmente produz conteúdo faceless. O gerador de SRT com presets é genial, economizo 30 minutos por vídeo."
  },
  {
    author: {
      name: "Rafael Santos",
      handle: "@rafaeldark",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "A comunidade do Dark Planner é o diferencial. Troco ideias com outros creators, aprendo estratégias novas todo dia. Meu canal cresceu 300% em 3 meses!"
  },
  {
    author: {
      name: "Júlia Mendes",
      handle: "@juliavirals",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "O filtro de vídeos virais é uma mina de ouro. Encontro trends antes da galera e adapto pro meu nicho. Já tive 3 vídeos com +1M de views usando essa estratégia."
  },
  {
    author: {
      name: "Pedro Oliveira",
      handle: "@pedrotech",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Organizei todas as referências dos meus nichos em um lugar só. Agora quando vou criar conteúdo, tenho tudo na mão. Produtividade aumentou absurdamente!"
  },
  {
    author: {
      name: "Camila Rocha",
      handle: "@camilacanais",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "Suporte em português que realmente entende do mercado brasileiro. Sempre que preciso, tenho resposta rápida e de gente que sabe o que tá fazendo."
  }
]

export function TestimonialsMarquee() {
  return (
    <section className={cn(
      "bg-background text-foreground relative overflow-hidden",
      "py-12 sm:py-16 md:py-20 px-0"
    )}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-primary/5 pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 sm:gap-12 text-center relative z-10">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
            O que dizem <span className="text-gradient">quem já usa</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Mais de 500 creators já transformaram sua produção com o Dark Planner
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
        </div>
      </div>
    </section>
  )
}
