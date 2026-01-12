import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Posso usar em quantos canais?",
    answer: "Sim! Você pode criar e gerenciar quantos canais quiser. Não há limite de projetos em nenhum plano. Creators do Dark Planner gerenciam de 2 a 15+ canais simultaneamente."
  },
  {
    question: "Funciona para qualquer nicho Dark?",
    answer: "Sim! O Dark Planner foi criado para organizar qualquer tipo de canal faceless: curiosidades, listas, mistérios, tecnologia, finanças, história, ciência, etc."
  },
  {
    question: "É difícil de usar?",
    answer: "Não! A interface foi pensada para ser intuitiva. Em 5 minutos você já estará cadastrando seus primeiros prompts e organizando seus canais."
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Sim! A assinatura é recorrente mas você pode cancelar a qualquer momento sem multas ou taxas. Seu acesso continua até o fim do período pago."
  },
  {
    question: "Tem garantia?",
    answer: "Sim! Você tem 7 dias para testar todos os recursos. Se não gostar por qualquer motivo, devolvemos 100% do valor. Sem perguntas."
  },
  {
    question: "Preciso instalar algum programa?",
    answer: "Não! O Dark Planner funciona 100% online. Basta acessar pelo navegador de qualquer dispositivo."
  }
];

export const FAQ = () => {
  return (
    <section className="py-16 md:py-24 px-4" id="faq">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas antes de começar
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border border-border hover-glow transition-all data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-bold hover:text-primary transition-colors py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};