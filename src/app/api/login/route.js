import { NextResponse } from "next/server";
import { createTokenCookie } from "../../lib/create-token-cookie";
import { cookies } from "next/headers";


// This function for login 
export async function POST(req) {
    const JsonBody = await req.json()
    const email = JsonBody['email'];
    const password = JsonBody['password'];

    //Data Checking
    if (email === "email@email.com" && password === "123") {
        let Cookie = await createTokenCookie(email);
        return NextResponse.json(
            { status: "success", message: "Request completed" },
            { status: 200, headers: Cookie }
        )
    }
    else {
        return NextResponse.json(
            { status: false, message: "The email or password wrong" }
        )
    }
}


// This function for the logout
export async function GET(req, res) {
    cookies().delete('token')
    return NextResponse.json(
        { status: 'success', message: "Request Completed" }
    )
}