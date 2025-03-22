"use client";

import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageLayout({ children, className }: LayoutProps) {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Users", path: "/users" },
    { name: "Buttons", path: "/buttons" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 ease-in-out">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 py-1 dark:bg-black/80 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-lg font-medium tracking-tight hover:opacity-80 transition-opacity"
              >
                Minimalist
              </Link>
            </div>

            <nav className="hidden md:flex space-x-8 sm:space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "transition-colors hover:text-blue-600 dark:hover:text-blue-400",
                    pathname === item.path
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center">
              <button
                onClick={toggleTheme}
                className={cn(
                  "p-2 rounded-full cursor-pointer transition-all duration-300 ease-out",
                  theme === "dark"
                    ? "bg-gray-800 text-yellow-300 hover:bg-gray-700"
                    : "bg-blue-100 text-blue-800 hover:bg-blue-200",
                  className
                )}
                aria-label={`Switch to ${
                  theme === "light" ? "dark" : "light"
                } mode`}
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 animate-scale-in" />
                ) : (
                  <Moon className="w-5 h-5 animate-scale-in" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main
        className={cn(
          "flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12",
          className
        )}
      >
        <div className="animate-fade-in">{children}</div>
      </main>

      <footer className="py-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Minimalist Design. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
