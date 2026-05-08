import { useInView } from "../hooks/useInView";

const skillGroups = [
  {
    number: "1",
    category: "Programming",
    items: ["Python", "SQL"],
  },
  {
    number: "2",
    category: "Data Analysis",
    items: [
      "Pandas",
      "NumPy",
      "EDA",
      "Data Visualization",
      "Feature Engineering",
    ],
  },
  {
    number: "3",
    category: "Machine Learning",
    items: [
      "Regression",
      "Classification",
      "Clustering",
      "NLP",
      "Model Evaluation",
      "Scikit-learn",
    ],
  },
  {
    number: "4",
    category: "Deep Learning",
    items: [
      "LSTM",
      "Neural Networks",
      "TensorFlow",
    ],
  },
  {
    number: "5",
    category: "Tools & Deployment",
    items: [
      "Flask",
      "Streamlit",
      "Git",
      "Jupyter Notebook",
      "VS Code",
    ],
  },
  {
    number: "6",
    category: "Cloud & Database",
    items: ["AWS SageMaker", "MySQL"],
  },
];

export function SkillsTools() {
  const [headingRef, headingVisible] = useInView<HTMLDivElement>();
  const [gridRef, gridVisible] = useInView<HTMLDivElement>();

  return (
    <section
      id="skills-tools"
      className="py-28 overflow-hidden"
      style={{ background: "oklch(97% 0.005 240)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headingRef}
          className={`fade-in-up ${headingVisible ? "visible" : ""} mb-16`}
        >
          <div
            className="text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: "oklch(72% 0.18 85)" }}
          >
            Full Stack of Knowledge
          </div>
          <div className="flex items-end gap-6">
            <h2
              className="font-display font-black leading-tight"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                color: "oklch(20% 0.01 240)",
              }}
            >
              Skills &amp; Tools
            </h2>
            <div
              className="hidden sm:block w-24 h-px mb-3"
              style={{ background: "oklch(60% 0.15 220)" }}
            />
          </div>
        </div>

        {/* Grouped skill list — not a tag cloud */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, index) => (
            <div
              key={group.category}
              className={`fade-in-up hover-lift ${gridVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div
                className="p-6 rounded-xl h-full cursor-default"
                style={{
                  background: "oklch(99% 0.003 240)",
                  border: "1px solid oklch(88% 0.008 240)",
                }}
              >
                {/* Category label */}
                <div className="flex items-baseline gap-3 mb-4">
                  <span
                    className="font-display font-black text-xl leading-none"
                    style={{ color: "oklch(72% 0.18 85 / 0.3)" }}
                  >
                    {group.number}
                  </span>
                  <h3
                    className="font-display font-bold text-sm leading-tight"
                    style={{ color: "oklch(20% 0.01 240)" }}
                  >
                    {group.category}
                  </h3>
                </div>

                {/* Skill items */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-md font-medium"
                      style={{
                        background: "oklch(93% 0.006 240)",
                        color: "oklch(35% 0.01 240)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
