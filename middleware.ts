import { NextRequest, NextResponse } from "next/server";

// Legacy/alternate paths for the "Why Us" page, redirected with exact
// case-sensitive matching (Next.js's next.config.ts redirects() matches
// source paths case-insensitively, which would otherwise collide with the
// real /why-us route and cause a redirect loop).
const legacyPathRedirects: Record<string, string> = {
  "/WhyUS": "/why-us",
  "/whyus": "/why-us",
  "/Why-Us": "/why-us",
  "/why_us": "/why-us",
};

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0].toLowerCase();
  const canonical = "www.usflooring.la";
  if (host && host !== canonical && (host === "usflooring.la" || host === "www.usflooring.la")) {
    return NextResponse.redirect(new URL(request.nextUrl.pathname + request.nextUrl.search, `https://${canonical}`), 308);
  }
  const legacyDestination = legacyPathRedirects[request.nextUrl.pathname];
  if (legacyDestination) {
    return NextResponse.redirect(new URL(legacyDestination + request.nextUrl.search, request.url), 308);
  }
  if (request.nextUrl.pathname.length > 1 && request.nextUrl.pathname.endsWith("/")) {
    return NextResponse.redirect(new URL(request.nextUrl.pathname.slice(0, -1) + request.nextUrl.search, request.url), 308);
  }
  return NextResponse.next();
}
export const config = { matcher: ["/((?!_next|favicon.ico).*)"] };
