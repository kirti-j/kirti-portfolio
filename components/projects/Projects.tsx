"use client";

import { portfolioData } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2
          className="
          text-4xl
          font-bold
          text-center
          mb-16
          text-yellow-400
          "
        >
          Featured Projects
        </h2>

        <div
          className="
          grid
          md:grid-cols-2
          gap-8
          "
        >
          {portfolioData.projects.map(
            (project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            )
          )}
        </div>

      </div>
    </section>
  );
}