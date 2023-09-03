import { NextRequest, NextResponse } from "next/server";
import { verifyTokenCookie } from "./app/lib/verify-token-cookie";

export async function middleware(req) {
    if (req.nextUrl.pathname.startsWith('/dashboard')) {
        return await verifyTokenCookie(req);
    }
}