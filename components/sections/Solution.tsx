"use client";

import { motion } from "framer-motion";
import { Target, Dumbbell, Eye, TrendingUp, Handshake } from "lucide-react";

export const Solution = () => {
    const steps = [
        {
            icon: Target,
            color: "from-blue-500 to-blue-600",
            title: "AVALIAÇÃO FÍSICA COMPLETA",
            list: [
                "Avaliação postural e testes de movimento (FMS)",
                "Anamnese detalhada: histórico, rotina e objetivos",
                "Identificação de desequilíbrios e limitações",
                "Definição de um plano de treino realista e personalizado",
            ],
            why: "Porque treino genérico não funciona. Preciso entender seu corpo, suas compensações e limitações antes de prescrever qualquer exercício.",
        },
        {
            icon: Dumbbell,
            color: "from-orange-500 to-orange-600",
            title: "TREINO 100% PERSONALIZADO",
            list: [
                "Cada exercício pensado pro seu corpo e objetivo",
                "Adaptado às suas limitações e nível de condicionamento",
                "Progressão de carga e volume no momento certo",
                "Nada genérico — tudo feito sob medida para você",
            ],
            why: "O que funciona para uma pessoa pode não funcionar para você. Por isso personalizo TUDO desde o dia 1, com base na sua avaliação.",
        },
        {
            icon: Eye,
            color: "from-emerald-500 to-emerald-600",
            title: "CORREÇÃO EM TEMPO REAL",
            list: [
                "Corrijo cada movimento na hora, durante o treino",
                "Prevenção de lesões com técnica impecável",
                "Maximização de resultados com execução correta",
                "A maior vantagem do treino presencial com personal",
            ],
            why: "Nenhum vídeo ou app substitui um profissional ao seu lado corrigindo postura, amplitude e velocidade de cada repetição.",
        },
        {
            icon: TrendingUp,
            color: "from-violet-500 to-violet-600",
            title: "PROGRESSÃO ESTRATÉGICA",
            list: [
                "Mudança de estímulos no momento certo",
                "Novos exercícios para evitar platô e acomodação",
                "Acompanhamento visual da sua evolução de perto",
                "Seu corpo nunca acomoda porque estou ali vendo tudo",
            ],
            why: "Seu corpo é inteligente e se adapta. Estando ao seu lado, consigo identificar o momento exato de mudar o estímulo e acelerar resultados.",
        },
        {
            icon: Handshake,
            color: "from-amber-500 to-amber-600",
            title: "FLEXIBILIDADE DE LOCAL",
            list: [
                "Atendo em academias e estúdios parceiros",
                "Treinos ao ar livre quando você preferir",
                "O treino vai onde você precisa",
                "Horários adaptados à sua rotina",
            ],
            why: "Você não precisa se prender a um lugar só. Monto seu treino para o ambiente que mais combina com sua rotina e preferência.",
        },
    ];

    return (
        <section className="py-24 bg-gray-50 bg-dots relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[100px]" />

            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <span className="inline-block text-sm font-bold text-primary tracking-[0.15em] uppercase mb-4">Método</span>
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 mb-4 tracking-tight">
                        POR QUE TREINAR COM <span className="text-gradient-primary">PERSONAL PRESENCIAL?</span>
                    </h2>
                    <p className="text-xl text-gray-600 font-light">
                        O acompanhamento que faz a diferença entre treinar e ter resultado
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.08 }}
                                className={`flex flex-col h-full bg-white rounded-2xl p-7 shadow-premium hover:shadow-premium-lg transition-all duration-500 border border-gray-100/80 group ${index === steps.length - 1 ? "md:col-span-2 md:w-2/3 md:mx-auto" : ""}`}
                            >
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-7 h-7 text-white" />
                                </div>

                                <h3 className="text-lg font-extrabold text-gray-900 mb-4 tracking-tight font-display">
                                    {step.title}
                                </h3>

                                <ul className="space-y-2.5 mb-6 flex-1">
                                    {step.list.map((item, i) => (
                                        <li key={i} className="flex items-start text-gray-600 text-[15px]">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 p-4 rounded-xl border border-blue-100/50 mt-auto">
                                    <p className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">
                                        Por que isso importa?
                                    </p>
                                    <p className="text-sm text-blue-900 italic leading-relaxed">&quot;{step.why}&quot;</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
