import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

// If your app is deployed under a subpath, you can set:
//   const BASE_URL = "https://your-domain.com";
// Currently we emit relative URLs so it works on most Vercel setups.

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          "/",
          "/about",
          "/services",
          "/products",
          "/industries",
          "/network",
          "/compliance",
          "/insights",
          "/faq",
          "/contact",
        ];

        // Emit absolute URLs for better compatibility with crawlers.
        // If BASE_URL is empty, URLs will be relative.
        const urls = paths
          .map(
            (p) =>
              `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq><priority>${
                p === "/" ? "1.0" : "0.8"
              }</priority></url>`,
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});

