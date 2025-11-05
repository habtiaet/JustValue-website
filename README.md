# JustValue Website

Een moderne Next.js website voor JustValue, een Nederlands merk dat kwaliteitsproducten aanbiedt.

## Overzicht

Deze website is een informatieve website voor JustValue, die het Nederlandse karakter van het merk benadrukt en contactinformatie bevat. Het is geen webshop, maar een algemene informatieve website die bezoekers naar bol.com leidt voor producten.

## Features

- **Homepage**: Hero sectie met introductie en productcategorieën overzicht
- **Over Ons**: Informatie over JustValue, missie, visie en waarden
- **Producten**: Overzicht van productcategorieën met links naar bol.com
- **Contact**: Contactformulier en contactinformatie
- **Responsive Design**: Volledig responsive voor alle apparaten
- **Nederlandse Taal**: Volledig in het Nederlands

## Technologieën

- **Next.js 14**: React framework met App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React**: UI library

## Installatie

1. Installeer dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in je browser

## Build

Om een productie build te maken:

```bash
npm run build
npm start
```

## Structuur

```
├── app/
│   ├── page.tsx          # Homepage
│   ├── over-ons/         # Over Ons pagina
│   ├── producten/        # Producten pagina
│   ├── contact/          # Contact pagina
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Globale styles
├── components/
│   ├── Navigation.tsx    # Navigatie component
│   └── Footer.tsx        # Footer component
└── package.json
```

## Licentie

Dit project is gemaakt voor JustValue.

