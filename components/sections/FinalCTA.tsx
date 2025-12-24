"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Lock, ShieldCheck, Zap } from "lucide-react";

export const FinalCTA = () => {
    const scrollToPlans = () => {
        const plansSection = document.getElementById("pricing");
        if (plansSection) {
            plansSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="py-20 bg-linear-to-b from-blue-900 to-primary text-white">
            <div className="container px-4 mx-auto max-w-5xl text-center">

                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                    VOCÊ ESTÁ A UMA DECISÃO DE MUDAR SUA VIDA
                </h2>

                <div className="max-w-2xl mx-auto mb-16 text-lg md:text-xl text-blue-100">
                    <p className="mb-4 font-bold">Pense comigo:</p>
                    <p>Daqui 3 meses você vai estar 3 meses mais velha. Isso é certo.</p>
                    <p className="mt-4 font-bold text-white">A pergunta é: Você vai estar 3 meses MELHOR ou 3 meses IGUAL?</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Option 1 */}
                    <div className="bg-white/5 border-2 border-red-400/50 rounded-2xl p-8 backdrop-blur-xs">
                        <h3 className="text-xl font-bold text-red-300 mb-6">🚫 OPÇÃO 1: Continuar como está</h3>
                        <ul className="text-left space-y-4 text-gray-300">
                            <li>• Tentando sozinha com informações soltas</li>
                            <li>• Sem saber se está fazendo certo</li>
                            <li>• Correndo risco de desistir mais uma vez</li>
                            <li>• Frustração de não ver resultados</li>
                        </ul>
                    </div>

                    {/* Option 2 */}
                    <div className="bg-white/10 border-2 border-green-400 rounded-2xl p-8 backdrop-blur-md shadow-2xl shadow-green-500/20 transform md:scale-105">
                        <h3 className="text-xl font-bold text-green-300 mb-6">✅ OPÇÃO 2: Ter um método profissional</h3>
                        <ul className="text-left space-y-4 text-gray-100 font-medium">
                            <li>• Treino personalizado que funciona para VOCÊ</li>
                            <li>• Nutricionista acompanhando sua alimentação</li>
                            <li>• App que facilita tudo e te mantém no caminho</li>
                            <li>• Resultados reais e duradouros</li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto">
                    <p className="text-xl mb-8">
                        A escolha é sua. Mas se você escolher a Opção 2, <span className="font-bold text-accent">precisa ser AGORA.</span>
                    </p>

                    <Button
                        size="xl"
                        variant="accent"
                        onClick={scrollToPlans}
                        className="w-full md:w-auto text-xl md:text-2xl py-6 px-12 shadow-2xl shadow-orange-500/40 hover:scale-105 animate-pulse"
                    >
                        SIM, QUERO MINHA TRANSFORMAÇÃO AGORA
                    </Button>

                    <div className="mt-8 flex flex-col md:flex-row justify-center gap-8 md:gap-12 text-sm text-blue-200 opacity-80">
                        <div className="flex items-center gap-2">
                            <Lock className="w-5 h-5" />
                            <span>Compra 100% Segura</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5" />
                            <span>Garantia de 7 Dias</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap className="w-5 h-5" />
                            <span>Acesso Imediato</span>
                        </div>
                    </div>

                    <p className="mt-8 text-sm text-blue-300">
                        💬 Dúvidas? Fale comigo no WhatsApp: (17) 99275-5039
                    </p>
                </div>

            </div>
        </section>
    );
};
