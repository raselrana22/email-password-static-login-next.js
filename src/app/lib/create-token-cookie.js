import { createToken } from "./jwt-manager";

export async function createTokenCookie(email) {
    console.log(email);
    let token = await createToken(email);
    const maxAgeInSeconds = process.env.JWT_EXPIRATION_TIME / 1000; // Convert to seconds
    return {
        'Set-Cookie': `token=${token}; Max-Age=${maxAgeInSeconds}; Secure; HttpOnly; Path=/; SameSite=Strict`
    };
}