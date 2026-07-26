"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.18,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const headlineWords = "Building AI-powered web platforms with cloud-ready engineering.".split(" ");

export function AnimatedHeroIntro() {
  return (
    <motion.div
      className="flex flex-col justify-center"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.p
        variants={item}
        className="mb-5 w-fit border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-semibold uppercase tracking-[0.14em] text-[#d6c2b9] backdrop-blur-xl"
      >
        Full-stack developer / UVA Computer Science
      </motion.p>

      <h1
        className="max-w-4xl text-5xl font-semibold leading-[1.04] text-white sm:text-6xl lg:text-6xl xl:text-7xl"
        aria-label="Building AI-powered web platforms with cloud-ready engineering."
      >
        {headlineWords.map((word, index) => (
          <span key={`${word}-${index}`}>
            <motion.span
              aria-hidden="true"
              className="mr-[0.24em] inline-block"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 28,
                  rotateX: -18,
                  filter: "blur(10px)",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.68,
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.045,
                  },
                },
              }}
            >
              {word}
            </motion.span>{" "}
          </span>
        ))}
      </h1>

      <motion.p variants={item} className="mt-7 max-w-3xl text-lg leading-8 text-[#dce8d9]">
        I am Jae-Hyuk Chang, a Computer Science student at the University of Virginia
        focused on full-stack development, cloud computing, and AI-driven product
        experiences. My work spans Next.js frontends, Spring Boot and FastAPI backends,
        Dockerized services, and AWS-oriented systems.
      </motion.p>

      <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          className="inline-flex h-12 items-center justify-center bg-[#1f6f5b] px-6 text-sm font-semibold text-white transition hover:bg-[#185846]"
          href="#projects"
        >
          View Projects
        </a>
        <a
          className="inline-flex h-12 items-center justify-center border border-[#bfc8ba] bg-white px-6 text-sm font-semibold text-[#18211b] transition hover:border-[#1f6f5b]"
          href="#contact"
        >
          Contact Me
        </a>
      </motion.div>
    </motion.div>
  );
}
