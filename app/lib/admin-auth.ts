import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE_NAME = "sideline_admin";
const SESSION_DURATION_SECONDS = 60 * 60 * 8;

export function getAdminPathSegment() {
  const value = process.env.ADMIN_DASHBOARD_PATH?.trim().replace(/^\/+|\/+$/g, "");

  if (!value || !/^[a-zA-Z0-9_-]{12,80}$/.test(value)) {
    return null;
  }

  return value;
}

export function getAdminBasePath() {
  const segment = getAdminPathSegment();
  return segment ? `/${segment}` : null;
}

export function isAdminPathSegment(candidate: string) {
  const configured = getAdminPathSegment();
  return Boolean(configured && candidate === configured);
}

function getSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET;
}

function sign(payload: string, secret: string) {
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

export function createAdminSessionToken() {
  const secret = getSessionSecret();

  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET is not configured.");
  }

  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_DURATION_SECONDS;
  const payload = String(expiresAt);
  return `${payload}.${sign(payload, secret)}`;
}

export function verifyAdminSessionToken(token?: string) {
  const secret = getSessionSecret();

  if (!token || !secret) {
    return false;
  }

  const [payload, signature] = token.split(".");
  const expiresAt = Number(payload);

  if (!payload || !signature || !Number.isFinite(expiresAt)) {
    return false;
  }

  if (expiresAt <= Math.floor(Date.now() / 1000)) {
    return false;
  }

  const expected = sign(payload, secret);
  const providedBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);

  return (
    providedBuffer.length === expectedBuffer.length &&
    timingSafeEqual(providedBuffer, expectedBuffer)
  );
}

export async function hasAdminSession() {
  const cookieStore = await cookies();
  return verifyAdminSessionToken(cookieStore.get(ADMIN_COOKIE_NAME)?.value);
}

export function adminPasswordMatches(candidate: string) {
  const configured = process.env.ADMIN_DASHBOARD_PASSWORD;

  if (!configured || !candidate) {
    return false;
  }

  const configuredBuffer = Buffer.from(configured);
  const candidateBuffer = Buffer.from(candidate);

  return (
    configuredBuffer.length === candidateBuffer.length &&
    timingSafeEqual(configuredBuffer, candidateBuffer)
  );
}
