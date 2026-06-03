import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import EducationTimeline from "@/components/timeline/EducationTimeline";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import ExperienceTimeline from "@/components/timeline/ExperienceTimeline";
import Certifications from "@/components/certifications/Certifications";
import Achievements from "@/components/achievements/Achievements";
import ResumeCTA from "@/components/about/ResumeCTA";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import BackToTop from "@/components/ui/BackToTop";
 

export default function Home() {
  return (
    <>
      <Navbar />
    

      <Hero />

      <About />

      <EducationTimeline />

      <Skills />

      <Projects />


      <ExperienceTimeline />

      <Certifications />

      <Achievements />

      <ResumeCTA />
      
      <Contact />

      <Footer />

      <BackToTop />
    </>
  );
}