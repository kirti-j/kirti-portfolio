"use client";

import {
  Mail,
  Phone,
  MapPin,
  GitBranchIcon ,
  Globe
} from "lucide-react";



import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="glass p-8">

            <h3 className="text-2xl font-semibold mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">
                <Mail />
                <span>{portfolioData.personal.email}</span>
              </div>

              <div className="flex gap-4">
                <Phone />
                <span>{portfolioData.personal.phone}</span>
              </div>

              <div className="flex gap-4">
                <MapPin />
                <span>{portfolioData.personal.location}</span>
              </div>

            </div>

            <div className="flex gap-6 mt-8">

              <a href={portfolioData.personal.github}>
                <GitBranchIcon />
              </a>

              <a href={portfolioData.personal.linkedin}>
                <Globe />
              </a>

            </div>

          </div>

          <form className="glass p-8">

            <input
              type="text"
              placeholder="Kirti Jadhav"
              className="w-full p-4 rounded-lg bg-black/20 mb-4"
            />

            <input
              type="email"
              placeholder="kirti.j0401@gmail.com"
              className="w-full p-4 rounded-lg bg-black/20 mb-4"
            />

            <textarea
              placeholder="Message"
              rows={5}
              className="w-full p-4 rounded-lg bg-black/20"
            />

            <button
              className="
              mt-5
              px-6
              py-3
              rounded-lg
              bg-yellow-500
              text-black
              font-semibold
              "
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}