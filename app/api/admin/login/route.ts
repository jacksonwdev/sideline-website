import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_COOKIE_NAME,
  adminPasswordMatches,
  createAdminSessionToken,
  getAdminBasePath,
} from "../../../lib/admin-auth";

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");

  if (origin && origin !== new URL(request.url).origin) {
    return new NextResponse("Invalid request origin.", { status: 403 });
  }

  const formData = await request.formData();
  const password = String(formData.get("password") ?? "");
  const submittedPath = String(formData.get("adminPath") ?? "");
  const adminBasePath = getAdminBasePath();

  if (!adminBasePath || adminBasePath !== `/${submittedPath}`) {
    return new NextResponse("Not found.", { status: 404 });
  }

  if (!adminPasswordMatches(password)) {
    return NextResponse.redirect(
      new URL(`${adminBasePath}/login?error=1`, request.url),
      { status: 303 },
    );
  }

  try {
    const response = NextResponse.redirect(
      new URL(adminBasePath, request.url),
      { status: 303 },
    );

    response.cookies.set(ADMIN_COOKIE_NAME, createAdminSessionToken(), {
      httpOnly: true,
      maxAge: 60 * 60 * 8,
      path: "/",
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    return response;
  } catch (error) {
    console.error("Admin login configuration error:", error);
    return NextResponse.redirect(
      new URL(`${adminBasePath}/login?error=config`, request.url),
      { status: 303 },
    );
  }
}
