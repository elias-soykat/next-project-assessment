import { cn } from "@/lib/utils";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  className?: string;
  imagePosition?: "top" | "bottom";
  onClick?: () => void;
}

export default function Card({
  title,
  description,
  imageUrl,
  className,
  imagePosition = "top",
  onClick,
}: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden card-hover glass-card animate-fade-in",
        className
      )}
      onClick={onClick}
    >
      {imageUrl && imagePosition === "top" && (
        <div className="w-full h-48 overflow-hidden">
          <Image
            width={800}
            height={800}
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-medium mb-2 tracking-tight">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {imageUrl && imagePosition === "bottom" && (
        <div className="w-full h-48 overflow-hidden">
          <Image
            width={800}
            height={800}
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}
