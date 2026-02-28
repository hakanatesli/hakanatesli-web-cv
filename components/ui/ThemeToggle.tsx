"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Gündüz moduna geç" : "Gece moduna geç"}
      className="fixed left-4 top-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background-card text-muted transition-all duration-300 hover:border-primary/30 hover:text-primary hover:bg-primary/5"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}
