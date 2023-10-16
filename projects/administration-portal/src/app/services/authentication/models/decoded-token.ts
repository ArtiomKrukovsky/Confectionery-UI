export interface IDecodedToken {
    aud: string;
    exp: number;
    iat: string;
    iss: string;
    jti: string;
    role: string;
    sub: string;
    userId: string;
    userName: string;
}