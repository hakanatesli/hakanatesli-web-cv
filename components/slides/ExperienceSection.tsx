"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import ProjectCard from "@/components/ui/ProjectCard";
import { companies } from "@/data/mock";

function getZoomScale(): number {
  if (typeof window === "undefined") return 3;
  return window.innerWidth < 768 ? 2.2 : 3.5;
}

function getCompanyPosition(index: number, total: number): number {
  if (total === 1) return 50;
  if (total === 2) return index === 0 ? 30 : 70;
  if (total === 3) return [15, 50, 85][index];
  return 10 + (80 * index) / (total - 1);
}

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const projectRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const container = containerRef.current;
    const viewport = viewportRef.current;
    const overlay = overlayRef.current;
    const line = lineRef.current;
    if (!container || !viewport || !overlay || !line) return;

    const ctx = gsap.context(() => {
      const totalProjects = companies.reduce(
        (acc, c) => acc + c.projects.length,
        0
      );
      // 1.5 for reveal + hold, per company: 0.5 zoom-in + projects + 0.5 zoom-out
      const totalScreens =
        1.5 +
        companies.reduce((acc, c) => acc + c.projects.length + 1, 0) +
        0.5;

      const zoomScale = getZoomScale();
      const vpW = container.offsetWidth;
      const vpH = container.offsetHeight;
      const centerX = vpW / 2;
      const centerY = vpH / 2;

      const companyZoomTargets = nodeRefs.current.map((node) => {
        if (!node) return { x: 0, y: 0 };
        const containerRect = container.getBoundingClientRect();
        const nodeRect = node.getBoundingClientRect();
        const nodeRelX =
          nodeRect.left + nodeRect.width / 2 - containerRect.left;
        const nodeRelY =
          nodeRect.top + nodeRect.height / 2 - containerRect.top;
        return {
          x: zoomScale * (centerX - nodeRelX),
          y: zoomScale * (centerY - nodeRelY),
        };
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${totalScreens * window.innerHeight}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Phase: Section title reveal
      tl.fromTo(
        ".experience-title",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );

      // Phase: Timeline line draw
      tl.to(line, { scaleX: 1, duration: 0.6, ease: "power2.out" }, "-=0.1");

      // Phase: Nodes reveal with stagger
      nodeRefs.current.forEach((node, i) => {
        if (!node) return;
        tl.to(
          node,
          { opacity: 1, scale: 1, duration: 0.25, ease: "back.out(1.7)" },
          i === 0 ? "-=0.3" : "-=0.1"
        );
      });

      // Hold to let user see the full timeline
      tl.to({}, { duration: 0.5 });

      // Phase: Company deep-dives
      companies.forEach((company, companyIdx) => {
        const nodeEl = nodeRefs.current[companyIdx];
        const circle = nodeEl?.querySelector(".node-circle");
        const target = companyZoomTargets[companyIdx];

        // Highlight active company node
        if (circle) {
          tl.to(circle, {
            borderColor: "#0d9af2",
            boxShadow: "0 0 20px rgba(13,154,242,0.5)",
            scale: 1.5,
            duration: 0.2,
            ease: "power2.out",
          });
        }

        // Zoom into company
        tl.to(
          viewport,
          {
            scale: zoomScale,
            x: target.x,
            y: target.y,
            duration: 0.5,
            ease: "power2.inOut",
          },
          "-=0.1"
        );

        // Fade in overlay
        tl.to(
          overlay,
          { opacity: 1, duration: 0.3, ease: "power2.out" },
          "-=0.3"
        );

        // Fade out section title during zoom
        tl.to(
          ".experience-title",
          { opacity: 0, duration: 0.2 },
          `-=${0.5}`
        );

        // Show each project (sırayla: 1, 2, 3...)
        company.projects.forEach((_, projIdx) => {
          const key = `${company.id}-${projIdx}`;
          const el = projectRefs.current[key];
          if (!el) return;

          // Aktif projeyi en üste getir (z-index ile doğru sıra garanti)
          tl.set(el, { zIndex: 10 });

          // Fade in project card
          tl.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.2,
            ease: "power2.out",
          });

          // Hold for reading
          tl.to({}, { duration: 0.8 });

          // Fade out project card
          tl.to(el, {
            opacity: 0,
            y: -30,
            duration: 0.2,
            ease: "power2.in",
          });

          // Fade out sonrası z-index sıfırla (sonraki proje üste çıksın)
          tl.set(el, { zIndex: 0 });
        });

        // Fade out overlay
        tl.to(overlay, { opacity: 0, duration: 0.3, ease: "power2.in" });

        // Zoom out
        tl.to(
          viewport,
          {
            scale: 1,
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "power2.inOut",
          },
          "-=0.2"
        );

        // Restore title
        tl.to(
          ".experience-title",
          { opacity: 1, duration: 0.2 },
          "-=0.3"
        );

        // Mark company as visited (emerald)
        if (circle) {
          tl.to(
            circle,
            {
              borderColor: "#10b981",
              boxShadow: "0 0 12px rgba(16,185,129,0.35)",
              backgroundColor: "rgba(16,185,129,0.15)",
              scale: 1.2,
              duration: 0.25,
            },
            "-=0.4"
          );
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id="experience"
      className="relative h-screen w-screen overflow-hidden bg-background-dark"
    >
      {/* Section title */}
      <div className="experience-title absolute top-12 left-0 right-0 z-10 text-center pointer-events-none opacity-0">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-2">
          Career Timeline
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
          Experience
        </h2>
      </div>

      {/* Timeline viewport — transformed for zoom */}
      <div
        ref={viewportRef}
        className="absolute inset-0 flex items-center justify-center will-change-transform"
        style={{ transformOrigin: "50% 50%" }}
      >
        <div className="relative w-[85%] max-w-[950px]" style={{ height: 2 }}>
          {/* Timeline line */}
          <div
            ref={lineRef}
            className="absolute inset-0 origin-left scale-x-0 timeline-line-bg"
          />

          {/* Company nodes */}
          {companies.map((company, i) => {
            const pos = getCompanyPosition(i, companies.length);
            return (
              <div
                key={company.id}
                ref={(el) => {
                  nodeRefs.current[i] = el;
                }}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 scale-75"
                style={{ left: `${pos}%` }}
              >
                <div className="node-circle h-4 w-4 rounded-full border-2 border-muted-subtle bg-background-dark transition-colors duration-300" />

                {/* Info above the line */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 md:mb-6 text-center whitespace-nowrap">
                  <p className="text-[8px] md:text-[10px] font-mono tracking-widest text-muted-subtle mb-1">
                    {company.startYear} — {company.endYear ?? "Present"}
                  </p>
                  <p className="text-xs md:text-sm font-bold text-foreground">
                    {company.name}
                  </p>
                </div>

                {/* Info below the line */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 md:mt-6 text-center whitespace-nowrap">
                  <p className="text-[10px] md:text-xs text-muted">{company.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dark overlay during project view */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-background-dark/90 opacity-0 pointer-events-none z-20"
      />

      {/* Project cards layer - her proje sırayla (1,2,3) gösterilir, z-index ile üstte tutulur */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {companies.map((company) =>
          company.projects.map((project, j) => {
            const key = `${company.id}-${j}`;
            return (
            <div
              key={project.id}
              ref={(el) => {
                projectRefs.current[key] = el;
              }}
              data-company-id={company.id}
              data-project-index={j}
              className="absolute inset-0 flex items-center justify-center"
              style={{ opacity: 0, transform: "translateY(40px)" }}
            >
              <ProjectCard
                project={project}
                company={company}
                projectIndex={j}
                totalProjects={company.projects.length}
              />
            </div>
            );
          })
        )}
      </div>
    </div>
  );
}
