"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AccordionItem } from "@/components/ui/Accordion";

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Já passei dos 80 anos, não é tarde demais para começar?",
            answer: "Nunca é tarde. Nossa Avaliação AFA e nosso método prevêem justamente isso. Os níveis de exercícios são montados para a sua idade e limitação atual. O nosso tipo mais frágil e antigo de aluno tem 87 anos."
        },
        {
            question: "Eu nunca fiz exercícios na vida. Vou conseguir?",
            answer: "Com certeza. Ninguém no nosso programa para 60+ precisa chegar sendo atleta. Tudo é conduzido do zero, da mobilidade em uma cadeira até algo que te deixe estável de pé."
        },
        {
            question: "Uso bengala/andador e tenho artrose, posso fazer?",
            answer: "Sim. A avaliação (AFA) mapeará exatamente isso. Temos técnicas para treinar cadeias que não aumentam o quadro e diminuem o peso nas juntas e articulações da artrose. Tudo isso em sintonia com a orientação do seu médico caso haja."
        },
        {
            question: "Como o programa funciona na prática?",
            answer: "Primeiro você passa pela avaliação (AFA) presencial, onde aplicaremos 7 testes globais sem forçar dor. Você ou familiar responsável recebe o perfil. Depois combinamos no plano mensal os horários em um espaço de acompanhamento dedicado e as sessões iniciam junto ao Brain Fitness."
        },
        {
            question: "Meu pai/mãe tem resistência a academias. O treinamento é em academia?",
            answer: "Atendemos de forma totalmente direcionada, que seja o mais confortável. Pode ser em estúdios mais reservados para uma sessão sem barulhos, até espaços ao ar livre, para respeitar o ambiente em que eles se sintam seguros."
        },
    ];

    return (
        <section id="faq" className="py-24 bg-white relative">
            <div className="container px-4 mx-auto max-w-3xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-sm font-bold text-accent tracking-[0.15em] uppercase mb-4">DÚVIDAS FREQUENTES</span>
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 mb-6 tracking-tight">
                        Ainda tem perguntas sobre <span className="text-gradient-accent">o programa 60+?</span>
                    </h2>
                </motion.div>

                <div className="bg-white rounded-3xl shadow-premium border border-gray-100 p-6 md:p-10">
                    <div className="space-y-2">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                title={faq.question}
                                isOpen={openIndex === index}
                                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                {faq.answer}
                            </AccordionItem>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
