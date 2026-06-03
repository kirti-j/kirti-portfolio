"use client";

import { portfolioData } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">
          Experience
        </h2>

        <div className="relative">

          <div className="absolute left-5 top-0 bottom-0 w-1 bg-yellow-500"></div>

          {portfolioData.experience.map((item, index) => (
            <div
              key={index}
              className="relative pl-16 pb-12"
            >
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center">
                <Briefcase
                  size={18}
                  className="text-black"
                />
              </div>

              <div className="glass p-6 hover-lift">

                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-yellow-400 mt-2">
                  {item.company}
                </p>

                <p className="text-gray-400 mt-2">
                  {item.duration}
                </p>

                <p className="mt-4 text-gray-300">
                  {item.description}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}