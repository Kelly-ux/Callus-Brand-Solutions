import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Analytics from "@/components/Analytics";
import WhatsAppButton from "@/components/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const baseUrl = "https://callus-brand-solutions-8xti.vercel.app";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${baseUrl}/#organization`,
      "name": "Callus Brand Solutions",
      "alternateName": "CBS",
      "url": baseUrl,
      "description": "Callus Brand Solutions is Ghana's premier marketing consultancy. We handle your entire media presence — websites, social media, paid ads, and content strategy.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Accra",
        "addressRegion": "Greater Accra",
        "addressCountry": "GH",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 5.6037,
        "longitude": -0.1870,
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+233-000-000-000",
        "contactType": "customer service",
        "email": "hello@callusbrandsolutions.com",
        "availableLanguage": "English",
      },
      "areaServed": {
        "@type": "Country",
        "name": "Ghana",
      },
      "priceRange": "GHS 2,500 - GHS 10,000",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "https://schema.org/Monday",
            "https://schema.org/Tuesday",
            "https://schema.org/Wednesday",
            "https://schema.org/Thursday",
            "https://schema.org/Friday",
          ],
          "opens": "08:00",
          "closes": "18:00",
        },
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development", "description": "Fast, beautiful, mobile-first websites built on Next.js or Webflow." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Management", "description": "Content creation and management across Instagram, TikTok, Facebook, and LinkedIn." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paid Advertising", "description": "Google and Meta ad campaigns with measurable returns." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content & SEO", "description": "Blog content, email campaigns, and search engine optimisation." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development", "description": "React Native apps for iOS and Android." } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      "url": baseUrl,
      "name": "Callus Brand Solutions",
      "description": "We Build the Brands That Build Ghana.",
      "publisher": {
        "@id": `${baseUrl}/#organization`,
      },
      "inLanguage": "en-GH",
    },
  ],
};

export const metadata: Metadata = {
  title: "Callus Brand Solutions — We Build the Brands That Build Ghana",
  description: "CBS is Ghana's premier marketing consultancy. We handle your entire media presence — websites, social media, paid ads, and content — so you can focus on running your business.",
  keywords: "marketing agency Ghana, social media management Accra, web development Ghana, digital marketing",
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "Callus Brand Solutions",
    description: "We Build the Brands That Build Ghana.",
    url: baseUrl,
    siteName: "Callus Brand Solutions",
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Callus Brand Solutions",
    description: "We Build the Brands That Build Ghana.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <WhatsAppButton />
        <Analytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}