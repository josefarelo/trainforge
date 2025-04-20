import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const response = await fetch("/api/auth/profile", {
                    credentials: "include",
                });
                if (!response.ok) throw new Error("No autenticado");
                const data = await response.json();
                setUser(data.user);
            } catch {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        checkAuthStatus();
    }, []);

    const login = async (email, password) => {
        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ email, password }),
            });
            if (!response.ok) throw new Error("Error en la autenticación");
            const data = await response.json();
            setUser(data.user);
            window.location.href = "/es";
        } catch {
            setUser(null);
        }
    };

    const logout = async () => {
        try {
            await fetch("/api/auth/logout", {
                method: "POST",
                credentials: "include",
            });
            setUser(null);
            sessionStorage.clear();
            localStorage.clear();
            window.location.href = "/";
        } catch {}
    };

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
