"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, TrendingDown, TrendingUp, Calendar, Users } from "lucide-react";

export const Transformation = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container px-4 mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <Badge variant="accent" className="mb-4">CASO SUCCESSO REAL</Badge>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                        IMAGENS FALAM MAIS QUE PALAVRAS
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Veja o que acontece quando você segue um método validado (sem passar fome e sem treinos malucos).
                    </p>
                </motion.div>

                {/* Case Study Container */}
                <div className="bg-gray-50 rounded-3xl p-6 md:p-12 shadow-xl border border-gray-100">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Left: Images */}
                        <div className="space-y-6">
                            <div className="relative group rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                                <img
                                    src="/transformation-1.jpg"
                                    alt="Transformação Antes e Depois"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute top-4 left-4 bg-gray-900/80 text-white px-3 py-1 rounded-md text-sm font-bold backdrop-blur-sm z-10">
                                    RESULTADO REAL (8 SEMANAS)
                                </div>
                            </div>
                            <p className="text-center text-sm text-gray-500 italic">
                                *Resultados reais de aluna do Método Defini12
                            </p>
                        </div>

                        {/* Right: Data & Story */}
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                Menos 6kg em Menos de 2 Meses
                            </h3>
                            <p className="text-lg text-primary font-medium mb-8">
                                De 74.1kg para 67.8kg • Saiu do Sobrepeso
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="flex items-center gap-2 text-green-600 mb-1">
                                        <TrendingDown className="w-5 h-5" />
                                        <span className="font-bold text-sm">GORDURA</span>
                                    </div>
                                    <p className="text-2xl font-bold text-gray-900">-8,97 kg</p>
                                    <p className="text-xs text-gray-500">Gordura eliminada</p>
                                </div>

                                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="flex items-center gap-2 text-blue-600 mb-1">
                                        <TrendingUp className="w-5 h-5" />
                                        <span className="font-bold text-sm">MASSA MAGRA</span>
                                    </div>
                                    <p className="text-2xl font-bold text-gray-900">+2,67 kg</p>
                                    <p className="text-xs text-gray-500">Músculo conquistado</p>
                                </div>

                                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="flex items-center gap-2 text-orange-600 mb-1">
                                        <TrendingDown className="w-5 h-5" />
                                        <span className="font-bold text-sm">% GORDURA</span>
                                    </div>
                                    <p className="text-2xl font-bold text-gray-900">-10%</p>
                                    <p className="text-xs text-gray-500">Redução corporal global</p>
                                </div>

                                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="flex items-center gap-2 text-purple-600 mb-1">
                                        <Calendar className="w-5 h-5" />
                                        <span className="font-bold text-sm">TEMPO</span>
                                    </div>
                                    <p className="text-2xl font-bold text-gray-900">8 Semanas</p>
                                    <p className="text-xs text-gray-500">01/10 a 25/11</p>
                                </div>
                            </div>

                            {/* Metric 1 */}
                            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h4 className="text-3xl font-bold text-gray-900 font-display">300+</h4>
                                <p className="text-xs text-gray-500 font-medium tracking-wide">ALUNOS TRANSFORMADOS</p>
                            </div>

                            <div className="space-y-4 text-gray-600 mb-8">
                                <p>
                                    Essa aluna não só perdeu peso na balança. Ela fez uma <strong className="text-gray-900">recomposição corporal</strong>.
                                </p>
                                <p>
                                    Muitas dietas fazem você perder músculo junto. Aqui, ela <strong className="text-green-600">GANHOU 2,6kg de massa magra</strong> enquanto derretia quase 9kg de gordura pura.
                                </p>
                                <p className="italic border-l-4 border-accent pl-4">
                                    "Isso é o que acontece quando o treino de força é ajustado com a alimentação correta. Metabolismo acelera e o corpo muda de verdade." — Tiago Coelho
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
