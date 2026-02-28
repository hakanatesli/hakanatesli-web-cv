"use client";

import type { ContactItem } from "@/data/mock";
import { Linkedin, Github, BarChart3, Mail } from "lucide-react";

function MediumIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Medium"
    >
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Linkedin,
  Github,
  BarChart3,
  Mail,
  Medium: MediumIcon,
};

interface ContactCardProps {
  item: ContactItem;
}

export default function ContactCard({ item }: ContactCardProps) {
  const Icon = iconMap[item.icon];

  return (
    <a
      href={item.url}
      target={item.platform === "Email" ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-background-card px-4 py-6 transition-all duration-300 hover:border-primary hover:bg-primary/5"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-icon-bg text-muted transition-colors duration-300 group-hover:border-primary/30 group-hover:text-primary">
        {Icon && <Icon className="h-5 w-5" />}
      </div>
      <div className="w-full min-w-0 text-center">
        <p className="text-sm font-semibold text-foreground">{item.platform}</p>
        <p className="mt-0.5 truncate text-xs text-muted-soft">{item.handle}</p>
      </div>
    </a>
  );
}
