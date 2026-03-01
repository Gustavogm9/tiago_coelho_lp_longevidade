"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AlertTriangle, Clock } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5517992755039?text=Ol%C3%A1%20Tiago%2C%20vim%20pelo%20site%20e%20quero%20garantir%20meu%20hor%C3%A1rio!";

export const Urgency = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100" />
            <div className="absolute inset-0 bg-dots" style={{ opacity: 0.3 }} />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-200 to-transparent" />

            <div className="container px-4 mx-auto max-w-4xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <AlertTriangle className="w-8 h-8 text-white" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 mb-6 tracking-tight">
                        ATENÇÃO: <span className="text-gradient-accent">HORÁRIOS LIMITADOS</span>
                    </h2>

                    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-premium mb-8 max-w-2xl mx-auto">
                        <h3 className="font-bold text-lg text-gray-800 mb-3">Por que limito minha agenda?</h3>
                        <p className="text-gray-600 leading-relaxed font-light">
                            Cada aluno recebe atenção total durante a sessão. Diferente de instrutores de academia que atendem várias pessoas ao mesmo tempo, eu foco <strong className="text-accent font-semibold">100% em você</strong>. Por isso, mantenho uma agenda controlada para garantir a qualidade de cada atendimento.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative max-w-md mx-auto mb-10"
                    >
                        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-orange-300/50 via-amber-200/30 to-orange-300/50" />
                        <div className="relative bg-white rounded-3xl p-8 shadow-premium-lg">
                            <h4 className="text-lg font-extrabold text-gray-900 mb-6 tracking-tight font-display">
                                DISPONIBILIDADE ATUAL
                            </h4>
                            <div className="space-y-3 text-left">
                                {[
                                    { period: "Manhã", status: "Poucos horários disponíveis", color: "text-orange-600", bg: "bg-gradient-to-r from-orange-50 to-amber-50", border: "border-orange-100/50" },
                                    { period: "Tarde", status: "Horários disponíveis", color: "text-green-600", bg: "bg-gradient-to-r from-green-50 to-emerald-50", border: "border-green-100/50" },
                                    { period: "Noite", status: "Poucos horários disponíveis", color: "text-orange-600", bg: "bg-gradient-to-r from-orange-50 to-amber-50", border: "border-orange-100/50" },
                                ].map((item, i) => (
                                    <div key={i} className={`flex items-center gap-3 ${item.color} font-bold ${item.bg} p-3.5 rounded-xl border ${item.border}`}>
                                        <Clock className="w-5 h-5 shrink-0" />
                                        <span className="text-sm">{item.period} — {item.status}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-gray-500 mt-4 text-center font-medium">
                                Fale comigo no WhatsApp para verificar a disponibilidade.
                            </p>
                        </div>
                    </motion.div>

                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                        <Button size="lg" variant="primary" className="text-xl px-12 py-6 animate-pulse-glow">
                            GARANTIR MEU HORÁRIO AGORA
                        </Button>
                    </a>

                </motion.div>
            </div>
        </section>
    );
};
