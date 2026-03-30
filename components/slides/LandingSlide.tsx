"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import SlideWrapper from "@/components/ui/SlideWrapper";
import SkillPill from "@/components/ui/SkillPill";
import { personalInfo } from "@/data/mock";

export default function LandingSlide() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const photoSrc =
    personalInfo.photoUrl && !personalInfo.photoUrl.startsWith("http")
      ? `${basePath}${personalInfo.photoUrl}`
      : personalInfo.photoUrl;

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const ctx = gsap.context(() => {
      gsap.to(content, {
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        opacity: 0,
        scale: 0.85,
        y: -80,
        ease: "none",
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <SlideWrapper ref={sectionRef} id="landing" className="neural-bg">
      <div className="gradient-overlay absolute inset-0 pointer-events-none" />

      <div
        ref={contentRef}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 will-change-transform"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
          </span>
          <span className="text-xs font-medium tracking-wide text-foreground-muted">
            Available for new projects
          </span>
        </motion.div>

        {photoSrc && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="mb-6 relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-2 ring-primary/30 ring-offset-2 ring-offset-background shadow-xl"
          >
            <img
              src={photoSrc}
              alt={`${personalInfo.name} ${personalInfo.surname}`}
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          className="text-center text-6xl md:text-8xl font-black tracking-tighter text-foreground"
        >
          {personalInfo.name}
          <br />
          <span className="text-primary">{personalInfo.surname}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          className="mt-4 text-xl md:text-3xl font-light tracking-wide text-muted"
        >
          {personalInfo.title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {personalInfo.skills.map((skill, i) => (
            <SkillPill key={skill} label={skill} delay={0.9 + i * 0.1} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-12 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-subtle">
            Scroll to explore
          </span>
          <ChevronDown className="h-5 w-5 animate-bounce text-muted-soft" />
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
