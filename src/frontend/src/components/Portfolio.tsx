import { About } from "./About";
import { Certifications } from "./Certifications";
import { Contact } from "./Contact";
import { DataPipeline } from "./DataPipeline";
import { Education } from "./Education";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { NavBar } from "./NavBar";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { getPortfolioRole } from "../portfolioData";
import { useEffect } from "react";

export function Portfolio() {
  const role = getPortfolioRole();

  useEffect(() => {
    document.title = `Sumit Karn — ${role === "analytics" ? "Data Analyst" : "Data Scientist"}`;
  }, [role]);

  return (
    <div className="min-h-screen">
      <NavBar role={role} />
      <main>
        <Hero role={role} />
        <About role={role} />
        <Skills role={role} />
        <Projects role={role} />
        <DataPipeline role={role} />
        <Certifications />
        <Education />
        <Contact role={role} />
      </main>
      <Footer />
    </div>
  );
}
