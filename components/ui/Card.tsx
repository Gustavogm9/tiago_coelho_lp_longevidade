"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    variant?: "default" | "highlight" | "bordered";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ children, variant = "default", className = "", ...props }, ref) => {
        const baseStyles = "bg-white/90 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500";

        const variants = {
            default: "shadow-premium hover:shadow-premium-lg border border-gray-100/80",
            highlight: "shadow-premium-lg border-2 border-accent/30 relative z-10 hover:border-accent/50",
            bordered: "border border-gray-200/80 hover:border-primary/20 hover:shadow-premium",
        };

        return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`${baseStyles} ${variants[variant]} ${className}`}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);

Card.displayName = "Card";
