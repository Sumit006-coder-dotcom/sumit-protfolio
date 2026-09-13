import {
  CheckCircle2,
  Cloud,
  ExternalLink,
  Github,
  ShieldAlert,
  ShoppingBag,
} from "lucide-react";
import { useInView } from "../hooks/useInView";
import { profile, projects, type PortfolioRole } from "../portfolioData";

const icons = {
  cloud: Cloud,
  fraud: ShieldAlert,
  ecommerce: ShoppingBag,
};

function ProjectViz({ project }: { project: (typeof projects)[PortfolioRole][number] }) {
  const Icon = icons[project.icon];
  const accentColor = project.flipped
    ? "oklch(60% 0.15 220)"
    : "oklch(72% 0.18 85)";
  const accentBg = project.flipped
    ? "oklch(60% 0.15 220 / 0.08)"
    : "oklch(72% 0.18 85 / 0.08)";

  return (
    <div
      className="relative rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center"
      style={{ background: "oklch(18% 0.02 240)" }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(oklch(92% 0.005 240 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(92% 0.005 240 / 0.5) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center"
          style={{
            background: accentBg,
            border: `1px solid ${accentColor}40`,
            boxShadow: `0 0 40px ${accentColor}30`,
          }}
        >
          <Icon size={36} style={{ color: accentColor }} />
        </div>
        <div
          className="font-display font-black text-5xl opacity-20"
          style={{ color: "oklch(92% 0.005 240)" }}
        >
          {project.number}
        </div>
      </div>
    </div>
  );
}

function ProjectItem({
  project,
  index,
}: {
  project: (typeof projects)[PortfolioRole][number];
  index: number;
}) {
  const [projRef, projVisible] = useInView<HTMLDivElement>();
  const accentColor = project.flipped
    ? "oklch(60% 0.15 220)"
    : "oklch(72% 0.18 85)";
  const accentBg = project.flipped
    ? "oklch(60% 0.15 220 / 0.08)"
    : "oklch(72% 0.18 85 / 0.08)";

  return (
    <div
      ref={projRef}
      data-ocid={`projects.item.${index + 1}`}
      className={`fade-in-up ${projVisible ? "visible" : ""}`}
    >
      <div
        className={`grid lg:grid-cols-2 gap-10 items-center ${
          project.flipped ? "lg:[direction:rtl]" : ""
        }`}
      >
        <div className={project.flipped ? "lg:[direction:ltr]" : ""}>
          <ProjectViz project={project} />
        </div>

        <div className={project.flipped ? "lg:[direction:ltr]" : ""}>
          <div
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: accentColor }}
          >
            {project.subtitle}
          </div>

          <h3
            className="font-display font-black mb-4 leading-tight"
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              color: "oklch(20% 0.01 240)",
            }}
          >
            {project.title}
          </h3>

          <p
            className="font-body text-base leading-relaxed mb-6"
            style={{ color: "oklch(45% 0.01 240)" }}
          >
            {project.description}
          </p>

          <ul className="space-y-3 mb-8">
            {project.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2
                  size={16}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: accentColor }}
                />
                <span
                  className="font-body text-sm"
                  style={{ color: "oklch(40% 0.01 240)" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            <div>
              <div
                className="font-display font-black text-3xl leading-none"
                style={{ color: accentColor }}
              >
                {project.metric.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1 font-medium tracking-wide">
                {project.metric.label}
              </div>
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 group"
              style={{
                background: accentBg,
                color: accentColor,
                border: `1px solid ${accentColor}40`,
              }}
            >
              <Github size={15} />
              View Project
              <ExternalLink size={12} className="opacity-60 group-hover:opacity-100" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects({ role }: { role: PortfolioRole }) {
  const [headingRef, headingVisible] = useInView<HTMLDivElement>();
  const roleProjects = projects[role];

  return (
    <section
      id="projects"
      className="py-28 overflow-hidden"
      style={{ background: "oklch(97% 0.005 240)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={headingRef}
          className={`fade-in-up ${headingVisible ? "visible" : ""} mb-20`}
        >
          <div className="flex items-start gap-6">
            <div
              className="flex-shrink-0 w-1 self-stretch rounded-full mt-1"
              style={{ background: "oklch(72% 0.18 85)" }}
            />
            <div>
              <div
                className="text-xs font-bold tracking-widest uppercase mb-3"
                style={{ color: "oklch(60% 0.01 240)" }}
              >
                Featured Work
              </div>
              <h2
                className="font-display font-black leading-tight"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 2.75rem)",
                  color: "oklch(20% 0.01 240)",
                }}
              >
                Selected Project
                <br />
                <span style={{ fontStyle: "italic", fontWeight: 800 }}>
                  Highlights
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="space-y-24">
          {roleProjects.map((project, idx) => (
            <ProjectItem key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
