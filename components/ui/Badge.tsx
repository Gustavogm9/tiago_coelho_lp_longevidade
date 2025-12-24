import * as React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: "default" | "success" | "accent" | "outline";
}

export const Badge = ({ variant = "default", className = "", ...props }: BadgeProps) => {
    const baseStyles = "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider";

    const variants = {
        default: "bg-primary text-white",
        success: "bg-green-100 text-green-700",
        accent: "bg-orange-100 text-orange-700",
        outline: "border border-gray-200 text-gray-600",
    };

    return (
        <span className={`${baseStyles} ${variants[variant]} ${className}`} {...props} />
    );
};
