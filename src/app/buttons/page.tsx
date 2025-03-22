import GradientButton from "@/components/GradientButton";
import PageLayout from "@/components/PageLayout";
import {
  ArrowRight,
  ChevronRight,
  Download,
  Heart,
  Settings,
} from "lucide-react";

export default function ButtonsPage() {
  return (
    <PageLayout>
      <h1 className="text-3xl font-bold tracking-tight mb-8">
        Button Showcase
      </h1>

      <div className="space-y-12">
        <section className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8">
          <h2 className="text-xl font-medium mb-6">Gradient Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <GradientButton size="sm">Small Button</GradientButton>
            <GradientButton>Medium Button</GradientButton>
            <GradientButton size="lg">Large Button</GradientButton>
            <GradientButton disabled>Disabled</GradientButton>
          </div>
        </section>

        <section className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8">
          <h2 className="text-xl font-medium mb-6">Button Variants</h2>
          <div className="flex flex-wrap gap-4">
            <GradientButton>Default</GradientButton>
            <GradientButton variant="outline">Outline</GradientButton>
            <GradientButton variant="ghost">Ghost</GradientButton>
          </div>
        </section>

        <section className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8">
          <h2 className="text-xl font-medium mb-6">Buttons with Icons</h2>
          <div className="flex flex-wrap gap-4">
            <GradientButton className="flex items-center">
              <ArrowRight className="w-4 h-4 mr-2" />
              Continue
            </GradientButton>

            <GradientButton className="flex items-center" variant="outline">
              Download
              <Download className="w-4 h-4 ml-2" />
            </GradientButton>

            <GradientButton className="flex items-center group">
              Settings
              <Settings className="w-4 h-4 ml-2 group-hover:rotate-45 transition-transform" />
            </GradientButton>

            <GradientButton className="flex items-center" variant="ghost">
              <Heart className="w-4 h-4 mr-2 group-hover:text-red-500 transition-colors" />
              Like
            </GradientButton>
          </div>
        </section>

        <section className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8">
          <h2 className="text-xl font-medium mb-6">Interactive Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <GradientButton className="group">
              <span className="flex items-center">
                Hover me
                <ChevronRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </GradientButton>

            <GradientButton className="relative overflow-hidden transition-all">
              <span className="relative z-10">Click me</span>
            </GradientButton>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
