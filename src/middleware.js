import { NextResponse } from "next/server";
import { verifyTokenCookie } from "./app/lib/verify-token-cookie";

export async function middleware(req) {
    try {
        if (req.nextUrl.pathname.startsWith('/dashboard')) {
            // Verify the token cookie
            const verified = await verifyTokenCookie(req);

            if (verified) {
                // Token is valid, allow access to the protected route
                return NextResponse.next();
            } else {
                // Token is invalid, deny access
                return NextResponse.redirect('/login'); // Redirect to a login page or handle unauthorized access appropriately
            }
        }

        // Allow access to other routes
        return NextResponse.next();
    } catch (error) {
        // Handle any errors that occur during token verification
        console.error("Middleware error:", error);
        return NextResponse.error(new Error("An error occurred during middleware execution"));
    }
}
