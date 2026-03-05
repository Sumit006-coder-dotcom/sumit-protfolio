import { BookOpen, GraduationCap } from "lucide-react";
import { useInView } from "../hooks/useInView";

const education = [
  {
    institution: "Galgotias University, Greater Noida",
    degree: "BCA (Hons. With Research)",
    field: "Computer and Information Sciences",
    period: "August 2023 — July 2027",
    icon: GraduationCap,
    current: true,
  },
  {
    institution: "Central Board of Secondary Education",
    degree: "CBSE Senior Secondary",
    field: "Science (PCM & CS)",
    period: "2021 — 2022",
    icon: BookOpen,
    current: false,
  },
];

function EducationItem({
  edu,
  index,
  isVisible,
}: { edu: (typeof education)[0]; index: number; isVisible: boolean }) {
  const Icon = edu.icon;
  return (
    <div
      className={`fade-in-up ${isVisible ? "visible" : ""} flex gap-6`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {/* Timeline indicator */}
      <div className="flex flex-col items-center">
        <div
          className="w-5 h-5 rounded-full flex-shrink-0 mt-3"
          style={{
            background: edu.current
              ? "oklch(72% 0.18 85)"
              : "oklch(28% 0.02 240)",
            border: "2px solid oklch(18% 0.02 240)",
            boxShadow: edu.current
              ? "0 0 0 4px oklch(72% 0.18 85 / 0.2)"
              : "none",
          }}
        />
        {index < education.length - 1 && (
          <div
            className="w-px flex-1 mt-2"
            style={{ background: "oklch(28% 0.02 240)", minHeight: "2rem" }}
          />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 pb-8">
        <div
          className="p-7 rounded-xl hover-lift cursor-default group"
          style={{
            background: "oklch(22% 0.02 240)",
            border: `1px solid ${edu.current ? "oklch(72% 0.18 85 / 0.3)" : "oklch(28% 0.02 240)"}`,
          }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: edu.current
                      ? "oklch(72% 0.18 85 / 0.15)"
                      : "oklch(60% 0.15 220 / 0.15)",
                  }}
                >
                  <Icon
                    size={16}
                    style={{
                      color: edu.current
                        ? "oklch(72% 0.18 85)"
                        : "oklch(60% 0.15 220)",
                    }}
                  />
                </div>
                <h3
                  className="font-display font-bold text-base group-hover:text-amber transition-colors"
                  style={{ color: "oklch(88% 0.005 240)" }}
                >
                  {edu.institution}
                </h3>
              </div>

              <div className="ml-12">
                <div
                  className="font-semibold text-sm mb-1"
                  style={{ color: "oklch(72% 0.18 85)" }}
                >
                  {edu.degree}
                </div>
                <div
                  className="text-sm mb-2"
                  style={{ color: "oklch(65% 0.01 240)" }}
                >
                  {edu.field}
                </div>
                <div
                  className="text-xs font-medium tracking-wide"
                  style={{ color: "oklch(50% 0.01 240)" }}
                >
                  {edu.period}
                </div>
              </div>
            </div>

            {edu.current && (
              <div
                className="flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-bold"
                style={{
                  background: "oklch(72% 0.18 85 / 0.15)",
                  color: "oklch(72% 0.18 85)",
                  border: "1px solid oklch(72% 0.18 85 / 0.3)",
                }}
              >
                Current
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Education() {
  const [headingRef, headingVisible] = useInView<HTMLDivElement>();
  const [timelineRef, timelineVisible] = useInView<HTMLDivElement>();

  return (
    <section
      id="education"
      className="relative py-28 overflow-hidden"
      style={{ background: "oklch(18% 0.02 240)" }}
    >
      {/* Top clip */}
      <div
        className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: "oklch(97% 0.005 240)",
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
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
            Academic Background
          </div>
          <h2
            className="font-display font-black leading-tight"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "oklch(92% 0.005 240)",
            }}
          >
            Educational Background
          </h2>
        </div>

        {/* Timeline */}
        <div ref={timelineRef}>
          {education.map((edu, index) => (
            <EducationItem
              key={edu.institution}
              edu={edu}
              index={index}
              isVisible={timelineVisible}
            />
          ))}
        </div>
      </div>

      {/* Bottom clip */}
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
