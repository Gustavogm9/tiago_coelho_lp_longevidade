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
        const baseStyles = "inline-flex items-center justify-center font-bold transition-colors rounded-full focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

        const variants = {
            primary: "bg-accent text-white hover:bg-orange-600 shadow-lg shadow-orange-500/30",
            secondary: "bg-primary text-white hover:bg-blue-900 shadow-lg shadow-blue-900/30",
            accent: "bg-success text-white hover:bg-green-600 shadow-lg shadow-green-500/30",
            outline: "border-2 border-primary text-primary hover:bg-primary/10",
            ghost: "text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800",
        };

        const sizes = {
            sm: "text-sm px-4 py-2",
            md: "text-base px-6 py-3",
            lg: "text-lg px-8 py-4",
            xl: "text-xl px-12 py-5", // For main CTAs
        };

        const width = fullWidth ? "w-full" : "";

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02, y: -2 }}
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
