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
                <form class="flex items-center w-full mx-auto">   
                    <label for="simple-search" class="sr-only">Cari artikel sesuai dengan pilihan Bunda!</label>
                    <div class="relative w-full rounded-[8px] border border-[#FF8C9D] bg-[#FFF]">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none border-[#FF8C9D]">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
                            </svg>
                        </div>
                        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cari artikel sesuai dengan pilihan Bunda!" required />
                    </div>
                    <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-[#FF8C9D] rounded-lg border border-[#FF8C9D] hover:bg-[#FF5A72] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <div className="flex items-center gap-4">
                            <p className="text-[#FFF] text-[18px] font-normal leading-[20px] w-[60px]">
                                Cari
                            </p>
                            <img src="\assets\images\article\search.svg" alt="Search Icon" className="w-[22px] h-[22px]" />
                        </div>
                    </button>
                </form>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden m-5">
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
                    <div className="bg-white shadow-md rounded-lg overflow-hidden m-5">
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
                    <div className="bg-white shadow-md rounded-lg overflow-hidden m-5">
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
                    <div className="bg-white shadow-md rounded-lg overflow-hidden m-5">
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
                    <div className="bg-white shadow-md rounded-lg overflow-hidden m-5">
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
                    <div className="bg-white shadow-md rounded-lg overflow-hidden m-5">
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
                    <div className="bg-white shadow-md rounded-lg overflow-hidden m-5">
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
                    <div className="bg-white shadow-md rounded-lg overflow-hidden m-5">
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
                    <div className="bg-white shadow-md rounded-lg overflow-hidden m-5">
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
