"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingDown, TrendingUp, Calendar, Users, ChevronLeft, ChevronRight } from "lucide-react";

const transformations = [
    {
        id: "female",
        label: "Recomposição Corporal",
        image: "/transformation-1.jpg",
        timelineImage: "/upload-10.jpg",
        title: "Menos 6kg em Menos de 2 Meses",
        subtitle: "De 74.1kg para 67.8kg • Saiu do Sobrepeso",
        period: "8 Semanas • 01/10 a 25/11",
        stats: [
            { label: "GORDURA", value: "-8,97 kg", detail: "Gordura eliminada", color: "text-green-600", bg: "bg-green-50", icon: TrendingDown },
            { label: "MASSA MAGRA", value: "+2,67 kg", detail: "Músculo conquistado", color: "text-blue-600", bg: "bg-blue-50", icon: TrendingUp },
            { label: "% GORDURA", value: "-10%", detail: "Redução corporal global", color: "text-orange-600", bg: "bg-orange-50", icon: TrendingDown },
            { label: "TEMPO", value: "8 Semanas", detail: "Com treino presencial", color: "text-purple-600", bg: "bg-purple-50", icon: Calendar },
        ],
        quote: "Isso é o que acontece quando o treino de força é prescrito corretamente e corrigido a cada repetição. No presencial, eu vejo e ajusto tudo em tempo real.",
    },
    {
        id: "male",
        label: "Definição Muscular",
        image: "/upload-6.jpg",
        timelineImage: null,
        title: "Definição e Ganho de Massa",
        subtitle: "Recomposição corporal masculina completa",
        period: "Acompanhamento presencial",
        stats: [
            { label: "RESULTADO", value: "Definição", detail: "Ganho de massa magra", color: "text-green-600", bg: "bg-green-50", icon: TrendingUp },
            { label: "ABORDAGEM", value: "Presencial", detail: "Correção em tempo real", color: "text-blue-600", bg: "bg-blue-50", icon: Users },
            { label: "TREINO", value: "Força", detail: "Personalizado para o objetivo", color: "text-orange-600", bg: "bg-orange-50", icon: TrendingUp },
            { label: "MÉTODO", value: "Progressivo", detail: "Evolução constante", color: "text-purple-600", bg: "bg-purple-50", icon: Calendar },
        ],
        quote: "No presencial, consigo ajustar carga, velocidade e amplitude a cada série. Isso faz toda a diferença na construção muscular.",
    },
];

export const Transformation = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = transformations[activeIndex];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/[0.02] rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-[100px]" />

            <div className="container px-4 mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block text-sm font-bold text-accent tracking-[0.15em] uppercase mb-4">Resultados Reais</span>
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 mb-4 tracking-tight">
                        TRANSFORMAÇÕES COM <span className="text-gradient-accent">ACOMPANHAMENTO PRESENCIAL</span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
                        Homens e mulheres que decidiram treinar com método e acompanhamento profissional de perto.
                    </p>
                </motion.div>

                {/* Tabs */}
                <div className="flex justify-center gap-3 mb-10">
                    {transformations.map((t, i) => (
                        <button
                            key={t.id}
                            onClick={() => setActiveIndex(i)}
                            className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${activeIndex === i
                                ? "bg-gradient-to-r from-primary to-primary-light text-white shadow-premium-primary"
                                : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                                }`}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>

                {/* Case Study Container */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="relative rounded-3xl overflow-hidden"
                    >
                        {/* Gradient border */}
                        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-primary/20 via-gray-200 to-accent/20" />
                        <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 md:p-12">
                            <div className="grid md:grid-cols-2 gap-12 items-center">

                                {/* Left: Images */}
                                <div className="space-y-6">
                                    <div className="relative group rounded-2xl overflow-hidden shadow-premium-lg">
                                        <img
                                            src={active.image}
                                            alt={`Transformação: ${active.title}`}
                                            className="w-full h-auto object-cover"
                                        />
                                        <div className="absolute top-4 left-4 glass-dark text-white px-4 py-1.5 rounded-xl text-sm font-bold z-10">
                                            RESULTADO REAL ({active.period.split("•")[0].trim()})
                                        </div>
                                    </div>

                                    {active.timelineImage && (
                                        <div className="relative rounded-2xl overflow-hidden shadow-premium">
                                            <img
                                                src={active.timelineImage}
                                                alt="Evolução ao longo das semanas"
                                                className="w-full h-auto object-cover"
                                            />
                                            <div className="absolute top-4 left-4 bg-gradient-to-r from-accent to-accent-dark text-white px-4 py-1.5 rounded-xl text-sm font-bold z-10">
                                                EVOLUÇÃO SEMANA A SEMANA
                                            </div>
                                        </div>
                                    )}

                                    <p className="text-center text-xs text-gray-500 italic font-light">
                                        *Resultado real de aluno(a) com acompanhamento presencial
                                    </p>
                                </div>

                                {/* Right: Data & Story */}
                                <div>
                                    <h3 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight font-display">{active.title}</h3>
                                    <p className="text-lg text-primary font-medium mb-8">{active.subtitle}</p>

                                    <div className="grid grid-cols-2 gap-3 mb-8">
                                        {active.stats.map((stat, i) => {
                                            const Icon = stat.icon;
                                            return (
                                                <div key={i} className={`${stat.bg} p-4 rounded-2xl border border-white shadow-sm`}>
                                                    <div className={`flex items-center gap-2 ${stat.color} mb-1`}>
                                                        <Icon className="w-4 h-4" />
                                                        <span className="font-bold text-xs tracking-wider">{stat.label}</span>
                                                    </div>
                                                    <p className="text-2xl font-extrabold text-gray-900 font-display">{stat.value}</p>
                                                    <p className="text-xs text-gray-500 mt-0.5">{stat.detail}</p>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* 300+ badge */}
                                    <div className="flex flex-col items-center p-5 bg-gradient-to-br from-primary/5 to-blue-50 rounded-2xl border border-blue-100/50 mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center text-white mb-3 shadow-lg">
                                            <Users className="w-6 h-6" />
                                        </div>
                                        <h4 className="text-3xl font-extrabold text-gray-900 font-display">300+</h4>
                                        <p className="text-xs text-gray-500 font-bold tracking-[0.1em]">ALUNOS TRANSFORMADOS</p>
                                    </div>

                                    <div className="text-gray-600">
                                        <p className="italic border-l-4 border-accent pl-4 text-[15px] leading-relaxed">
                                            &quot;{active.quote}&quot; — <span className="font-bold text-gray-900">Tiago Coelho</span>
                                        </p>
                                    </div>

                                    {/* Navigation for mobile */}
                                    <div className="flex justify-center gap-4 mt-8 md:hidden">
                                        <button
                                            onClick={() => setActiveIndex((activeIndex - 1 + transformations.length) % transformations.length)}
                                            className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={() => setActiveIndex((activeIndex + 1) % transformations.length)}
                                            className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};
