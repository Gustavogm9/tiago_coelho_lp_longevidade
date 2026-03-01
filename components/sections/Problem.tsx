"use client";

import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

export const Problem = () => {
    const problems = [
        "Treina sozinho na academia sem saber se está fazendo certo?",
        "Tem medo de se lesionar por falta de orientação profissional?",
        "Já tentou vários treinos da internet e não vê resultado?",
        "Sente que está perdendo tempo na academia sem direção?",
        "Quer mudar o corpo mas não sabe por onde começar?",
    ];

    const solutions = [
        { num: "01", text: "Um TREINO 100% PERSONALIZADO para seu corpo e objetivo" },
        { num: "02", text: "Um profissional CORRIGINDO CADA MOVIMENTO em tempo real" },
        { num: "03", text: "ACOMPANHAMENTO DE PERTO para garantir que você não desista" },
        { num: "04", text: "Um MÉTODO ESTRUTURADO com progressão estratégica" },
    ];

    return (
        <section className="py-24 bg-mesh-light relative overflow-hidden">
            {/* Decorative blurs */}
            <div className="absolute top-20 right-0 w-72 h-72 bg-red-500/[0.03] rounded-full blur-[80px]" />
            <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/[0.03] rounded-full blur-[80px]" />

            <div className="container px-4 mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <span className="inline-block text-sm font-bold text-red-500 tracking-[0.15em] uppercase mb-4">Identifique-se</span>
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 mb-4 tracking-tight">
                        Por Que Você Não Consegue Resultado?
                    </h2>
                    <p className="text-lg text-gray-500 mt-2 font-light">
                        (E Não, a Culpa Não É Sua)
                    </p>
                </motion.div>

                <div className="space-y-3 mb-14">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="flex items-start gap-4 p-5 rounded-2xl bg-white/60 backdrop-blur-sm border border-red-100/50 hover:border-red-200 hover:bg-red-50/40 transition-all duration-300 shadow-sm hover:shadow-md group"
                        >
                            <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5 group-hover:text-red-500 transition-colors" />
                            <p className="text-lg text-gray-700 font-medium">{item}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl overflow-hidden"
                >
                    {/* Gradient border effect */}
                    <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-accent/40 via-primary/20 to-accent/40" />
                    <div className="relative bg-white rounded-3xl p-8 md:p-10">
                        <h3 className="text-2xl md:text-3xl font-display font-extrabold text-gradient-accent mb-8 text-center">
                            O PROBLEMA NÃO É VOCÊ.
                        </h3>
                        <p className="font-semibold text-gray-700 text-center mb-6 text-lg">O problema é que você nunca teve:</p>
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            {solutions.map((sol, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-blue-50/80 to-white border border-blue-100/50">
                                    <span className="text-xs font-extrabold text-primary/60 mt-1 font-display">{sol.num}</span>
                                    <p className="text-gray-700 font-medium text-[15px]">{sol.text}</p>
                                </div>
                            ))}
                        </div>
                        <p className="font-bold text-primary text-xl text-center">
                            E é exatamente isso que você vai ter treinando comigo.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
