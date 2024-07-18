import React, { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getProfile } from "../api/profile/get_profile";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      if (router.pathname != "/" && !isLogin) {
        getProfile().then((e) => {
          if (!e?.data?.data) {
            router.push("/");
            setIsLogin(true);
          } else {
            setIsLogin(true);
          }
        });
      }
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

export { AuthContext, AuthProvider };
