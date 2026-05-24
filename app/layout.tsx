import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Analytics from "@/components/Analytics";

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

export const metadata: Metadata = {
  title: "Callus Brand Solutions — We Build the Brands That Build Ghana",
  description:
    "CBS is Ghana's premier marketing consultancy. We handle your entire media presence — websites, social media, paid ads, and content — so you can focus on running your business.",
  keywords:
    "marketing agency Ghana, social media management Accra, web development Ghana, digital marketing",
  openGraph: {
    title: "Callus Brand Solutions",
    description: "We Build the Brands That Build Ghana.",
    url: "https://callusbrandsolutions.com",
    siteName: "Callus Brand Solutions",
    locale: "en_GH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <Analytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}