import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_COOKIE_NAME,
  getAdminBasePath,
} from "../../../lib/admin-auth";

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");

  if (origin && origin !== new URL(request.url).origin) {
    return new NextResponse("Invalid request origin.", { status: 403 });
  }

  const adminBasePath = getAdminBasePath();

  if (!adminBasePath) {
    return new NextResponse("Not found.", { status: 404 });
  }

  const response = NextResponse.redirect(
    new URL(`${adminBasePath}/login`, request.url),
    { status: 303 },
  );

  response.cookies.set(ADMIN_COOKIE_NAME, "", {
    httpOnly: true,
    maxAge: 0,
    path: "/",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
