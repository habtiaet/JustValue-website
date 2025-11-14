import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-white mt-auto w-full overflow-x-hidden border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">JustValue</h3>
            <p className="text-gray-400 leading-relaxed text-sm mb-4">
              Een Nederlands merk dat kwaliteitsproducten aanbiedt voor
              alledaags gebruik.
            </p>
            <div className="text-gray-400 text-xs space-y-1">
              <p>JustValue is een merk van LJE Supplies</p>
              <p>KVK: 82219524</p>
              <p>BTW: NL003654455B59</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Navigatie</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/over-ons"
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Ons verhaal
                </Link>
              </li>
              <li>
                <Link
                  href="/producten"
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Producten
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/vacatures"
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Vacatures
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Waar te vinden</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Onze producten zijn te vinden op:
            </p>
            <a
              href="https://www.bol.com/nl/nl/b/justvalue/607242601/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-primary hover:text-primary-light transition-all duration-300 font-semibold inline-flex items-center gap-2"
            >
              bol.com <span className="text-xs">↗</span>
            </a>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>E-mail:</p>
              <a
                href="mailto:info@justvalue.nl"
                rel="nofollow"
                className="text-primary hover:text-primary-light transition-all duration-300 font-semibold block"
              >
                info@justvalue.nl
              </a>
              <p className="mt-4">Adres:</p>
              <p className="text-gray-400">
                Hekerbeekweg 86<br />
                6301EN Valkenburg<br />
                Nederland
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} JustValue. Alle rechten voorbehouden.</p>
            <div className="flex gap-6">
              <Link href="/disclaimer" className="hover:text-white transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

