import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|maintenance).*)",
  ],
};

export function middleware(req: NextRequest) {
  const isMaintenanceOn = process.env.MAINTENANCE_MODE === "true";
  if (!isMaintenanceOn) return NextResponse.next();

  const res = NextResponse.redirect(new URL("/maintenance", req.url));
  res.headers.set("x-maintenance", "1");
  return res;
}
