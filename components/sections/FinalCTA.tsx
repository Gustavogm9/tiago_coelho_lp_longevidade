"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Lock, ShieldCheck, Zap, X, Check } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5517992755039?text=Ol%C3%A1%20Tiago%2C%20quero%20come%C3%A7ar%20a%20treinar%20presencial%20com%20voc%C3%AA!";

export const FinalCTA = () => {
    return (
        <section className="py-24 relative overflow-hidden text-white">
            {/* Background */}
            <div className="absolute inset-0 bg-mesh-dark" />
            <div className="absolute inset-0 bg-dots-light" />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />

            {/* Decorative orbs */}
            <div className="absolute top-20 -left-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 -right-20 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px]" />

            <div className="container px-4 mx-auto max-w-5xl text-center relative z-10">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-display font-extrabold mb-6 tracking-tight"
                >
                    VOCÊ ESTÁ A UMA DECISÃO DE <span className="text-accent">MUDAR SEU CORPO</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="max-w-2xl mx-auto mb-16 text-lg md:text-xl text-blue-100 font-light"
                >
                    <p className="mb-4 font-semibold text-white">Pense comigo:</p>
                    <p>Daqui 3 meses você vai estar 3 meses mais velho(a). Isso é certo.</p>
                    <p className="mt-4 font-bold text-white text-2xl">A pergunta é: Você vai estar 3 meses MELHOR ou 3 meses IGUAL?</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    {/* Option 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-dark rounded-3xl p-8 border border-red-500/20"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-red-500/20 flex items-center justify-center mx-auto mb-4">
                            <X className="w-6 h-6 text-red-400" />
                        </div>
                        <h3 className="text-lg font-extrabold text-red-300 mb-6 tracking-tight">Continuar treinando sozinho</h3>
                        <ul className="text-left space-y-3 text-blue-200">
                            {[
                                "Sem correção, arriscando lesões",
                                "Sem progressão estratégica de estímulos",
                                "Perdendo tempo com treinos que não funcionam",
                                "Frustração de não ver resultados",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-[15px]">
                                    <span className="w-1 h-1 rounded-full bg-red-400/50 mt-2.5 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Option 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl overflow-hidden md:scale-105"
                    >
                        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-green-400/50 via-emerald-400/30 to-green-400/50" />
                        <div className="relative glass-dark rounded-3xl p-8">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <Check className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-lg font-extrabold text-green-300 mb-6 tracking-tight">Ter um personal ao seu lado</h3>
                            <ul className="text-left space-y-3 text-gray-100">
                                {[
                                    "Treino personalizado que funciona para VOCÊ",
                                    "Correção em tempo real, prevenindo lesões",
                                    "Progressão inteligente para resultados contínuos",
                                    "Compromisso com horário que te mantém consistente",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 font-medium text-[15px]">
                                        <span className="w-1 h-1 rounded-full bg-green-400 mt-2.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <p className="text-xl mb-8 font-light">
                        A escolha é sua. Mas se você escolher a Opção 2, <span className="font-bold text-accent">fale comigo agora.</span>
                    </p>

                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                        <Button
                            size="xl"
                            variant="accent"
                            className="w-full md:w-auto text-xl md:text-2xl py-6 px-12 animate-pulse-glow"
                        >
                            SIM, QUERO COMEÇAR A TREINAR
                        </Button>
                    </a>

                    <div className="mt-8 flex flex-col md:flex-row justify-center gap-8 md:gap-12 text-sm text-blue-200">
                        {[
                            { icon: Lock, text: "Aula experimental sem compromisso" },
                            { icon: ShieldCheck, text: "Profissional registrado CREF" },
                            { icon: Zap, text: "Comece essa semana" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <item.icon className="w-4 h-4" />
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>

                    <p className="mt-8 text-sm text-blue-300 font-medium">
                        WhatsApp: (17) 99275-5039
                    </p>
                </motion.div>

            </div>
        </section>
    );
};
