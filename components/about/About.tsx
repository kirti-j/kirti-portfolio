"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-yellow-400"
        >
          About Me
        </motion.h2>

        <div className="glass p-8">

          <p className="text-lg text-gray-300 leading-relaxed">
            {portfolioData.summary}
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-10">

            <div>
              <h3 className="text-2xl font-semibold text-yellow-400 mb-5">
                Career Objective
              </h3>

              <p className="text-gray-300">
                Seeking opportunities in Data Analytics,
                Business Analytics, Machine Learning,
                Software Development and Cloud Technologies
                where I can contribute technical expertise
                and continue learning through real-world projects.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-yellow-400 mb-5">
                Strengths
              </h3>

              <div className="flex flex-wrap gap-3">
                {portfolioData.strengths.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}