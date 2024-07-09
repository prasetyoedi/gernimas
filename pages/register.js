import React from "react";
import Link from "next/link";

const Register = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative custom-background">
            <div className="absolute inset-0 bg-login-register bg-cover bg-center"></div>
            <div className="relative z-10 w-full flex-grow flex items-center justify-center p-4">
                <div className="w-full max-w-[600px] flex-shrink-0 rounded-[20px] bg-white shadow-lg">
                    <div className="w-full bg-[#F8BACF] h-[80px] rounded-t-[20px] relative flex items-center justify-center">
                        <div className="absolute top-0 transform translate-y-[30%]">
                            <img src="/assets/images/login-register/logo_gernimas.png" alt="Logo" className="w-20 h-30 object-cover"/>
                        </div>
                    </div>
                    <h1 className="text-center text-xl font-semibold text-pink-600 mt-12 pt-6">Masukkan e-mail Bunda untuk masuk</h1>
                    <h2 className="text-center text-lg font-semibold text-pink-600 pt-2">GERNIMAS</h2>
                    <div className="pt-6 px-8 md:px-16">
                        <form className="w-full flex flex-col">
                            <input
                                type="email"
                                placeholder="Masukkan e-mail"
                                className="mb-6 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                            <input
                                type="password"
                                placeholder="Masukkan password"
                                className="mb-6 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                            <button
                                type="submit"
                                className="p-3 mt-4 rounded-lg bg-pink-500 text-white font-semibold hover:bg-pink-600 transition duration-300"
                            >
                                LOGIN
                            </button>
                        </form>
                        <p className="mt-4 text-center text-sm text-gray-600">
                            Dengan masuk, saya menyetujui ketentuan penggunaan dan kebijakan privasi GERNIMAS
                        </p>
                        <p className="mt-2 mb-12 text-center text-sm text-gray-600">
                            Belum Punya Akun?{" "}
                            <Link href="/register" legacyBehavior>
                                <a className="text-pink-500 font-semibold">Registrasi Sekarang</a>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
