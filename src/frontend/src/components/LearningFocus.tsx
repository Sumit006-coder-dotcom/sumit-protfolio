import { LayoutDashboard, LineChart, Rocket, Wrench } from "lucide-react";
import { useInView } from "../hooks/useInView";

const toolkit = [
  {
    title: "Data Manipulation",
    description:
      "Pandas and NumPy for efficient data wrangling and numerical computing",
    icon: Wrench,
  },
  {
    title: "Visualization Tools",
    description:
      "Matplotlib and Seaborn for creating compelling data visualizations",
    icon: LineChart,
  },
  {
    title: "ML Frameworks",
    description:
      "Scikit-learn for building and evaluating machine learning models",
    icon: Rocket,
  },
  {
    title: "BI Tools",
    description:
      "Currently learning Power BI for business intelligence and reporting",
    icon: LayoutDashboard,
  },
];

const learningItems = [
  {
    number: "01",
    title: "Feature Engineering",
    description:
      "Advanced techniques for creating meaningful features from raw data",
  },
  {
    number: "02",
    title: "Statistical Analysis",
    description:
      "Deepening understanding of statistical methods for data science",
  },
  {
    number: "03",
    title: "Power BI Mastery",
    description:
      "Building interactive dashboards and business intelligence reports",
  },
  {
    number: "04",
    title: "ML Deployment",
    description:
      "Learning to deploy machine learning applications in production environments",
  },
];

export function LearningFocus() {
  const [toolkitHeadRef, toolkitHeadVisible] = useInView<HTMLDivElement>();
  const [toolkitRef, toolkitVisible] = useInView<HTMLDivElement>();
  const [learningHeadRef, learningHeadVisible] = useInView<HTMLDivElement>();
  const [learningRef, learningVisible] = useInView<HTMLDivElement>();

  return (
    <>
      {/* Technical Toolkit */}
      <section
        id="toolkit"
        className="py-28 overflow-hidden"
        style={{ background: "oklch(97% 0.005 240)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div
            ref={toolkitHeadRef}
            className={`fade-in-up ${toolkitHeadVisible ? "visible" : ""} mb-16`}
          >
            <div
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "oklch(60% 0.15 220)" }}
            >
              My Arsenal
            </div>
            <h2
              className="font-display font-black leading-tight"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                color: "oklch(20% 0.01 240)",
              }}
            >
              Technical Toolkit
            </h2>
          </div>

          <div
            ref={toolkitRef}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {toolkit.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`fade-in-up hover-lift ${toolkitVisible ? "visible" : ""}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div
                    className="p-6 rounded-xl h-full cursor-default group"
                    style={{
                      background: "oklch(99% 0.003 240)",
                      border: "1px solid oklch(88% 0.008 240)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: "oklch(60% 0.15 220 / 0.1)" }}
                    >
                      <Icon
                        size={18}
                        style={{ color: "oklch(60% 0.15 220)" }}
                      />
                    </div>
                    <h3
                      className="font-display font-bold text-sm mb-2"
                      style={{ color: "oklch(20% 0.01 240)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="font-body text-xs leading-relaxed"
                      style={{ color: "oklch(55% 0.01 240)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Learning Focus */}
      <section
        id="learning"
        className="relative py-28 overflow-hidden"
        style={{ background: "oklch(18% 0.02 240)" }}
      >
        {/* Top clip */}
        <div
          className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
          style={{
            background: "oklch(97% 0.005 240)",
            clipPath: "polygon(0 0, 100% 0, 100% 100%)",
          }}
        />

        {/* Background texture */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-[0.04] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(60% 0.15 220), transparent 70%)",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div
            ref={learningHeadRef}
            className={`fade-in-up ${learningHeadVisible ? "visible" : ""} mb-16`}
          >
            <div
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "oklch(60% 0.15 220)" }}
            >
              What's Next
            </div>
            <h2
              className="font-display font-black leading-tight"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                color: "oklch(92% 0.005 240)",
              }}
            >
              Current Learning Focus
            </h2>
          </div>

          <div ref={learningRef} className="grid sm:grid-cols-2 gap-5">
            {learningItems.map((item, index) => (
              <div
                key={item.title}
                className={`fade-in-up hover-lift ${learningVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div
                  className="p-6 rounded-xl h-full cursor-default group"
                  style={{
                    background: "oklch(22% 0.02 240)",
                    border: "1px solid oklch(28% 0.02 240)",
                  }}
                >
                  <div
                    className="font-display font-black text-5xl leading-none mb-4 select-none"
                    style={{ color: "oklch(72% 0.18 85 / 0.2)" }}
                  >
                    {item.number}
                  </div>
                  <h3
                    className="font-display font-bold text-base mb-2 group-hover:text-amber transition-colors"
                    style={{ color: "oklch(88% 0.005 240)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: "oklch(60% 0.01 240)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
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
    </>
  );
}
