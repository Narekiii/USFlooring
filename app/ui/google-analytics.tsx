import Script from "next/script";

/**
 * Loads GA4 for this measurement ID. NEXT_PUBLIC_GA_MEASUREMENT_ID (Vercel →
 * Project → Settings → Environment Variables) overrides the default below if
 * set — e.g. to point a preview deploy at a different GA4 property. The
 * fallback means analytics keeps working even if that env var is ever
 * unset or removed.
 * strategy="afterInteractive" defers loading until after the page is
 * interactive, so this never contributes to render-blocking resources.
 */
const DEFAULT_GA_ID = "G-X1M7ZXWBKF";

export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || DEFAULT_GA_ID;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');`}
      </Script>
    </>
  );
}
