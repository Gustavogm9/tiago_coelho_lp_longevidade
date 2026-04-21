"use client";

import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap, Award, ShieldAlert } from "lucide-react";

export const About = () => {
    const credentials = [
        "CREF Ativo: 155340-G/SP",
        "Pós-graduando em Biomecânica e Cinesiologia",
        "Avaliador Certificado FMS (Functional Movement Systems)",
        "Especialização Funcional em Hérnias e Prevenção de Dor Lombar",
        "Protocolo Restrito de Segurança com Avaliação Pré-Sessão",
        "Membro ativo de atualizações sobre Envelhecimento Clínico"
    ];

    const stats = [
        { label: "Anos de Experiência Física", value: "+8" },
        { label: "Testes AFA Aplicados", value: "Centenas" },
        { label: "Média de Idade dos Alunos Ativos", value: "68 anos" },
    ];

    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 rounded-l-[100px] -z-10" />
            
            <div className="container px-4 mx-auto max-w-6xl relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-premium-lg">
                            {/* Decorative border */}
                            <div className="absolute inset-0 border-2 border-white/20 rounded-3xl z-20" />
                            <div className="absolute inset-0 bg-blue-900/10 z-10" />
                            <img
                                src="/tiago-about.jpg"
                                alt="Tiago Coelho - Personal Trainer"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1611095966426-ed8e80718667?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                                }}
                            />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-8 -right-8 glass-card p-6 rounded-2xl shadow-xl max-w-xs z-30 hidden sm:block">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                                    <ShieldAlert className="w-6 h-6 text-accent" />
                                </div>
                                <h4 className="font-bold text-gray-900">Protocolo Seguro</h4>
                            </div>
                            <p className="text-sm text-gray-600">Para nós, dores são informações técnicas, não apenas "frescuras".</p>
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block text-sm font-bold text-primary tracking-[0.15em] uppercase mb-4 flex items-center gap-2">
                            <GraduationCap className="w-5 h-5" />
                            Especialista
                        </span>
                        <h2 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 mb-6 tracking-tight">
                            Com mais de 60 anos, você não pode entregar seu corpo a<span className="text-gradient-primary"> curiosos.</span>
                        </h2>

                        <div className="prose prose-lg text-gray-600 mb-10">
                            <p>
                                Sou o <strong className="text-gray-900">Tiago Coelho</strong>, e construí minha carreira 
                                para entender o que um corpo que carrega muita história precisa.
                            </p>
                            <p>
                                Vi muitos adultos tentando cuidar da própria saúde acabarem frustrados em academias tradicionais. O 
                                instrutor está muito ocupado, os exercícios exigem demais das articulações e, no fim, o que deveria tratar, machuca.
                                A minha missão é usar a Biomecânica a seu favor, devolvendo anos à sua vida com absoluta segurança e com exercícios adaptados à sua jornada.
                            </p>
                        </div>

                        {/* Credentials List */}
                        <div className="mb-10 p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Award className="w-5 h-5 text-accent" />
                                Credenciais Oficiais
                            </h3>
                            <ul className="space-y-3">
                                {credentials.map((cred, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span>{cred}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-8">
                            {stats.map((stat, i) => (
                                <div key={i}>
                                    <div className="text-2xl font-black text-gray-900 mb-1">{stat.value}</div>
                                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
