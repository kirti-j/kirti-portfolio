"use client";

import { portfolioData } from "@/data/portfolio";

const categories = [
  {
    title: "Programming Languages",
    data: portfolioData.skills.languages
  },

  {
    title: "Frameworks & Libraries",
    data: portfolioData.skills.frameworks
  },

  {
    title: "Databases",
    data: portfolioData.skills.databases
  },

  {
    title: "Analytics",
    data: portfolioData.skills.analytics
  },

  {
    title: "Tools",
    data: portfolioData.skills.tools
  }
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-16">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {categories.map((category) => (
            <div
              key={category.title}
              className="glass p-6 hover-lift"
            >
              <h3 className="text-xl font-semibold text-yellow-400 mb-5">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">

                {category.data.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-3
                      py-2
                      rounded-lg
                      bg-yellow-500/10
                      border
                      border-yellow-500/20
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}