"use client";

import { motion } from "framer-motion";

export const Testimonials = () => {
    const cases = [
        {
            name: "Antônio, 87 Anos",
            profile: "Tipo D (Normal)",
            background: "Agricultor, dores no ombro",
            text: "Histórico de trabalho rural a vida inteira. Na avaliação AFA, marcou 17 pontos, uma pontuação raríssima para sua idade. O foco dele conosco foi liberação miofascial e manutenção de independência funcional.",
            highlight: "Se ele consegue aos 87, é porque nunca parou. Você também pode não parar.",
            image: "https://images.unsplash.com/photo-1544833058-e380f7690184?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        {
            name: "Lúcia, 74 Anos",
            profile: "Tipo E (Robusta)",
            background: "Aposentada, artrose no joelho",
            text: "Mesmo com histórico oncológico de câncer de mama e artrose severa nos joelhos, a Lúcia tirou pontuação máxima na AFA. Ela treina de forma consistente para garantir vida útil e mobilidade.",
            highlight: "Não são os diagnósticos que definem sua velhice. É o que você faz com eles.",
            image: "https://images.unsplash.com/photo-1501901609772-df0848060b33?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        {
            name: "Roberto, 77 Anos",
            profile: "Tipo B (Semi-frágil)",
            background: "Médico Aposentado, usa bengala",
            text: "Um profissional super capacitado, porém sedentário por décadas. Com histórico de cirurgia de revascularização e artrose, ele iniciou o protocolo conosco recuperando aos poucos a força e tirando o peso do medo de cair.",
            highlight: "Ele tem acesso à melhor medicina, mas percebeu que isso não substitui o movimento.",
            image: "https://images.unsplash.com/photo-1573655349936-39827054ee54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        }
    ];

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="container px-4 mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-sm font-bold text-accent tracking-[0.15em] uppercase mb-4">ESTUDOS DE CASO REAIS</span>
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 mb-6 tracking-tight">
                        Histórias de quem já tomou a decisão de <span className="text-gradient-primary">viver com qualidade.</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cases.map((c, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-3xl p-8 shadow-premium border border-gray-100 flex flex-col h-full"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={c.image}
                                    alt={c.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-accent p-0.5"
                                />
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">{c.name}</h3>
                                    <p className="text-xs text-accent font-semibold">{c.profile}</p>
                                    <p className="text-xs text-gray-400">{c.background}</p>
                                </div>
                            </div>
                            
                            <p className="text-gray-600 text-sm leading-relaxed mb-6 italic flex-1">
                                "{c.text}"
                            </p>
                            
                            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 mt-auto">
                                <p className="text-sm font-semibold text-primary">{c.highlight}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
