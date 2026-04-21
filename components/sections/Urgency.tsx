"use client";

import { motion } from "framer-motion";
import { AlertCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";

const WHATSAPP_LINK = "https://wa.me/5517992755039?text=Ol%C3%A1%20Tiago%2C%20gostaria%20de%20reservar%20uma%20das%20aplica%C3%A7%C3%B5es%20da%20AFA%20desta%20semana!";

export const Urgency = () => {
    return (
        <section className="py-24 bg-amber-50 relative overflow-hidden">
            {/* Decors */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-[60px]" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px]" />

            <div className="container px-4 mx-auto max-w-4xl relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-md">
                        <AlertCircle className="w-8 h-8 text-accent" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 mb-6 tracking-tight">
                        Por que eu não posso ter muitos alunos.
                    </h2>
                    
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-premium border border-amber-100 max-w-3xl mx-auto mb-10 text-left">
                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                            Programas automatizados aceitam todo mundo. Uma academia normal matricula centenas e larga as pessoas nas máquinas.
                        </p>
                        <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">
                            Eu realmente acompanho cada idoso de perto.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Faço as avaliações clínicas, crio relatórios funcionais para a família, monto os corretivos da semana e ajusto a rota a cada sessão da nossa Avaliação AFA.
                        </p>
                    </div>

                    <div className="bg-gradient-to-r from-accent-dark via-accent to-accent-light text-white p-8 rounded-3xl shadow-premium-accent inline-flex flex-col items-center max-w-xl mx-auto relative overflow-hidden">
                        <div className="absolute right-0 top-0 opacity-10">
                            <Clock className="w-48 h-48 -mr-10 -mt-10" />
                        </div>
                        <h3 className="font-display font-extrabold text-2xl mb-4 relative z-10">Por isso as vagas da AFA são limitadas</h3>
                        <p className="text-amber-100 mb-8 relative z-10 font-medium px-4">
                            Consigo realizar no máximo <strong className="text-white">5 NOVAS AVALIAÇÕES de risco</strong> por semana. 
                            Garantir o atendimento de qualidade exige esse controle rígido de agenda.
                        </p>
                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="relative z-10 w-full max-w-xs">
                            <Button size="xl" variant="outline" className="w-full bg-white text-accent hover:bg-amber-50 hover:text-accent-dark border-none shadow-md font-bold">
                                Verificar Vagas Esta Semana
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
