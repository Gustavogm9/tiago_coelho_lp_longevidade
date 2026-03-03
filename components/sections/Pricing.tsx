"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { User, Users, ShieldCheck, Gift, Check } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5517992755039?text=Ol%C3%A1%20Tiago%2C%20vim%20pelo%20site%20e%20quero%20agendar%20uma%20aula%20experimental!";

const personalPlans = [
    { freq: "1x/semana", price: "R$ 360" },
    { freq: "2x/semana", price: "R$ 680" },
    { freq: "3x/semana", price: "R$ 960", popular: true },
    { freq: "4x/semana", price: "R$ 1.200" },
    { freq: "5x/semana", price: "R$ 1.400" },
];

const duoPlans = [
    { freq: "1x/semana", price: "R$ 280" },
    { freq: "2x/semana", price: "R$ 540" },
    { freq: "3x/semana", price: "R$ 780", popular: true },
    { freq: "4x/semana", price: "R$ 960" },
    { freq: "5x/semana", price: "R$ 1.150" },
];

export const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-mesh-light relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

            <div className="container px-4 mx-auto relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-sm font-bold text-primary tracking-[0.15em] uppercase mb-4">Investimento</span>
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 mb-4 tracking-tight">
                        ESCOLHA SEU <span className="text-gradient-primary">PLANO DE TREINO</span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
                        Treino presencial individual ou em dupla. Valores mensais com horário fixo reservado para você.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">

                    {/* Personal Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Gradient border */}
                        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-primary/30 via-blue-300/20 to-primary/30" />
                        <div className="relative bg-white rounded-3xl p-7 pt-14 flex flex-col h-full">
                            {/* Badge */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary-light text-white px-5 py-2.5 rounded-2xl text-sm font-bold shadow-premium-primary">
                                    <User className="w-4 h-4" /> PERSONAL
                                </div>
                            </div>

                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-extrabold text-gray-900 mb-1 font-display">INDIVIDUAL</h3>
                                <p className="text-gray-500 text-sm font-medium">Acompanhamento exclusivo 1 a 1</p>
                            </div>

                            <div className="space-y-0 mb-8 flex-1">
                                {personalPlans.map((plan, i) => (
                                    <div
                                        key={i}
                                        className={`flex items-center justify-between py-3.5 px-4 border-b border-gray-50 last:border-b-0 rounded-xl transition-all duration-200 ${plan.popular ? "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100 shadow-sm" : "hover:bg-gray-50"}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-base font-semibold text-gray-800">{plan.freq}</span>
                                            {plan.popular && (
                                                <span className="text-[10px] bg-gradient-to-r from-primary to-primary-light text-white px-2.5 py-0.5 rounded-lg font-bold tracking-wider">POPULAR</span>
                                            )}
                                        </div>
                                        <span className="text-xl font-extrabold text-gray-900 font-display">{plan.price}<span className="text-xs font-normal text-gray-500 ml-0.5">/mês</span></span>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center mt-auto">
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block">
                                    <Button size="lg" className="w-full text-base" variant="secondary">
                                        AGENDAR AULA EXPERIMENTAL
                                    </Button>
                                </a>
                                <p className="text-xs text-gray-500 mt-3 font-medium">Horários sujeitos à disponibilidade</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Duo Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="relative"
                    >
                        {/* Gradient border */}
                        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-accent/40 via-orange-300/20 to-accent/40" />
                        <div className="relative bg-white rounded-3xl p-7 pt-14 flex flex-col h-full">
                            {/* Badge */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="flex items-center gap-2 bg-gradient-to-r from-accent to-accent-dark text-white px-5 py-2.5 rounded-2xl text-sm font-bold shadow-premium-accent">
                                    <Users className="w-4 h-4" /> DUO
                                </div>
                            </div>

                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-extrabold text-gray-900 mb-1 font-display">EM DUPLA</h3>
                                <p className="text-gray-500 text-sm font-medium">Treine com amigo(a), cônjuge ou familiar • valor por pessoa</p>
                            </div>

                            <div className="space-y-0 mb-8 flex-1">
                                {duoPlans.map((plan, i) => (
                                    <div
                                        key={i}
                                        className={`flex items-center justify-between py-3.5 px-4 border-b border-gray-50 last:border-b-0 rounded-xl transition-all duration-200 ${plan.popular ? "bg-gradient-to-r from-orange-50 to-amber-50 border-orange-100 shadow-sm" : "hover:bg-gray-50"}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-base font-semibold text-gray-800">{plan.freq}</span>
                                            {plan.popular && (
                                                <span className="text-[10px] bg-gradient-to-r from-accent to-accent-dark text-white px-2.5 py-0.5 rounded-lg font-bold tracking-wider">POPULAR</span>
                                            )}
                                        </div>
                                        <span className="text-xl font-extrabold text-gray-900 font-display">{plan.price}<span className="text-xs font-normal text-gray-500 ml-0.5">/mês</span></span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-3 rounded-xl text-center mb-4 border border-orange-100/50">
                                <p className="text-sm font-bold text-orange-700">Economize até 25% treinando em dupla</p>
                            </div>

                            <div className="text-center mt-auto">
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block">
                                    <Button size="lg" className="w-full text-base" variant="primary">
                                        AGENDAR AULA EXPERIMENTAL
                                    </Button>
                                </a>
                                <p className="text-xs text-gray-500 mt-3 font-medium">Ambos treinam no mesmo horário</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bonus */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl overflow-hidden mb-20"
                >
                    <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-amber-300/40 via-amber-200/20 to-orange-300/40" />
                    <div className="relative bg-gradient-to-br from-amber-50 to-orange-50/50 rounded-3xl p-8 md:p-12">
                        <div className="max-w-4xl mx-auto">
                            <h3 className="text-2xl font-extrabold text-amber-900 mb-8 flex items-center gap-3 font-display">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                                    <Gift className="w-6 h-6 text-white" />
                                </div>
                                INCLUSO EM TODOS OS PLANOS:
                            </h3>
                            <div className="grid md:grid-cols-2 gap-3">
                                {[
                                    "Avaliação física e postural completa",
                                    "Treino 100% personalizado",
                                    "Correção de execução em tempo real",
                                    "Reavaliações periódicas",
                                ].map((bonus, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white/50">
                                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                                            <Check className="w-4 h-4" />
                                        </div>
                                        <span className="font-semibold text-amber-900 text-sm">{bonus}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Trust */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative max-w-3xl mx-auto"
                >
                    <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-green-400/30 via-emerald-300/20 to-green-400/30" />
                    <div className="relative bg-white rounded-3xl p-8 md:p-12 text-center">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <ShieldCheck className="w-8 h-8 text-white" />
                        </div>

                        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 font-display">AULA EXPERIMENTAL SEM COMPROMISSO</h3>
                        <p className="text-gray-500 text-lg mb-6 font-light leading-relaxed">
                            Agende uma aula experimental para conhecer o método de perto.
                            Sem contrato, sem pegadinha. Você decide se quer continuar depois de experimentar.
                        </p>
                        <p className="font-bold text-gray-900">O compromisso é com seu resultado.</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
