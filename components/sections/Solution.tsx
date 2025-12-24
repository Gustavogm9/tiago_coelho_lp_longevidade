"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

export const Solution = () => {
    const steps = [
        {
            icon: "🎯",
            title: "AVALIAÇÃO FÍSICA ACELERADORA DE EMAGRECIMENTO",
            list: [
                "Entender seu histórico, rotina e objetivo específico",
                "Identificar seu tipo de metabolismo",
                "Descobrir qual o MELHOR TREINO para acelerar SEUS resultados",
                "Definir um plano realista para os próximos meses",
            ],
            why: "Porque treino genérico não funciona. O que funciona para uma pessoa pode não funcionar para você. Por isso personalizo TUDO desde o dia 1.",
        },
        {
            icon: "🥗",
            title: "ACOMPANHAMENTO NUTRICIONAL COM NUTRICIONISTA",
            list: [
                "Cardápio personalizado feito por NUTRICIONISTA especializada",
                "Baseado nas suas preferências alimentares (sem sofrimento)",
                "Estratégias para estimular perda de gordura",
                "Receitas práticas que facilitam sua rotina",
                "Ajustes mensais conforme sua evolução",
            ],
            why: "Porque 80% do resultado está na alimentação. E você não vai conseguir resultados sustentáveis comendo salada o dia todo ou passando fome.",
        },
        {
            icon: "📲",
            title: "ACESSO EXCLUSIVO AO APP DE TREINO",
            list: [
                "Todos os seus treinos organizados por dia",
                "Vídeos HD ensinando a forma CORRETA de cada exercício",
                "Timer e contador de repetições",
                "Histórico completo de todos os treinos",
                "Atualização automática quando seu treino mudar",
            ],
            why: "Sem o app, você fica perdida, não sabe se está fazendo certo, e o treino vira bagunça. Com o app, é só apertar play e seguir o passo a passo.",
        },
        {
            icon: "♻️",
            title: "MUDANÇA DE TREINO MENSAL (nos planos mais longos)",
            list: [
                "Novo treino adaptado à sua evolução",
                "Novos exercícios para evitar platô",
                "Progressão estratégica de intensidade",
                "Seu corpo NUNCA acomoda",
            ],
            why: "Seu corpo é inteligente e se adapta. Depois de 4-6 semanas no mesmo treino, os resultados desaceleram. Por isso mudo seu treino todo mês.",
        },
        {
            icon: "📱",
            title: "MEU SUPORTE VIP E ILIMITADO (no plano anual)",
            list: [
                "Tire dúvidas sempre que precisar",
                "Envie vídeos dos exercícios para eu corrigir",
                "Receba motivação nos dias difíceis",
                "Ajustes em tempo real quando necessário",
            ],
            why: "Ter um profissional de verdade acompanhando você é a diferença entre desistir na primeira dificuldade e alcançar seu objetivo de vez.",
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                        CONHEÇA O ACOMPANHAMENTO VIP ONLINE
                    </h2>
                    <p className="text-xl text-gray-600">
                        O Sistema Completo para Transformar Seu Corpo
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {steps.map((step, index) => (
                        <Card
                            key={index}
                            variant="default"
                            className={`flex flex-col h-full ${index === steps.length - 1 ? "md:col-span-2 md:w-2/3 md:mx-auto" : ""
                                }`}
                        >
                            <div className="text-5xl mb-6">{step.icon}</div>
                            <h3 className="text-xl font-bold text-primary mb-4 pr-4">
                                {step.title}
                            </h3>

                            <ul className="space-y-3 mb-8 flex-1">
                                {step.list.map((item, i) => (
                                    <li key={i} className="flex items-start text-gray-700">
                                        <span className="text-accent mr-2">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mt-auto">
                                <p className="text-sm font-bold text-blue-900 mb-1">
                                    Por que isso importa?
                                </p>
                                <p className="text-sm text-blue-800 italic">"{step.why}"</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
