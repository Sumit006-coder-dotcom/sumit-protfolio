import { Target, TrendingUp, Zap } from "lucide-react";
import { useInView } from "../hooks/useInView";

const highlights = [
  {
    icon: Zap,
    text: "Python, SQL, Pandas, NumPy, EDA & Scikit-learn",
  },
  {
    icon: TrendingUp,
    text: "Built ML & Deep Learning projects using Regression, NLP and LSTM",
  },
  {
    icon: Target,
    text: "Working with Flask, Streamlit, TensorFlow and AWS SageMaker",
  },
];

export function About() {
  const [sectionRef, isInView] = useInView<HTMLElement>();
  const [contentRef, contentVisible] = useInView<HTMLDivElement>();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ background: "oklch(18% 0.02 240)" }}
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 50%, oklch(72% 0.18 85) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Label + heading */}
          <div
            className={`fade-in-up ${isInView ? "visible" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="flex items-center gap-2 mb-8">
              <div
                className="px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
                style={{
                  background: "oklch(72% 0.18 85 / 0.15)",
                  color: "oklch(72% 0.18 85)",
                  border: "1px solid oklch(72% 0.18 85 / 0.3)",
                }}
              >
                Quick Learner
              </div>
            </div>

            {/* Larger, more editorial heading for About — breaks the formula */}
            <h2
              className="font-display font-black leading-[0.92] mb-8"
              style={{
                fontSize: "clamp(2.75rem, 7vw, 5rem)",
                color: "oklch(92% 0.005 240)",
                letterSpacing: "-0.03em",
              }}
            >
              Professional
              <br />
              <span style={{ color: "oklch(72% 0.18 85)" }}>Summary.</span>
            </h2>

            <p
              className="font-body text-base leading-relaxed mb-8 max-w-sm"
              style={{ color: "oklch(62% 0.01 240)", lineHeight: "1.75" }}
            >
              Actively seeking fresher roles or internships in Data Analytics,
              Data Science, or AI/ML. Passionate about turning raw data into
              actionable insights with clean, efficient code.
            </p>

            {/* Decorative element */}
            <div
              className="w-12 h-0.5"
              style={{ background: "oklch(72% 0.18 85 / 0.6)" }}
            />
          </div>

          {/* Right: Highlights */}
          <div ref={contentRef}>
            <div className="space-y-5">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.text}
                    className={`fade-in-up ${contentVisible ? "visible" : ""}`}
                    style={{ transitionDelay: `${0.1 + index * 0.12}s` }}
                  >
                    <div
                      className="flex items-start gap-4 p-5 rounded-lg hover-lift cursor-default"
                      style={{
                        background: "oklch(22% 0.02 240)",
                        border: "1px solid oklch(28% 0.02 240)",
                      }}
                    >
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-md flex items-center justify-center mt-0.5"
                        style={{ background: "oklch(72% 0.18 85 / 0.15)" }}
                      >
                        <Icon
                          size={18}
                          style={{ color: "oklch(72% 0.18 85)" }}
                        />
                      </div>
                      <div>
                        <span
                          className="font-body text-sm leading-relaxed"
                          style={{ color: "oklch(80% 0.005 240)" }}
                        >
                          {item.text}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom clip into light section */}
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
