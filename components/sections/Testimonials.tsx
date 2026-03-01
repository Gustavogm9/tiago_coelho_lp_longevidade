"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, TrendingDown, Users, CheckCircle, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const googleReviews = [
    { name: "Nathalia Baptista", text: "O Tiago é um excelente personal, dedicado, atencioso aos detalhes, a nossa evolução, é admirável a forma de adaptar os treinos a nossa necessidade, treinos dinâmicos, desafiadores e divertidos, com certeza, minha melhor escolha." },
    { name: "Marcela Franco", text: "Muito atencioso, dedicado e competente! Sempre auxiliando na correta execução, adequando o treino a cada aluno." },
    { name: "Marina Topanotti", text: "Tiago sempre foi muito atencioso e preocupado com minha lesão no joelho (antes e depois da cirurgia, me ajudou inclusive na recuperação pós operatória). Muito estudioso, competente e sabe o que está fazendo!! Recomendo!" },
    { name: "Adriana de Paula", text: "Estou gostando bastante. Precisei me ausentar e estou com muita vontade de recomeçar semana que vem com força total, está me fazendo um bem enorme, o método é muito adequado para mim, me sinto motivada e o Tiago é um professor atencioso e muito competente." },
    { name: "Laila Rigolin", text: "Tiago é um excelente profissional! Faço minhas aulas de funcional com ele desde Janeiro de 2023 e foi nítida a minha evolução. No ano passado, durante a minha gestação, mantivemos os treinos. Ele, muito dedicado e atualizado, montava os treinos de acordo com minhas necessidades, sempre priorizando nosso bem estar. Indico de olhos fechados!" },
    { name: "Juliana Angelo H. da Silva", text: "Excelente profissional! Sempre nos motivando durante as aulas. Atualizado e preocupado em oferecer o melhor!" },
    { name: "Flavia Moraes", text: "Ótimo professor, responsável, educado, se preocupa com o bem estar do aluno, elabora os treinos personalizados com exercícios dinâmicos, está sempre buscando se atualizar... Super indico!" },
    { name: "Kelly Geanne", text: "Profissional atento, sempre inovando, estudando, seguro e muito competente." },
    { name: "Anna Oliveira", text: "Super atencioso!! Além de montar um treino totalmente personalizado para as minhas necessidades, ele acompanha minha evolução e sempre está disponível para me orientar se tenho alguma dificuldade! Recomendo de olhos fechados!" },
    { name: "Gabriela Goncalez", text: "Treino versátil, com exercícios variados, Thiago sempre empenhado em proporcional o melhor treino, atencioso." },
    { name: "Natalie Costa", text: "Ótimo professor, super atencioso e dedicado." },
    { name: "Erika Nogueira", text: "Excelente profissional. Dedicado e responsável." },
    { name: "Aparecida Cruz Primiani", text: "Olá estou algum tempo com o Tiago e muito satisfeita com os resultados dos exercícios. Ele é dedicado atencioso e pontual. Excelente profissional." },
    { name: "Giovanna Rezende", text: "Estou gostando muito das aulas e dos exercícios, pretendo continuar." },
    { name: "Gleice Morais", text: "Ótimo profissional e pessoa. Muito atencioso." },
    { name: "Andreia Figueiredo", text: "Excelente profissional." },
    { name: "Ana Gabriela Chagas", text: "Ótimo profissional! Atencioso!" },
    { name: "Izabel Coelho", text: "Um ótimo profissional." },
    { name: "Sarah Oliveira Santos", text: "Personal excelente! Está sempre por perto, dando total atenção, apoio, tirando as dúvidas, ajudando nas dificuldades! Excelente profissional!!" },
];

const featuredReviews = googleReviews.filter(r => r.text.length > 80);

const impactNumbers = [
    { icon: Users, text: "Alunos Atendidos", value: "300+", gradient: "from-blue-500 to-blue-600" },
    { icon: TrendingDown, text: "Média de resultado (3 meses)", value: "-6kg", gradient: "from-green-500 to-emerald-600" },
    { icon: CheckCircle, text: "Atingem o objetivo no prazo", value: "94%", gradient: "from-orange-500 to-orange-600" },
    { icon: Star, text: "Nota média de satisfação", value: "9.8/10", gradient: "from-amber-500 to-yellow-500" },
];

