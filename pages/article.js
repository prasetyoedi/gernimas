import React from "react";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import Link from "next/link";

const Article = () => {
    return (
        <div>
            <Navbar />
            {/* Article */}
            <div className="bg-white md:p-16 pt-14">
                <div className="w-full text-center text-red-400 text-xl md:text-3xl font-bold mb-8">
                ARTICLE
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden m-5 cursor-pointer hover:scale-110 hover:shadow-2xl transition-transform duration-1000">
                    <img
                    src="/assets/images/article.png"
                    alt="Pregnant woman cutting fruit"
                    className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                    <div className="text-rose-500 text-[13px] font-medium leading-3 tracking-wide">
                        IBU HAMIL
                    </div>
                    <div className="w-80 text-neutral-900 text-base md:text-xl font-normal leading-[22px] md:leading-[30px] mt-4">
                        Tips Kehamilan Sehat: Nutrisi dan Gizi yang Tepat untuk Ibu
                        Hamil"
                    </div>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden m-5 cursor-pointer hover:scale-110 hover:shadow-2xl transition-transform duration-1000">
                    <img
                    src="/assets/images/article.png"
                    alt="Pregnant woman cutting fruit"
                    className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                    <div className="text-rose-500 text-[13px] font-medium leading-3 tracking-wide">
                        IBU HAMIL
                    </div>
                    <div className="w-80 text-neutral-900 text-base md:text-xl font-normal leading-[22px]  md:leading-[30px] mt-4">
                        Tips Kehamilan Sehat: Nutrisi dan Gizi yang Tepat untuk Ibu
                        Hamil"
                    </div>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden m-5 cursor-pointer hover:scale-110 hover:shadow-2xl transition-transform duration-1000">
                    <img
                    src="/assets/images/article.png"
                    alt="Pregnant woman cutting fruit"
                    className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                    <div className="text-rose-500 text-[13px] font-medium leading-3 tracking-wide">
                        IBU HAMIL
                    </div>
                    <div className="w-80 text-neutral-900 text-base md:text-xl font-normal leading-[22px]  md:leading-[30px] mt-4">
                        Tips Kehamilan Sehat: Nutrisi dan Gizi yang Tepat untuk Ibu
                        Hamil"
                    </div>
                    </div>
                </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden m-5 cursor-pointer hover:scale-110 hover:shadow-2xl transition-transform duration-1000">
                    <img
                    src="/assets/images/article.png"
                    alt="Pregnant woman cutting fruit"
                    className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                    <div className="text-rose-500 text-[13px] font-medium leading-3 tracking-wide">
                        IBU HAMIL
                    </div>
                    <div className="w-80 text-neutral-900 text-base md:text-xl font-normal leading-[22px]  md:leading-[30px] mt-4">
                        Tips Kehamilan Sehat: Nutrisi dan Gizi yang Tepat untuk Ibu
                        Hamil"
                    </div>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden m-5 cursor-pointer hover:scale-110 hover:shadow-2xl transition-transform duration-1000">
                    <img
                    src="/assets/images/article.png"
                    alt="Pregnant woman cutting fruit"
                    className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                    <div className="text-rose-500 text-[13px] font-medium leading-3 tracking-wide">
                        IBU HAMIL
                    </div>
                    <div className="w-80 text-neutral-900 text-base md:text-xl font-normal leading-[22px]  md:leading-[30px] mt-4">
                        Tips Kehamilan Sehat: Nutrisi dan Gizi yang Tepat untuk Ibu
                        Hamil"
                    </div>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden m-5 cursor-pointer hover:scale-110 hover:shadow-2xl transition-transform duration-1000">
                    <img
                    src="/assets/images/article.png"
                    alt="Pregnant woman cutting fruit"
                    className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                    <div className="text-rose-500 text-[13px] font-medium leading-3 tracking-wide">
                        IBU HAMIL
                    </div>
                    <div className="w-80 text-neutral-900 text-base md:text-xl font-normal leading-[22px]  md:leading-[30px] mt-4">
                        Tips Kehamilan Sehat: Nutrisi dan Gizi yang Tepat untuk Ibu
                        Hamil"
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default Article;
