"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}

        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-yellow-400 text-lg mb-3"
          >
            Welcome to my Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-5xl md:text-7xl font-bold text-white"
          >
            {portfolioData.personal.name}
          </motion.h1>

          <div className="text-2xl md:text-3xl font-semibold mt-5 text-yellow-400">
            <TypeAnimation
              sequence={[
                "Data Analyst",
                2000,
                "Machine Learning Enthusiast",
                2000,
                "Software Developer",
                2000,
              ]}
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            {portfolioData.summary}
          </p>

          <div className="flex gap-4 mt-8">

            <a
              href={portfolioData.personal.resume}
              target="_blank"
              className="px-6 py-3 rounded-xl bg-yellow-500 text-black font-semibold"
            >
              Resume
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-yellow-500 text-yellow-400"
            >
              Contact
            </a>

          </div>
        </div>

        {/* Right Side */}

        <motion.div
          animate={{
            y: [0, -10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity
          }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute inset-0 blur-3xl bg-yellow-400/30 rounded-full"></div>

            <img
              src={portfolioData.personal.image}
              alt="Profile"
              className="w-[350px] h-[350px] rounded-full border-4 border-yellow-500 object-cover relative z-10"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}