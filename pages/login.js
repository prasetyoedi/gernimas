import React, { useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { login } from "./api/auth/auth_login";
import { AuthContext } from "../context/auth_context";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = async (el) => {
    setIsError(false);
    el.preventDefault();
    const result = await login(credential.email, credential.password);
    if (result.data != null) {
      loginContext(result.data);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        router.push("/");
      }, 2000);
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative custom-background">
      <div className="absolute inset-0 bg-login-register bg-cover bg-center"></div>
      <div className="relative z-10 w-full flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-[500px] flex-shrink-0 rounded-[20px] bg-white shadow-lg">
          <div className="w-full bg-red-200 h-[60px] rounded-t-[20px] relative flex items-center justify-center">
            <div className="absolute top-0 transform translate-y-[30%]">
              <img
                src="/assets/images/login-register/logo_gernimas.png"
                alt="Logo"
                className="w-20 h-30 object-cover"
              />
            </div>
          </div>
          <h1 className="text-center text-xl font-semibold text-red-400 mt-12 pt-6">
            Masukkan e-mail Bunda untuk masuk
            <br />
            GERNIMAS
          </h1>
          <div className="pt-6 px-8 md:px-16">
            <form
              className="w-full flex flex-col items-center mt-3"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="Masukkan e-mail"
                className="w-full mb-6 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                onChange={(e) => {
                  setCredential({
                    ...credential,
                    email: e.target.value,
                  });
                }}
                required
              />
              <div className="w-full mb-6 relative">
                <input
                  type={passwordShown ? "text" : "password"}
                  placeholder="Masukkan password"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                  onChange={(e) => {
                    setCredential({
                      ...credential,
                      password: e.target.value,
                    });
                  }}
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                  {passwordShown ? (
                    <img
                      src="/assets/images/login-register/eye.svg"
                      alt="Show Password"
                      className="w-[24px] h-[24px]"
                    />
                  ) : (
                    <img
                      src="/assets/images/login-register/eye-sleep.svg"
                      alt="Hide Password"
                      className="w-[24px] h-[24px]"
                    />
                  )}
                </button>
              </div>
              {isError && (
                <p style={{ color: "red" }}>username atau password salah</p>
              )}
              <button
                type="submit"
                className="w-full p-3 mt-4 rounded-lg bg-red-200 text-red-400 font-semibold hover:bg-red-400 hover:text-white transition duration-300"
              >
                LOGIN
              </button>
            </form>
            <p className="mt-6 p-4 text-center text-sm text-red-400">
              Dengan masuk, saya menyetujui ketentuan penggunaan dan kebijakan
              privasi GERNIMAS
            </p>
            <p className="mt-2 mb-12 text-center text-sm text-red-400">
              Belum Punya Akun?{" "}
              <Link href="/register" legacyBehavior>
                <a className="text-red-400 font-semibold">Daftar Sekarang</a>
              </Link>
            </p>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div
            className="bg-pink-100 rounded-lg shadow-lg p-16 z-30 flex flex-col items-center justify-center"
            style={{ width: "400px", height: "300px" }}
          >
            <img
              src="/assets/images/login-register/success.png"
              alt="Success"
              className="w-[50px] h-[50px] mb-4"
            />
            <h2 className="text-xl font-semibold text-red-400 mb-2">
              BERHASIL LOGIN!
            </h2>
            <p className="text-center text-red-400 mt-6">
              Anda telah berhasil login ke akun Anda. Selamat Datang kembali!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
