import { createToken } from "./jwt-manager";

export async function createTokenCookie(email) {
    let token = await createToken(email);
    return {
        'Set-Cookie': `token=${token}; 
        Max-Age=${process.env.JWT_EXPIRATION_TIME};
        Secure; HttpOnly; Path=/; SameSite=Strict`
    }
}