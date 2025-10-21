import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Posso usar em quantos canais?",
    answer: "Sim! Você pode criar e gerenciar quantos canais quiser. Não há limite de projetos em nenhum plano. Creators do Dark Planner gerenciam de 2 a 15+ canais simultaneamente."
  },
  {
    question: "Funciona para qualquer nicho Dark?",
    answer: "Sim! O Dark Planner foi criado para organizar qualquer tipo de canal faceless: curiosidades, listas, mistérios, tecnologia, finanças, automação, história, ciência, etc. A estrutura se adapta a qualquer nicho."
  },
  {
    question: "É difícil de usar?",
    answer: "Não! A interface foi pensada para ser intuitiva. Em 5 minutos você já estará cadastrando seus primeiros prompts e organizando seus canais. Não precisa de conhecimento técnico."
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Sim! A assinatura é recorrente mas você pode cancelar a qualquer momento sem multas ou taxas de cancelamento. Seu acesso continua até o fim do período pago."
  },
  {
    question: "Tem garantia?",
    answer: "Sim! Você tem 7 dias para testar todos os recursos após a compra. Se não gostar por qualquer motivo, é só pedir reembolso e devolvemos 100% do valor. Sem perguntas, sem burocracia."
  },
  {
    question: "Preciso instalar algum programa?",
    answer: "Não! O Dark Planner funciona 100% online. Basta acessar pelo navegador (Chrome, Firefox, Safari, Edge) de qualquer dispositivo. Você pode usar no computador, tablet ou celular."
  }
];

export const FAQ = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 overflow-x-hidden" id="faq">
      <div className="container max-w-4xl">
        <div className="text-center mb-12 md:mb-16 px-2">
          <div className="inline-flex items-center gap-2 px-3 md:px-5 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-6">
            <HelpCircle className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            <span className="font-bold text-primary text-xs md:text-sm">FAQ</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
            Tire suas dúvidas antes de começar
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4 px-2 md:px-0">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass-card rounded-2xl px-4 md:px-6 border-2 border-border hover:border-primary/50 transition-all"
            >
              <AccordionTrigger className="text-left font-bold text-sm md:text-base lg:text-lg hover:text-primary transition-colors py-4 md:py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed pb-4 md:pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
