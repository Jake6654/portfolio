import { AnimatedHeroIntro } from "@/components/animated-hero-intro";
import { AnimatedResumeSnapshot } from "@/components/animated-resume-snapshot";
import { ProjectCarousel } from "@/components/project-carousel";
import { AuroraBackground } from "@/components/ui/starfall-portfolio-landing";

const projects = [
  {
    title: "OpsLens",
    label: "Agentic DevOps Platform",
    description:
      "OpsLens is an AI agent-based operations analysis tool that monitors production errors in real time. It helps identify where the issue happened, analyze the possible causes, and suggest what actions to take next.",
    highlights: ["Multi-agent log analysis with fix recommendations."],
    stack: ["Spring Boot", "FastAPI", "LangGraph", "Docker", "GitHub Actions"],
    thumbnail: "/project-thumbnails/opslens.png",
    href: "https://github.com/Jake6654",
    glowColor: "green" as const,
  },
  {
    title: "SketchMyDay",
    label: "AI Journaling Platform",
    description:
      "SketchMyDay is an AI-driven journaling application that transforms users' diary entries into illustrated cartoon panels. I built the entire system end-to-end using Next.js, Spring Boot, Supabase, and a separate FastAPI-based AI service running on a GPU VM.",
    highlights: [
      "End-to-end AI journaling system with a separate GPU-backed FastAPI service.",
    ],
    stack: ["Next.js", "Spring Boot", "Supabase", "FastAPI", "GPU VM"],
    thumbnail: "/project-thumbnails/sketch-my-day.png",
    href: "https://github.com/Jake6654",
    glowColor: "blue" as const,
  },
  {
    title: "Hoos Path",
    label: "Safety Hackathon Project",
    description:
      "Hoos Path helps women find safer routes and walking companions. Users can view nearby flagged areas, create a Walk Together post, and get matched with verified users to walk together safely.",
    highlights: [
      "Built safe-route generation and chat features within a short hackathon timeframe.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Google Maps"],
    thumbnail: "/project-thumbnails/hoo-paths.png",
    href: "https://github.com/Jake6654",
    glowColor: "orange" as const,
  },
  {
    title: "Travel Log",
    label: "AI Travel Journal",
    description:
      "Travel Log is an interactive travel journaling app where users can log visited cities, view destinations on a map, and receive AI-generated destination recommendations based on their travel patterns.",
    highlights: [
      "Combined map-based travel history with AI recommendations and chatbot support.",
    ],
    stack: ["Spring Boot", "Spring AI", "MongoDB", "React", "Google Maps"],
    thumbnail: "/project-thumbnails/travel-log.png",
    href: "https://github.com/Jake6654",
    glowColor: "purple" as const,
  },
  {
    title: "Portfolio Website",
    label: "Personal Site",
    description:
      "A clean developer portfolio built to present full-stack projects, cloud experience, certifications, and contact paths clearly.",
    highlights: [
      "Designed a responsive landing page around resume-backed project evidence.",
      "Built with Next.js, TypeScript, and Tailwind CSS.",
      "Structured sections for scanning by recruiters and collaborators.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    href: "#top",
    glowColor: "red" as const,
  },
];

const experience = [
  {
    role: "Front-End Developer Intern",
    organization: "Korean Central Presbyterian Church",
    meta: "Remote / Feb 2025 - July 2025",
    summary:
      "Implemented a responsive admin dashboard used by 5,000+ members, translating Figma designs into production-ready UI.",
    points: [
      "Built reusable React components and state-driven UI flows with Next.js and Tailwind CSS.",
      "Integrated authenticated backend APIs with error handling and consistent client-side data.",
      "Focused on maintainability, responsive layouts, and production-ready UI behavior.",
    ],
  },
  {
    role: "Research Assistant",
    organization: "University of Virginia",
    meta: "Cloud Computing and LLM Research / Sep 2025 - May 2026",
    summary:
      "Researching cost-efficient cloud platforms that integrate Large Language Models with serverless cloud services.",
    points: [
      "Focused on elastic scaling for LLM workloads to reduce idle GPU usage and infrastructure cost.",
      "Experimenting with deployment pipelines using Docker and Ray.",
      "Evaluating performance trade-offs across different GPU cloud environments.",
    ],
  },
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect - Associate",
    period: "Jan 2025 - Jan 2028",
    validationNumber: "8106a343a5d546c79d94514d7d2f6ce1",
    href: "https://aws.amazon.com/verification",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    period: "Sep 2023 - Jan 2028",
    validationNumber: "7HKYMW0C7M41QR3W",
    href: "https://aws.amazon.com/verification",
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "Java", "SQL", "NoSQL", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks",
    items: [
      "Next.js",
      "React.js",
      "Django",
      "Pandas",
      "Gradle",
      "PyTorch",
      "Tailwind CSS",
      "Spring Boot",
      "FastAPI",
    ],
  },
  {
    title: "Tools",
    items: [
      "AWS",
      "GitHub",
      "Docker",
      "Kubernetes",
      "Jira",
      "Confluence",
      "Jupyter Notebook",
      "Redis",
      "Terraform",
      "GitHub Actions",
      "Bash Scripting",
    ],
  },
];

