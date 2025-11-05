import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Producten - JustValue | Meer dan 200 Kwaliteitsproducten",
  description: "Ontdek het volledige assortiment van JustValue. Meer dan 200 producten in categorieën zoals gezondheid, huishouden, elektronica, klussen en outdoor. Alle producten beschikbaar op bol.com.",
  keywords: "JustValue producten, gezondheid, huishouden, elektronica, klussen, outdoor, bol.com, assortiment",
  openGraph: {
    title: "Producten - JustValue",
    description: "Ontdek het volledige assortiment van JustValue. Meer dan 200 producten in diverse categorieën beschikbaar op bol.com.",
    type: "website",
    locale: "nl_NL",
  },
};

const categories = [
  {
    name: "Alle producten",
    description:
      "Bekijk ons volledige assortiment van meer dan 200 kwaliteitsproducten in alle categorieën.",
    icon: "🛍️",
    url: "https://www.bol.com/nl/nl/b/justvalue/607242601/",
    count: "200+ producten",
  },
  {
    name: "Gezondheid",
    description:
      "Producten voor uw gezondheid en welzijn. Van supplementen tot gezondheidsapparatuur.",
    icon: "💊",
    url: "https://www.bol.com/nl/nl/b/gezondheidsproducten-justvalue/607242601+12541/",
    count: "40+ producten",
  },
  {
    name: "Huishouden",
    description:
      "Alles wat u nodig heeft voor in en om het huis. Van meubelverhogers tot voorraadpotten.",
    icon: "🏠",
    url: "https://www.bol.com/nl/nl/b/huishouden-justvalue/607242601+12001/",
    count: "18+ producten",
  },
  {
    name: "Elektronica",
    description:
      "Moderne elektronische apparaten en accessoires. Van controllers tot VR-accessoires.",
    icon: "📱",
    url: "https://www.bol.com/nl/nl/b/elektronica-justvalue/607242601+3136/",
    count: "18+ producten",
  },
  {
    name: "Klussen",
    description:
      "Gereedschap en benodigdheden voor uw klusprojecten. Van filters tot ontstoppingspompen.",
    icon: "🔧",
    url: "https://www.bol.com/nl/nl/b/klusspullen-justvalue/607242601+13155/",
    count: "13+ producten",
  },
  {
    name: "Kamperen & Outdoor",
    description:
      "Producten voor de avonturier en natuur-liefhebber. Van zaklampen tot outdoor-uitrusting.",
    icon: "⛺",
    url: "https://www.bol.com/nl/nl/b/kamperen-outdoor-justvalue/607242601+15270/",
    count: "12+ producten",
  },
];

export default function Producten() {
  return (
    <div className="py-16 overflow-x-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 break-words px-4">Onze producten</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            JustValue biedt een breed assortiment aan kwaliteitsproducten in
            verschillende categorieën. Ontdek ons volledige assortiment op
            bol.com.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">{category.name}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
              <p className="text-sm font-semibold text-gray-500 mb-6">{category.count}</p>
              <a
                href={category.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors w-full text-center"
              >
                Bekijk op bol.com →
              </a>
            </div>
          ))}
        </div>

        <div className="bg-primary text-white rounded-lg p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bekijk al onze producten op bol.com
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Ontdek ons volledige assortiment van meer dan 200 producten
          </p>
          <a
            href="https://www.bol.com/nl/nl/b/justvalue/607242601/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Bezoek bol.com JustValue Pagina
          </a>
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Veelgestelde vragen
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
                Waar kan ik JustValue producten kopen?
              </h3>
              <p className="text-gray-700">
                Onze producten zijn voornamelijk te vinden op bol.com. Bezoek
                onze{" "}
                <a
                  href="https://www.bol.com/nl/nl/b/justvalue/607242601/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-primary hover:text-primary-dark underline"
                >
                  JustValue pagina op bol.com
                </a>{" "}
                om ons volledige assortiment te bekijken.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
                Zijn de producten beschikbaar voor verzending?
              </h3>
              <p className="text-gray-700">
                Ja, onze producten zijn beschikbaar via bol.com. De
                verzendmogelijkheden en levertijden zijn afhankelijk van bol.com
                en hun beleid. Bekijk de productpagina's op bol.com voor meer
                informatie over verzending en levering.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
                Wat is het retourbeleid?
              </h3>
              <p className="text-gray-700">
                Het retourbeleid wordt beheerd door bol.com. Bekijk hun
                retourbeleid op de productpagina's voor meer informatie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

