"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Sparkles, HeartPulse } from "lucide-react";

export const BrainFitness = () => {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="container px-4 mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-sm font-bold text-accent tracking-[0.15em] uppercase mb-4 flex items-center justify-center gap-2">
                        <BrainCircuit className="w-5 h-5"/>
                        Estimulação Cognitiva
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 mb-6 tracking-tight">
                        Porque o cérebro <span className="text-gradient-primary">também treina.</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                        A linha 60+ do nosso programa se diferencia porque adiciona <strong>Brain Fitness</strong> nas sessões. 
                        O exercício físico atua como intervenção cognitiva. Protegemos o corpo e alimentamos a neurogênese do cérebro.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white p-8 rounded-2xl shadow-premium border border-gray-100 flex flex-col items-center text-center hover:scale-[1.02] transition-transform"
                    >
                        <HeartPulse className="w-12 h-12 text-blue-500 mb-6" />
                        <h3 className="font-bold text-lg text-gray-900 mb-3">Escudo Anti-inflamatório</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            A atividade física tem efeito anti-inflamatório profundo, reduzindo estresse oxidativo e blindando o corpo contra os causadores de doenças neurológicas.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-primary to-primary-dark p-8 rounded-2xl shadow-premium-primary text-white flex flex-col items-center text-center transform md:-translate-y-4"
                    >
                        <BrainCircuit className="w-12 h-12 text-accent mb-6" />
                        <h3 className="font-bold text-lg text-white mb-3">Sinaptogênese</h3>
                        <p className="text-blue-100 text-sm leading-relaxed">
                            Com movimentos lúdicos corporais como palmas cruzadas e finger gym, estimulamos novas conexões neurais. O cérebro aprende com a novidade motora.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white p-8 rounded-2xl shadow-premium border border-gray-100 flex flex-col items-center text-center hover:scale-[1.02] transition-transform"
                    >
                        <Sparkles className="w-12 h-12 text-orange-500 mb-6" />
                        <h3 className="font-bold text-lg text-gray-900 mb-3">Vitalidade Pessoal</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Aulas ricas em variações e um quebra-gelo contínuo promovem sorrisos e conexão. O convívio social na sessão age de forma biológica no seu humor.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
