import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Register = () => {
    const [step, setStep] = useState(1);
    const [passwordShown, setPasswordShown] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [formDataStep1, setFormDataStep1] = useState({
        nama: "",
        nik: "",
        tanggalLahir: "",
        alamat: "",
    });
    const [formDataStep2, setFormDataStep2] = useState({
        email: "",
        nomorTelepon: "",
        password: "",
    });
    const router = useRouter();

    const handleValidation = (event) => {
        event.preventDefault();
        setStep(2);
    };

    const handleBack = () => {
        setStep(1);
    };

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
            router.push("/home_user");
        }, 2000);
    };

    const handleChangeStep1 = (e) => {
        const { name, value } = e.target;
        setFormDataStep1({
            ...formDataStep1,
            [name]: value,
        });
    };

    const handleChangeStep2 = (e) => {
        const { name, value } = e.target;
        setFormDataStep2({
            ...formDataStep2,
            [name]: value,
        });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative custom-background">
            <div className="absolute inset-0 bg-login-register bg-cover bg-center"></div>
            <div className="relative z-10 w-full flex-grow flex items-center justify-center p-8">
                <div className="w-full max-w-[500px] flex-shrink-0 rounded-[20px] bg-white shadow-lg">
                    <div className="w-full bg-red-200 h-[60px] rounded-t-[20px] relative flex items-center justify-center">
                        <div className="absolute top-0 transform translate-y-[30%]">
                            <img src="/assets/images/login-register/logo_gernimas.png" alt="Logo" className="w-20 h-30 object-cover" />
                        </div>
                    </div>
                    <h1 className="text-center text-xl font-semibold text-red-400 mt-12 pt-6">
                        Masukkan informasi untuk melakukan<br />registrasi akun GERNIMAS
                    </h1>
                    <div className="pt-6 px-8 md:px-16">
                        <form className="w-full flex flex-col items-center mt-3" onSubmit={step === 1 ? handleValidation : handleRegister}>
                            {step === 1 ? (
                                <>
                                    <div className="w-full mb-6">
                                        <label className="block mb-2 text-base font-medium text-red-400">Nama:</label>
                                        <input
                                            type="text"
                                            name="nama"
                                            value={formDataStep1.nama}
                                            onChange={handleChangeStep1}
                                            placeholder="Masukkan nama"
                                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-6">
                                        <label className="block mb-2 text-base font-medium text-red-400">NIK:</label>
                                        <input
                                            type="text"
                                            name="nik"
                                            value={formDataStep1.nik}
                                            onChange={handleChangeStep1}
                                            placeholder="Masukkan NIK"
                                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-6">
                                        <label className="block mb-2 text-base font-medium text-red-400">Tanggal Lahir:</label>
                                        <input
                                            type="date"
                                            name="tanggalLahir"
                                            value={formDataStep1.tanggalLahir}
                                            onChange={handleChangeStep1}
                                            placeholder="Masukkan tanggal lahir"
                                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-6">
                                        <label className="block mb-2 text-base font-medium text-red-400">Alamat:</label>
                                        <textarea
                                            name="alamat"
                                            value={formDataStep1.alamat}
                                            onChange={handleChangeStep1}
                                            placeholder="Masukkan alamat"
                                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full p-3 mt-4 rounded-lg bg-red-200 text-red-400 font-semibold hover:bg-red-400 hover:text-white transition duration-300"
                                    >
                                        VALIDASI DATA
                                    </button>
                                </>
                            ) : (
                                <>
                                    <div className="w-full mb-6">
                                        <label className="block mb-2 text-base font-medium text-red-400">Email:</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formDataStep2.email}
                                            onChange={handleChangeStep2}
                                            placeholder="Masukkan email"
                                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-6">
                                        <label className="block mb-2 text-base font-medium text-red-400">Nomor Telepon:</label>
                                        <input
                                            type="tel"
                                            name="nomorTelepon"
                                            value={formDataStep2.nomorTelepon}
                                            onChange={handleChangeStep2}
                                            placeholder="Masukkan nomor telepon"
                                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-6 relative">
                                        <label className="block mb-2 text-base font-medium text-red-400">Password:</label>
                                        <input
                                            type={passwordShown ? "text" : "password"}
                                            name="password"
                                            value={formDataStep2.password}
                                            onChange={handleChangeStep2}
                                            placeholder="Masukkan password"
                                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                        >
                                            {passwordShown ? (
                                                <img src="/assets/images/login-register/eye.svg" alt="Show Password" className="w-[24px] h-[24px] mt-8" />
                                            ) : (
                                                <img src="/assets/images/login-register/eye-sleep.svg" alt="Hide Password" className="w-[24px] h-[24px] mt-8" />
                                            )}
                                        </button>
                                    </div>
                                    <div className="flex justify-between w-full">
                                        <button
                                            type="button"
                                            onClick={handleBack}
                                            className="w-1/2 p-3 mt-4 mr-2 rounded-lg bg-red-400 text-white font-semibold hover:bg-red-200 hover:text-red-400 transition duration-300"
                                        >
                                            SEBELUMNYA
                                        </button>
                                        <button
                                            type="submit"
                                            className="w-1/2 p-3 mt-4 ml-2 rounded-lg bg-red-200 text-red-400 font-semibold hover:bg-red-400 hover:text-white transition duration-300"
                                        >
                                            REGISTER
                                        </button>
                                    </div>
                                </>
                            )}
                        </form>
                        <p className="mt-6 p-4 text-center text-sm text-red-400">
                            Dengan melakukan registrasi, saya menyetujui ketentuan penggunaan dan kebijakan privasi GERNIMAS
                        </p>
                        <p className="mt-2 mb-12 text-center text-sm text-red-400">
                            Sudah punya akun?{" "}
                            <Link href="/login" legacyBehavior>
                                <a className="text-red-400 font-semibold">Masuk Sekarang</a>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-20">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="bg-pink-100 rounded-lg shadow-lg p-16 z-30 flex flex-col items-center justify-center" style={{ width: '400px', height: '300px' }}>
                        <img src="/assets/images/login-register/success.png" alt="Success" className="w-[50px] h-[50px] mb-4" />
                        <h2 className="text-xl font-semibold text-red-400 mb-2">BERHASIL REGISTRASI!</h2>
                        <p className="text-center text-red-400 mt-6">Anda telah berhasil melakukan registrasi akun GERNIMAS. Selamat Datang!</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Register;
