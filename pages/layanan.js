import React from "react";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import LayananCard from "../components/LayananCard";
import Link from "next/link";

const Layanan = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col justify-center items-center p-3 md:p-20 bg-white">
                <div className="w-full flex flex-col justify-start items-start gap-10">
                    <div className="flex flex-col justify-start items-start gap-2 rounded-[20px] bg-[rgba(255,140,157,0.20)] p-8 ">
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
                            <img
                                className="w-90 h-96"
                                src="/assets/images/services/dokter.png"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-end gap-6 md:gap-10">
                            <div className="flex justify-center items-end gap-6 md:gap-20 flex-wrap">
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

                            <div className="flex justify-center items-end gap-6 md:gap-20 flex-wrap">
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
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Layanan;
