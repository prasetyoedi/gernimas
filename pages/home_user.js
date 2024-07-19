import React from "react";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import ArtikelCard from '../components/ArtikelCard';
import LayananCard from '../components/LayananCard';
import { Inter } from "next/font/google";
import Link from "next/link";

const artikelData = [
    {
        imageUrl: "/assets/images/article.png",
        category: "IBU HAMIL",
        title: "Tips Kehamilan Sehat: Nutrisi dan Gizi yang Tepat untuk Ibu Hamil"
    },
    {
        imageUrl: "/assets/images/article.png",
        category: "KESEHATAN ANAK",
        title: "Pentingnya Vaksinasi untuk "
    },
    {
        imageUrl: "/assets/images/article.png",
        category: "GIZI SEHAT",
        title: "Makanan Sehat untuk Menjaga Berat Badan Ideal"
    },
    {
        imageUrl: "/assets/images/article.png",
        category: "KESEHATAN IBU",
        title: "Perawatan Pasca Melahirkan yang Tepat"
    },
    {
        imageUrl: "/assets/images/article.png",
        category: "PENGOBATAN ALAMI",
        title: "Manfaat dan Cara Menggunakan Daun Sirsak untuk Kesehatan"
    },
    {
        imageUrl: "/assets/images/article.png",
        category: "KULIT SEHAT",
        title: "Tips Sederhana Merawat Kulit Wajah Agar Tetap Sehat"
    }
];

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
                            Pemantauan Kehamilan Tepercaya untuk Perjalanan Sehat.
                        </div>
                        <div className="text-red-400 text-xs text-justify md:text-left md:text-lg font-medium md:mt-9">
                            Tingkatkan perjalanan kehamilan Anda dengan percaya diri bersama Gernimas. 
                            Pantau perkembangan bayi dan kesehatan Anda dengan alat yang akurat dan personal. 
                            Dapatkan informasi terkini tentang setiap tahap penting dan nikmati kehamilan yang sehat dan bahagia.
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

            <div className="flex flex-col justify-center items-center p-20 bg-white">
                <div className="text-center text-red-400 text-3xl font-bold mb-12">LAYANAN</div>
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
                        <div className="flex flex-col justify-start items-start gap-6 md:gap-10">
                            <div className="flex justify-start items-start gap-6 md:gap-20 flex-wrap">
                                <LayananCard
                                    imageUrl="/assets/images/services/agenda.png"
                                    link="/agenda"
                                    title="Agenda"
                                    description="Teks deskripsi agenda."
                                />
                                <LayananCard
                                    imageUrl="/assets/images/services/asupan.png"
                                    link="/asupan_gizi"
                                    title="Asupan Gizi"
                                    description="Teks deskripsi asupan gizi."
                                />
                                <LayananCard
                                    imageUrl="/assets/images/services/suplemen.png"
                                    link="/suplemen"
                                    title="Suplemen"
                                    description="Teks deskripsi suplemen."
                                />
                            </div>

                            <div className="flex justify-start items-start gap-6 md:gap-20 flex-wrap">
                                {/* <LayananCard
                                    imageUrl="/assets/images/services/faskes.png"
                                    link="/faskes-terdekat"
                                    title="Faskes Terdekat"
                                    description="Teks deskripsi faskes terdekat."
                                /> */}
                                <LayananCard
                                    imageUrl="/assets/images/services/riwayat.png"
                                    link="/riwayat_periksa"
                                    title="Riwayat Periksa"
                                    description="Teks deskripsi riwayat periksa."
                                />
                                <LayananCard
                                    imageUrl="/assets/images/services/data.png"
                                    link="/pemeriksaan_pribadi"
                                    title="Periksa Pribadi"
                                    description="Teks deskripsi data pengguna."
                                />
                            </div>
                        </div>
                        <div className="p-2.5 md:ps-40 md:block hidden">
                            <img className="w-90 h-96" src="/assets/images/services/dokter.png" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Artikel */}
            <div className="bg-white md:p-16 pt-14">
                <div className="w-full text-center text-red-400 text-xl md:text-3xl font-bold mb-8">
                    ARTIKEL
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {artikelData.map((artikel, index) => (
                        <ArtikelCard
                            key={index}
                            imageUrl={artikel.imageUrl}
                            category={artikel.category}
                            title={artikel.title}
                        />
                    ))}
                </div>
                <div className="flex justify-center mt-10 pb-10 md:pb-0">
                    <div className="w-[179px] h-[31px] p-5 bg-white rounded-[10px] border border-red-400 backdrop-blur-sm flex-col justify-center items-end gap-2.5 inline-flex">
                        <Link href="/artikel">
                            <div className="w-[135px] text-center text-red-400 text-sm font-bold leading-[30px]">
                                SELENGKAPNYA
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomeUser;
