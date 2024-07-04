import React from "react";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import Link from "next/link";

const HomeUser = () => {
    return (
        <div>
            <Navbar />
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-start items-start gap-6 md:gap-36 p-4 md:p-16 bg-white">
                <img
                    className="order-1 md:order-2 w-full md:w-[593px] h-auto"
                    src="/assets/images/header.png"
                    alt="Header Image"
                />
                <div className="order-2 md:order-1 flex flex-col justify-start items-start gap-6">
                    <div className="flex flex-col justify-start items-start gap-4">
                        <div className="text-red-400 text-xl md:text-3xl lg:text-4xl font-bold">
                            Trusted Pregnancy Tracking for a Healthy Journey.
                        </div>
                        <div className="text-red-400 text-xs text-justify md:text-left md:text-lg font-medium md:mt-9">
                            Start your pregnancy journey with confidence using our trusted
                            tracking platform. Monitor your baby's development and your health
                            with accurate, personalized tools. Stay informed about important
                            milestones and enjoy a healthy, joyful pregnancy.
                        </div>
                    </div>
                    <div className="relative md:mt-16">
                        <div className="bg-red-300 opacity-50 rounded-[10px] w-36 h-9"></div>
                        <div className="absolute left-0 top-0 w-36 h-9 flex justify-center items-center text-white text-base font-bold">
                            GET STARTED
                        </div>
                    </div>
                </div>
            </div>
            {/* About Us */}
            <div className="bg-white md:p-16 pt-14">
                <div className="w-full text-center text-red-400 text-xl md:text-3xl font-bold mb-8">
                    ABOUT US
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className="w-full md:w-1/3 h-auto flex justify-center">
                        <img
                            src="/assets/images/doctor.png"
                            alt="Doctor Image"
                            className="justify-center w-24 md:w-72"
                        />
                    </div>
                    <div className="w-full md:w-2/4">
                        <div className="p-2 md:p-5 bg-red-300 bg-opacity-10 rounded-[10px] border border-red-400 backdrop-blur-sm m-5">
                            <div className="text-justify text-red-400 text-xs md:text-sm md:font-bold leading-[16px] md:leading-[30px]">
                                GERNIMAS Strategi Ibu Cerdas Lahirkan Generasi Emas merupakan
                                <span className="text-red-400"> website tracking</span>
                                perkembangan ibu hamil yang terinspirasi dari Buku Kesehatan Ibu
                                dan Anak. Modernisasi website Buku Kesehatan Ibu dan Anak (KIA)
                                memiliki potensi besar untuk memberikan kontribusi yang
                                signifikan terhadap pelayanan kesehatan masyarakat di Indonesia.
                                Dengan memanfaatkan teknologi informasi, program ini dapat
                                meningkatkan aksesibilitas informasi kesehatan ibu dan anak,
                                membantu masyarakat dalam memantau pertumbuhan, perkembangan,
                                dan perawatan kesehatan secara lebih efektif.
                            </div>
                        </div>
                        <div className="p-2 md:p-5 bg-red-300 bg-opacity-10 rounded-[10px] border border-red-400 backdrop-blur-sm m-5">
                            <div className="text-justify text-red-400 text-xs md:text-sm md:font-bold leading-[16px] md:leading-[30px]">
                                Dalam rangka mengoptimalkan pelayanan kesehatan ibu dan anak di
                                Indonesia, pembuatan website ini menjadi langkah progresif yang
                                bertujuan untuk meningkatkan efisiensi, aksesibilitas, dan
                                akurasi informasi kesehatan. Langkah ini tidak hanya
                                meningkatkan transparansi dan akuntabilitas dalam pelayanan
                                kesehatan di tingkat masyarakat, tetapi juga mempercepat
                                penanganan serta respons terhadap kebutuhan kesehatan ibu dan
                                anak yang mengarah pada perbaikan sistem kesehatan masyarakat
                                secara keseluruhan.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Services  */}
            {/* <div className="bg-white md:p-16 pt-14">
                <div class="w-full text-center text-red-400 text-xl md:text-3xl font-bold mb-8 uppercase">
                    Services
                </div>
            </div> */}
            <div class="flex flex-col justify-center items-center p-20 bg-white">
                <div class="text-center text-red-400 text-3xl font-bold">SERVICES</div>
                <div class="w-full flex flex-col justify-start items-start gap-10">
                    <div class="flex flex-col justify-start items-start gap-2">
                        <div class="text-red-400 text-3xl font-bold">
                            Hai Bunda, Tetap Sehat dan Terorganisir Selama Masa Kehamilan, Ya!
                        </div>
                        <div class="text-red-400 text-base font-medium">
                            Pantau masa kehamilan bunda dengan mengakses bersama GERNIMAS.
                            Bersama GERNIMAS pantau kesehatan buah hati ayah dan bunda!
                        </div>
                    </div>
                    <div class="flex flex-wrap justify-center items-center gap-6">
                        <div class="flex flex-col justify-start items-start gap-6 md:gap-10">
                            <div class="flex justify-start items-start gap-6 md:gap-20 flex-wrap">
                                <div className=" w-[198px] h-[250px] shadow-xl bg-red-100 rounded-t-[40px] rounded-b-2xl">
                                    <img
                                        src="/assets/images/services/agenda.png"
                                        alt="Shoes"
                                        className="-mt-1"
                                    />
                                    <div className="card-body ">
                                        <div class="text-center text-red-400 text-xl font-bold mt-4">
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

                                <div className="card w-[198px] h-[250px] shadow-xl bg-red-100 rounded-t-[40px] rounded-b-2xl">
                                    <img
                                        src="/assets/images/services/asupan.png"
                                        alt="Shoes"
                                        className="-mt-1"
                                    />
                                    <div className="card-body ">
                                        <div class="text-center text-red-400 text-xl font-bold mt-4 uppercase">
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

                                <div className="card w-[198px] h-[250px] shadow-xl bg-red-100 rounded-t-[40px] rounded-b-2xl">
                                    <img
                                        src="/assets/images/services/suplemen.png"
                                        alt="Shoes"
                                        className="-mt-1"
                                    />
                                    <div className="card-body ">
                                        <div class="text-center text-red-400 text-xl font-bold uppercase">
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
                            </div>

                            <div class="flex justify-start items-start gap-6 md:gap-20 flex-wrap">
                                <div className="card w-[198px] h-[250px] shadow-xl bg-red-100 rounded-t-[40px] rounded-b-2xl">
                                    <img
                                        src="/assets/images/services/faskes.png"
                                        alt="Shoes"
                                        className="-mt-1"
                                    />
                                    <div className="card-body ">
                                        <div class="text-center text-red-400 text-xl font-bold mt-4 uppercase">
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

                                <div className="card w-[198px] h-[250px] shadow-xl bg-red-100 rounded-t-[40px] rounded-b-2xl">
                                    <img
                                        src="/assets/images/services/riwayat.png"
                                        alt="Shoes"
                                        className="-mt-1"
                                    />
                                    <div className="card-body ">
                                        <div class="text-center text-red-400 text-xl font-bold mt-4 uppercase">
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

                                <div className="card w-[198px] h-[250px] shadow-xl bg-red-100 rounded-t-[40px] rounded-b-2xl">
                                    <img
                                        src="/assets/images/services/data.png"
                                        alt="Shoes"
                                        className="-mt-1"
                                    />
                                    <div className="card-body ">
                                        <div class="text-center text-red-400 text-xl font-bold mt-4 uppercase">
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
                            </div>
                        </div>
                        <div class="p-2.5 md:ps-40 md:block hidden">
                            <img class="w-80 h-96" src="/assets/images/services/dokter.png" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Article */}
            <div className="bg-white md:p-16 pt-14">
                <div class="w-full text-center text-red-400 text-xl md:text-3xl font-bold mb-8">
                    ARTICLE
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-white shadow-md rounded-lg overflow-hidden m-5">
                        <img
                            src="/assets/images/article.png"
                            alt="Pregnant woman cutting fruit"
                            class="w-full h-48 object-cover"
                        />
                        <div class="p-4">
                            <div class="text-rose-500 text-[13px] font-medium leading-3 tracking-wide">
                                IBU HAMIL
                            </div>
                            <div class="w-80 text-neutral-900 text-base md:text-xl font-normal leading-[22px]  md:leading-[30px] mt-4">
                                Tips Kehamilan Sehat: Nutrisi dan Gizi yang Tepat untuk Ibu
                                Hamil"
                            </div>
                        </div>
                    </div>
                    <div class="bg-white shadow-md rounded-lg overflow-hidden m-5">
                        <img
                            src="/assets/images/article.png"
                            alt="Pregnant woman cutting fruit"
                            class="w-full h-48 object-cover"
                        />
                        <div class="p-4">
                            <div class="text-rose-500 text-[13px] font-medium leading-3 tracking-wide">
                                IBU HAMIL
                            </div>
                            <div class="w-80 text-neutral-900 text-base md:text-xl font-normal leading-[22px]  md:leading-[30px] mt-4">
                                Tips Kehamilan Sehat: Nutrisi dan Gizi yang Tepat untuk Ibu
                                Hamil"
                            </div>
                        </div>
                    </div>
                    <div class="bg-white shadow-md rounded-lg overflow-hidden m-5">
                        <img
                            src="/assets/images/article.png"
                            alt="Pregnant woman cutting fruit"
                            class="w-full h-48 object-cover"
                        />
                        <div class="p-4">
                            <div class="text-rose-500 text-[13px] font-medium leading-3 tracking-wide">
                                IBU HAMIL
                            </div>
                            <div class="w-80 text-neutral-900 text-base md:text-xl font-normal leading-[22px]  md:leading-[30px] mt-4">
                                Tips Kehamilan Sehat: Nutrisi dan Gizi yang Tepat untuk Ibu
                                Hamil"
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-white shadow-md rounded-lg overflow-hidden m-5">
                        <img
                            src="/assets/images/article.png"
                            alt="Pregnant woman cutting fruit"
                            class="w-full h-48 object-cover"
                        />
                        <div class="p-4">
                            <div class="text-rose-500 text-[13px] font-medium leading-3 tracking-wide">
                                IBU HAMIL
                            </div>
                            <div class="w-80 text-neutral-900 text-base md:text-xl font-normal leading-[22px]  md:leading-[30px] mt-4">
                                Tips Kehamilan Sehat: Nutrisi dan Gizi yang Tepat untuk Ibu
                                Hamil"
                            </div>
                        </div>
                    </div>
                    <div class="bg-white shadow-md rounded-lg overflow-hidden m-5">
                        <img
                            src="/assets/images/article.png"
                            alt="Pregnant woman cutting fruit"
                            class="w-full h-48 object-cover"
                        />
                        <div class="p-4">
                            <div class="text-rose-500 text-[13px] font-medium leading-3 tracking-wide">
                                IBU HAMIL
                            </div>
                            <div class="w-80 text-neutral-900 text-base md:text-xl font-normal leading-[22px]  md:leading-[30px] mt-4">
                                Tips Kehamilan Sehat: Nutrisi dan Gizi yang Tepat untuk Ibu
                                Hamil"
                            </div>
                        </div>
                    </div>
                    <div class="bg-white shadow-md rounded-lg overflow-hidden m-5">
                        <img
                            src="/assets/images/article.png"
                            alt="Pregnant woman cutting fruit"
                            class="w-full h-48 object-cover"
                        />
                        <div class="p-4">
                            <div class="text-rose-500 text-[13px] font-medium leading-3 tracking-wide">
                                IBU HAMIL
                            </div>
                            <div class="w-80 text-neutral-900 text-base md:text-xl font-normal leading-[22px]  md:leading-[30px] mt-4">
                                Tips Kehamilan Sehat: Nutrisi dan Gizi yang Tepat untuk Ibu
                                Hamil"
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-10 pb-10 md:pb-0">
                    <div class="w-[179px] h-[31px] p-5 bg-white rounded-[10px] border border-red-400 backdrop-blur-sm flex-col justify-center items-end gap-2.5 inline-flex">
                        <Link href="/tracking">
                            <div class="w-[135px] text-center text-red-400 text-sm font-bold leading-[30px]">
                                SELENGKAPNYA
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default HomeUser;
