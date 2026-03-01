"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5517992755039?text=Ol%C3%A1%20Tiago%2C%20vim%20pelo%20site%20e%20quero%20agendar%20uma%20aula%20experimental!";

export const StickyCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > window.innerHeight * 0.8);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass border-t border-gray-200/50 px-4 py-3 shadow-premium-lg"
                >
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block">
                        <Button
                            size="lg"
                            variant="accent"
                            className="w-full text-base animate-pulse-glow"
                            leftIcon={<MessageCircle className="w-5 h-5" />}
                        >
                            AGENDAR AULA EXPERIMENTAL
                        </Button>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
