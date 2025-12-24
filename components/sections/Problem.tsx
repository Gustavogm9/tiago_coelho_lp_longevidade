"use client";

import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

export const Problem = () => {
    const problems = [
        "Começou uma academia empolgada... e desistiu em 2 meses?",
        "Fez dietas restritivas que deixaram você com fome, cansada e irritada?",
        "Perdeu peso mas ganhou TUDO de volta (e às vezes até mais)?",
        "Seguiu treinos genéricos da internet que não se adaptavam à sua realidade?",
        "Tentou sozinha mas não sabia se estava fazendo certo?",
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container px-4 mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                        Por Que Você Não Consegue Emagrecer?
                        <span className="block text-xl md:text-2xl font-medium text-gray-500 mt-2">
                            (E Não, a Culpa Não É Sua)
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 mt-6">Você já passou por isso?</p>
                </motion.div>

                <div className="space-y-4 mb-12">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-4 p-4 rounded-lg hover:bg-red-50 transition-colors"
                        >
                            <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                            <p className="text-lg text-gray-700">{item}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-orange-50 p-8 rounded-2xl border border-orange-100 text-center"
                >
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-accent mb-6">
                        O PROBLEMA NÃO É VOCÊ.
                    </h3>
                    <div className="text-left md:text-center space-y-4 text-gray-700 text-lg">
                        <p className="font-medium">O problema é que você nunca teve:</p>
                        <ul className="inline-block text-left space-y-2 md:pl-10">
                            <li>1️⃣ Um TREINO 100% PERSONALIZADO para seu corpo e objetivo</li>
                            <li>2️⃣ Uma NUTRICIONISTA acompanhando sua alimentação de verdade</li>
                            <li>3️⃣ SUPORTE PROFISSIONAL para não desistir no meio do caminho</li>
                            <li>4️⃣ Um MÉTODO ESTRUTURADO que te mostra exatamente o que fazer</li>
                        </ul>
                        <p className="font-medium text-primary text-xl mt-6">
                            E é exatamente isso que você vai ter no meu acompanhamento.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
