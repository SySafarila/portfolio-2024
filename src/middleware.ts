import * as jose from "jose";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  const authCookie = request.cookies.get("access_token");

  if (authCookie) {
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      const jwt = authCookie.value;

      await jose.jwtVerify(jwt, secret);
    } catch (error: any) {
      if (request.nextUrl.pathname.startsWith("/api")) {
        const response = NextResponse.json(
          { message: "Unauthorized" },
          { status: 401 },
        );
        response.cookies.delete("access_token");
        return response;
      } else {
        const response = NextResponse.redirect(
          new URL("/?status=logout", request.url),
        );
        response.cookies.delete("access_token");
        return response;
      }
    }
  }

  if (!authCookie && !request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (authCookie && request.nextUrl.pathname.startsWith("/login")) {
    if (authCookie.name == "access_token" && authCookie.value) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  const response = NextResponse.next();
  return response;
};

export const config = {
  matcher: [
    "/dashboard/:path",
    "/login/:path",
    "/api/generate-licence",
    "/api/revoke-licence",
  ],
};
