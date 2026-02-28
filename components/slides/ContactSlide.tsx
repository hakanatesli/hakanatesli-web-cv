"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import SlideWrapper from "@/components/ui/SlideWrapper";
import ContactCard from "@/components/ui/ContactCard";
import { contactItems, personalInfo } from "@/data/mock";

export default function ContactSlide() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".contact-title", {
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power2.out",
      });

      gsap.from(".contact-card", {
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.from(".contact-footer", {
        scrollTrigger: {
          trigger: section,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <SlideWrapper ref={sectionRef} id="contact">
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 md:px-20">
        <div className="contact-title text-center mb-12">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-base text-muted max-w-md mx-auto">
            Interested in collaboration, data science discussions, or just want
            to say hello? Reach out through any of these channels.
          </p>
        </div>

        <div className="grid w-full max-w-[720px] grid-cols-2 md:grid-cols-4 gap-4">
          {contactItems.map((item) => (
            <div key={item.id} className="contact-card">
              <ContactCard item={item} />
            </div>
          ))}
        </div>

        <div className="contact-footer absolute bottom-8 text-center">
          <p className="text-xs text-muted-subtle">
            &copy; {new Date().getFullYear()} {personalInfo.name}{" "}
            {personalInfo.surname}. Crafted with passion.
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
