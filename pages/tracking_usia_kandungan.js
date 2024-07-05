import React from "react";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const Tracking = () => {
    return (
        <div>
            <Navbar />
            <div className="flex-grow flex flex-col items-center gap-8 bg-white p-4">
                <div className="max-w-[1281px] rounded-[20px] bg-[rgba(255,140,157,0.20)] p-5 w-full">
                    <p className="text-[#E5677A] text-[22px] font-bold">
                        Yuk Lihat Perkembangan dan Pembentukan Organ Pada Janin Bunda!
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[1281px]">
                    <div className="flex flex-col items-center gap-4 w-full sm:w-[50%] rounded-[22px] m-2 border-[2px] border-[#E5677A]">
                        <div className="w-[304.718px] h-[407.628px] sm:w-[180px] sm:h-[187px] bg-cover bg-center bg-no-repeat rounded-t-2xl">
                            <img src="/assets/images/tracking/janin.png" alt="Deskripsi gambar" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col items-center gap-4 p-4 sm:p-6 w-full bg-[rgba(229,103,122,0.70)] rounded-b-2xl ">
                            <p className="text-[18px] sm:text-[22px] font-bold text-white">32 Minggu</p>
                            <div className="w-full h-[2px] bg-[rgba(81,75,75,0.14)]"></div>
                            <p className="text-[14px] font-bold text-white">Panjang Fetus: 40 - 43 cm </p>
                        </div>
                    </div>
                    <div className="w-full sm:w-[50%] h-[50%] flex-shrink-0 rounded-[22px] border-[2px] border-[#E5677A] bg-white m-2">
                        <div className="w-full h-[80.111px] rounded-t-[20px] border border-[#E5677A] bg-[rgba(229,103,122,0.70)]">
                            <p className="text-[22px] font-bold text-white text-center mt-5">Pembentukan Organ Janin</p>
                        </div>
                        <p className="p-6 text-[18px] font-semibold leading-[30px] text-[#E5677A]">
                            Kulit merah dan keriput. Jika lahir, tampak seperti orang tua kecil (little old man)
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Tracking;
