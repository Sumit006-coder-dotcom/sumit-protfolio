import { About } from "./About";
import { Certifications } from "./Certifications";
import { Contact } from "./Contact";
import { DataPipeline } from "./DataPipeline";
import { Education } from "./Education";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { LearningFocus } from "./LearningFocus";
import { NavBar } from "./NavBar";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { SkillsTools } from "./SkillsTools";

export function Portfolio() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DataPipeline />
        <Certifications />
        <SkillsTools />
        <Education />
        <LearningFocus />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
