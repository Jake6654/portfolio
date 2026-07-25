import { ProjectCarousel } from "@/components/project-carousel";

const projects = [
  {
    title: "OpsLens",
    label: "Agentic DevOps Platform",
    description:
      "AI-powered incident analysis platform with a Next.js frontend and Spring Boot backend for centralized log ingestion, filtering, and error investigation.",
    highlights: [
      "Designed a FastAPI and LangGraph multi-agent workflow to analyze logs, identify root causes, and generate fix recommendations.",
      "Containerized multi-service development with Docker and Docker Compose.",
      "Automated build and test workflows with GitHub Actions and Bash scripts.",
    ],
    stack: ["Spring Boot", "FastAPI", "LangGraph", "Docker", "GitHub Actions"],
    href: "https://github.com/Jake6654",
    glowColor: "green" as const,
  },
  {
    title: "SketchMyDay",
    label: "AI Journaling Platform",
    description:
      "AI-powered journaling platform using Spring Boot and RESTful APIs to manage diary entries and AI-generated illustrations.",
    highlights: [
      "Integrated a FastAPI-based Python AI service for diary analysis and image generation.",
      "Used Redis for asynchronous task handling between backend and AI services.",
      "Connected the platform to the OpsLens centralized logging system.",
    ],
    stack: ["Spring Boot", "Next.js", "TypeScript", "AWS", "PostgreSQL"],
    href: "https://github.com/Jake6654",
    glowColor: "blue" as const,
  },
  {
    title: "KCPC Admin Dashboard",
    label: "Production Dashboard",
    description:
      "Responsive admin dashboard used by 5,000+ members, translated from Figma into maintainable production UI.",
    highlights: [
      "Built reusable React components and state-driven UI flows with Next.js and Tailwind CSS.",
      "Integrated authenticated backend APIs with consistent client-side data handling.",
      "Focused on maintainability, responsive behavior, and production readiness.",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "APIs", "Figma"],
    href: "#experience",
    glowColor: "orange" as const,
  },
  {
    title: "LLM Cloud Research",
    label: "Cloud Computing Research",
    description:
      "Research work around cost-efficient cloud platforms that integrate LLM workloads with serverless cloud services.",
    highlights: [
      "Explored elastic scaling strategies to reduce idle GPU usage and infrastructure cost.",
      "Experimented with Docker and Ray deployment pipelines.",
      "Evaluated performance trade-offs across GPU cloud environments.",
    ],
    stack: ["LLMs", "Docker", "Ray", "Serverless", "GPU Cloud"],
    href: "#experience",
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
  "AWS Certified Solutions Architect / Jan 2025 - Jan 2028",
  "AWS Certified Cloud Practitioner / Sep 2023 - Jan 2028",
];

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "Java", "SQL", "NoSQL", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks",
    items: ["Next.js", "React.js", "Django", "Pandas", "Gradle", "PyTorch", "Tailwind CSS"],
  },
  {
    title: "Tools",
    items: ["AWS", "GitHub", "Docker", "Kubernetes", "Jira", "Confluence", "Jupyter Notebook"],
  },
];

