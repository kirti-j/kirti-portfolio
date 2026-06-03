import { portfolioData } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {portfolioData.certifications.map(
            (cert) => (
              <div
                key={cert.title}
                className="glass p-6 hover-lift"
              >
                <h3 className="text-xl font-semibold">
                  {cert.title}
                </h3>

                <p className="text-yellow-400 mt-2">
                  {cert.issuer}
                </p>

                <p className="text-gray-400 mt-2">
                  {cert.date}
                </p>

                <a
                  href={cert.credential}
                  target="_blank"
                  className="
                  inline-block
                  mt-5
                  text-yellow-400
                  "
                >
                  Verify Credential →
                </a>
              </div>
            )
          )}
        </div>

      </div>
    </section>
  );
}