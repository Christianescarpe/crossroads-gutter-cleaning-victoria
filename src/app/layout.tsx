import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://crossroadsguttercleaningvictoria.com"),
  title: {
    default: "Gutter Cleaning Victoria TX | Crossroads Gutter Cleaning Victoria",
    template: "%s | Crossroads Gutter Cleaning Victoria"
  },
  description:
    "Reliable gutter cleaning Victoria TX homeowners trust. Insured local crews, downspout clearing & fast estimates. Call Crossroads Gutter Cleaning at +13615791699.",
  keywords: [
    "gutter cleaning Victoria TX",
    "gutter cleaning Victoria",
    "gutter cleaners Victoria TX",
    "gutter cleaning service Victoria TX",
    "Crossroads gutter cleaning"
  ],
  authors: [{ name: "Crossroads Gutter Cleaning Victoria" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Crossroads Gutter Cleaning Victoria"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Crossroads Gutter Cleaning Victoria",
  "telephone": "+13615791699",
  "url": "https://crossroadsguttercleaningvictoria.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Victoria",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.834076,
    "longitude": -96.9759075
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "07:00",
      "closes": "18:00"
    }
  ],
  "hasMap": "https://maps.app.goo.gl/QkwzsCMjsAGWDP397"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-800 antialiased font-sans">
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
