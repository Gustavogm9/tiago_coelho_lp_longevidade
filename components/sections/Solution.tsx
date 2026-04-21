"use client";

import { motion } from "framer-motion";
import { ClipboardList, Wrench, Dumbbell, ActivitySquare } from "lucide-react";

export const Solution = () => {
    const steps = [
        {
            icon: ClipboardList,
            color: "from-blue-500 to-blue-600",
            title: "1. AVALIAR",
            list: [
                "Anamnese fofa (rotina, dores, cirurgias)",
                "Aplicação do método AFA (7 testes globais)",
                "Classificação do Perfil Biocinecmático (A a E)",
            ],
            why: "A resposta está na avaliação. Sem ela, qualquer exercício é apenas um chute no escuro. Nós mapeamos o que seu corpo permite e bloqueia.",
        },
        {
            icon: Wrench,
            color: "from-orange-500 to-orange-600",
            title: "2. CORRIGIR",
            list: [
                "Prescrição de bloqueios posturais",
                "Foco nos corretivos específicos da sua dor",
                "Devolver a mobilidade articular básica",
            ],
            why: "Os exercícios corretivos são a ponte entre a reabilitação clínica e o treino pesado. Não colocamos carga em cima de uma engrenagem que está travada.",
        },
        {
            icon: Dumbbell,
            color: "from-emerald-500 to-emerald-600",
            title: "3. TREINAR",
            list: [
                "Treinamento funcional em padrões estruturados",
                "Fortalecimento da postura contra a gravidade",
                "Estimulação Cognitiva presente na sessão (Brain Fitness)",
            ],
            why: "Uma vez que o movimento está limpo e indolor, o foco muda para fortalecer e preparar você para as demandas orgânicas de viver com energia.",
        },
        {
            icon: ActivitySquare,
            color: "from-violet-500 to-violet-600",
            title: "4. REAVALIAR",
            list: [
                "Ciclos de 4 a 8 semanas",
                "Revalidações ativas dos testes primários",
                "Ajuste da classificação e aumento de complexidade",
            ],
            why: "A velhice não é linear e o seu corpo também não. A reavaliação garante que não vamos insistir em um caminho que já deu frutos suficientes.",
        },
    ];

    return (
        <section id="method" className="py-24 bg-gray-50 bg-dots relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[100px]" />

            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <span className="inline-block text-sm font-bold text-primary tracking-[0.15em] uppercase mb-4">A LÓGICA DO MÉTODO</span>
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 mb-4 tracking-tight">
                        O SISTEMA COMPLETO EM <span className="text-gradient-primary">4 ETAPAS</span>
                    </h2>
                    <p className="text-xl text-gray-600 font-light">
                        Um processo desenhado para proteger suas articulações e resgatar a autonomia perdida.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.08 }}
                                className={`flex flex-col h-full bg-white rounded-2xl p-7 shadow-premium hover:shadow-premium-lg transition-all duration-500 border border-gray-100/80 group`}
                            >
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-7 h-7 text-white" />
                                </div>

                                <h3 className="text-xl font-extrabold text-gray-900 mb-4 tracking-tight font-display">
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
                                        Qual a diferença disso na prática?
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
