"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AccordionItem } from "@/components/ui/Accordion";

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        { q: "Preciso de academia ou equipamentos?", a: "Não necessariamente! O treino é personalizado conforme sua realidade. Se você tem acesso a academia, monto um treino de academia. Se vai treinar em casa, adapto para treino em casa (com ou sem equipamentos)." },
        { q: "O app funciona em iPhone e Android?", a: "Sim! O app funciona em qualquer smartphone (iOS ou Android) e também pode ser acessado pelo computador se preferir." },
        { q: "A nutricionista pode prescrever minha dieta?", a: "Sim! Temos uma nutricionista formada e registrada no CRN no time. Ela monta seu cardápio personalizado baseado em seus dados e objetivos." },
        { q: "Quanto tempo para ver resultados?", a: "A maioria das alunas começa a notar mudanças em 2-3 semanas. Resultados visíveis para outras pessoas em 4-6 semanas. Transformação completa em 3-6 meses dependendo do objetivo." },
        { q: "E se eu não conseguir seguir um dia?", a: "Não tem problema! A vida acontece. O importante é a consistência ao longo do tempo, não a perfeição todos os dias. Vamos te ajudar a encontrar estratégias para encaixar o treino na sua rotina." },
        { q: "Posso renovar ou mudar de plano depois?", a: "Com certeza! Ao final do seu plano, você pode renovar, fazer upgrade, ou se sentir confiante para seguir sozinha com o que aprendeu." },
        { q: "Como funciona o suporte VIP?", a: "No plano anual, você tem acesso direto ao meu WhatsApp particular. Pode mandar mensagem, áudio, vídeo - respondo em até 24h úteis. Nos outros planos, o suporte é via e-mail/Instagram." },
        { q: "Por que os planos mais longos têm mais benefícios?", a: "Porque transformação real leva tempo. Quando você se compromete por mais tempo, eu posso investir mais em você: mais cardápios, mudanças mensais de treino, e no anual, meu suporte ilimitado." },
        { q: "Tem garantia?", a: "Sim! 7 dias de garantia incondicional. Se não gostar, devolvo 100% do valor. Depois dos 7 dias, não há reembolso, mas vamos trabalhar juntos para você ter o melhor resultado possível." },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container px-4 mx-auto max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                        PERGUNTAS FREQUENTES
                    </h2>
                </motion.div>

                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            title={faq.q}
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            {faq.a}
                        </AccordionItem>
                    ))}
                </div>
            </div>
        </section>
    );
};
