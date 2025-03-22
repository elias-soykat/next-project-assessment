import Card from "@/components/Card";
import GradientButton from "@/components/GradientButton";
import PageLayout from "@/components/PageLayout";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <PageLayout>
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Beautiful Minimalist Design
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Explore our collection of React components with clean design and
            smooth animations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/users">
              <GradientButton size="lg">See User Data</GradientButton>
            </Link>
            <Link href="/buttons">
              <GradientButton variant="outline" size="lg">
                Button Showcase
              </GradientButton>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Featured Components
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Reusable Card Component"
            description="A versatile card component that accepts title, description, and image props with elegant hover animations."
            imageUrl="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
          />

          <Card
            title="Data Fetching"
            description="Fetch and display user data from an API with loading states and responsive grid layout."
            imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
          />

          <Card
            title="Theme Switching"
            description="Toggle between light and dark modes with smooth transitions and persistent preferences."
            imageUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to explore?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Check out our portfolio section with interactive flip cards.
          </p>
          <Link href="/portfolio">
            <GradientButton className="group">
              <span className="flex items-center">
                View Portfolio
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </GradientButton>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
