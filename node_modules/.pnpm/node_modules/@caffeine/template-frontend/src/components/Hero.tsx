import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    const timer = setTimeout(() => {
      el.style.transition =
        "opacity 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "oklch(97% 0.005 240)" }}
    >
      {/* Background geometric elements */}
      <div
        className="absolute top-0 right-0 w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] rounded-full opacity-[0.07] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, oklch(72% 0.18 85), transparent 70%)",
          transform: "translate(25%, -25%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full opacity-[0.05] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, oklch(60% 0.15 220), transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(20% 0.01 240) 1px, transparent 1px), linear-gradient(90deg, oklch(20% 0.01 240) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        ref={containerRef}
        className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full"
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <div
            className="px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{
              background: "oklch(72% 0.18 85 / 0.15)",
              color: "oklch(58% 0.18 85)",
              border: "1px solid oklch(72% 0.18 85 / 0.3)",
            }}
          >
            Available for Opportunities
          </div>
          <div className="flex items-center gap-1.5">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: "oklch(72% 0.18 85)",
                animation: "pulse-amber 2s ease-in-out infinite",
              }}
            />
            <span className="text-xs text-muted-foreground">Open to work</span>
          </div>
        </div>

        {/* Main name — asymmetric typographic treatment */}
        <div className="mb-6">
          <div className="flex items-baseline gap-4 flex-wrap">
            <h1
              className="font-display font-black leading-[0.9] tracking-tight"
              style={{
                fontSize: "clamp(3.5rem, 10vw, 8rem)",
                color: "oklch(20% 0.01 240)",
              }}
            >
              Sumit
            </h1>
            <span
              className="font-display font-black leading-[0.9] tracking-tight"
              style={{
                fontSize: "clamp(3.5rem, 10vw, 8rem)",
                WebkitTextStroke: "2px oklch(72% 0.18 85)",
                color: "transparent",
              }}
            >
              Karn
            </span>
          </div>
          <div
            className="mt-3 font-body text-sm tracking-widest uppercase font-medium"
            style={{ color: "oklch(60% 0.15 220)" }}
          >
            Aspiring Data Scientist · Python · SQL · ML
          </div>
        </div>

        {/* Tagline */}
        <p
          className="font-body text-lg leading-relaxed max-w-xl mb-10"
          style={{ color: "oklch(45% 0.01 240)" }}
        >
          Building real-world ML & analytics projects —{" "}
          <span className="text-amber font-semibold">Fraud Detection</span>,{" "}
          <span
            style={{ color: "oklch(60% 0.15 220)" }}
            className="font-semibold"
          >
            NLP
          </span>
          , & <span className="text-amber font-semibold">Dashboards</span>.
        </p>

        {/* CTAs — tiered hierarchy: dominant primary, secondary outline, ghost text link */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <a
            href="mailto:sumitkarn2005@gmail.com"
            data-ocid="hero.primary_button"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-md font-bold text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-amber-glow"
            style={{
              background: "oklch(72% 0.18 85)",
              color: "oklch(15% 0.01 240)",
              letterSpacing: "-0.01em",
            }}
          >
            <Mail size={16} />
            Get in Touch
            <ArrowRight size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/sumit-karn-86606524a"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="hero.secondary_button"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-semibold text-sm border transition-all duration-200 hover:-translate-y-0.5"
            style={{
              border: "1px solid oklch(78% 0.01 240)",
              color: "oklch(30% 0.01 240)",
              background: "transparent",
            }}
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
          <a
            href="https://github.com/Sumit006-coder-dotcom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-3.5 text-sm font-medium transition-colors underline-draw"
            style={{ color: "oklch(52% 0.01 240)" }}
          >
            <Github size={14} />
            GitHub
          </a>
        </div>

        {/* Quick stats — offset layout */}
        <div
          className="flex flex-wrap items-center gap-10 pt-6 border-t"
          style={{ borderColor: "oklch(88% 0.008 240)" }}
        >
          {[
  { value: "3", label: "ML Projects" },
  { value: "2", label: "Certifications" },
  { value: "85%", label: "Best Model Accuracy" },
  { value: "10+", label: "Tools & Libraries" },
].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span
                className="font-display font-black text-3xl leading-none tracking-tight"
                style={{ color: "oklch(72% 0.18 85)" }}
              >
                {stat.value}
              </span>
              <span
                className="text-xs mt-1.5 font-medium tracking-wide uppercase"
                style={{ color: "oklch(58% 0.01 240)" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave clip */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{
          background: "oklch(18% 0.02 240)",
          clipPath: "polygon(0 60%, 100% 0%, 100% 100%, 0 100%)",
        }}
      />
    </section>
  );
}
