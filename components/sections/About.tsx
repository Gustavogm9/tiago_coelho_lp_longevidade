"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy } from "lucide-react";

export const About = () => {
    return (
        <section className="py-24 bg-gray-50 bg-dots relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/[0.02] rounded-full blur-[100px]" />

            <div className="container px-4 mx-auto max-w-6xl relative z-10">
                <div className="flex flex-col md:flex-row gap-12 items-center">

                    {/* Image Col */}
                    <div className="w-full md:w-5/12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-premium-lg relative">
                                {/* Gradient border glow */}
                                <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-br from-accent/30 via-primary/20 to-accent/30 z-0" />
                                <div className="absolute inset-0 rounded-3xl overflow-hidden z-10">
                                    <img
                                        src="/tiago-portrait.jpg"
                                        alt="Tiago Coelho Personal Trainer Presencial"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Content Col */}
                    <div className="w-full md:w-7/12">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block text-sm font-bold text-primary tracking-[0.15em] uppercase mb-3">Sobre</span>
                            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 mb-2 tracking-tight">
                                QUEM É <span className="text-gradient-primary">TIAGO COELHO?</span>
                            </h2>
                            <h3 className="text-lg text-primary font-medium mb-6">
                                Pós-graduando em Biomecânica • CREF 155340-G/SP
                            </h3>

                            <div className="relative rounded-2xl overflow-hidden mb-10">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-accent" />
                                <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed italic pl-6 bg-white/70 backdrop-blur-sm p-6 rounded-r-2xl border border-gray-100/50 shadow-sm">
                                    <p>
                                        &quot;Desde o início da minha trajetória, tenho uma visão clara: <strong className="text-gray-900">o exercício físico é ferramenta de saúde, funcionalidade e independência</strong>, não apenas estética.
                                    </p>
                                    <p>
                                        Busco me especializar continuamente em movimento bem feito, prevenção de lesões e longevidade. Quero que você tenha resultados reais, respeitando seus limites.
                                    </p>
                                    <p>
                                        Atendo presencialmente em São José do Rio Preto — em academias, estúdios e espaços ao ar livre. Minha trajetória é construída no dia a dia, atendendo <strong className="text-gray-900">pessoas reais, com necessidades reais</strong>, evoluindo com constância.&quot;
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-gray-100/50 shadow-sm">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-sm">
                                            <GraduationCap className="w-5 h-5 text-white" />
                                        </div>
                                        <h4 className="font-extrabold text-gray-900 text-sm tracking-tight">FORMAÇÃO ACADÊMICA</h4>
                                    </div>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        {[
                                            "Pós-graduando em Biomecânica e Cinesiologia",
                                            "Bacharelado e Licenciatura em Ed. Física",
                                            "Summit Internacional de Performance",
                                            "Especialista em Hérnia de Disco e Dor Lombar",
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-gray-100/50 shadow-sm">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-sm">
                                            <Trophy className="w-5 h-5 text-white" />
                                        </div>
                                        <h4 className="font-extrabold text-gray-900 text-sm tracking-tight">CERTIFICAÇÕES TÉCNICAS</h4>
                                    </div>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        {[
                                            "Functional Movement Systems (FMS)",
                                            "Avaliação Postural e Exercícios Corretivos",
                                            "Treinamento Funcional e HIIT",
                                            "Gestão e Prescrição no Personal Training",
                                            "+300 Alunos Atendidos presenciais e online",
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                                                <span>{i === 4 ? <strong>{item}</strong> : item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
