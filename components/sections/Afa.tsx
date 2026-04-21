"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, CheckCircle2 } from "lucide-react";

export const Afa = () => {
    const tests = [
        "1. Sentar e Levantar",
        "2. Capacidade de Marcha",
        "3. Afundo no Chão",
        "4. Mobilidade Torácica",
        "5. Flexibilidade dos Pés",
        "6. Aparelho Vestibular do Equilíbrio",
        "7. Estabilidade de Coluna e Core",
    ];

    const profiles = [
        { grade: "A", name: "Frágil", text: "Incapacidade funcional severa." },
        { grade: "B", name: "Semi-Frágil", text: "Incapacidade leve observada." },
        { grade: "C", name: "Regular", text: "Capacidade funcional reduzida." },
        { grade: "D", name: "Normal", text: "Capacidade boa e segura." },
        { grade: "E", name: "Robusto", text: "Excelente funcionalidade." },
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container px-4 mx-auto max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block text-sm font-bold text-accent tracking-[0.15em] uppercase mb-4">A GRANDE DIFERENÇA DO PROTOCOLO</span>
                        <h2 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 mb-6 tracking-tight">
                            Avaliação Funcional Adaptada <span className="text-gradient-primary">(AFA)</span>
                        </h2>
                        
                        <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                            A <strong className="font-semibold">AFA</strong> compila os elementos clínicos mais testados na Ortopedia mundial, 
                            calibrados para a realidade de quem tem entre 60 e 90+ anos. É aqui que descobrimos 
                            como o seu corpo se classifica com total segurança, antes de qualquer pingo de suor.
                        </p>

                        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-8 shadow-inner">
                            <h3 className="text-[15px] font-bold text-gray-900 mb-4 uppercase tracking-wider flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-accent" />
                                Os 7 Testes da AFA
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {tests.map((test, index) => (
                                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                        {test}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right: Visual Profiles */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl overflow-hidden shadow-premium p-8 bg-gradient-to-br from-blue-900 to-primary-dark border border-blue-800"
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-10">
                            <Activity className="w-32 h-32 text-white" />
                        </div>
                        
                        <h3 className="text-2xl font-display font-extrabold text-white mb-2">Classificação de Perfil</h3>
                        <p className="text-blue-200 text-sm mb-8">Após os testes, você e sua família receberão seu score funcional exato.</p>
                        
                        <div className="space-y-3 relative z-10">
                            {profiles.map((profile, i) => (
                                <div key={i} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3 hover:bg-white/20 transition-colors">
                                    <div className="w-10 h-10 shrink-0 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg">
                                        {profile.grade}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-[15px]">{profile.name}</h4>
                                        <p className="text-blue-100/80 text-xs">{profile.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
