"use client";

import { motion, type Variants } from "framer-motion";

const panel: Variants = {
  hidden: {
    opacity: 0,
    x: 36,
    y: 14,
    scale: 0.97,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.78,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.5,
      staggerChildren: 0.12,
      delayChildren: 0.16,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.56,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function AnimatedResumeSnapshot() {
  return (
    <motion.aside
      data-resume-snapshot
      className="min-w-0 self-center border border-white/20 bg-white/10 p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl"
      initial="hidden"
      animate="visible"
      variants={panel}
    >
      <motion.p
        variants={item}
        className="text-sm font-bold uppercase tracking-[0.14em] text-[#d6c2b9]"
      >
        Resume snapshot
      </motion.p>
      <div className="mt-5 space-y-5">
        <motion.div variants={item}>
          <p className="text-3xl font-semibold">University of Virginia</p>
          <p className="mt-2 text-sm leading-6 text-white/70">
            BS in Computer Science, May 2026
          </p>
        </motion.div>
        <motion.div variants={item} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <div className="border border-white/15 bg-white/8 p-4">
            <p className="text-2xl font-semibold">5,000+</p>
            <p className="mt-1 text-sm text-white/70">
              members supported through admin dashboard work
            </p>
          </div>
          <div className="border border-white/15 bg-white/8 p-4">
            <p className="text-2xl font-semibold">AWS</p>
            <p className="mt-1 text-sm text-white/70">
              Solutions Architect and Cloud Practitioner
            </p>
          </div>
        </motion.div>
        <motion.p
          variants={item}
          className="break-words border-t border-white/15 pt-5 text-sm leading-6 text-white/70"
        >
          Next.js / React / TypeScript / Spring Boot / FastAPI / AWS / Docker
        </motion.p>
      </div>
    </motion.aside>
  );
}
