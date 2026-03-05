import { ArrowRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useInView } from "../hooks/useInView";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "8826739429",
    href: "tel:8826739429",
  },
  {
    icon: Mail,
    label: "Email",
    value: "sumitkarn2005@gmail.com",
    href: "mailto:sumitkarn2005@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Delhi, India · Available for Relocation",
    href: null,
  },
];

export function Contact() {
  const [sectionRef, isInView] = useInView<HTMLElement>();
  const [contentRef, contentVisible] = useInView<HTMLDivElement>();

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-28 overflow-hidden"
      style={{ background: "oklch(97% 0.005 240)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: CTA */}
          <div
            className={`fade-in-up ${isInView ? "visible" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div
              className="text-xs font-bold tracking-widest uppercase mb-6"
              style={{ color: "oklch(72% 0.18 85)" }}
            >
              Let&apos;s Connect
            </div>

            <h2
              className="font-display font-black leading-tight mb-6"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "oklch(20% 0.01 240)",
              }}
            >
              Ready to{" "}
              <span style={{ color: "oklch(72% 0.18 85)" }}>Contribute</span>
            </h2>

            <p
              className="font-body text-base leading-relaxed mb-10 max-w-lg"
              style={{ color: "oklch(45% 0.01 240)" }}
            >
              I'm actively seeking fresher or junior roles in Data Analytics,
              Data Science, or AI/ML where I can learn fast and contribute to
              real-world projects. With a strong foundation in Python, SQL, and
              Machine Learning, I'm eager to apply my skills and grow alongside
              experienced professionals.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:sumitkarn2005@gmail.com"
                data-ocid="contact.primary_button"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-amber-glow"
                style={{
                  background: "oklch(72% 0.18 85)",
                  color: "oklch(15% 0.01 240)",
                }}
              >
                <Mail size={15} />
                Email Me
                <ArrowRight size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/sumit-karn-86606524a"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.secondary_button"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm border transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  border: "1px solid oklch(88% 0.008 240)",
                  color: "oklch(20% 0.01 240)",
                }}
              >
                <Linkedin size={15} />
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Contact info */}
          <div ref={contentRef}>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.label}
                    className={`fade-in-up ${contentVisible ? "visible" : ""} hover-lift`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className="flex items-center gap-5 p-5 rounded-xl cursor-default"
                      style={{
                        background: "oklch(99% 0.003 240)",
                        border: "1px solid oklch(88% 0.008 240)",
                      }}
                    >
                      <div
                        className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center"
                        style={{ background: "oklch(72% 0.18 85 / 0.1)" }}
                      >
                        <Icon
                          size={18}
                          style={{ color: "oklch(72% 0.18 85)" }}
                        />
                      </div>
                      <div>
                        <div
                          className="text-xs font-semibold tracking-wide uppercase mb-0.5"
                          style={{ color: "oklch(65% 0.01 240)" }}
                        >
                          {info.label}
                        </div>
                        {info.href ? (
                          <a
                            href={info.href}
                            data-ocid={
                              info.label === "Email"
                                ? "contact.input"
                                : undefined
                            }
                            className="font-body text-sm font-medium underline-draw"
                            style={{ color: "oklch(20% 0.01 240)" }}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span
                            className="font-body text-sm font-medium"
                            style={{ color: "oklch(20% 0.01 240)" }}
                          >
                            {info.value}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Availability badge */}
              <div
                className={`fade-in-up ${contentVisible ? "visible" : ""}`}
                style={{ transitionDelay: "0.4s" }}
              >
                <div
                  className="p-5 rounded-xl"
                  style={{
                    background: "oklch(72% 0.18 85 / 0.08)",
                    border: "1px solid oklch(72% 0.18 85 / 0.25)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{
                        background: "oklch(72% 0.18 85)",
                        animation: "pulse-amber 2s ease-in-out infinite",
                      }}
                    />
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "oklch(58% 0.18 85)" }}
                    >
                      Actively seeking opportunities · Available immediately
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