const contactLinks = [
  {
    label: "Email",
    value: "jaehyukc1223@gmail.com",
    href: "mailto:jaehyukc1223@gmail.com",
  },
  { label: "Phone", value: "(202) 557-6886", href: "tel:+12025576886" },
  {
    label: "GitHub",
    value: "github.com/Jake6654",
    href: "https://github.com/Jake6654",
  },
  {
    label: "LinkedIn",
    value: "LinkedIn",
    href: "https://www.linkedin.com/in/jae-hyuk-chang-953724321/",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#101711] text-[#18211b]">
      <AuroraBackground />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(129,178,141,0.24),transparent_34%),linear-gradient(180deg,rgba(10,17,12,0.28)_0%,rgba(10,17,12,0.42)_100%)]" />
      <header className="sticky top-0 z-20 border-b border-white/15 bg-[#101711]/60 text-white backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#top" className="text-sm font-bold tracking-[0.18em]">
            JAE-HYUK CHANG
          </a>
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 text-sm font-medium text-white/70 md:flex"
          >
            <a className="transition hover:text-white" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-white" href="#experience">
              Experience
            </a>
            <a className="transition hover:text-white" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section
        id="top"
        className="relative z-10 mx-auto grid min-h-[calc(100vh-65px)] w-full max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:py-20 xl:grid-cols-[1.15fr_0.85fr]"
      >
        <AnimatedHeroIntro />
        <AnimatedResumeSnapshot />
      </section>

      <section
        id="projects"
        className="relative z-10 border-y border-[#d9ded2] bg-white/82 backdrop-blur-xl"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7a5349]">
                Selected work
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#111711] sm:text-4xl">
                AI and cloud-focused projects
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-[#566153]">
              Projects from the resume, shaped as portfolio case studies with
              the problem space, system architecture, and engineering role
              clearly visible.
            </p>
          </div>

          <ProjectCarousel projects={projects} />
        </div>
      </section>

      <section id="experience" className="relative z-10 bg-[#f5f6f0]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="mb-9">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7a5349]">
              Experience
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#111711] sm:text-4xl">
              Product work and cloud research
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {experience.map((item) => (
              <article
                key={item.role}
                className="border border-white/60 bg-white/78 p-6 shadow-[0_1rem_3rem_-2rem_rgba(24,33,27,0.35)] backdrop-blur-xl"
              >
                <p className="text-sm font-semibold text-[#1f6f5b]">
                  {item.meta}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">{item.role}</h3>
                <p className="mt-1 text-sm font-medium text-[#7a5349]">
                  {item.organization}
                </p>
                <p className="mt-4 text-sm leading-6 text-[#566153]">
                  {item.summary}
                </p>
                <ul className="mt-5 space-y-2 text-sm leading-6 text-[#3f493d]">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="border-l-2 border-[#cbd8c2] pl-3"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="relative z-10 border-y border-[#d9ded2] bg-white/84 backdrop-blur-xl"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-20">
          <div className="min-w-0">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7a5349]">
              Credentials
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#111711] sm:text-4xl">
              AWS certifications with verifiable IDs
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#566153]">
              Cloud certifications are a core part of my resume, so each
              credential links directly to the AWS verification page with its
              validation number visible.
            </p>
            <div className="mt-7 space-y-4">
              {certifications.map((certification) => (
                <a
                  key={certification.validationNumber}
                  className="group block border border-[#d7a85f] bg-[#fff8eb] p-5 text-[#18211b] shadow-[0_14px_38px_rgba(122,83,73,0.08)] transition hover:-translate-y-1 hover:border-[#f59e0b] hover:bg-white hover:shadow-[0_18px_48px_rgba(122,83,73,0.14)]"
                  href={certification.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Verify ${certification.name} on AWS`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#b46909]">
                        AWS Certified
                      </span>
                      <h3 className="mt-2 text-lg font-semibold leading-6">
                        {certification.name}
                      </h3>
                    </div>
                    <span className="shrink-0 border border-[#f1c27b] bg-white px-2.5 py-1 text-xs font-bold text-[#8a4f08]">
                      Verify
                    </span>
                  </div>
                  <p className="mt-4 text-sm font-medium text-[#566153]">
                    Valid: {certification.period}
                  </p>
                  <div className="mt-4 border-t border-[#efd8ae] pt-4">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#7a5349]">
                      Validation number
                    </p>
                    <p className="mt-1 break-all font-mono text-sm text-[#111711]">
                      {certification.validationNumber}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex text-sm font-semibold text-[#b46909] transition group-hover:text-[#7a3500]">
                    Open AWS verification page
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7a5349]">
              Skills
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#111711] sm:text-4xl">
              Technologies I use across the stack
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#566153]">
              A practical toolkit for building responsive products, backend
              services, AI integrations, and cloud-ready development workflows.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <article
                  key={group.title}
                  className="border border-[#d9ded2] bg-white/70 p-6 shadow-[0_14px_38px_rgba(24,33,27,0.06)] sm:last:col-span-2"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold">{group.title}</h3>
                    <span className="border border-[#d9ded2] bg-[#f5f6f0] px-2.5 py-1 text-xs font-bold text-[#566153]">
                      {group.items.length}
                    </span>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="border border-[#cfd8c8] bg-[#f5f6f0] px-3.5 py-2 text-sm font-medium text-[#3f4a3c]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 bg-[#18211b] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a8cdb8]">
              Contact
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold sm:text-4xl">
              Open to internships, junior developer roles, and project
              collaborations.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                className="border border-white/20 px-4 py-3 transition hover:border-white hover:bg-white hover:text-[#18211b]"
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#a8cdb8]">
                  {link.label}
                </span>
                <span className="mt-1 block text-sm font-semibold">
                  {link.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
