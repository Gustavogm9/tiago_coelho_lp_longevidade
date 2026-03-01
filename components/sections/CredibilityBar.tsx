"use client";

import { motion } from "framer-motion";

const credentials = [
    { icon: "🎓", label: "CREF 155340-G/SP", detail: "Registro ativo" },
    { icon: "🔬", label: "Pós em Biomecânica", detail: "Cinesiologia" },
    { icon: "🏅", label: "FMS Certificado", detail: "Functional Movement" },
    { icon: "⭐", label: "5.0 no Google", detail: "19 avaliações" },
    { icon: "👥", label: "300+ Alunos", detail: "Presencial e online" },
    { icon: "📋", label: "Especialista", detail: "Hérnia & Dor Lombar" },
];

export const CredibilityBar = () => {
    return (
        <section className="py-6 bg-white/80 backdrop-blur-sm border-y border-gray-100 relative overflow-hidden">
            {/* Subtle accent line at top */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="container px-4 mx-auto">
                <div className="flex overflow-x-auto gap-8 md:gap-0 md:justify-between items-center scrollbar-hide pb-2 md:pb-0">
                    {credentials.map((cred, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="flex items-center gap-3 shrink-0 group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <span className="text-xl">{cred.icon}</span>
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 text-sm whitespace-nowrap">{cred.label}</p>
                                <p className="text-xs text-gray-500 whitespace-nowrap font-medium">{cred.detail}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
