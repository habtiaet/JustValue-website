import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ons Verhaal - JustValue | Nederlands Merk voor Kwaliteitsproducten",
  description: "Ontdek het verhaal achter JustValue. Een Nederlands merk dat zich richt op kwaliteitsproducten tegen een eerlijke prijs voor alledaags gebruik. Meer dan 200 producten beschikbaar op bol.com.",
  keywords: "JustValue, ons verhaal, Nederlands merk, missie, visie, waarden, kwaliteitsproducten",
  openGraph: {
    title: "Ons Verhaal - JustValue",
    description: "Ontdek het verhaal achter JustValue. Een Nederlands merk dat zich richt op kwaliteitsproducten tegen een eerlijke prijs.",
    type: "website",
    locale: "nl_NL",
  },
};

export default function OverOns() {
  return (
    <div className="py-16 overflow-x-hidden w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center text-gray-900 break-words px-4">Ons verhaal</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Onze missie</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              JustValue is een Nederlands merk dat zich richt op het aanbieden
              van kwaliteitsproducten tegen een eerlijke prijs. Wij geloven dat
              iedereen recht heeft op toegankelijke producten van goede kwaliteit
              voor alledaags gebruik.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Onze naam zegt het al: wij bieden gewoon goede waarde. Geen
              onnodige toeters en bellen, maar producten die doen wat ze moeten
              doen, tegen een prijs die past bij de kwaliteit.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Onze visie</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              JustValue wil een vertrouwd merk worden voor Nederlandse consumenten
              die op zoek zijn naar betrouwbare producten voor hun dagelijks leven.
              We streven ernaar om een breed assortiment aan te bieden dat
              verschillende aspecten van het moderne leven dekt.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Onze producten zijn te vinden op bol.com, waar we profiteren van
              de betrouwbare service en snelle levering die bol.com biedt. We
              blijven continu werken aan het uitbreiden van ons assortiment en
              het verbeteren van de kwaliteit van onze producten.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Onze waarden</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Kwaliteit</h3>
                <p className="text-gray-700">
                  Wij staan voor producten die lang meegaan en betrouwbaar zijn.
                  Kwaliteit staat bij ons voorop.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Eerlijkheid</h3>
                <p className="text-gray-700">
                  Transparante prijzen en eerlijke productbeschrijvingen. Wat je
                  ziet, is wat je krijgt.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Toegankelijkheid</h3>
                <p className="text-gray-700">
                  Onze producten zijn voor iedereen toegankelijk. We maken
                  kwaliteit betaalbaar.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Nederlands</h3>
                <p className="text-gray-700">
                  Als Nederlands merk begrijpen we de behoeften van Nederlandse
                  consumenten en passen we daarop aan.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Ons assortiment</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              JustValue biedt producten in verschillende categorieën:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>
                <strong>Gezondheid:</strong> Producten voor uw gezondheid en
                welzijn
              </li>
              <li>
                <strong>Huishouden:</strong> Alles wat u nodig heeft voor in en
                om het huis
              </li>
              <li>
                <strong>Elektronica:</strong> Moderne elektronische apparaten en
                accessoires
              </li>
              <li>
                <strong>Klussen:</strong> Gereedschap en benodigdheden voor uw
                klusprojecten
              </li>
              <li>
                <strong>Kamperen & Outdoor:</strong> Producten voor de
                avonturier en natuur-liefhebber
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Ons assortiment blijft groeien, dus houd onze{" "}
              <a
                href="https://www.bol.com/nl/nl/b/justvalue/607242601/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-primary hover:text-primary-dark underline"
              >
                bol.com pagina
              </a>{" "}
              in de gaten voor nieuwe producten.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

