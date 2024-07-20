import React, { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getProfile } from "../pages/api/profile/get_profile";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      getProfile().then((e) => {
        if (!e?.data?.data) {
          if (router.pathname != "/" || router.pathname != "/login") {
            router.replace("/");
          }
        }
      });
    } else {
      setUser(JSON.parse(userData));
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("isLogin", true);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.setItem("isLogin", false);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
