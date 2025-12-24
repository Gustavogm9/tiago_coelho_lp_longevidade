"use client";

import { motion } from "framer-motion";

export const About = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container px-4 mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row gap-12 items-center">

                    {/* Image Col */}
                    <div className="w-full md:w-5/12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] bg-gray-300 rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src="/tiago-portrait.jpg"
                                    alt="Tiago Coelho Personal Trainer"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Decorative rectangle */}
                            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-accent rounded-2xl -z-10" />
                        </motion.div>
                    </div>

                    {/* Content Col */}
                    <div className="w-full md:w-7/12">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-2">
                                QUEM É TIAGO COELHO?
                            </h2>
                            <h3 className="text-xl text-primary font-medium mb-6">
                                Pós-graduando em Biomecânica • CREF 155340-G/SP
                            </h3>

                            <div className="space-y-4 text-gray-600 text-lg leading-relaxed italic border-l-4 border-accent pl-6 mb-10 bg-white p-6 rounded-r-lg shadow-sm">
                                <p>
                                    "Desde o início da minha trajetória, tenho uma visão clara: <strong>o exercício físico é ferramenta de saúde, funcionalidade e independência</strong>, não apenas estética.
                                </p>
                                <p>
                                    Busco me especializar continuamente em movimento bem feito, prevenção de lesões e longevidade. Quero que você tenha resultados reais, respeitando seus limites.
                                </p>
                                <p>
                                    Minha trajetória é construída no dia a dia, atendendo <strong>pessoas reais, com necessidades reais</strong>, evoluindo com constância."
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">📜 FORMAÇÃO ACADÊMICA</h4>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        <li>• Pós-graduando em Biomecânica e Cinesiologia</li>
                                        <li>• Bacharelado e Licenciatura em Ed. Física</li>
                                        <li>• Summit Internacional de Performance</li>
                                        <li>• Especialista em Hérnia de Disco e Dor Lombar</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">🏆 CERTIFICAÇÕES TÉCNICAS</h4>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        <li>• Functional Movement Systems (FMS)</li>
                                        <li>• Avaliação Postural e Exercícios Corretivos</li>
                                        <li>• Treinamento Funcional e HIIT</li>
                                        <li>• Gestão e Prescrição no Personal Training</li>
                                        <li>• <strong>+300 Alunos Atendidos</strong> presenciais e online</li>
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
