import { BarChart3, Brain, Code2, Database } from "lucide-react";
import { useInView } from "../hooks/useInView";

const skills = [
  {
    icon: Code2,
    title: "Python Development",
    description: "Data analysis, ML, automation",
    tools: ["Pandas", "NumPy", "Sklearn"],
    accent: "oklch(72% 0.18 85)",
    accentBg: "oklch(72% 0.18 85 / 0.08)",
  },
  {
    icon: Database,
    title: "SQL & Databases",
    description: "Joins, aggregations, data extraction",
    tools: ["SQL", "Queries", "Analysis"],
    accent: "oklch(60% 0.15 220)",
    accentBg: "oklch(60% 0.15 220 / 0.08)",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Regression, classification, model evaluation",
    tools: ["Scikit-learn", "TF-IDF", "F1-score"],
    accent: "oklch(72% 0.18 85)",
    accentBg: "oklch(72% 0.18 85 / 0.08)",
  },
  {
    icon: BarChart3,
    title: "Data Visualization",
    description: "Compelling, insight-driven visuals",
    tools: ["Matplotlib", "Seaborn", "Power BI"],
    accent: "oklch(60% 0.15 220)",
    accentBg: "oklch(60% 0.15 220 / 0.08)",
  },
];

export function Skills() {
  const [headingRef, headingVisible] = useInView<HTMLDivElement>();
  const [skillsRef, skillsVisible] = useInView<HTMLDivElement>();

  return (
    <section
      id="skills"
      className="py-28 overflow-hidden"
      style={{ background: "oklch(97% 0.005 240)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header — left-aligned */}
        <div
          ref={headingRef}
          className={`fade-in-up ${headingVisible ? "visible" : ""} mb-16`}
        >
          <div
            className="text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: "oklch(60% 0.15 220)" }}
          >
            What I Work With
          </div>
          <div className="flex items-end gap-6">
            <h2
              className="font-display font-black leading-tight"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                color: "oklch(20% 0.01 240)",
              }}
            >
              Core Technical Skills
            </h2>
            <div
              className="hidden sm:block w-24 h-px mb-3"
              style={{ background: "oklch(72% 0.18 85)" }}
            />
          </div>
        </div>

        {/* Skills — offset horizontal scroll on mobile, staggered grid on desktop */}
        <div
          ref={skillsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className={`fade-in-up hover-lift cursor-default ${skillsVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div
                  className="p-6 rounded-xl h-full group"
                  style={{
                    background: "oklch(99% 0.003 240)",
                    border: "1px solid oklch(88% 0.008 240)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: skill.accentBg }}
                  >
                    <Icon size={20} style={{ color: skill.accent }} />
                  </div>

                  {/* Content */}
                  <h3
                    className="font-display font-bold text-base mb-2 leading-tight"
                    style={{ color: "oklch(20% 0.01 240)" }}
                  >
                    {skill.title}
                  </h3>
                  <p
                    className="font-body text-sm mb-4 leading-relaxed"
                    style={{ color: "oklch(55% 0.01 240)" }}
                  >
                    {skill.description}
                  </p>

                  {/* Tool tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2 py-0.5 rounded-md font-medium"
                        style={{
                          background: skill.accentBg,
                          color: skill.accent,
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