const contactLinks = [
  { label: "Email", value: "jaehyukc1223@gmail.com", href: "mailto:jaehyukc1223@gmail.com" },
  { label: "Phone", value: "(434) 227-0820", href: "tel:+14342270820" },
  { label: "GitHub", value: "github.com/Jake6654", href: "https://github.com/Jake6654" },
  { label: "LinkedIn", value: "LinkedIn", href: "https://www.linkedin.com/" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f6f0] text-[#18211b]">
      <header className="sticky top-0 z-20 border-b border-[#d9ded2] bg-[#f5f6f0]/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#top" className="text-sm font-bold tracking-[0.18em]">
            JAE-HYUK CHANG
          </a>
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 text-sm font-medium text-[#566153] md:flex"
          >
            <a className="transition hover:text-[#18211b]" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-[#18211b]" href="#experience">
              Experience
            </a>
            <a className="transition hover:text-[#18211b]" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-[#18211b]" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section
        id="top"
        className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:py-20 xl:grid-cols-[1.15fr_0.85fr]"
      >
        <div className="flex flex-col justify-center">
          <p className="mb-5 w-fit border border-[#cbd8c2] bg-white px-3 py-1.5 text-sm font-semibold uppercase tracking-[0.14em] text-[#7a5349]">
            Full-stack developer / UVA Computer Science
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] text-[#111711] sm:text-6xl lg:text-6xl xl:text-7xl">
            Building AI-powered web platforms with cloud-ready engineering.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#4f5a4d]">
            I am Jae-Hyuk Chang, a Computer Science student at the University of
            Virginia focused on full-stack development, cloud computing, and AI-driven
            product experiences. My work spans Next.js frontends, Spring Boot and
            FastAPI backends, Dockerized services, and AWS-oriented systems.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
          </div>
        </div>

        <aside className="min-w-0 border border-[#d9ded2] bg-white p-6 shadow-[0_24px_80px_rgba(24,33,27,0.08)]">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#7a5349]">
            Resume snapshot
          </p>
          <div className="mt-5 space-y-5">
            <div>
              <p className="text-3xl font-semibold">University of Virginia</p>
              <p className="mt-2 text-sm leading-6 text-[#566153]">
                BS in Computer Science, May 2026
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="border border-[#e1e6dc] bg-[#f5f6f0] p-4">
                <p className="text-2xl font-semibold">5,000+</p>
                <p className="mt-1 text-sm text-[#566153]">members supported through admin dashboard work</p>
              </div>
              <div className="border border-[#e1e6dc] bg-[#f5f6f0] p-4">
                <p className="text-2xl font-semibold">AWS</p>
                <p className="mt-1 text-sm text-[#566153]">Solutions Architect and Cloud Practitioner</p>
              </div>
            </div>
            <p className="break-words border-t border-[#e1e6dc] pt-5 text-sm leading-6 text-[#566153]">
              Next.js / React / TypeScript / Spring Boot / FastAPI / AWS / Docker
            </p>
          </div>
        </aside>
      </section>

      <section id="projects" className="border-y border-[#d9ded2] bg-white">
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
              Projects from the resume, shaped as portfolio case studies with the
              problem space, system architecture, and engineering role clearly visible.
            </p>
          </div>

          <ProjectCarousel projects={projects} />
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
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
            <article key={item.role} className="border border-[#d9ded2] bg-white p-6">
              <p className="text-sm font-semibold text-[#1f6f5b]">{item.meta}</p>
              <h3 className="mt-3 text-2xl font-semibold">{item.role}</h3>
              <p className="mt-1 text-sm font-medium text-[#7a5349]">{item.organization}</p>
              <p className="mt-4 text-sm leading-6 text-[#566153]">{item.summary}</p>
              <ul className="mt-5 space-y-2 text-sm leading-6 text-[#3f493d]">
                {item.points.map((point) => (
                  <li key={point} className="border-l-2 border-[#cbd8c2] pl-3">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="border-y border-[#d9ded2] bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7a5349]">
              Skills
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#111711] sm:text-4xl">
              Technologies I use
            </h2>
            <div className="mt-7 space-y-3">
              {certifications.map((certification) => (
                <p key={certification} className="border border-[#d9ded2] bg-[#f5f6f0] p-4 text-sm font-medium">
                  {certification}
                </p>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {skillGroups.map((group) => (
              <article key={group.title} className="border border-[#d9ded2] p-5">
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="border border-[#d9ded2] bg-[#f5f6f0] px-2.5 py-1 text-xs text-[#4f5a4d]">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#18211b] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a8cdb8]">
              Contact
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold sm:text-4xl">
              Open to internships, junior developer roles, and project collaborations.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                className="border border-white/20 px-4 py-3 transition hover:border-white hover:bg-white hover:text-[#18211b]"
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#a8cdb8]">
                  {link.label}
                </span>
                <span className="mt-1 block text-sm font-semibold">{link.value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
