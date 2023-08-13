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

export interface Post {
    id: number
    title: string
    desc: string
    img: string
    date: Date
    uid: number
    cat: string
}