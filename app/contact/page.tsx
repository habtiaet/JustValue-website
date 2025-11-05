import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - JustValue | Neem contact met ons op",
  description: "Neem contact op met JustValue. Bel ons op +31 6 1557 1528 of stuur een e-mail naar info@justvalue.nl. Vind al onze producten op bol.com.",
  keywords: "JustValue contact, telefoon, e-mail, bol.com, JustValue klantenservice",
  openGraph: {
    title: "Contact - JustValue",
    description: "Neem contact op met JustValue. Bel ons op +31 6 1557 1528 of stuur een e-mail naar info@justvalue.nl.",
    type: "website",
    locale: "nl_NL",
  },
};

export default function Contact() {
  return (
    <div className="py-16 overflow-x-hidden w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 break-words px-4">Contact</h1>
          <p className="text-xl md:text-2xl text-gray-600">
            Neem contact met ons op voor vragen of meer informatie over JustValue
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-10 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 text-center">Contactinformatie</h2>
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3 text-gray-700">Telefoon</h3>
                <a
                  href="tel:+31615571528"
                  rel="nofollow"
                  className="text-2xl md:text-3xl font-bold text-primary hover:text-primary-dark transition-colors"
                >
                  +31 6 1557 1528
                </a>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3 text-gray-700">E-mail</h3>
                <a
                  href="mailto:info@justvalue.nl"
                  rel="nofollow"
                  className="text-xl md:text-2xl text-primary hover:text-primary-dark transition-colors"
                >
                  info@justvalue.nl
                </a>
              </div>
              <div className="text-center pt-4 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-3 text-gray-700">Waar te vinden</h3>
                <p className="text-gray-600 mb-4">
                  Onze producten zijn te vinden op bol.com:
                </p>
                <a
                  href="https://www.bol.com/nl/nl/b/justvalue/607242601/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-primary hover:text-primary-dark underline font-semibold"
                >
                  Bezoek onze bol.com pagina
                </a>
              </div>
              <div className="text-center pt-4 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-3 text-gray-700">Openingstijden</h3>
                <p className="text-gray-600">
                  Onze producten zijn 24/7 beschikbaar op bol.com. Voor vragen
                  proberen we binnen 1-2 werkdagen te reageren.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Veelgestelde vragen</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
                Hoe kan ik een product bestellen?
              </h3>
              <p className="text-gray-700">
                Bezoek onze{" "}
                <a
                  href="https://www.bol.com/nl/nl/b/justvalue/607242601/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-primary hover:text-primary-dark underline"
                >
                  pagina op bol.com
                </a>{" "}
                om producten te bekijken en te bestellen. Alle bestellingen
                worden afgehandeld via bol.com.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
                Kan ik producten retourneren?
              </h3>
              <p className="text-gray-700">
                Het retourbeleid wordt beheerd door bol.com. Bekijk hun
                retourbeleid op de productpagina's voor meer informatie over
                retourneren.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
                Heeft u een fysieke winkel?
              </h3>
              <p className="text-gray-700">
                JustValue verkoopt uitsluitend online via bol.com. We hebben geen
                fysieke winkel, maar onze producten zijn 24/7 beschikbaar op
                bol.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
