export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    img?: string;
}

export interface LoginData {
    username: string;
    password: string;
}