"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
}

export const AccordionItem = ({ title, children, isOpen, onToggle }: AccordionItemProps) => {
    return (
        <div className="border-b border-gray-200">
            <button
                onClick={onToggle}
                className="flex items-center justify-between w-full py-4 text-left focus:outline-none group"
            >
                <span className={`text-lg font-medium transition-colors ${isOpen ? "text-primary" : "text-gray-900 group-hover:text-primary"}`}>
                    {title}
                </span>
                <div className={`p-1 rounded-full bg-gray-100 transition-colors ${isOpen ? "bg-primary text-white" : "text-gray-500"}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-4 text-gray-600 leading-relaxed">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
