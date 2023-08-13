import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { LoginData, User } from "../interfaces/interfaces";

export interface AuthContextType {
    currentUser:Partial<User> | null
    login: (inputs: LoginData) => void
    logout: () => void
};


export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContexProvider = ({ children }: any) => {
    const [currentUser, setCurrentUser] = useState<Partial<User> | null>(
        //@ts-ignore
        JSON.parse(localStorage.getItem("user")) || null

    );

    const login = async (inputs: LoginData) => {
        const res = await axios.post("/auth/login", inputs);
        setCurrentUser(res.data);
    };

    const logout = async () => {
        await axios.post("/auth/logout");
        setCurrentUser(null);
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};