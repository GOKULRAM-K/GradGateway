"use client";

import { createContext, useContext, useEffect, useState } from "react";
import api from "@/services/api";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<User>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  login: async () => {
    throw new Error("login not implemented");
  },
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Auto-login on refresh
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    api
      .get("/me")
      .then((res) => setUser(res.data))
      .catch(() => {
        localStorage.removeItem("token");
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  // Manual login (used by login page)
  const login = async (email: string, password: string) => {
    const form = new FormData();
    form.append("username", email);
    form.append("password", password);

    const res = await api.post("/auth/login", form);

    const token = res.data.access_token;
    localStorage.setItem("token", token);

    const me = await api.get("/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setUser(me.data);
    return me.data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
