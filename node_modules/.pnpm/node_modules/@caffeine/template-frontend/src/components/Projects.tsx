import {
  CheckCircle2,
  CloudRain,
  ExternalLink,
  Github,
  MessageSquare,
} from "lucide-react";
import { useInView } from "../hooks/useInView";

const projects = [
  {
    number: "01",
    title: "Weather Prediction",
    subtitle: "Regression · EDA · Feature Engineering",
    description:
      "Built a regression model to predict temperature from historical weather data. Performed thorough exploratory data analysis and feature engineering to improve model performance.",
    highlights: [
      "Regression model for temperature prediction",
      "Performed EDA + feature engineering",
      "Achieved 81% Accuracy",
    ],
    metric: { value: "81%", label: "Accuracy" },
    githubUrl: "https://github.com/Sumit006-coder-dotcom/weather-prediction-ai",
    icon: CloudRain,
    accentColor: "oklch(72% 0.18 85)",
    accentBg: "oklch(72% 0.18 85 / 0.08)",
    vizBg: "oklch(18% 0.02 240)",
    flipped: false,
  },
  {
    number: "02",
    title: "Sentiment Analysis",
    subtitle: "NLP · TF-IDF · Classification",
    description:
      "Built an NLP classifier using TF-IDF vectorization and machine learning to analyze Kindle reviews. Handled class imbalance and evaluated with F1-score for robust performance.",
    highlights: [
      "NLP classifier using TF-IDF + ML model",
      "Cleaned text, handled imbalance",
      "Evaluated using F1-score",
    ],
    metric: { value: "NLP", label: "Classifier" },
    githubUrl:
      "https://github.com/Sumit006-coder-dotcom/NLP--Kindle-Review-Sentiment-Analysis",
    icon: MessageSquare,
    accentColor: "oklch(60% 0.15 220)",
    accentBg: "oklch(60% 0.15 220 / 0.08)",
    vizBg: "oklch(16% 0.025 240)",
    flipped: true,
  },
];

function ProjectViz({ project }: { project: (typeof projects)[0] }) {
  const Icon = project.icon;
  return (
    <div
      className="relative rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center"
      style={{ background: project.vizBg }}
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(oklch(92% 0.005 240 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(92% 0.005 240 / 0.5) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Center icon with glow */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center"
          style={{
            background: `${project.accentBg}`,
            border: `1px solid ${project.accentColor}40`,
            boxShadow: `0 0 40px ${project.accentColor}30`,
          }}
        >
          <Icon size={36} style={{ color: project.accentColor }} />
        </div>
        <div
          className="font-display font-black text-5xl opacity-20"
          style={{ color: "oklch(92% 0.005 240)" }}
        >
          {project.number}
        </div>
      </div>

      {/* Decorative circles */}
      <div
        className="absolute top-6 right-6 w-16 h-16 rounded-full opacity-10"
        style={{ background: project.accentColor }}
      />
      <div
        className="absolute bottom-8 left-8 w-8 h-8 rounded-full opacity-10"
        style={{ background: project.accentColor }}
      />
    </div>
  );
}

function ProjectItem({
  project,
  index,
}: { project: (typeof projects)[0]; index: number }) {
  const [projRef, projVisible] = useInView<HTMLDivElement>();

  return (
    <div
      ref={projRef}
      data-ocid={`projects.item.${index + 1}`}
      className={`fade-in-up ${projVisible ? "visible" : ""}`}
      style={{ transitionDelay: "0.1s" }}
    >
      <div
        className={`grid lg:grid-cols-2 gap-12 items-center ${
          project.flipped ? "lg:[direction:rtl]" : ""
        }`}
      >
        {/* Visual */}
        <div className={project.flipped ? "lg:[direction:ltr]" : ""}>
          <ProjectViz project={project} />
        </div>

        {/* Content */}
        <div className={project.flipped ? "lg:[direction:ltr]" : ""}>
          <div
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: project.accentColor }}
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

          {/* Highlights */}
          <ul className="space-y-3 mb-8">
            {project.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2
                  size={16}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: project.accentColor }}
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

          {/* Metric + GitHub */}
          <div className="flex items-center gap-6">
            <div>
              <div
                className="font-display font-black text-3xl leading-none"
                style={{ color: project.accentColor }}
              >
                {project.metric.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1 font-medium tracking-wide">
                {project.metric.label}
              </div>
            </div>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 group"
              style={{
                background: project.accentBg,
                color: project.accentColor,
                border: `1px solid ${project.accentColor}40`,
              }}
            >
              <Github size={15} />
              View on GitHub
              <ExternalLink
                size={12}
                className="opacity-60 group-hover:opacity-100"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [headingRef, headingVisible] = useInView<HTMLDivElement>();

  return (
    <section
      id="projects"
      className="py-28 overflow-hidden"
      style={{ background: "oklch(97% 0.005 240)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header — left-border accent treatment, breaks the amber-word formula */}
        <div
          ref={headingRef}
          className={`fade-in-up ${headingVisible ? "visible" : ""} mb-20`}
        >
          <div className="flex items-start gap-6">
            {/* Vertical accent bar */}
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
                  letterSpacing: "-0.025em",
                }}
              >
                Key Project
                <br />
                <span
                  style={{
                    color: "oklch(20% 0.01 240)",
                    fontStyle: "italic",
                    fontWeight: 800,
                  }}
                >
                  Highlights
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* Projects — alternating layout */}
        <div className="space-y-24">
          {projects.map((project, idx) => (
            <ProjectItem key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
