declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Fires a GA4 custom event if gtag has loaded. Safe to call from any client component. */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params ?? {});
  }
}
