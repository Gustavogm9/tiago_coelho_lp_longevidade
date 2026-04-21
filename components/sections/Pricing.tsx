"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Check, ArrowRight } from "lucide-react";

export const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-50/30" />
            <div className="container px-4 mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-sm font-bold text-accent tracking-[0.15em] uppercase mb-4">COMO COMEÇAR</span>
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 mb-6 tracking-tight">
                        Seu primeiro passo é a <span className="text-gradient-primary">Avaliação AFA.</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                        Nós não vendemos planos de exercícios no escuro. A sua entrada no programa 
                        é uma Aula Experimental de Avaliação. Nela você entenderá seu corpo e decidirá o próximo passo conosco.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
                    {/* AVALIACAO CARD */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-3xl p-8 md:p-10 shadow-premium-lg border-2 border-accent relative overflow-hidden flex flex-col"
                    >
                        <div className="absolute top-0 right-0 bg-accent text-white py-1 px-4 text-xs font-bold rounded-bl-xl tracking-wider">
                            PASSO ÚNICO INICIAL
                        </div>
                        
                        <h3 className="text-2xl font-bold font-display text-gray-900 mb-2">Aula de Avaliação AFA</h3>
                        <p className="text-gray-500 text-sm mb-6 pb-6 border-b border-gray-100">Duração: Entre 60 a 90 minutos de análise presencial profunda e testes ortopédicos e funcionais.</p>

                        <div className="mb-8">
                            <ul className="space-y-4">
                                {[
                                    "Aplicação dos 7 testes do método AFA",
                                    "Classificação do Perfil e riscos imediatos",
                                    "Feedback completo para familiares e/ou responsável",
                                    "Experimentação dos corretivos adequados"
                                ].map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-auto pt-4">
                            <a href="https://wa.me/5517992755039?text=Ol%C3%A1%20Tiago%2C%20gostaria%20de%20agendar%20a%20Avalia%C3%A7%C3%A3o%20AFA%20para%20iniciar!" target="_blank" rel="noopener noreferrer">
                                <Button size="xl" variant="accent" className="w-full text-lg shadow-premium-accent group">
                                    Agendar Avaliação
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </a>
                            <p className="text-xs text-center text-gray-400 mt-4">Vagas semanais limitadas para garantir a qualidade investigativa.</p>
                        </div>
                    </motion.div>

                    {/* PROGRAMAS DEPOIS DA AVALIAÇÃO */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-200 flex flex-col justify-center opacity-90 shadow-inner"
                    >
                        <h3 className="text-xl font-bold font-display text-gray-500 mb-4 opacity-80 uppercase tracking-wider">E DEPOIS?</h3>
                        <p className="text-gray-600 mb-6 font-medium">Após a avaliação (onde o risco é zero, pois é sem compromisso), definimos qual ciclo acompanhamento é ideal para o seu perfil e as suas dores:</p>
                        
                        <div className="space-y-4">
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 opacity-60">
                                <h4 className="font-bold text-gray-800">Plano Trimestral</h4>
                                <p className="text-sm text-gray-500">Ciclo de introdução para sair das dores mais agudas.</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 opacity-60">
                                <h4 className="font-bold text-gray-800">Plano Semestral</h4>
                                <p className="text-sm text-gray-500">Ciclo estruturado que já fortalece o cardio e os músculos com consistência.</p>
                            </div>
                        </div>
                        <p className="text-center text-xs text-gray-400 mt-6 mt-auto italic">Nós cuidaremos da prescrição conforme o seu resultado.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
