import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JustValue - Nederlands Merk voor Kwaliteitsproducten | Meer dan 200 Producten",
  description: "JustValue is een Nederlands merk dat meer dan 200 kwaliteitsproducten aanbiedt voor huishouden, elektronica, gezondheid en meer. Ontdek ons assortiment op bol.com.",
  keywords: "JustValue, Nederlands merk, kwaliteitsproducten, bol.com, huishouden, elektronica, gezondheid, 200+ producten",
  openGraph: {
    title: "JustValue - Nederlands Merk voor Kwaliteitsproducten",
    description: "JustValue is een Nederlands merk dat meer dan 200 kwaliteitsproducten aanbiedt voor huishouden, elektronica, gezondheid en meer.",
    type: "website",
    locale: "nl_NL",
    url: "https://justvalue.nl",
  },
};

export default function Home() {
  return (
    <div className="overflow-x-hidden w-full">
      {/* Hero Section - Full Width with Background */}
      <section className="relative h-[75vh] min-h-[650px] bg-gray-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)] z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)] z-10"></div>
        <div className="absolute inset-0 bg-gray-900/40 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-10 flex justify-center animate-fade-in">
            <Image
              src="/JustValue_1294052.png"
              alt="JustValue Logo"
              width={300}
              height={100}
              className="h-20 md:h-24 lg:h-28 w-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight break-words animate-fade-in-up">
            Innovatie voor een comfortabel leven
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-12 max-w-3xl mx-auto font-light animate-fade-in-up-delay">
            Toegankelijke innovatie en kwaliteit
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up-delay-2">
            <Link
              href="/producten"
              className="bg-white text-primary px-12 py-5 rounded-xl text-lg font-bold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Onze producten
            </Link>
            <Link
              href="/over-ons"
              className="bg-transparent border-2 border-white text-white px-12 py-5 rounded-xl text-lg font-bold hover:bg-white hover:text-primary transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Ons verhaal
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-900 break-words">
              Toegankelijke innovatie en kwaliteit
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Bij JustValue draait alles om de consument. Ons uitgebreide assortiment van meer dan 200 producten is ontworpen met een duidelijk doel voor ogen: het dagelijkse leven van onze consumenten verbeteren door onze producten eenvoudiger, prettiger en comfortabeler te maken.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We willen een groot publiek aanspreken en ervoor zorgen dat onze producten aansluiten op de behoeften van het moment. Met een sterke focus op kwaliteit en vernieuwing streven we ernaar om telkens weer de verwachtingen van onze consumenten te overtreffen.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-7xl md:text-8xl font-extrabold bg-gradient-to-br from-primary to-primary-dark bg-clip-text text-transparent mb-4">5+</div>
              <div className="text-xl md:text-2xl text-gray-800 font-bold">Jaar ervaring</div>
              <div className="text-gray-500 mt-2">Sinds 2019</div>
            </div>
            <div className="p-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-7xl md:text-8xl font-extrabold bg-gradient-to-br from-primary to-primary-dark bg-clip-text text-transparent mb-4">200+</div>
              <div className="text-xl md:text-2xl text-gray-800 font-bold">Producten</div>
              <div className="text-gray-500 mt-2">In diverse categorieën</div>
            </div>
            <div className="p-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-7xl md:text-8xl font-extrabold bg-gradient-to-br from-primary to-primary-dark bg-clip-text text-transparent mb-4">50.000+</div>
              <div className="text-xl md:text-2xl text-gray-800 font-bold">Tevreden klanten</div>
              <div className="text-gray-500 mt-2">En groeiend</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Preview - Large Cards */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4 text-gray-900 break-words px-4">
            Onze productcategorieën
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            Ontdek ons uitgebreide assortiment in verschillende categorieën
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Gezondheid",
                description: "Producten voor uw gezondheid en welzijn",
                count: "40+ producten",
                bgColor: "from-blue-500 to-blue-600",
                icon: "💊",
              },
              {
                name: "Huishouden",
                description: "Alles voor in en om het huis",
                count: "18+ producten",
                bgColor: "from-green-500 to-green-600",
                icon: "🏠",
              },
              {
                name: "Elektronica",
                description: "Moderne elektronische apparaten",
                count: "18+ producten",
                bgColor: "from-purple-500 to-purple-600",
                icon: "📱",
              },
              {
                name: "Klussen",
                description: "Gereedschap en klusspullen",
                count: "13+ producten",
                bgColor: "from-orange-500 to-orange-600",
                icon: "🔧",
              },
              {
                name: "Kamperen & Outdoor",
                description: "Voor de avonturier",
                count: "12+ producten",
                bgColor: "from-teal-500 to-teal-600",
                icon: "⛺",
              },
            ].map((category, index) => (
              <Link
                key={category.name}
                href="/producten"
                className="group relative h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-200"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">{category.icon}</div>
                <div className="relative h-full flex flex-col justify-between p-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300">{category.name}</h3>
                    <p className="text-gray-600 group-hover:text-white/95 transition-colors duration-300 mb-2 leading-relaxed">{category.description}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-gray-500 group-hover:text-white/90 transition-colors duration-300">{category.count}</p>
                    <span className="text-primary group-hover:text-white font-bold text-lg transform group-hover:translate-x-2 transition-all duration-300">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              href="/producten"
              className="inline-block bg-primary text-white px-12 py-5 rounded-xl text-lg font-bold hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Bekijk alle categorieën
            </Link>
          </div>
        </div>
      </section>

      {/* Large Cards Section - Like TLS Commerce */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/over-ons"
              className="group relative h-[420px] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-200"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary-dark/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full flex flex-col justify-end p-10 text-white z-10">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 group-hover:text-white transition-colors duration-300 break-words">
                  Ons verhaal
                </h2>
                <p className="text-lg text-gray-700 group-hover:text-white/95 transition-colors duration-300 mb-6 leading-relaxed">
                  Ontdek wie we zijn en wat we doen
                </p>
                <span className="text-primary group-hover:text-white font-bold text-lg flex items-center gap-2 transform group-hover:translate-x-2 transition-all duration-300">
                  Meer informatie <span>→</span>
                </span>
              </div>
            </Link>

            <Link
              href="/vacatures"
              className="group relative h-[420px] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-200"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary-dark/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full flex flex-col justify-end p-10 text-white z-10">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 group-hover:text-white transition-colors duration-300 break-words">
                  Vacatures
                </h2>
                <p className="text-lg text-gray-700 group-hover:text-white/95 transition-colors duration-300 mb-6 leading-relaxed">
                  Werk bij JustValue
                </p>
                <span className="text-primary group-hover:text-white font-bold text-lg flex items-center gap-2 transform group-hover:translate-x-2 transition-all duration-300">
                  Meer informatie <span>→</span>
                </span>
              </div>
            </Link>

            <Link
              href="/contact"
              className="group relative h-[420px] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-200"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary-dark/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full flex flex-col justify-end p-10 text-white z-10">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 group-hover:text-white transition-colors duration-300 break-words">
                  Contact
                </h2>
                <p className="text-lg text-gray-700 group-hover:text-white/95 transition-colors duration-300 mb-6 leading-relaxed">
                  Neem contact met ons op
                </p>
                <span className="text-primary group-hover:text-white font-bold text-lg flex items-center gap-2 transform group-hover:translate-x-2 transition-all duration-300">
                  Meer informatie <span>→</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width Image */}
      <section className="relative h-[550px] bg-gray-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)] z-10"></div>
        <div className="absolute inset-0 bg-gray-900/40 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-white break-words px-4 leading-tight">
            Vind onze producten op bol.com
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/95 max-w-3xl mx-auto font-light leading-relaxed">
            Ontdek ons volledige assortiment op bol.com en profiteer van snelle levering en uitstekende service.
          </p>
          <a
            href="https://www.bol.com/nl/nl/b/justvalue/607242601/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block bg-white text-primary px-12 py-5 rounded-xl text-lg font-bold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Bezoek bol.com
          </a>
        </div>
      </section>
    </div>
  );
}

