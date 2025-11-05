import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vacatures - JustValue | Werk bij een Nederlands Merk",
  description: "Zoek je een nieuwe uitdaging? Bekijk de vacatures bij JustValue. Een Nederlands merk dat kwaliteitsproducten aanbiedt. Houd deze pagina in de gaten voor toekomstige mogelijkheden.",
  keywords: "JustValue vacatures, werken bij JustValue, carrière, Nederlands merk, banen",
  openGraph: {
    title: "Vacatures - JustValue",
    description: "Zoek je een nieuwe uitdaging? Bekijk de vacatures bij JustValue.",
    type: "website",
    locale: "nl_NL",
  },
};

export default function Vacatures() {
  return (
    <div className="py-16 overflow-x-hidden w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 break-words px-4">
            Vacatures
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Op zoek naar een nieuwe uitdaging? Bekijk onze openstaande vacatures.
          </p>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-xl p-12 text-center">
          <div className="mb-8">
            <svg
              className="mx-auto h-24 w-24 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Momenteel geen vacatures
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Op dit moment hebben we geen openstaande vacatures. Houd deze pagina
            in de gaten voor toekomstige mogelijkheden, of neem contact met ons op
            voor meer informatie over werken bij JustValue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Neem contact op
            </a>
            <a
              href="/over-ons"
              className="inline-block bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Ons verhaal
            </a>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl p-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
            Over werken bij JustValue
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Onze cultuur
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Bij JustValue werken we aan het verbeteren van het dagelijkse leven
                van consumenten. We zijn een jong, dynamisch team dat zich richt op
                innovatie en kwaliteit.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Wat we bieden
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We bieden een inspirerende werkomgeving waar je kunt groeien en
                ontwikkelen. We waarderen initiatief, creativiteit en een
                resultaatgerichte houding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

