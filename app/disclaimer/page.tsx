import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer | JustValue",
  description: "Disclaimer van JustValue. Bedrijfsinformatie en algemene voorwaarden.",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900">
            Disclaimer
          </h1>

          <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Disclaimer</h2>
              <p className="mb-4">
                De informatie op deze website is met de grootst mogelijke zorg samengesteld. JustValue streeft ernaar om de informatie op deze website actueel en correct te houden. Desondanks kunnen er onjuistheden of onvolledigheden in de informatie voorkomen.
              </p>
              <p className="mb-4">
                JustValue aanvaardt geen enkele aansprakelijkheid voor schade die voortvloeit uit het gebruik van de informatie op deze website of uit handelingen die zijn verricht op basis van de informatie op deze website.
              </p>
              <p className="mb-4">
                Alle productinformatie, prijzen en beschikbaarheid zijn onder voorbehoud van wijzigingen. JustValue behoudt zich het recht voor om zonder voorafgaande kennisgeving wijzigingen aan te brengen in de informatie op deze website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Privacy</h2>
              <p className="mb-4">
                JustValue respecteert uw privacy. Wij verzamelen alleen de informatie die nodig is voor het functioneren van de website en het verbeteren van onze diensten. Wij delen uw gegevens niet met derden, behalve wanneer dit wettelijk verplicht is.
              </p>
              <p className="mb-4">
                <strong>Cookies:</strong> Deze website gebruikt geen cookies. Wij plaatsen geen tracking cookies of andere cookies op uw apparaat.
              </p>
              <p className="mb-4">
                Voor vragen over privacy kunt u contact met ons opnemen via{" "}
                <a href="mailto:info@justvalue.nl" className="text-primary hover:underline">
                  info@justvalue.nl
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Bedrijfsgegevens</h2>
              <p className="mb-4">
                JustValue is een merk van LJE Supplies.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg space-y-2 text-sm">
                <p><strong>Bedrijfsnaam:</strong> LJE Supplies</p>
                <p><strong>KVK nummer:</strong> 82219524</p>
                <p><strong>BTW nummer:</strong> NL003654455B59</p>
                <p><strong>Adres:</strong> Hekerbeekweg 86, 6301EN, Valkenburg, Nederland</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Externe links</h2>
              <p className="mb-4">
                Deze website kan links bevatten naar externe websites. JustValue is niet verantwoordelijk voor de inhoud of het privacybeleid van deze externe websites.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="inline-block bg-primary text-white px-8 py-3 rounded-xl text-lg font-bold hover:bg-primary-dark transition-all duration-300"
            >
              Terug naar home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

