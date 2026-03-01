"use client";

import { motion } from "framer-motion";
import { MessageCircle, ClipboardCheck, Dumbbell, BicepsFlexed, RefreshCw, PartyPopper } from "lucide-react";

const stepColors = [
    "from-green-500 to-emerald-600",
    "from-blue-500 to-blue-600",
    "from-orange-500 to-orange-600",
    "from-violet-500 to-violet-600",
    "from-cyan-500 to-cyan-600",
    "from-amber-500 to-yellow-500",
];

export const HowItWorks = () => {
    const steps = [
        {
            icon: MessageCircle,
            title: "ENTRE EM CONTATO",
            timeline: "HOJE",
            desc: ["Fale comigo pelo WhatsApp", "Me conte seu objetivo e rotina", "Escolhemos o melhor plano para você"],
        },
        {
            icon: ClipboardCheck,
            title: "AVALIAÇÃO INICIAL",
            timeline: "1ª SESSÃO",
            desc: ["Encontro presencial para avaliação completa", "Avaliação postural e testes de movimento (FMS)", "Anamnese: histórico, limitações e metas"],
        },
        {
            icon: Dumbbell,
            title: "TREINO PERSONALIZADO",
            timeline: "SEMANA 1",
            desc: ["Programa montado sob medida para você", "Baseado 100% na sua avaliação", "Adaptado ao local de treino escolhido"],
        },
        {
            icon: BicepsFlexed,
            title: "PRIMEIRAS SESSÕES",
            timeline: "SEMANA 1-4",
            desc: ["Treinamos juntos com correção em tempo real", "Aprendizado de técnica e execução correta", "Primeiros resultados em 2-3 semanas"],
        },
        {
            icon: RefreshCw,
            title: "EVOLUÇÃO CONTÍNUA",
            timeline: "MÊS 2+",
            desc: ["Progressão de carga e novos estímulos", "Reavaliações periódicas", "Ajustes imediatos conforme sua evolução"],
        },
        {
            icon: PartyPopper,
            title: "RESULTADO",
            timeline: "SEU FUTURO",
            desc: ["Corpo transformado com saúde", "Hábitos saudáveis e autonomia", "Conhecimento para manter resultados"],
        },
    ];

    return (
        <section className="py-24 bg-mesh-light relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

            <div className="container px-4 mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-sm font-bold text-primary tracking-[0.15em] uppercase mb-4">Passo a passo</span>
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 tracking-tight">
                        COMO FUNCIONA NA PRÁTICA?
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Gradient vertical line */}
                    <div className="absolute left-8 md:left-1/2 top-4 bottom-0 w-[2px] bg-gradient-to-b from-primary/30 via-accent/30 to-success/30 -ml-[1px] md:transform md:-translate-x-[1px]" />

                    <div className="space-y-10">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                    className={`relative flex flex-col md:flex-row items-center md:items-start gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                                >
                                    {/* Step Number Badge with gradient */}
                                    <div className={`absolute left-8 md:left-1/2 -ml-7 md:-ml-7 w-14 h-14 rounded-2xl bg-gradient-to-br ${stepColors[index]} flex items-center justify-center z-10 shadow-lg`}>
                                        <span className="text-lg font-extrabold text-white">{index + 1}</span>
                                    </div>

                                    <div className="ml-20 md:ml-0 md:w-1/2 flex justify-center md:hidden" />

                                    <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${index % 2 === 0 ? "md:pr-16 text-left md:text-right" : "md:pl-16 text-left"}`}>
                                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl hover:shadow-premium transition-all duration-300 border border-gray-100/80 group">
                                            <div className={`flex items-center gap-3 mb-1 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stepColors[index]} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                                    <Icon className="w-5 h-5 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-extrabold text-gray-900 tracking-tight">{step.title}</h3>
                                                    <span className="text-xs font-bold text-gray-500 tracking-wider">{step.timeline}</span>
                                                </div>
                                            </div>
                                            <ul className={`space-y-1.5 text-gray-600 mt-4 ${index % 2 === 0 ? "md:flex md:flex-col md:items-end" : ""}`}>
                                                {step.desc.map((item, i) => (
                                                    <li key={i} className={`flex items-start gap-2 text-[15px] ${index % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""}`}>
                                                        <span className="w-1 h-1 rounded-full bg-accent mt-2.5 shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="hidden md:block w-1/2" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
