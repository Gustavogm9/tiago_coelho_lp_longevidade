"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    variant?: "default" | "highlight" | "bordered";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ children, variant = "default", className = "", ...props }, ref) => {
        const baseStyles = "bg-white rounded-2xl p-6 transition-all duration-300";

        const variants = {
            default: "shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/60 border border-gray-100",
            highlight: "shadow-2xl shadow-orange-500/20 border-2 border-accent relative z-10 hover:shadow-orange-500/30",
            bordered: "border border-gray-200 hover:border-primary/30 hover:shadow-lg",
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
