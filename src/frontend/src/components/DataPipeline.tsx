import {
  ArrowRight,
  BarChart3,
  Brain,
  Database,
  Rocket,
  Search,
  Wrench,
} from "lucide-react";
import { useInView } from "../hooks/useInView";

const steps = [
  {
    icon: Database,
    label: "Data Collection",
    description: "Gathering & sourcing raw data",
  },
  {
    icon: Search,
    label: "EDA",
    description: "Exploratory analysis & patterns",
  },
  {
    icon: Wrench,
    label: "Feature Engineering",
    description: "Crafting meaningful features",
  },
  {
    icon: Brain,
    label: "Model Building",
    description: "Training & tuning algorithms",
  },
  {
    icon: BarChart3,
    label: "Evaluation",
    description: "Metrics & validation",
  },
  {
    icon: Rocket,
    label: "Deployment",
    description: "Production-ready models",
  },
];

export function DataPipeline() {
  const [sectionRef, isInView] = useInView<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="py-24 overflow-hidden"
      style={{ background: "oklch(99% 0.003 240)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`fade-in-up ${isInView ? "visible" : ""} mb-14`}>
          <div
            className="text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: "oklch(60% 0.15 220)" }}
          >
            My Methodology
          </div>
          <div className="flex items-start justify-between gap-8 flex-wrap">
            <h2
              className="font-display font-black leading-tight"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                color: "oklch(20% 0.01 240)",
              }}
            >
              Data Science Workflow
            </h2>
            <p
              className="max-w-md font-body text-sm leading-relaxed self-end"
              style={{ color: "oklch(55% 0.01 240)" }}
            >
              My approach follows industry-standard practices from raw data to
              production-ready models, ensuring quality and reliability at every
              stage.
            </p>
          </div>
        </div>

        {/* Pipeline steps */}
        <div
          className={`fade-in-up ${isInView ? "visible" : ""}`}
          style={{ transitionDelay: "0.2s" }}
        >
          {/* Desktop: horizontal pipeline */}
          <div className="hidden md:flex items-stretch gap-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;
              return (
                <div key={step.label} className="flex-1 flex items-stretch">
                  <div className="flex-1 group">
                    <div
                      className="relative p-5 h-full transition-all duration-300"
                      style={{
                        background:
                          index % 2 === 0
                            ? "oklch(99% 0.003 240)"
                            : "oklch(96% 0.006 240)",
                        borderTop: "3px solid transparent",
                      }}
                      onMouseEnter={(e) => {
                        (
                          e.currentTarget as HTMLDivElement
                        ).style.borderTopColor = "oklch(72% 0.18 85)";
                        (e.currentTarget as HTMLDivElement).style.background =
                          "oklch(72% 0.18 85 / 0.05)";
                      }}
                      onMouseLeave={(e) => {
                        (
                          e.currentTarget as HTMLDivElement
                        ).style.borderTopColor = "transparent";
                        (e.currentTarget as HTMLDivElement).style.background =
                          index % 2 === 0
                            ? "oklch(99% 0.003 240)"
                            : "oklch(96% 0.006 240)";
                      }}
                    >
                      {/* Step number */}
                      <div
                        className="text-xs font-bold mb-3 font-display"
                        style={{ color: "oklch(72% 0.18 85 / 0.5)" }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* Icon */}
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                        style={{ background: "oklch(72% 0.18 85 / 0.1)" }}
                      >
                        <Icon
                          size={16}
                          style={{ color: "oklch(72% 0.18 85)" }}
                        />
                      </div>

                      {/* Label */}
                      <div
                        className="font-display font-bold text-sm mb-1"
                        style={{ color: "oklch(20% 0.01 240)" }}
                      >
                        {step.label}
                      </div>
                      <div
                        className="font-body text-xs leading-relaxed"
                        style={{ color: "oklch(55% 0.01 240)" }}
                      >
                        {step.description}
                      </div>
                    </div>
                  </div>

                  {/* Arrow connector */}
                  {!isLast && (
                    <div
                      className="flex items-center px-1"
                      style={{ color: "oklch(72% 0.18 85 / 0.4)" }}
                    >
                      <ArrowRight size={14} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile: vertical pipeline */}
          <div className="md:hidden space-y-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.label}
                  className="flex items-center gap-4 p-4 rounded-lg"
                  style={{
                    background: "oklch(99% 0.003 240)",
                    border: "1px solid oklch(88% 0.008 240)",
                  }}
                >
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "oklch(72% 0.18 85 / 0.1)" }}
                  >
                    <Icon size={14} style={{ color: "oklch(72% 0.18 85)" }} />
                  </div>
                  <div className="flex-1">
                    <div
                      className="font-display font-bold text-sm"
                      style={{ color: "oklch(20% 0.01 240)" }}
                    >
                      {step.label}
                    </div>
                    <div
                      className="font-body text-xs"
                      style={{ color: "oklch(55% 0.01 240)" }}
                    >
                      {step.description}
                    </div>
                  </div>
                  <div
                    className="text-xs font-bold font-display"
                    style={{ color: "oklch(72% 0.18 85 / 0.4)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
