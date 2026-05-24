export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MarketingAgency",
        "@id": "https://callus-brand-solutions-8xti.vercel.app/#organization",
        "name": "Callus Brand Solutions",
        "alternateName": "CBS",
        "url": "https://callus-brand-solutions-8xti.vercel.app",
        "logo": {
          "@type": "ImageObject",
          "url": "https://callus-brand-solutions-8xti.vercel.app/logo.png",
          "width": 400,
          "height": 400,
        },
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
        "sameAs": [
          "https://www.instagram.com/callusbrandsolutions",
          "https://www.linkedin.com/company/callusbrandsolutions",
          "https://www.facebook.com/callusbrandsolutions",
        ],
        "areaServed": {
          "@type": "Country",
          "name": "Ghana",
        },
        "priceRange": "GHS 2,500 - GHS 10,000",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
            "opens": "08:00",
            "closes": "18:00",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://callus-brand-solutions-8xti.vercel.app/#website",
        "url": "https://callus-brand-solutions-8xti.vercel.app",
        "name": "Callus Brand Solutions",
        "description": "We Build the Brands That Build Ghana.",
        "publisher": {
          "@id": "https://callus-brand-solutions-8xti.vercel.app/#organization",
        },
        "inLanguage": "en-GH",
      },
      {
        "@type": "Service",
        "serviceType": "Digital Marketing",
        "provider": {
          "@id": "https://callus-brand-solutions-8xti.vercel.app/#organization",
        },
        "areaServed": {
          "@type": "Country",
          "name": "Ghana",
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Marketing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web Development",
                "description": "Fast, beautiful, mobile-first websites built on Next.js or Webflow.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Social Media Management",
                "description": "Content creation and management across Instagram, TikTok, Facebook, and LinkedIn.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Paid Advertising",
                "description": "Google and Meta ad campaigns with measurable returns.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Content & SEO",
                "description": "Blog content, email campaigns, and search engine optimisation.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mobile App Development",
                "description": "React Native apps for iOS and Android.",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}