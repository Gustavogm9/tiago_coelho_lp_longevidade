"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AlertTriangle, Clock, CheckCircle } from "lucide-react";

export const Urgency = () => {
    const scrollToPlans = () => {
        const plansSection = document.getElementById("pricing");
        if (plansSection) {
            plansSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="py-20 bg-orange-100">
            <div className="container px-4 mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <AlertTriangle className="w-16 h-16 text-orange-600 mx-auto mb-6" />

                    <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                        ATENÇÃO: VAGAS LIMITADAS TODA SEMANA
                    </h2>

                    <div className="bg-white/80 p-6 rounded-xl shadow-sm mb-8 max-w-2xl mx-auto">
                        <h3 className="font-bold text-lg text-gray-800 mb-4">Por que limito as vagas?</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Diferente de programas automatizados que aceitam todo mundo, eu REALMENTE acompanho cada aluna de perto. Faço as avaliações, monto os treinos, ajudo nos ajustes e respondo mensagens. Por isso só consigo atender bem <strong className="text-orange-600">5 NOVAS ALUNAS por semana</strong>.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto mb-10 border-2 border-orange-200">
                        <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-2">
                            🔥 VAGAS DESTA SEMANA
                        </h4>
                        <div className="space-y-3 text-left">
                            <div className="flex items-center gap-3 text-gray-400 bg-gray-50 p-2 rounded">
                                <CheckCircle className="w-5 h-5" />
                                <span className="line-through decoration-gray-400">VAGA 1 - PREENCHIDA</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 bg-gray-50 p-2 rounded">
                                <CheckCircle className="w-5 h-5" />
                                <span className="line-through decoration-gray-400">VAGA 2 - PREENCHIDA</span>
                            </div>
                            <div className="flex items-center gap-3 text-green-600 font-bold bg-green-50 p-2 rounded animate-pulse">
                                <Clock className="w-5 h-5" />
                                <span>VAGA 3 - DISPONÍVEL!</span>
                            </div>
                            <div className="flex items-center gap-3 text-green-600 font-bold bg-green-50 p-2 rounded animate-pulse delay-75">
                                <Clock className="w-5 h-5" />
                                <span>VAGA 4 - DISPONÍVEL!</span>
                            </div>
                            <div className="flex items-center gap-3 text-green-600 font-bold bg-green-50 p-2 rounded animate-pulse delay-150">
                                <Clock className="w-5 h-5" />
                                <span>VAGA 5 - DISPONÍVEL!</span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-4 text-center">
                            Após as 5 vagas serem preenchidas, novas inscrições só abrem na semana seguinte.
                        </p>
                    </div>

                    <Button size="lg" variant="primary" onClick={scrollToPlans} className="text-xl px-12 py-6 shadow-xl shadow-orange-500/30">
                        GARANTIR MINHA VAGA AGORA
                    </Button>

                </motion.div>
            </div>
        </section>
    );
};
