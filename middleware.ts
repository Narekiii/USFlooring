import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0].toLowerCase();
  const canonical = "www.usflooring.la";
  if (host && host !== canonical && (host === "usflooring.la" || host === "www.usflooring.la")) {
    return NextResponse.redirect(new URL(request.nextUrl.pathname + request.nextUrl.search, `https://${canonical}`), 308);
  }
  if (request.nextUrl.pathname.length > 1 && request.nextUrl.pathname.endsWith("/")) {
    return NextResponse.redirect(new URL(request.nextUrl.pathname.slice(0, -1) + request.nextUrl.search, request.url), 308);
  }
  return NextResponse.next();
}
export const config = { matcher: ["/((?!_next|favicon.ico).*)"] };
