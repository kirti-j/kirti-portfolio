import { portfolioData } from "@/data/portfolio";

export default function ResumeCTA() {
  return (
    <section className="py-16 px-6">

      <div className="max-w-4xl mx-auto">

        <div className="glass p-12 text-center">

          <h2 className="text-4xl font-bold text-yellow-400">
            Let's Work Together
          </h2>

          <p className="mt-6 text-gray-300">
            Looking for opportunities in
            Data Analytics,
            Business Analytics,
            Machine Learning,
            Software Development,
            and AI.
          </p>

          <a
            href={portfolioData.personal.resume}
            target="_blank"
            className="
            inline-block
            mt-8
            px-8
            py-4
            rounded-xl
            bg-yellow-500
            text-black
            font-semibold
            "
          >
            Download Resume
          </a>

        </div>

      </div>
    </section>
  );
}