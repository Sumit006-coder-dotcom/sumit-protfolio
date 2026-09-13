import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { roleContent, type PortfolioRole } from "../portfolioData";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function NavBar({ role }: { role: PortfolioRole }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.getElementById(href.replace("#", ""))?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const switchRole = (nextRole: PortfolioRole) => {
    window.location.href = nextRole === "analytics" ? "?role=analytics" : "?role=data-science";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-xs"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group flex-shrink-0"
        >
          <div
            className="w-9 h-9 rounded-md flex items-center justify-center font-display font-black text-sm tracking-tight"
            style={{ background: "oklch(72% 0.18 85)", color: "oklch(15% 0.01 240)" }}
          >
            SK
          </div>
          <span className="font-display font-semibold text-sm hidden sm:block group-hover:text-amber transition-colors">
            Sumit Karn
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, i) => {
            const sectionId = link.href.replace("#", "");
            return (
              <button
                type="button"
                key={link.href}
                data-ocid={`nav.link.${i + 1}`}
                onClick={() => handleNavClick(link.href)}
                className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition-all underline-draw ${
                  activeSection === sectionId ? "text-amber" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-1 p-1 rounded-lg border border-border bg-background/70">
          <button
            type="button"
            onClick={() => switchRole("analytics")}
            className={`px-2.5 py-1.5 rounded-md text-xs font-semibold transition-colors ${role === "analytics" ? "bg-amber text-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            Analytics
          </button>
          <button
            type="button"
            onClick={() => switchRole("data-science")}
            className={`px-2.5 py-1.5 rounded-md text-xs font-semibold transition-colors ${role === "data-science" ? "bg-amber text-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            Data Science
          </button>
        </div>

        <button
          type="button"
          className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"} bg-background/95 backdrop-blur-md border-b border-border`}>
        <div className="px-6 py-4">
          <div className="flex gap-2 mb-3">
            <button type="button" onClick={() => switchRole("analytics")} className={`flex-1 py-2 rounded-md text-xs font-semibold ${role === "analytics" ? "bg-amber text-foreground" : "bg-muted text-muted-foreground"}`}>Data Analytics</button>
            <button type="button" onClick={() => switchRole("data-science")} className={`flex-1 py-2 rounded-md text-xs font-semibold ${role === "data-science" ? "bg-amber text-foreground" : "bg-muted text-muted-foreground"}`}>Data Science</button>
          </div>
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button type="button" key={link.href} onClick={() => handleNavClick(link.href)} className="text-left px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted">
                {link.label}
              </button>
            ))}
          </nav>
          <p className="text-[10px] text-muted-foreground mt-3 text-center">{roleContent[role].label}</p>
        </div>
      </div>
    </header>
  );
}
