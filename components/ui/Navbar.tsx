"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

const navItems = [
    { label: "Método", id: "solution" },
    { label: "Depoimentos", id: "depoimentos" },
    { label: "Sobre", id: "sobre" },
    { label: "FAQ", id: "faq" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "glass shadow-premium py-2"
                    : "bg-transparent py-5"
                    }`}
            >
                <div className="container px-4 mx-auto flex items-center justify-between">

                    {/* Logo */}
                    <div
                        className="cursor-pointer"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <img src="/logo.png" alt="Tiago Coelho" className={`w-auto transition-all duration-300 ${isScrolled ? "h-14" : "h-20"}`} />
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-sm font-semibold transition-all duration-300 hover:text-accent relative group ${isScrolled ? "text-gray-600" : "text-white/90 hover:text-white"}`}
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full rounded-full" />
                            </button>
                        ))}
                        <Button
                            size="sm"
                            variant={isScrolled ? "primary" : "accent"}
                            onClick={() => scrollToSection("pricing")}
                        >
                            Começar Agora
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
                        ) : (
                            <Menu className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-28 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-4 text-center">
                            {navItems.map((item, i) => (
                                <motion.button
                                    key={item.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-xl font-semibold text-gray-900 py-3 hover:text-primary transition-colors"
                                >
                                    {item.label}
                                </motion.button>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Button
                                    size="lg"
                                    variant="primary"
                                    className="w-full mt-4"
                                    onClick={() => scrollToSection("pricing")}
                                >
                                    Começar Agora
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
