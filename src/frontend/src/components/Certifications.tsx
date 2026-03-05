import { Award } from "lucide-react";
import { useInView } from "../hooks/useInView";

const certs = [
  {
    title: "Machine Learning with Python — Level 1",
    issuer: "IBM / Coursera",
    description: "Foundational ML concepts and Python implementation",
  },
  {
    title: "AWS Academy Machine Learning Foundations",
    issuer: "Amazon Web Services",
    description: "Cloud-based ML deployment and AWS services",
  },
  {
    title: "Applied Data Science with Python — Level 2",
    issuer: "IBM / Coursera",
    description: "Advanced data science techniques and applications",
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM / Coursera",
    description: "Comprehensive data analysis and visualization skills",
  },
  {
    title: "Google Cloud Platform",
    issuer: "Google",
    description: "Cloud computing and data engineering fundamentals",
  },
];

export function Certifications() {
  const [headingRef, headingVisible] = useInView<HTMLDivElement>();
  const [listRef, listVisible] = useInView<HTMLDivElement>();

  return (
    <section
      id="certifications"
      className="relative py-28 overflow-hidden"
      style={{ background: "oklch(18% 0.02 240)" }}
    >
      {/* Top clip from light section */}
      <div
        className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: "oklch(97% 0.005 240)",
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)",
        }}
      />

      {/* Background accent */}
      <div
        className="absolute right-0 top-1/4 w-96 h-96 rounded-full opacity-[0.04] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(72% 0.18 85), transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          ref={headingRef}
          className={`fade-in-up ${headingVisible ? "visible" : ""} mb-16`}
        >
          <div
            className="text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: "oklch(72% 0.18 85)" }}
          >
            Credentials
          </div>
          <h2
            className="font-display font-black leading-tight"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "oklch(92% 0.005 240)",
            }}
          >
            Professional Certifications
          </h2>
        </div>

        {/* Staggered vertical list */}
        <div ref={listRef} className="space-y-4">
          {certs.map((cert, index) => (
            <div
              key={cert.title}
              className={`fade-in-up hover-lift ${listVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div
                className="relative flex items-start gap-6 p-6 rounded-xl cursor-default group overflow-hidden"
                style={{
                  background: "oklch(22% 0.02 240)",
                  border: "1px solid oklch(28% 0.02 240)",
                  marginLeft: `${index % 2 === 1 ? "2.5rem" : "0"}`,
                  transition: "border-color 0.2s ease, background 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "oklch(72% 0.18 85 / 0.35)";
                  (e.currentTarget as HTMLDivElement).style.background =
                    "oklch(23% 0.025 240)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "oklch(28% 0.02 240)";
                  (e.currentTarget as HTMLDivElement).style.background =
                    "oklch(22% 0.02 240)";
                }}
              >
                {/* Hover left-accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-0.5 rounded-r opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: "oklch(72% 0.18 85)" }}
                />

                {/* Number — more visible, editorial size */}
                <div
                  className="flex-shrink-0 font-display font-black text-5xl leading-none w-14 select-none pt-0.5"
                  style={{
                    color: "oklch(72% 0.18 85 / 0.45)",
                    fontVariantNumeric: "tabular-nums",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3
                        className="font-display font-bold text-base mb-1.5 group-hover:text-amber transition-colors"
                        style={{ color: "oklch(90% 0.005 240)" }}
                      >
                        {cert.title}
                      </h3>
                      <p
                        className="font-body text-sm leading-relaxed"
                        style={{ color: "oklch(62% 0.01 240)" }}
                      >
                        {cert.description}
                      </p>
                    </div>
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center opacity-30 group-hover:opacity-70 transition-opacity"
                      style={{ background: "oklch(72% 0.18 85 / 0.15)" }}
                    >
                      <Award
                        size={15}
                        style={{ color: "oklch(72% 0.18 85)" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom clip into light */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: "oklch(97% 0.005 240)",
          clipPath: "polygon(0 100%, 100% 0%, 100% 100%)",
        }}
      />
    </section>
  );
}
