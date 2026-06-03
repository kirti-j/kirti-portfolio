"use client";
import Image from "next/image";

import {
  GitBranch,
  ExternalLink
} from "lucide-react";

interface ProjectCardProps {
  project: any;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <div
      className="
      glass
      overflow-hidden
      hover-lift
      "
    >
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={500}
        className="
            w-full
            h-52
            object-cover
            "
        />
      <div className="p-6">

        <span
          className="
          text-xs
          text-yellow-400
          "
        >
          {project.category}
        </span>

        <h3 className="text-2xl font-semibold mt-2">
          {project.title}
        </h3>

        <p className="mt-4 text-gray-400">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">

          {project.technologies.map(
            (tech: string) => (
              <span
                key={tech}
                className="
                px-3
                py-1
                text-sm
                rounded-lg
                bg-yellow-500/10
                border
                border-yellow-500/20
                "
              >
                {tech}
              </span>
            )
          )}

        </div>

        <div className="flex gap-4 mt-6">

          <a
            href={project.github}
            target="_blank"
          >
            <GitBranch />
          </a>

          <a
            href={project.demo}
            target="_blank"
          >
            <ExternalLink />
          </a>

        </div>

      </div>
    </div>
  );
}