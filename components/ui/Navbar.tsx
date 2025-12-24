"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

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
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
                    : "bg-transparent py-5"
                    }`}
            >
                <div className="container px-4 mx-auto flex items-center justify-between">

                    {/* Logo */}
                    <div
                        className="cursor-pointer"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <img src="/logo.png" alt="Tiago Coelho" className="h-20 w-auto" />
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {["Método", "Depoimentos", "Sobre", "FAQ"].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase() === "método" ? "solution" : item.toLowerCase())} // mapping simple names to ids
                                className={`text-sm font-medium transition-colors hover:text-accent ${isScrolled ? "text-gray-600" : "text-white/90 hover:text-white"
                                    }`}
                            >
                                {item}
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
                        className="md:hidden p-2 text-gray-600"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className={isScrolled ? "text-gray-900" : "text-white"} />
                        ) : (
                            <Menu className={isScrolled ? "text-gray-900" : "text-white"} />
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6 text-center">
                            {["Método", "Depoimentos", "Sobre", "FAQ"].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase() === "método" ? "solution" : item.toLowerCase())}
                                    className="text-xl font-medium text-gray-900"
                                >
                                    {item}
                                </button>
                            ))}
                            <Button
                                size="lg"
                                variant="primary"
                                className="w-full mt-4"
                                onClick={() => scrollToSection("pricing")}
                            >
                                Começar Agora
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
