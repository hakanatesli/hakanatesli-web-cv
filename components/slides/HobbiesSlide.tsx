"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import SlideWrapper from "@/components/ui/SlideWrapper";
import HobbyCard from "@/components/ui/HobbyCard";
import { hobbies } from "@/data/mock";

export default function HobbiesSlide() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".hobby-title", {
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.from(".hobby-card", {
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        scale: 0.9,
        y: 20,
        stagger: 0.08,
        duration: 0.5,
        ease: "power2.out",
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <SlideWrapper ref={sectionRef} id="hobbies" className="neural-bg">
      <div className="relative z-10 flex h-full flex-col items-center justify-start md:justify-center overflow-y-auto px-4 py-8 md:px-20 md:py-0">
        <div className="hobby-title text-center mb-6 md:mb-10">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-2">
            Personal Odyssey
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Interests & Beyond
          </h2>
        </div>

        <div className="grid w-full max-w-[1000px] grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[130px] md:auto-rows-[170px] pb-4 md:pb-0">
          {hobbies.map((hobby) => (
            <div
              key={hobby.id}
              className={`hobby-card ${hobby.colSpan === 2 ? "col-span-2 md:col-span-2" : ""} ${
                hobby.rowSpan === 2 ? "md:row-span-2" : ""
              }`}
            >
              <HobbyCard hobby={hobby} />
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
