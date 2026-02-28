"use client";

import Image from "next/image";
import type { Hobby } from "@/data/mock";
import {
  Sailboat,
  Trophy,
  Compass,
  PenTool,
  Heart,
  MapPin,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sailboat,
  Trophy,
  Compass,
  PenTool,
  Heart,
  MapPin,
};

interface HobbyCardProps {
  hobby: Hobby;
}

export default function HobbyCard({ hobby }: HobbyCardProps) {
  const Icon = iconMap[hobby.icon];
  const isLarge = hobby.colSpan === 2 && hobby.rowSpan === 2;

  return (
    <div className="group relative flex h-full overflow-hidden rounded-xl border border-border transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
      <Image
        src={hobby.imageUrl}
        alt={hobby.title}
        fill
        sizes={isLarge ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-opacity duration-300 group-hover:from-black/85 group-hover:via-black/40" />

      {hobby.badge && (
        <span className="absolute top-3 right-3 z-10 rounded-full bg-primary/90 px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-white backdrop-blur-sm">
          {hobby.badge}
        </span>
      )}

      <div className="relative z-10 mt-auto flex w-full flex-col p-5">
        <div className="mb-1 flex items-center gap-2.5">
          {Icon && (
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/20 backdrop-blur-sm">
              <Icon className="h-3.5 w-3.5 text-primary" />
            </div>
          )}
          <h4 className="text-base font-bold tracking-tight text-white md:text-lg">
            {hobby.title}
          </h4>
        </div>

        <p
          className={`mt-1 text-sm leading-relaxed text-white/70 ${
            isLarge ? "line-clamp-3" : "line-clamp-2"
          }`}
        >
          {hobby.description}
        </p>
      </div>
    </div>
  );
}
