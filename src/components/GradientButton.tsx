import { cn } from "@/lib/utils";
import React from "react";

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export default function GradientButton({
  children,
  onClick,
  className,
  type = "button",
  disabled = false,
  variant = "default",
  size = "md",
}: GradientButtonProps) {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  const variantClasses = {
    default: "button-gradient text-white shadow-md hover:shadow-lg",
    outline:
      "bg-transparent border-2 border-blue-500 hover:border-purple-600 text-blue-500 hover:text-purple-600",
    ghost:
      "bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-500 hover:text-purple-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "rounded-full font-medium cursor-pointer transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 hover:-translate-y-0.5",
        sizeClasses[size],
        variantClasses[variant],
        disabled && "opacity-50 cursor-not-allowed hover:transform-none",
        className
      )}
    >
      {children}
    </button>
  );
}
