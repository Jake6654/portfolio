"use client";

import { MouseEvent, PointerEvent, useRef, useState } from "react";
import { GlowCard } from "@/components/ui/spotlight-card";

type Project = {
  title: string;
  label: string;
  description: string;
  highlights: string[];
  stack: string[];
  href: string;
  glowColor: "blue" | "purple" | "green" | "red" | "orange";
};

type ProjectCarouselProps = {
  projects: Project[];
};

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ left: 0, x: 0, moved: false });

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;

    setIsDragging(true);
    dragState.current = {
      left: scrollRef.current.scrollLeft,
      x: event.clientX,
      moved: false,
    };
    scrollRef.current.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;

    const distance = event.clientX - dragState.current.x;
    if (Math.abs(distance) > 6) {
      dragState.current.moved = true;
    }
    scrollRef.current.scrollLeft = dragState.current.left - distance;
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    scrollRef.current?.releasePointerCapture(event.pointerId);
  };

  const preventClickAfterDrag = (event: MouseEvent<HTMLAnchorElement>) => {
    if (dragState.current.moved) {
      event.preventDefault();
    }
  };

  return (
    <div className="relative">
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="text-sm font-medium text-[#566153]">
          Drag sideways to browse more projects
        </p>
        <div className="hidden h-px flex-1 bg-[#d9ded2] sm:block" />
      </div>

      <div
        ref={scrollRef}
        className={`no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 ${
          isDragging ? "cursor-grabbing select-none" : "cursor-grab"
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.href}
            className="group block min-w-[82%] snap-start outline-none sm:min-w-[48%] lg:min-w-[calc((100%-2.5rem)/3)]"
            onClick={preventClickAfterDrag}
            target={project.href.startsWith("http") ? "_blank" : undefined}
            rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={`Open ${project.title} project`}
          >
            <GlowCard
              customSize
              glowColor={project.glowColor}
              className="h-[560px] w-full border-[#d9ded2] bg-white transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_1.5rem_3rem_-1.5rem_rgba(24,33,27,0.55)] group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-4 group-focus-visible:outline-[#1f6f5b]"
            >
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex min-h-40 flex-col justify-between bg-[#eef2e8] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm font-semibold text-[#1f6f5b]">{project.label}</p>
                    <span className="text-sm font-bold uppercase tracking-[0.14em] text-[#7a5349]">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="grid gap-3">
                    <div className="h-3 w-2/3 bg-white" />
                    <div className="h-12 w-full bg-[#1f6f5b]/15 transition group-hover:bg-[#1f6f5b]/25" />
                    <div className="h-3 w-1/2 bg-[#7a5349]/20" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col pt-6">
                  <h3 className="text-2xl font-semibold text-[#111711]">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#566153]">{project.description}</p>

                  <ul className="mt-5 space-y-2 text-sm leading-6 text-[#3f493d]">
                    {project.highlights.slice(0, 2).map((item) => (
                      <li key={item} className="border-l-2 border-[#cbd8c2] pl-3">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 4).map((item) => (
                        <span
                          key={item}
                          className="border border-[#d9ded2] bg-[#f5f6f0] px-2.5 py-1 text-xs text-[#4f5a4d]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <p className="mt-6 inline-flex text-sm font-semibold text-[#1f6f5b]">
                      View details
                    </p>
                  </div>
                </div>
              </div>
            </GlowCard>
          </a>
        ))}
      </div>
    </div>
  );
}
