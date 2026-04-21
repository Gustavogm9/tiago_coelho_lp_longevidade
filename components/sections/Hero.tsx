"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowDown, MapPin, Award, ShieldCheck } from "lucide-react";

const WHATSAPP_LINK_IDOSO = "https://wa.me/5517992755039?text=Ol%C3%A1%20Tiago%2C%20tenho%20mais%20de%2060%20anos%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20experimental.";
const WHATSAPP_LINK_FAMILIAR = "https://wa.me/5517992755039?text=Ol%C3%A1%20Tiago%2C%20gostaria%20de%20contratar%20o%20seu%20programa%20para%20o%20meu%20pai/m%C3%A3e.";

export const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
            {/* Mesh gradient background */}
            <div className="absolute inset-0 bg-mesh-dark" />
            <div className="absolute inset-0 bg-dots-light opacity-50" />

            {/* Decorative gradient orbs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] animate-float-slow" />
                <div className="absolute top-1/3 -left-20 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gray-50 to-transparent" />
            </div>

            <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-12 z-10">
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                    {/* Location & Program badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 glass-dark px-5 py-2.5 rounded-full mb-8 border-accent/30"
                    >
                        <ShieldCheck className="w-5 h-5 text-accent" />
                        <span className="text-sm font-medium text-white tracking-wide">Programa Exclusivo 60+</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="font-display font-extrabold text-4xl md:text-6xl text-white mb-6 leading-[1.1] max-w-2xl tracking-tight"
                    >
                        Viver mais é o mínimo.
                        <span className="block text-accent">A questão é <span className="underline decoration-accent/50 underline-offset-8">como.</span></span>
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-blue-100 mb-10 max-w-xl leading-relaxed font-light"
                    >
                        Treinamento funcional premium para pessoas com mais de 60 anos que exigem viver com autonomia, força e cabeça clara. 
                        Do método corretivo à estimulação cognitiva.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col gap-4 w-full max-w-lg"
                    >
                        <a href={WHATSAPP_LINK_IDOSO} target="_blank" rel="noopener noreferrer" className="w-full">
                            <Button
                                size="xl"
                                variant="accent"
                                className="w-full text-lg animate-pulse-glow"
                            >
                                QUERO AGENDAR UMA AVALIAÇÃO
                            </Button>
                        </a>
                        <a href={WHATSAPP_LINK_FAMILIAR} target="_blank" rel="noopener noreferrer" className="w-full">
                            <Button
                                size="xl"
                                variant="outline"
                                className="w-full text-lg border-blue-400/30 text-white hover:bg-blue-900/50"
                            >
                                QUERO CONTRATAR PARA MEU FAMILIAR
                            </Button>
                        </a>

                        {/* Trust micro-badges */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                            {[
                                { text: "CREF 155340-G/SP" },
                                { text: "Pós em Biomecânica" },
                                { text: "Avaliador FMS" },
                            ].map((badge, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + i * 0.1 }}
                                    className="flex items-center gap-1.5 text-blue-200 text-xs sm:text-sm font-medium"
                                >
                                    <Award className="w-4 h-4 text-accent" />
                                    <span>{badge.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="relative w-full flex-[0.8] max-w-sm md:max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-premium-lg mt-12 md:mt-0"
                >
                    {/* Gradient border glow */}
                    <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-br from-blue-400/40 via-accent/30 to-blue-600/40 z-0" />
                    <div className="absolute inset-0 rounded-3xl overflow-hidden z-10 bg-gray-200">
                        <img
                            src="/tiago-dumbbells.jpg"
                            alt="Tiago Coelho realizando avaliação funcional com adulto idoso"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                // Fallback para placeholder se a imagem real não existir
                                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-6 left-6 text-white text-left z-10 p-2">
                            <p className="font-display font-extrabold text-2xl mb-1 text-white">Tiago Coelho</p>
                            <p className="text-sm font-medium text-blue-200 opacity-90">Especialista em Envelhecimento Ativo</p>
                        </div>
                    </div>
                </motion.div>
            </div>
            
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer text-blue-200 hover:text-white transition-colors z-20 hidden md:flex"
                onClick={() => {
                    const problemSection = document.getElementById("problem");
                    if (problemSection) problemSection.scrollIntoView({ behavior: "smooth" });
                }}
            >
                <span className="text-xs font-medium mb-2 uppercase tracking-[0.2em] opacity-80">Conheça o método</span>
                <ArrowDown className="w-5 h-5" />
            </motion.div>
        </section>
    );
};
