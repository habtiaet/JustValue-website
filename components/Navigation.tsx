"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 w-full overflow-x-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center hover:opacity-80 transition-all duration-300 transform hover:scale-105">
              <Image
                src="/JustValue_1294052.png"
                alt="JustValue Logo"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary transition-all duration-300 font-medium text-lg relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/over-ons"
              className="text-gray-700 hover:text-primary transition-all duration-300 font-medium text-lg relative group"
            >
              Ons verhaal
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/producten"
              className="text-gray-700 hover:text-primary transition-all duration-300 font-medium text-lg relative group"
            >
              Producten
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary transition-all duration-300 font-medium text-lg relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/vacatures"
              className="text-gray-700 hover:text-primary transition-all duration-300 font-medium text-lg relative group"
            >
              Vacatures
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
              aria-label="Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/over-ons"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Ons verhaal
            </Link>
            <Link
              href="/producten"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Producten
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/vacatures"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Vacatures
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

