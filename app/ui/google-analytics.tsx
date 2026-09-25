import Script from "next/script";

/**
 * Loads GA4 only when NEXT_PUBLIC_GA_MEASUREMENT_ID is set (Vercel → Project →
 * Settings → Environment Variables, for both Preview and Production).
 * strategy="afterInteractive" defers loading until after the page is
 * interactive, so this never contributes to render-blocking resources.
 */
export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!gaId) return null;
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
