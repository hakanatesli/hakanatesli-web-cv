"use client";

import type { Project, Company } from "@/data/mock";
import { Target } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  company: Company;
  projectIndex: number;
  totalProjects: number;
}

export default function ProjectCard({
  project,
  company,
  projectIndex,
  totalProjects,
}: ProjectCardProps) {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 md:px-6">
      <div className="rounded-xl border border-border bg-background-card/80 backdrop-blur-md p-5 md:p-10 max-h-[85vh] overflow-y-auto">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary">
              {company.name}
            </p>
            <p className="mt-1 text-xs text-muted-soft">
              {company.role} &middot; {company.period}
            </p>
          </div>
          <span className="text-xs font-mono text-muted-subtle">
            {projectIndex + 1}/{totalProjects}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground mb-4">
          {project.title}
        </h3>

        <p className="text-sm md:text-base text-foreground-muted leading-relaxed mb-6">
          {project.problem}
        </p>

        <div className="mb-6">
          <p className="text-xs font-bold tracking-widest uppercase text-muted-soft mb-3">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border bg-icon-bg px-3 py-1 text-xs font-medium text-foreground-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-emerald/20 bg-emerald/5 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Target className="h-4 w-4 text-emerald" />
            <span className="text-xs font-bold tracking-widest uppercase text-emerald">
              Business Impact
            </span>
          </div>
          <p className="text-sm text-foreground-muted leading-relaxed">
            {project.impact}
          </p>
        </div>
      </div>
    </div>
  );
}
