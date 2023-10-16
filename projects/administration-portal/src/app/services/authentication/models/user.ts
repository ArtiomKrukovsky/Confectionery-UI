export interface IUser {
    accessToken: string;
    refreshToken: string;
    expiresAt: number;
    username: string;
    role: string;
    userId: string;
}