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
    cat: string
    date: Date
    desc: string
    id: number
    img: string
    title: string
    userImg?: string
    username: string
}