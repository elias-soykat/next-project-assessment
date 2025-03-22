import PageLayout from "@/components/PageLayout";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function PortfolioPage() {
  const portfolioItems = [
    {
      id: 1,
      title: "Modern Dashboard",
      description:
        "A clean, minimalist dashboard design with data visualization charts and responsive layouts for admin interfaces.",
      imageUrl:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description:
        "A fully responsive e-commerce platform with product listings, cart functionality, and checkout process.",
      imageUrl:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Mobile App Interface",
      description:
        "User interface design for a productivity mobile application with clean, intuitive navigation.",
      imageUrl:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A designer portfolio website showcasing projects with smooth animations and transitions.",
      imageUrl:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Portfolio</h1>
        <p className="text-muted-foreground mb-8">
          Hover over the cards to see the flip animation and reveal more
          details.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={cn("flip-card h-80 w-full animate-fade-in")}
            >
              <div className="flip-card-inner relative w-full h-full">
                {/* Front of the card */}
                <div className="flip-card-front absolute w-full h-full rounded-2xl overflow-hidden glass-card">
                  <Image
                    width={800}
                    height={800}
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-medium mb-2 tracking-tight text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Back of the card */}
                <div className="flip-card-back absolute w-full h-full glass-card rounded-2xl overflow-hidden p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-medium mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
