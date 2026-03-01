"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
    size?: "sm" | "md" | "lg" | "xl";
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            variant = "primary",
            size = "md",
            isLoading = false,
            leftIcon,
            rightIcon,
            fullWidth = false,
            className = "",
            disabled,
            ...props
        },
        ref
    ) => {
        const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-2xl focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed tracking-wide";

        const variants = {
            primary: "bg-gradient-to-r from-accent to-accent-dark text-white shadow-premium-accent hover:shadow-lg",
            secondary: "bg-gradient-to-r from-primary to-primary-light text-white shadow-premium-primary hover:shadow-lg",
            accent: "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/20 hover:shadow-green-500/30",
            outline: "border-2 border-primary text-primary hover:bg-primary/5",
            ghost: "text-gray-600 hover:bg-gray-100",
        };

        const sizes = {
            sm: "text-sm px-5 py-2.5",
            md: "text-base px-6 py-3",
            lg: "text-lg px-8 py-4",
            xl: "text-xl px-12 py-5",
        };

        const width = fullWidth ? "w-full" : "";

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
                disabled={isLoading || disabled}
                {...props}
            >
                {isLoading && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
                {!isLoading && leftIcon && <div className="mr-2">{leftIcon}</div>}
                {children}
                {!isLoading && rightIcon && <div className="ml-2">{rightIcon}</div>}
            </motion.button>
        );
    }
);

Button.displayName = "Button";
