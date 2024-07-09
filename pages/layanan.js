import React from "react";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const Layanan = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col justify-center items-center p-20 bg-white">
                <div className="w-full flex flex-col justify-start items-start gap-10">
                    <div className="flex flex-col justify-start items-start gap-2 rounded-[20px] bg-[rgba(255,140,157,0.20)] p-8">
                        <div className="text-red-400 text-3xl font-bold">
                            Hai Bunda, Tetap Sehat dan Terorganisir Selama Masa Kehamilan, Ya!
                        </div>
                        <div className="text-red-400 text-base font-medium">
                            Pantau masa kehamilan bunda dengan mengakses bersama GERNIMAS.
                            Bersama GERNIMAS pantau kesehatan buah hati ayah dan bunda!
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-6">
                        <div className="p-2.5 md:pe-40 md:block hidden">
                            <img className="w-90 h-96" src="/assets/images/services/dokter.png" />
                        </div>
                        <div className="flex flex-col justify-start items-start gap-6 md:gap-10">
                            <div className="flex justify-start items-start gap-6 md:gap-20 flex-wrap">
                                <Link href="/agenda">
                                    <div className="w-[198px] h-[250px] shadow-xl bg-red-100 rounded-t-[40px] rounded-b-2xl cursor-pointer hover:scale-105 transition-transform duration-300">
                                        <img
                                            src="/assets/images/services/agenda.png"
                                            alt="Shoes"
                                            className="-mt-1"
                                        />
                                        <div className="card-body ">
                                            <div className="text-center text-red-400 text-xl font-bold mt-4">
                                                AGENDA
                                            </div>
                                            <div className="pt-7 ps-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 14 14"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M5.6665 3.00002H2.99984C2.26346 3.00002 1.6665 3.59697 1.6665 4.33335V11C1.6665 11.7364 2.26346 12.3334 2.99984 12.3334H9.6665C10.4029 12.3334 10.9998 11.7364 10.9998 11V8.33335M8.33317 1.66669H12.3332M12.3332 1.66669V5.66669M12.3332 1.66669L5.6665 8.33335"
                                                        stroke="#E5677A"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/asupan-gizi">
                                    <div className="w-[198px] h-[250px] shadow-xl bg-red-100 rounded-t-[40px] rounded-b-2xl cursor-pointer hover:scale-105 transition-transform duration-300">
                                        <img
                                            src="/assets/images/services/asupan.png"
                                            alt="Shoes"
                                            className="-mt-1"
                                        />
                                        <div className="card-body ">
                                            <div className="text-center text-red-400 text-xl font-bold mt-4 uppercase">
                                                Asupan Gizi
                                            </div>
                                            <div className="pt-7 ps-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 14 14"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M5.6665 3.00002H2.99984C2.26346 3.00002 1.6665 3.59697 1.6665 4.33335V11C1.6665 11.7364 2.26346 12.3334 2.99984 12.3334H9.6665C10.4029 12.3334 10.9998 11.7364 10.9998 11V8.33335M8.33317 1.66669H12.3332M12.3332 1.66669V5.66669M12.3332 1.66669L5.6665 8.33335"
                                                        stroke="#E5677A"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/suplemen">
                                    <div className="w-[198px] h-[250px] shadow-xl bg-red-100 rounded-t-[40px] rounded-b-2xl cursor-pointer hover:scale-105 transition-transform duration-300">
                                        <img
                                            src="/assets/images/services/suplemen.png"
                                            alt="Shoes"
                                            className="-mt-1"
                                        />
                                        <div className="card-body ">
                                            <div className="text-center text-red-400 text-xl font-bold uppercase">
                                                suplemen
                                            </div>
                                            <div className="pt-7 ps-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 14 14"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M5.6665 3.00002H2.99984C2.26346 3.00002 1.6665 3.59697 1.6665 4.33335V11C1.6665 11.7364 2.26346 12.3334 2.99984 12.3334H9.6665C10.4029 12.3334 10.9998 11.7364 10.9998 11V8.33335M8.33317 1.66669H12.3332M12.3332 1.66669V5.66669M12.3332 1.66669L5.6665 8.33335"
                                                        stroke="#E5677A"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="flex justify-start items-start gap-6 md:gap-20 flex-wrap">
                                <Link href="/faskes-terdekat">
                                    <div className="w-[198px] h-[250px] shadow-xl bg-red-100 rounded-t-[40px] rounded-b-2xl cursor-pointer hover:scale-105 transition-transform duration-300">
                                        <img
                                            src="/assets/images/services/faskes.png"
                                            alt="Shoes"
                                            className="-mt-1"
                                        />
                                        <div className="card-body ">
                                            <div className="text-center text-red-400 text-xl font-bold mt-4 uppercase">
                                                faskes terdekat
                                            </div>
                                            <div className="pt-7 ps-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 14 14"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M5.6665 3.00002H2.99984C2.26346 3.00002 1.6665 3.59697 1.6665 4.33335V11C1.6665 11.7364 2.26346 12.3334 2.99984 12.3334H9.6665C10.4029 12.3334 10.9998 11.7364 10.9998 11V8.33335M8.33317 1.66669H12.3332M12.3332 1.66669V5.66669M12.3332 1.66669L5.6665 8.33335"
                                                        stroke="#E5677A"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/riwayat-periksa">
                                    <div className="w-[198px] h-[250px] shadow-xl bg-red-100 rounded-t-[40px] rounded-b-2xl cursor-pointer hover:scale-105 transition-transform duration-300">
                                        <img
                                            src="/assets/images/services/riwayat.png"
                                            alt="Shoes"
                                            className="-mt-1"
                                        />
                                        <div className="card-body ">
                                            <div className="text-center text-red-400 text-xl font-bold mt-3 uppercase">
                                                riwayat periksa
                                            </div>
                                            <div className="pt-7 ps-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 14 14"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M5.6665 3.00002H2.99984C2.26346 3.00002 1.6665 3.59697 1.6665 4.33335V11C1.6665 11.7364 2.26346 12.3334 2.99984 12.3334H9.6665C10.4029 12.3334 10.9998 11.7364 10.9998 11V8.33335M8.33317 1.66669H12.3332M12.3332 1.66669V5.66669M12.3332 1.66669L5.6665 8.33335"
                                                        stroke="#E5677A"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/data-pengguna">
                                    <div className="w-[198px] h-[250px] shadow-xl bg-red-100 rounded-t-[40px] rounded-b-2xl cursor-pointer hover:scale-105 transition-transform duration-300">
                                        <img
                                            src="/assets/images/services/data.png"
                                            alt="Shoes"
                                            className="-mt-1"
                                        />
                                        <div className="card-body ">
                                            <div className="text-center text-red-400 text-xl font-bold mt-4 uppercase">
                                                data pengguna
                                            </div>
                                            <div className="pt-7 ps-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 14 14"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M5.6665 3.00002H2.99984C2.26346 3.00002 1.6665 3.59697 1.6665 4.33335V11C1.6665 11.7364 2.26346 12.3334 2.99984 12.3334H9.6665C10.4029 12.3334 10.9998 11.7364 10.9998 11V8.33335M8.33317 1.66669H12.3332M12.3332 1.66669V5.66669M12.3332 1.66669L5.6665 8.33335"
                                                        stroke="#E5677A"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Layanan;
