import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppChatIcon } from "@/components/site/WhatsAppChatIcon";

function NotFoundComponent() {
  return (
    <div className="bg-luxury-radial flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="font-display mt-4 text-7xl text-gold-gradient">Not Found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you are looking for has been moved or no longer exists.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center border border-gold/40 px-6 py-3 text-xs tracking-[0.28em] uppercase text-gold hover:bg-gold hover:text-obsidian transition"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="bg-luxury-radial flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Unexpected Error</p>
        <h1 className="font-display mt-4 text-4xl text-ivory">This page didn't load</h1>
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="bg-gold-gradient px-6 py-3 text-xs tracking-[0.28em] uppercase text-obsidian"
          >
            Try Again
          </button>
          <a href="/" className="border border-gold/40 px-6 py-3 text-xs tracking-[0.28em] uppercase text-gold">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AQVEST TRADING LIMITED" },
      { name: "description", content: "AQVEST TRADING LIMITED is a trusted international partner in precious metals trading, bullion supply, refining and custody solutions for institutions, banks and global enterprises." },
      { name: "author", content: "AQVEST TRADING LIMITED" },
      { property: "og:site_name", content: "AQVEST TRADING LIMITED" },
      { property: "og:title", content: "AQVEST TRADING LIMITED" },
      { property: "og:description", content: "Secure, compliant precious metals solutions for institutions, wholesalers and global enterprises." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      // Prevent browser from requesting missing favicon/manifest files.
      // (Vercel will otherwise log 404s for /favicon.ico)
      { rel: "icon", href: "data:;base64,", type: "image/x-icon" },
      { rel: "manifest", href: "data:application/manifest+json,%7B%22name%22%3A%22AQVEST%20TRADING%20LIMITED%22%2C%22short_name%22%3A%22AQVEST%22%2C%22start_url%22%3A%22%2F%22%2C%22display%22%3A%22standalone%22%2C%22background_color%22%3A%22%23070604%22%2C%22theme_color%22%3A%22%23c99a2e%22%7D" },
      { rel: "stylesheet", href: appCss },

      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "AQVEST TRADING LIMITED",
          description: "International precious metals trading, bullion supply, refining and custody solutions.",
          areaServed: "Worldwide",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <main>
          <Outlet />
        </main>
        <WhatsAppChatIcon />
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
