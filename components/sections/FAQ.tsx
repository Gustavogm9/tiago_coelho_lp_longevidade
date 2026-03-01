"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AccordionItem } from "@/components/ui/Accordion";

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        { q: "Onde são os treinos?", a: "Atendo em academias parceiras, estúdios e espaços ao ar livre em São José do Rio Preto. Combinamos o local que melhor se encaixa na sua rotina e preferência." },
        { q: "Preciso ter matrícula em academia?", a: "Depende do local que escolhermos. Se for em academia, sim. Mas também posso treinar você em estúdios ou ao ar livre, sem necessidade de matrícula." },
        { q: "Como funciona o plano Duo?", a: "Você treina com um(a) amigo(a), cônjuge ou familiar no mesmo horário. Cada um recebe treino individualizado para seus objetivos, mas compartilham a sessão. O valor é por pessoa." },
        { q: "E se eu precisar faltar?", a: "Entendo que imprevistos acontecem. Avisando com antecedência, remarcamos a sessão dentro da mesma semana, conforme disponibilidade de horários." },
        { q: "Quanto tempo para ver resultados?", a: "A maioria dos alunos começa a notar mudanças em 2-3 semanas. Resultados visíveis em 4-6 semanas. Transformação significativa em 3-6 meses, dependendo do objetivo e frequência." },
        { q: "Posso mudar de frequência depois?", a: "Com certeza! Podemos ajustar a frequência conforme sua rotina e evolução. Basta me avisar e realinhamos o plano." },
        { q: "Você treina homens e mulheres?", a: "Sim! Atendo todos os perfis — homens, mulheres, jovens, adultos e idosos. O treino é sempre personalizado para cada pessoa." },
        { q: "E se eu tiver lesão ou limitação física?", a: "É justamente aí que o presencial faz mais diferença. Sou especialista em biomecânica, avaliação postural e exercícios corretivos. Adapto tudo respeitando seus limites e trabalhando para superá-los com segurança." },
        { q: "Como faço para começar?", a: "É simples! Me chame no WhatsApp (17) 99275-5039, me conte seu objetivo e agendamos uma aula experimental para você conhecer o método de perto." },
    ];

    return (
        <section className="py-24 bg-mesh-light relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

            <div className="container px-4 mx-auto max-w-3xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block text-sm font-bold text-primary tracking-[0.15em] uppercase mb-4">Dúvidas</span>
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 mb-4 tracking-tight">
                        PERGUNTAS FREQUENTES
                    </h2>
                </motion.div>

                <div className="bg-white/70 backdrop-blur-sm border border-gray-100/50 rounded-3xl p-6 md:p-8 shadow-premium">
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
