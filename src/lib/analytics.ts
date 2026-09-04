/**
 * Google Analytics 4 — lightweight loader
 *
 * To enable GA4, set your Measurement ID in one of two ways:
 *
 *   Option A (env var — recommended for CI/CD):
 *     Add VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX to your .env.local file
 *     or to the deployment environment before running `pnpm build`.
 *
 *   Option B (Figma Make site.json):
 *     Set "analytics": { "googleAnalyticsId": "G-XXXXXXXXXX" }
 *     in .figma/make/site.json. The Figma Make platform injects the
 *     GA4 script automatically when this value is present.
 *
 * If neither is configured, no analytics script is loaded and no
 * placeholder or broken snippet is output.
 *
 * Do not put a real Measurement ID in source control.
 */

const GA_ID_PATTERN = /^G-[A-Z0-9]+$/;

function getMeasurementId(): string | null {
  const id = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
  if (id && GA_ID_PATTERN.test(id.trim())) return id.trim();
  return null;
}

function injectGtag(id: string): void {
  if (document.querySelector(`script[src*="${id}"]`)) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) {
    (window as any).dataLayer.push(args);
  }
  (window as any).gtag = gtag;
  gtag('js', new Date());
  gtag('config', id, { send_page_view: false });
}

let initialized = false;

export function initAnalytics(): void {
  if (initialized) return;
  const id = getMeasurementId();
  if (!id) return;
  injectGtag(id);
  initialized = true;
}

let lastTrackedPath = '';

export function trackPageView(path: string): void {
  if (path === lastTrackedPath) return;
  lastTrackedPath = path;
  const id = getMeasurementId();
  if (!id) return;
  (window as any).gtag?.('event', 'page_view', {
    page_location: window.location.href,
    page_path: path,
  });
}

export function trackEvent(name: string, params?: Record<string, string | number | boolean>): void {
  (window as any).gtag?.('event', name, params);
}
