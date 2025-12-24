"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowDown, Play } from "lucide-react";

export const Hero = () => {
    const scrollToPlans = () => {
        const plansSection = document.getElementById("pricing");
        if (plansSection) {
            plansSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative w-full min-h-screen bg-gradient-to-b from-primary to-gray-100 flex items-center justify-center overflow-hidden pt-20 pb-10">
            <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center z-10">

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="font-display font-bold text-4xl md:text-6xl text-white mb-6 leading-tight max-w-4xl"
                >
                    TRANSFORME SEU CORPO EM 90 DIAS
                    <span className="block text-2xl md:text-4xl mt-2 font-medium text-blue-200">
                        Sem Dietas Malucas. Sem Viver na Academia.
                    </span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
                >
                    Consultoria Online Completa: Treino Personalizado + Nutricionista + App
                    Exclusivo + Suporte Direto do Tiago
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col items-center gap-4 w-full"
                >
                    <Button
                        size="xl"
                        variant="accent"
                        onClick={scrollToPlans}
                        className="w-full md:w-auto text-lg md:text-xl shadow-orange-500/20"
                        rightIcon={<ArrowDown className="w-6 h-6" />}
                    >
                        QUERO COMEÇAR MINHA TRANSFORMAÇÃO
                    </Button>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center mt-8 cursor-pointer text-gray-300 hover:text-white transition-colors"
                        onClick={() => {
                            const problemSection = document.getElementById("problem"); // Assuming next section has id 'problem' - will need to add it
                            if (problemSection) problemSection.scrollIntoView({ behavior: "smooth" });
                            else window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
                        }}
                    >
                        <span className="text-sm font-medium mb-2 uppercase tracking-widest opacity-80">Como funciona</span>
                        <ArrowDown className="w-6 h-6" />
                    </motion.div>
                </motion.div>

                {/* Video Placeholder */}
                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="relative mt-12 w-full max-w-sm md:max-w-md aspect-[3/4] bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border-4 border-white/10 group mx-auto"
                >
                    <img
                        src="/tiago-dumbbells.jpg"
                        alt="Tiago Coelho Treinando"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-6 left-6 text-white text-left z-10 p-2">
                        <p className="font-display font-bold text-2xl mb-1 text-white">Método Defini12</p>
                        <p className="text-sm font-medium text-blue-100 opacity-90">Resultados reais, sem atalhos.</p>
                    </div>
                </motion.div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-gray-100 to-transparent" />
            </div>
        </section>
    );
};
