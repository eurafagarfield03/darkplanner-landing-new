import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Dark Planner funciona para iniciantes?",
    answer: "Sim! O Dark Planner foi projetado para ser intuitivo tanto para iniciantes quanto para creators experientes. Temos tutoriais completos e suporte dedicado para te ajudar a começar."
  },
  {
    question: "Posso gerenciar quantos canais?",
    answer: "Você pode gerenciar quantos canais quiser! Não há limite de canais na plataforma. Muitos dos nossos usuários gerenciam 5+ canais simultaneamente."
  },
  {
    question: "O Dark Planner tem integração com YouTube?",
    answer: "Sim! Você pode conectar seus canais do YouTube e importar dados diretamente, além de acompanhar métricas e analytics em tempo real."
  },
  {
    question: "Como funciona o teste grátis?",
    answer: "Oferecemos 7 dias de teste grátis com acesso completo a todas as funcionalidades. Não é necessário cartão de crédito para começar."
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: "Sim! Você pode cancelar sua assinatura a qualquer momento sem burocracia. Sem taxas de cancelamento ou multas."
  },
  {
    question: "Vocês oferecem suporte?",
    answer: "Sim! Oferecemos suporte via chat, email e uma base de conhecimento completa com tutoriais e guias passo a passo."
  }
];

export const FAQ = () => {
  return (
    <section className="py-24 px-6" id="faq">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-6">
            <HelpCircle className="w-5 h-5 text-primary" />
            <span className="font-bold text-primary">FAQ</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Perguntas <span className="text-gradient">frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tudo que você precisa saber sobre o Dark Planner
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass-card rounded-2xl px-6 border-2 border-border hover:border-primary/50 transition-all"
            >
              <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
