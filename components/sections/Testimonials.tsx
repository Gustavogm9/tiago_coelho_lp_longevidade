"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Star, TrendingDown, Users, CheckCircle } from "lucide-react";

export const Testimonials = () => {
    const testimonials = [
        {
            name: "SARAH OLIVEIRA",
            plan: "CONSULTORIA ONLINE",
            result: "Suporte Total",
            text: "Personal excelente! Mesmo que seja consultoria online, ele esta sempre por perto, dando total atenção, apoio, tirando as duvidas, ajudando nas dificuldades! Excelente profissional!!"
        },
        {
            name: "NATHALIA BAPTISTA",
            plan: "ALUNA PRESENCIAL",
            result: "Treinos Dinâmicos",
            text: "O Tiago é um excelente personal, dedicado aos detalhes. É admirável a forma de adaptar os treinos a nossa necessidade, treinos dinâmicos e desafiadores. Minha melhor escolha."
        },
        {
            name: "MARINA TOPANOTTI",
            plan: "REABILITAÇÃO",
            result: "Recuperação de Lesão",
            text: "Tiago sempre foi muito atencioso e preocupado com minha lesão no joelho. Me ajudou inclusive na recuperação pós operatória. Muito estudioso, competente e sabe o que está fazendo!!"
        },
        {
            name: "FLAVIA MORAES",
            plan: "MÉTODO DEFINI12",
            result: "Bem-estar e Resultados",
            text: "Ótimo professor, responsável, educado, se preocupa com o bem estar do aluno, elabora os treinos personalizados com exercícios dinâmicos, está sempre buscando se atualizar... Super indico!"
        },
        {
            name: "LAILA RIGOLIN",
            plan: "GESTANTE / PÓS-PARTO",
            result: "Segurança Total",
            text: "Faço aulas desde 2023. Durante a minha gestação, mantivemos os treinos. Ele montava os treinos de acordo com minhas necessidades, sempre priorizando nosso bem estar. Indico de olhos fechados!"
        },
        {
            name: "ANNA OLIVEIRA",
            plan: "CONSULTORIA ONLINE",
            result: "Personalização Real",
            text: "Super atencioso!! Além de montar um treino totalmente personalizado para as minhas necessidades, ele acompanha minha evolução e sempre está disponível para me orientar!"
        },
    ];

    const content = [
        { icon: Users, text: "Alunos Transformados", value: "300+" },
        { icon: TrendingDown, text: "Média de peso perdido (3 meses)", value: "6kg" },
        { icon: CheckCircle, text: "Atingem o objetivo no prazo", value: "94%" },
        { icon: Star, text: "Nota média de satisfação", value: "9.8/10" },
    ];

    return (
        <section id="depoimentos" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                        ELAS JÁ TRANSFORMARAM SUAS VIDAS
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Veja o que minhas alunas dizem sobre o método e os resultados.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
                    {testimonials.map((t, index) => (
                        <Card key={index} className="flex flex-col items-center text-center p-8">
                            <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">
                                {t.name.charAt(0)}
                            </div>
                            <h3 className="font-bold text-lg text-gray-900">{t.name}</h3>
                            <p className="text-sm text-primary font-medium mb-4">{t.plan}</p>

                            <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-6 w-full">
                                → {t.result}
                            </div>

                            <p className="text-gray-600 italic">"{t.text}"</p>

                            <div className="flex gap-1 mt-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Impact Numbers */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {content.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="p-4 bg-white rounded-full shadow-md mb-4 text-primary">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <h4 className="text-3xl font-bold text-gray-900 mb-1">{item.value}</h4>
                                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">{item.text}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
