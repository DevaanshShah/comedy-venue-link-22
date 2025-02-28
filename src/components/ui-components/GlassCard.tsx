
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "neo" | "solid";
  animationDelay?: number;
}

const GlassCard = ({ 
  children, 
  className, 
  variant = "default",
  animationDelay = 0
}: GlassCardProps) => {
  const baseStyles = "rounded-xl overflow-hidden transition-all duration-500 ease-out animate-fade-in";
  
  const variantStyles = {
    default: "glass-card hover:bg-white/10",
    neo: "neo-card hover:bg-black/50",
    solid: "bg-card text-card-foreground shadow-md hover:shadow-lg"
  };

  return (
    <div 
      className={cn(baseStyles, variantStyles[variant], className)}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {children}
    </div>
  );
};

export default GlassCard;
