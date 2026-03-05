import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-12 overflow-hidden"
      style={{ background: "oklch(18% 0.02 240)" }}
    >
      {/* Top clip from light section */}
      <div
        className="absolute top-0 left-0 right-0 h-12 pointer-events-none"
        style={{
          background: "oklch(97% 0.005 240)",
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
          {/* Logo + copyright */}
          <div className="flex items-center gap-4">
            <div
              className="w-8 h-8 rounded-md flex items-center justify-center font-display font-black text-xs"
              style={{
                background: "oklch(72% 0.18 85)",
                color: "oklch(15% 0.01 240)",
              }}
            >
              SK
            </div>
            <div>
              <p
                className="font-body text-sm font-medium"
                style={{ color: "oklch(75% 0.005 240)" }}
              >
                © {year} Sumit Karn. Built with passion for data.
              </p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              {
                href: "https://github.com/Sumit006-coder-dotcom",
                icon: Github,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/sumit-karn-86606524a",
                icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "mailto:sumitkarn2005@gmail.com",
                icon: Mail,
                label: "Email",
              },
            ].map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={
                    social.href.startsWith("mailto") ? undefined : "_blank"
                  }
                  rel={
                    social.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "oklch(24% 0.02 240)",
                    color: "oklch(65% 0.01 240)",
                    border: "1px solid oklch(28% 0.02 240)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "oklch(72% 0.18 85)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "oklch(72% 0.18 85 / 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "oklch(65% 0.01 240)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "oklch(28% 0.02 240)";
                  }}
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
