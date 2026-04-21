"use client";

import { motion } from "framer-motion";
import { XCircle, Lightbulb } from "lucide-react";

export const Problem = () => {
    const problems = [
        "Perdeu massa muscular e sente fadiga ou falta de ar em tarefas rotineiras?",
        "O médico prescreveu exercícios, mas você tem medo de se machucar ou de sofrer uma queda?",
        "Já se matriculou em uma academia, mas o instrutor tentou te tratar como um adulto jovem de 20 anos?",
        "Sente dores (joelho, colunas, artrose) e acredita que o esforço agravou a situação no passado?",
        "Percebe que pequenas coisas, como calçar meias ou sair do carro, estão ficando difíceis?"
    ];

    const solutions = [
        { num: "01", text: "Uma AVALIAÇÃO FUNCIONAL profunda adaptada para descobrir a causa raiz das suas dores." },
        { num: "02", text: "EXERCÍCIOS CORRETIVOS dedicados a tratar suas limitações antes de colocar carga pesada." },
        { num: "03", text: "TREINAMENTO voltado à autonomia: padrões que devolvem o simples da vida." },
        { num: "04", text: "ESTIMULAÇÃO COGNITIVA, blindando o corpo e o cérebro simultaneamente." },
    ];

    return (
        <section id="problem" className="py-24 bg-mesh-light relative overflow-hidden">
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
                    <span className="inline-block text-sm font-bold text-red-500 tracking-[0.15em] uppercase mb-4">A dura realidade</span>
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 mb-4 tracking-tight">
                        Você tentou treinar e acabou sentindo mais dores?
                    </h2>
                    <p className="text-lg text-gray-500 mt-2 font-light">
                        Os métodos comerciais genéricos ignoram o processo do seu corpo.
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
                    className="relative rounded-3xl overflow-hidden shadow-premium"
                >
                    {/* Gradient border effect */}
                    <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-accent/40 via-primary/20 to-accent/40" />
                    <div className="relative bg-white rounded-3xl p-8 md:p-10">
                        <div className="flex flex-col items-center justify-center text-center">
                            <Lightbulb className="w-12 h-12 text-accent mb-4" />
                            <h3 className="text-2xl md:text-3xl font-display font-extrabold text-gradient-accent mb-2">
                                O PROBLEMA NÃO É VOCÊ.
                            </h3>
                            <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 max-w-lg mx-auto">
                                O problema é o Treino em Academias Genéricas.
                            </h4>
                        </div>
                        
                        <p className="font-semibold text-gray-700 text-center mb-6 text-lg">O que você realmente precisa para mudar o jogo:</p>
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            {solutions.map((sol, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-blue-50/80 to-white border border-blue-100/50">
                                    <span className="text-xs font-extrabold text-primary/60 mt-1 font-display">{sol.num}</span>
                                    <p className="text-gray-700 font-medium text-[15px]">{sol.text}</p>
                                </div>
                            ))}
                        </div>
                        <p className="font-bold text-primary text-xl text-center">
                            O Protocolo Tiago Longevidade trabalha com o respeito clínico que o seu corpo exige.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
