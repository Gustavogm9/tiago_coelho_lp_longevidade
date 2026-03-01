"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowDown, MapPin, Award } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5517992755039?text=Ol%C3%A1%20Tiago%2C%20vim%20pelo%20site%20e%20quero%20agendar%20uma%20aula%20experimental!";

export const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
            {/* Mesh gradient background */}
            <div className="absolute inset-0 bg-mesh-dark" />
            <div className="absolute inset-0 bg-dots-light" />

            {/* Decorative gradient orbs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] animate-float-slow" />
                <div className="absolute top-1/3 -left-20 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gray-50 to-transparent" />
            </div>

            <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center z-10">

                {/* Location badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 glass-dark px-5 py-2.5 rounded-full mb-8"
                >
                    <MapPin className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-white tracking-wide">São José do Rio Preto/SP</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-display font-extrabold text-4xl md:text-7xl text-white mb-6 leading-[1.1] max-w-5xl tracking-tight"
                >
                    PERSONAL TRAINER
                    <span className="block text-accent">PRESENCIAL</span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed font-light"
                >
                    Acompanhamento individual ou em dupla, com treino 100% personalizado,
                    correção em tempo real e resultados que você vê no espelho.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col items-center gap-4 w-full"
                >
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                        <Button
                            size="xl"
                            variant="accent"
                            className="w-full md:w-auto text-lg md:text-xl animate-pulse-glow"
                        >
                            QUERO AGENDAR MINHA AULA EXPERIMENTAL
                        </Button>
                    </a>

                    {/* Trust micro-badges */}
                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                        {[
                            { text: "CREF 155340-G/SP" },
                            { text: "Pós em Biomecânica" },
                            { text: "300+ Alunos" },
                        ].map((badge, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + i * 0.1 }}
                                className="flex items-center gap-1.5 text-blue-200 text-xs font-medium"
                            >
                                <Award className="w-3.5 h-3.5" />
                                <span>{badge.text}</span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center mt-8 cursor-pointer text-blue-200 hover:text-white transition-colors"
                        onClick={() => {
                            const problemSection = document.getElementById("problem");
                            if (problemSection) problemSection.scrollIntoView({ behavior: "smooth" });
                            else window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
                        }}
                    >
                        <span className="text-xs font-medium mb-2 uppercase tracking-[0.2em] opacity-80">Saiba mais</span>
                        <ArrowDown className="w-5 h-5" />
                    </motion.div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="relative mt-12 w-full max-w-sm md:max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-premium-lg group mx-auto"
                >
                    {/* Gradient border glow */}
                    <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-br from-blue-400/40 via-accent/30 to-blue-600/40 z-0" />
                    <div className="absolute inset-0 rounded-3xl overflow-hidden z-10">
                        <img
                            src="/tiago-dumbbells.jpg"
                            alt="Tiago Coelho - Personal Trainer Presencial"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-6 left-6 text-white text-left z-10 p-2">
                            <p className="font-display font-extrabold text-2xl mb-1 text-white">Tiago Coelho</p>
                            <p className="text-sm font-medium text-blue-200 opacity-90">Personal Trainer • CREF 155340-G/SP</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
