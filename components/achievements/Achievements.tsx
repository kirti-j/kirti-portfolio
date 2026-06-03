import { portfolioData } from "@/data/portfolio";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">
          Achievements
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {portfolioData.achievements.map(
            (item) => (
              <div
                key={item.title}
                className="
                glass
                p-8
                text-center
                hover-lift
                "
              >
                <div
                  className="
                  text-5xl
                  font-bold
                  text-yellow-400
                  "
                >
                  {item.value}
                </div>

                <p className="mt-4 text-gray-300">
                  {item.title}
                </p>
              </div>
            )
          )}
        </div>

      </div>
    </section>
  );
}