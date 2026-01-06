"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Check, X, ShieldCheck, Gift } from "lucide-react";

const PlanFeature = ({ children, included = true }: { children: React.ReactNode; included?: boolean }) => (
    <div className={`flex items-start gap-3 text-sm ${included ? "text-gray-700" : "text-gray-400"}`}>
        {included ? (
            <Check className="w-5 h-5 text-green-500 shrink-0" />
        ) : (
            <X className="w-5 h-5 text-red-300 shrink-0" />
        )}
        <span>{children}</span>
    </div>
);

export const Pricing = () => {
    return (
        <section id="pricing" className="py-20 bg-white">
            <div className="container px-4 mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                        ESCOLHA SEU PLANO DE TRANSFORMAÇÃO
                    </h2>
                    <p className="text-xl text-primary font-medium">
                        Promoção Especial: METADE DO PREÇO nas Últimas Vagas
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20 items-stretch">

                    {/* Plan 0 - Monthly */}
                    <Card className="flex flex-col relative pt-12">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Badge variant="outline" className="bg-white text-gray-500 border-gray-300">
                                MENSAL 📅
                            </Badge>
                        </div>
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">MENSAL</h3>
                            <p className="text-gray-500 text-sm">RENOVAÇÃO AUTOMÁTICA</p>
                        </div>

                        <div className="space-y-4 mb-8 flex-1">
                            <PlanFeature>Avaliação Física Completa</PlanFeature>
                            <PlanFeature>Treino Personalizado no App</PlanFeature>
                            <PlanFeature>1 Cardápio Nutricional</PlanFeature>
                            <PlanFeature included={false}>Mudança Mensal de Treino</PlanFeature>
                            <PlanFeature included={false}>Suporte VIP WhatsApp</PlanFeature>
                        </div>

                        <div className="text-center mt-auto">
                            <p className="text-3xl font-bold text-success mb-1">R$ 297,00 <span className="text-sm font-normal text-gray-500">/mês</span></p>
                            <p className="text-sm text-gray-500 mb-6">Cancele quando quiser</p>
                            <a
                                href="https://www.asaas.com/c/4gvspuocy6wnu56j"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <Button className="w-full" variant="primary">COMEÇAR AGORA</Button>
                            </a>
                            <p className="text-xs text-center text-gray-400 mt-4">⭐ Ideal para: Quem quer flexibilidade</p>
                        </div>
                    </Card>

                    {/* Plan 1 - Quarterly */}
                    <Card className="flex flex-col relative pt-12">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Badge variant="outline" className="bg-white text-gray-500 border-gray-300">
                                PARA COMEÇAR 🥉
                            </Badge>
                        </div>
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">TRIMESTRAL</h3>
                            <p className="text-gray-500 text-sm">3 MESES DE ACOMPANHAMENTO</p>
                        </div>

                        <div className="space-y-4 mb-8 flex-1">
                            <PlanFeature>Avaliação Física Completa</PlanFeature>
                            <PlanFeature>Treino Personalizado no App</PlanFeature>
                            <PlanFeature>1 Cardápio Nutricional</PlanFeature>
                            <PlanFeature included={false}>Mudança Mensal de Treino</PlanFeature>
                            <PlanFeature included={false}>Suporte VIP WhatsApp</PlanFeature>
                        </div>

                        <div className="text-center mt-auto">
                            <p className="text-sm text-gray-400 line-through">De R$ 994,00</p>
                            <p className="text-3xl font-bold text-success mb-1">R$ 497,00 <span className="text-sm font-normal text-gray-500">à vista</span></p>
                            <p className="text-sm text-gray-500 mb-6">ou 12x de R$ 51,40</p>
                            <a
                                href="https://www.asaas.com/c/9fkhuiiti5hkr5ey"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <Button className="w-full" variant="primary">COMEÇAR AGORA</Button>
                            </a>
                            <p className="text-xs text-center text-gray-400 mt-4">⭐ Ideal para: Quem quer testar sem compromisso longo</p>
                        </div>
                    </Card>

                    {/* Plan 2 - Semiannual (Highlight) */}
                    <Card variant="highlight" className="flex flex-col relative pt-12 border-accent transform md:-translate-y-4 shadow-orange-500/20">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Badge variant="accent" className="px-4 py-2 text-sm bg-accent text-white border-none shadow-lg">
                                MAIS ESCOLHIDO 🔥 🥈
                            </Badge>
                        </div>
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">SEMESTRAL</h3>
                            <p className="text-gray-500 text-sm">6 MESES DE ACOMPANHAMENTO</p>
                        </div>

                        <div className="space-y-4 mb-8 flex-1">
                            <PlanFeature>Avaliação Física Completa</PlanFeature>
                            <PlanFeature>Treino Personalizado no App</PlanFeature>
                            <PlanFeature>2 Cardápios Nutricionais</PlanFeature>
                            <PlanFeature>Mudança Mensal de Treino</PlanFeature>
                            <PlanFeature included={false}>Suporte VIP WhatsApp</PlanFeature>
                        </div>

                        <div className="bg-orange-50 p-2 rounded text-center mb-4">
                            <p className="text-xs font-bold text-orange-700">💰 Economia de R$ 300 vs 2x o trimestral</p>
                        </div>

                        <div className="text-center mt-auto">
                            <p className="text-sm text-gray-400 line-through">De R$ 1.394,00</p>
                            <p className="text-4xl font-bold text-success mb-1">R$ 697,00 <span className="text-sm font-normal text-gray-500">à vista</span></p>
                            <p className="text-sm text-gray-500 mb-6">ou 6x de R$ 137,00</p>
                            <a
                                href="https://www.asaas.com/c/ottiknymyam64w4e"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <Button size="lg" className="w-full text-lg" variant="primary">GARANTIR MINHA VAGA</Button>
                            </a>
                            <p className="text-xs text-center text-gray-400 mt-4">⭐ Ideal para: Quem quer resultados sólidos</p>
                        </div>
                    </Card>

                    {/* Plan 3 - Annual */}
                    <Card className="flex flex-col relative pt-12">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Badge variant="outline" className="bg-blue-50 text-blue-800 border-blue-200">
                                MELHOR CUSTO-BENEFÍCIO 🥇
                            </Badge>
                        </div>
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">ANUAL</h3>
                            <p className="text-gray-500 text-sm">12 MESES DE ACOMPANHAMENTO</p>
                        </div>

                        <div className="space-y-4 mb-8 flex-1">
                            <PlanFeature>Avaliação Física Completa</PlanFeature>
                            <PlanFeature>Treino Personalizado no App</PlanFeature>
                            <PlanFeature>12 Cardápios Nutricionais (1/mês)</PlanFeature>
                            <PlanFeature>Mudança Mensal de Treino</PlanFeature>
                            <PlanFeature>MEU SUPORTE VIP ILIMITADO 📱</PlanFeature>
                        </div>

                        <div className="bg-blue-50 p-2 rounded text-center mb-4 space-y-1">
                            <p className="text-xs font-bold text-blue-700">💰 Economia de R$ 1.000 vs 4x o trimestral</p>
                            <p className="text-xs font-bold text-blue-700">💎 BÔNUS: Acesso ao meu WhatsApp particular</p>
                        </div>

                        <div className="text-center mt-auto">
                            <p className="text-sm text-gray-400 line-through">De R$ 1.994,00</p>
                            <p className="text-3xl font-bold text-success mb-1">R$ 997,00 <span className="text-sm font-normal text-gray-500">à vista</span></p>
                            <p className="text-sm text-gray-500 mb-6">ou 12x de R$ 97,00</p>
                            <a
                                href="https://www.asaas.com/c/2v6zq7gvq9i3ut1k"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <Button className="w-full bg-primary hover:bg-blue-900" variant="secondary">QUERO O MELHOR RESULTADO</Button>
                            </a>
                            <p className="text-xs text-center text-gray-400 mt-4">⭐ Ideal para: Transformação completa</p>
                        </div>
                    </Card>
                </div>

                {/* Bonus Section */}
                <div className="bg-amber-100 rounded-3xl p-8 md:p-12 mb-20">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-amber-900 mb-8 flex items-center gap-3">
                            <Gift className="w-8 h-8" />
                            BÔNUS EXCLUSIVOS PARA QUEM SE INSCREVER HOJE:
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "E-book '10 Receitas Fit que Aceleram o Emagrecimento'",
                                "Planilha de Controle de Evolução",
                                "Comunidade Exclusiva de Alunas",
                                "[BÔNUS SURPRESA]: Aula ao Vivo Mensal de Q&A"
                            ].map((bonus, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white/60 p-4 rounded-lg">
                                    <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0">✓</div>
                                    <span className="font-medium text-amber-900">{bonus}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Guarantee */}
                <div className="max-w-3xl mx-auto text-center border-2 border-green-500 rounded-2xl p-8 md:p-12 relative bg-white">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4">
                        <ShieldCheck className="w-16 h-16 text-green-500 fill-green-100" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">GARANTIA INCONDICIONAL DE 7 DIAS</h3>
                    <p className="text-gray-600 text-lg mb-6">
                        Se nos primeiros 7 dias você achar que o acompanhamento não é para você, devolvemos 100% do seu dinheiro.
                        Sem perguntas. Sem burocracia. Sem ressentimentos.
                    </p>
                    <p className="font-bold text-gray-900">O risco é TODO meu.</p>
                </div>

            </div>
        </section>
    );
};
