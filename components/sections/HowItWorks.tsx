"use client";

import { motion } from "framer-motion";
import { Calendar, ChartBar, Dumbbell, BicepsFlexed, RefreshCw, PartyPopper } from "lucide-react";

export const HowItWorks = () => {
    const steps = [
        {
            icon: Calendar,
            title: "VOCÊ SE INSCREVE (HOJE)",
            desc: ["Escolhe o plano ideal para você", "Recebe confirmação de matrícula", "Agenda sua avaliação inicial"],
        },
        {
            icon: ChartBar,
            title: "AVALIAÇÃO COMPLETA (SEMANA 1)",
            desc: ["Videochamada de 30-40min comigo", "Analiso seu objetivo, rotina e histórico", "Defino seu plano de ação personalizado"],
        },
        {
            icon: Dumbbell,
            title: "RECEBE TODO O MATERIAL (SEMANA 1)",
            desc: ["Treino montado e carregado no app", "Cardápio nutricional da nutricionista", "Tutorial de como usar o app", "Acesso liberado imediatamente"],
        },
        {
            icon: BicepsFlexed,
            title: "COMEÇA A TRANSFORMAÇÃO (SEMANA 1-4)",
            desc: ["Segue seu treino pelo app", "Segue o cardápio da nutricionista", "Check-in semanal de evolução", "Primeiros resultados em 2-3 semanas"],
        },
        {
            icon: RefreshCw,
            title: "EVOLUÇÃO CONTÍNUA (MÊS 2+)",
            desc: ["Mudança de treino todo mês (planos 6 e 12 meses)", "Novos cardápios conforme evolução", "Suporte contínuo via WhatsApp (plano 12 meses)", "Ajustes sempre que necessário"],
        },
        {
            icon: PartyPopper,
            title: "RESULTADO FINAL",
            desc: ["Corpo transformado", "Hábitos saudáveis estabelecidos", "Conhecimento para manter resultados", "Opção de renovar ou seguir sozinha"],
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container px-4 mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900">
                        COMO FUNCIONA NA PRÁTICA?
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-4 bottom-0 w-1 bg-gray-200 -ml-0.5 md:transform md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`relative flex flex-col md:flex-row items-center md:items-start gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                        }`}
                                >
                                    {/* Step Number Badge (Mobile: Left, Desktop: Center) */}
                                    <div className="absolute left-8 md:left-1/2 -ml-8 md:-ml-8 w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center z-10 shadow-lg">
                                        <span className="text-2xl font-bold text-primary">{index + 1}</span>
                                    </div>

                                    {/* Icon Card (for Mobile visual) - or Integrated in content */}
                                    <div className="ml-20 md:ml-0 md:w-1/2 flex justify-center md:hidden">
                                        {/* Mobile connector spacer */}
                                    </div>

                                    <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${index % 2 === 0 ? "md:pr-16 text-left md:text-right" : "md:pl-16 text-left"
                                        }`}>
                                        <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                                            <div className={`flex items-center gap-3 mb-4 text-primary ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                                }`}>
                                                <Icon className="w-8 h-8" />
                                                <h3 className="text-xl font-bold">{step.title}</h3>
                                            </div>
                                            <ul className={`space-y-2 text-gray-700 font-medium ${index % 2 === 0 ? "md:flex md:flex-col md:items-end" : ""}`}>
                                                {step.desc.map((item, i) => (
                                                    <li key={i} className={`flex items-start gap-2 ${index % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""
                                                        }`}>
                                                        <span className="text-accent mt-1.5">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Empty Spacer for the other side */}
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