const AnimatedCounter = ({ value, suffix = "" }: { value: string; suffix?: string }) => {
    const numericPart = value.replace(/[^0-9.]/g, "");
    const prefix = value.replace(/[0-9.+\-/]/g, "").charAt(0) === "-" ? "-" : value.startsWith("+") ? "+" : "";
    const [count, setCount] = useState(0);
    const target = parseFloat(numericPart) || 0;

    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [target]);

    const displayValue = value.includes("/") ? value : `${prefix}${count}${suffix}`;
    return <span>{displayValue}</span>;
};

const avatarColors = [
    "from-blue-500 to-blue-600",
    "from-orange-500 to-orange-600",
    "from-green-500 to-emerald-600",
    "from-violet-500 to-violet-600",
    "from-pink-500 to-rose-600",
    "from-cyan-500 to-cyan-600",
    "from-amber-500 to-yellow-500",
    "from-indigo-500 to-indigo-600",
];

export const Testimonials = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const reviewsPerPage = 3;
    const totalPages = Math.ceil(featuredReviews.length / reviewsPerPage);

    const nextPage = useCallback(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    }, [totalPages]);

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    useEffect(() => {
        const interval = setInterval(nextPage, 6000);
        return () => clearInterval(interval);
    }, [nextPage]);

    const currentReviews = featuredReviews.slice(
        currentPage * reviewsPerPage,
        (currentPage + 1) * reviewsPerPage
    );

    return (
        <section id="depoimentos" className="py-24 bg-gray-50 bg-dots relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Google Reviews Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-premium border border-gray-100/50 mb-8">
                        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        <div className="flex items-center gap-1.5">
                            <span className="text-2xl font-extrabold text-gray-900">5.0</span>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                        </div>
                        <div className="w-[1px] h-6 bg-gray-200" />
                        <span className="text-sm text-gray-500 font-medium">{googleReviews.length} avaliações</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 mb-4 tracking-tight">
                        O QUE MEUS ALUNOS DIZEM
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
                        Avaliações reais de quem treina presencialmente comigo — direto do Google.
                    </p>
                </motion.div>

                {/* Featured Reviews Carousel */}
                <div className="relative max-w-6xl mx-auto mb-8">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={prevPage}
                            className="hidden md:flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-premium border border-gray-100/50 hover:shadow-premium-lg transition-all shrink-0"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-600" />
                        </button>

                        <div className="flex-1 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentPage}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.3 }}
                                    className="grid md:grid-cols-3 gap-5"
                                >
                                    {currentReviews.map((review, index) => {
                                        const colorIndex = (currentPage * reviewsPerPage + index) % avatarColors.length;
                                        return (
                                            <motion.div
                                                key={index}
                                                className="flex flex-col p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-premium border border-gray-100/50 hover:shadow-premium-lg transition-all duration-300 relative"
                                            >
                                                {/* Quote icon */}
                                                <Quote className="w-8 h-8 text-primary/[0.07] absolute top-4 right-4" />

                                                {/* Header */}
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${avatarColors[colorIndex]} flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
                                                        {review.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                                                        <div className="flex gap-0.5">
                                                            {[...Array(5)].map((_, i) => (
                                                                <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <svg viewBox="0 0 24 24" className="w-5 h-5 ml-auto opacity-30" fill="none">
                                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                                    </svg>
                                                </div>
                                                {/* Text */}
                                                <p className="text-gray-600 text-sm leading-relaxed flex-1">&quot;{review.text}&quot;</p>
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <button
                            onClick={nextPage}
                            className="hidden md:flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-premium border border-gray-100/50 hover:shadow-premium-lg transition-all shrink-0"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i)}
                                className={`h-2 rounded-full transition-all duration-300 ${i === currentPage ? "bg-primary w-8" : "bg-gray-300 w-2"}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Scrolling mini-reviews ticker */}
                <div className="overflow-hidden mb-20 py-4">
                    <motion.div
                        animate={{ x: [0, -1500] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="flex gap-3 whitespace-nowrap"
                    >
                        {[...googleReviews, ...googleReviews].map((review, i) => (
                            <div key={i} className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm border border-gray-100/50 shrink-0">
                                <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white font-bold text-[10px]`}>
                                    {review.name.charAt(0)}
                                </div>
                                <span className="text-sm font-medium text-gray-700">{review.name}</span>
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, j) => (
                                        <Star key={j} className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Impact Numbers */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {impactNumbers.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-premium border border-gray-100/50"
                            >
                                <div className={`p-3 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg mb-4`}>
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-3xl font-extrabold text-gray-900 mb-1 font-display">
                                    <AnimatedCounter value={item.value} suffix={item.value.includes("%") ? "%" : item.value.includes("+") ? "+" : ""} />
                                </h4>
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">{item.text}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
