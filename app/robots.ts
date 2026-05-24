import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://callus-brand-solutions-8xti.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/portal/", "/api/", "/studio/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}