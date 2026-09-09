"use client";

import Image from "next/image";
import { MouseEvent, PointerEvent, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { GlowCard } from "@/components/ui/spotlight-card";

type Project = {
  title: string;
  label: string;
  description: string;
  highlights: string[];
  architecture: string[];
  role: string[];
  stack: string[];
  thumbnail?: string;
  href: string;
  glowColor: "blue" | "purple" | "green" | "red" | "orange";
};

type ProjectCarouselProps = {
  projects: Project[];
};

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLButtonElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const dragState = useRef({ left: 0, x: 0, moved: false });

  useEffect(() => {
    if (!activeProject) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [activeProject]);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;

    setIsDragging(true);
    dragState.current = {
      left: scrollRef.current.scrollLeft,
      x: event.clientX,
      moved: false,
    };
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;

    const distance = event.clientX - dragState.current.x;
    if (Math.abs(distance) > 6) {
      if (!dragState.current.moved) {
        scrollRef.current.setPointerCapture(event.pointerId);
      }
      dragState.current.moved = true;
    }
    scrollRef.current.scrollLeft = dragState.current.left - distance;
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    if (scrollRef.current?.hasPointerCapture(event.pointerId)) {
      scrollRef.current.releasePointerCapture(event.pointerId);
    }
  };

  const preventClickAfterDrag = (event: MouseEvent<HTMLAnchorElement>) => {
    if (dragState.current.moved) {
      event.preventDefault();
    }
  };

  const openDetails = (
    event: MouseEvent<HTMLButtonElement>,
    project: Project,
  ) => {
    event.preventDefault();
    event.stopPropagation();
    previousFocusRef.current = event.currentTarget;
    setActiveProject(project);
  };

  const closeDetails = () => setActiveProject(null);

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
          <div
            key={project.title}
            className="group relative block min-w-[82%] snap-start sm:min-w-[48%] lg:min-w-[calc((100%-2.5rem)/3)]"
          >
            <GlowCard
              customSize
              glowColor={project.glowColor}
              className="h-[560px] w-full border-white/60 bg-white/80 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_1.5rem_3rem_-1.5rem_rgba(24,33,27,0.55)] group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-4 group-focus-visible:outline-[#1f6f5b]"
            >
              <a
                href={project.href}
                className="absolute inset-0 z-10 rounded-lg outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1f6f5b]"
                onClick={preventClickAfterDrag}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={`Open ${project.title} project`}
              />
              <div className="pointer-events-none relative z-20 flex h-full flex-col">
                <div className="relative min-h-40 overflow-hidden rounded-md bg-[#eef2e8]/82 backdrop-blur">
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={`${project.title} thumbnail`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 48vw, 82vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex min-h-40 flex-col justify-between p-5">
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
                  )}
                  <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-4 bg-gradient-to-b from-black/58 to-transparent p-5 text-white">
                    <p className="text-sm font-semibold">{project.label}</p>
                    <span className="text-sm font-bold uppercase tracking-[0.14em]">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col pt-6">
                  <h3 className="text-2xl font-semibold text-[#111711]">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#566153]">{project.description}</p>
                  {project.highlights[0] ? (
                    <p className="mt-5 border-l-2 border-[#a8cdb8] bg-[#f5f6f0] px-3 py-2 text-sm font-medium leading-6 text-[#2f3d31]">
                      {project.highlights[0]}
                    </p>
                  ) : null}

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
                    <button
                      type="button"
                      className="pointer-events-auto relative z-30 mt-6 inline-flex border-b border-[#1f6f5b]/40 pb-1 text-sm font-semibold text-[#1f6f5b] transition hover:border-[#1f6f5b] hover:text-[#174f42] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1f6f5b]"
                      onPointerDown={(event) => event.stopPropagation()}
                      onClick={(event) => openDetails(event, project)}
                      aria-haspopup="dialog"
                    >
                      View details
                    </button>
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        ))}
      </div>

      {activeProject ? createPortal(
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-[#101711]/70 px-4 py-8 backdrop-blur-sm sm:px-8 sm:py-12"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeDetails();
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="mx-auto w-full max-w-5xl border-2 border-[#18211b] bg-[#fbfcf7] p-6 text-[#20231f] shadow-[0_2rem_6rem_rgba(0,0,0,0.4)] sm:p-8"
          >
            <div className="flex items-start justify-between gap-6 border-b border-[#8d938b] pb-6">
              <div>
                <p className="text-sm font-semibold text-[#5d655b]">
                  {activeProject.label}
                </p>
                <h2
                  id="project-dialog-title"
                  className="mt-2 text-4xl font-bold tracking-tight text-[#181b18] sm:text-5xl"
                >
                  {activeProject.title}
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeDetails}
                className="shrink-0 border border-[#a7aca5] bg-white px-4 py-2 text-sm font-bold transition hover:border-[#18211b] hover:bg-[#eef2e8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f6f5b]"
              >
                Close
              </button>
            </div>

            <p className="max-w-4xl py-6 text-base leading-7 text-[#353a34] sm:text-lg sm:leading-8">
              {activeProject.description}
            </p>

            <div className="grid gap-8 md:grid-cols-2 md:gap-10">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#252925]">
                  Architecture
                </h3>
                <ul className="mt-3 border-t border-[#c8ccc6]">
                  {activeProject.architecture.map((item) => (
                    <li
                      key={item}
                      className="border-b border-[#d4d7d2] py-3 text-sm leading-6 sm:text-base"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#252925]">
                  My role
                </h3>
                <ul className="mt-3 border-t border-[#c8ccc6]">
                  {activeProject.role.map((item) => (
                    <li
                      key={item}
                      className="border-b border-[#d4d7d2] py-3 text-sm leading-6 sm:text-base"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-5 border-t border-[#8d938b] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-2">
                {activeProject.stack.map((item) => (
                  <span
                    key={item}
                    className="border border-[#d0d5cc] bg-[#eef2e8] px-2.5 py-1 text-xs font-medium text-[#4f5a4d]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <a
                href={activeProject.href}
                target={activeProject.href.startsWith("http") ? "_blank" : undefined}
                rel={activeProject.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="shrink-0 text-sm font-bold text-[#1f6f5b] underline decoration-[#1f6f5b]/40 underline-offset-4 hover:decoration-[#1f6f5b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1f6f5b]"
              >
                Visit project ↗
              </a>
            </div>
          </section>
        </div>,
        document.body,
      ) : null}
    </div>
  );
}
