import React from "react";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import Link from 'next/link';


const Pemantauan = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col justify-center items-center gap-16 self-stretch bg-white p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 mt-6">
                <div className="flex w-full sm:w-[270px] px-12 py-4 justify-center items-center rounded-[20px] bg-[rgba(255,140,157,0.30)] shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <Link href="/pemantauan_usia_kandungan">
                        <div className="flex w-full h-full flex-col justify-center items-center gap-3">
                        <p className="text-center text-[16px] text-[#E5677A] font-bold">Usia Kandungan</p>
                        <p className="text-center text-[60px] text-[#E5677A] font-bold">32</p>
                        <p className="text-center text-[16px] text-[#E5677A] font-bold">Minggu</p>
                        </div>
                    </Link>
                    </div>
                    <div className="flex w-full sm:w-[270px] px-12 py-4 justify-center items-center rounded-[20px] bg-[rgba(255,140,157,0.30)] shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <Link href="/pemantauan_berat_badan">
                        <div className="flex w-full h-full flex-col justify-center items-center gap-3">
                        <p className="text-center text-[16px] text-[#E5677A] font-bold">Berat Badan</p>
                        <p className="text-center text-[60px] text-[#E5677A] font-bold">60</p>
                        <p className="text-center text-[16px] text-[#E5677A] font-bold">kg</p>
                        </div>
                    </Link>
                    </div>
                    <div className="flex w-full sm:w-[270px] px-12 py-4 justify-center items-center rounded-[20px] bg-[rgba(255,140,157,0.30)] shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <Link href="/pemantauan_berat_badan">
                        <div className="flex w-full h-full flex-col justify-center items-center gap-3">
                        <p className="text-center text-[16px] text-[#E5677A] font-bold">Lingkar Lengan</p>
                        <p className="text-center text-[60px] text-[#E5677A] font-bold">23,5</p>
                        <p className="text-center text-[16px] text-[#E5677A] font-bold">cm</p>
                        </div>
                    </Link>
                    </div>
                    <div className="flex w-full sm:w-[270px] px-12 py-4 justify-center items-center rounded-[20px] bg-[rgba(255,140,157,0.30)] shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <Link href="/pemantauan_berat_badan">
                        <div className="flex w-full h-full flex-col justify-center items-center gap-3">
                        <p className="text-center text-[16px] text-[#E5677A] font-bold">Tinggi Badan</p>
                        <p className="text-center text-[60px] text-[#E5677A] font-bold">165</p>
                        <p className="text-center text-[16px] text-[#E5677A] font-bold">cm</p>
                        </div>
                    </Link>
                    </div>
                </div>
                <div className="w-full max-w-[1281px] h-auto rounded-[20px] bg-[rgba(255,140,157,0.20)] flex justify-start p-5">
                    <p className="text-[#E5677A] text-[22px] font-bold">
                        Yuk Ketahui Setiap Perkembangan Bentuk Janin Tiap Minggu-nya!
                    </p>
                </div>
                <div className="flex justify-center items-center gap-8 md:gap-10 w-full flex-wrap">
                    <div class="flex justify-center items-center gap-8 md:gap-16 lg:gap-5 w-full flex-wrap">
                        <Link href="/pemantauan_usia_kandungan">
                            <div class="flex flex-col items-center rounded-2xl bg-[rgba(229,103,122,0.70)] w-[290px] m-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                <div class="flex flex-col items-center gap-4 p-4 sm:p-6 w-full rounded-t-2xl border border-[rgba(229,103,122,0.70)] bg-white">
                                    <div class="w-[135px] h-[142px] bg-cover bg-center bg-no-repeat">
                                        <img src="/assets/images/tracking/biji.png" alt="Deskripsi gambar" />
                                    </div>
                                </div>
                                <div class="flex flex-col w-full items-start gap-4 p-4 sm:p-6">
                                    <p class="text-white text-[18px] sm:text-[22px] font-bold">4 Minggu</p>
                                    <div class="w-full h-[2px] bg-[rgba(81,75,75,0.14)]"></div>
                                    <p class="text-white text-[14px] font-bold">
                                        Panjang Fetus: 7,5 - 10 mm
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link href="/pemantauan_usia_kandungan">
                            <div class="flex flex-col items-center rounded-2xl bg-[rgba(229,103,122,0.70)] w-[290px] m-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                <div class="flex flex-col items-center gap-4 p-4 sm:p-6 w-full rounded-t-2xl border border-[rgba(229,103,122,0.70)] bg-white">
                                    <div class="w-[135px] h-[142px] bg-cover bg-center bg-no-repeat">
                                        <img src="/assets/images/tracking/biji.png" alt="Deskripsi gambar" />
                                    </div>
                                </div>
                                <div class="flex flex-col w-full items-start gap-4 p-4 sm:p-6">
                                    <p class="text-white text-[18px] sm:text-[22px] font-bold">4 Minggu</p>
                                    <div class="w-full h-[2px] bg-[rgba(81,75,75,0.14)]"></div>
                                    <p class="text-white text-[14px] font-bold">
                                        Panjang Fetus: 7,5 - 10 mm
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link href="/pemantauan_usia_kandungan">
                            <div class="flex flex-col items-center rounded-2xl bg-[rgba(229,103,122,0.70)] w-[290px] m-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                <div class="flex flex-col items-center gap-4 p-4 sm:p-6 w-full rounded-t-2xl border border-[rgba(229,103,122,0.70)] bg-white">
                                    <div class="w-[135px] h-[142px] bg-cover bg-center bg-no-repeat">
                                        <img src="/assets/images/tracking/biji.png" alt="Deskripsi gambar" />
                                    </div>
                                </div>
                                <div class="flex flex-col w-full items-start gap-4 p-4 sm:p-6">
                                    <p class="text-white text-[18px] sm:text-[22px] font-bold">4 Minggu</p>
                                    <div class="w-full h-[2px] bg-[rgba(81,75,75,0.14)]"></div>
                                    <p class="text-white text-[14px] font-bold">
                                        Panjang Fetus: 7,5 - 10 mm
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link href="/pemantauan_usia_kandungan">
                            <div class="flex flex-col items-center rounded-2xl bg-[rgba(229,103,122,0.70)] w-[290px] m-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                <div class="flex flex-col items-center gap-4 p-4 sm:p-6 w-full rounded-t-2xl border border-[rgba(229,103,122,0.70)] bg-white">
                                    <div class="w-[135px] h-[142px] bg-cover bg-center bg-no-repeat">
                                        <img src="/assets/images/tracking/biji.png" alt="Deskripsi gambar" />
                                    </div>
                                </div>
                                <div class="flex flex-col w-full items-start gap-4 p-4 sm:p-6">
                                    <p class="text-white text-[18px] sm:text-[22px] font-bold">4 Minggu</p>
                                    <div class="w-full h-[2px] bg-[rgba(81,75,75,0.14)]"></div>
                                    <p class="text-white text-[14px] font-bold">
                                        Panjang Fetus: 7,5 - 10 mm
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div class="flex justify-center items-center gap-8 md:gap-16 lg:gap-5 w-full flex-wrap">
                        <Link href="/pemantauan_usia_kandungan">
                            <div class="flex flex-col items-center rounded-2xl bg-[rgba(229,103,122,0.70)] w-[290px] m-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                <div class="flex flex-col items-center gap-4 p-4 sm:p-6 w-full rounded-t-2xl border border-[rgba(229,103,122,0.70)] bg-white">
                                    <div class="w-[135px] h-[142px] bg-cover bg-center bg-no-repeat">
                                        <img src="/assets/images/tracking/biji.png" alt="Deskripsi gambar" />
                                    </div>
                                </div>
                                <div class="flex flex-col w-full items-start gap-4 p-4 sm:p-6">
                                    <p class="text-white text-[18px] sm:text-[22px] font-bold">4 Minggu</p>
                                    <div class="w-full h-[2px] bg-[rgba(81,75,75,0.14)]"></div>
                                    <p class="text-white text-[14px] font-bold">
                                        Panjang Fetus: 7,5 - 10 mm
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link href="/pemantauan_usia_kandungan">
                            <div class="flex flex-col items-center rounded-2xl bg-[rgba(229,103,122,0.70)] w-[290px] m-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                <div class="flex flex-col items-center gap-4 p-4 sm:p-6 w-full rounded-t-2xl border border-[rgba(229,103,122,0.70)] bg-white">
                                    <div class="w-[135px] h-[142px] bg-cover bg-center bg-no-repeat">
                                        <img src="/assets/images/tracking/biji.png" alt="Deskripsi gambar" />
                                    </div>
                                </div>
                                <div class="flex flex-col w-full items-start gap-4 p-4 sm:p-6">
                                    <p class="text-white text-[18px] sm:text-[22px] font-bold">4 Minggu</p>
                                    <div class="w-full h-[2px] bg-[rgba(81,75,75,0.14)]"></div>
                                    <p class="text-white text-[14px] font-bold">
                                        Panjang Fetus: 7,5 - 10 mm
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link href="/pemantauan_usia_kandungan">
                            <div class="flex flex-col items-center rounded-2xl bg-[rgba(229,103,122,0.70)] w-[290px] m-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                <div class="flex flex-col items-center gap-4 p-4 sm:p-6 w-full rounded-t-2xl border border-[rgba(229,103,122,0.70)] bg-white">
                                    <div class="w-[135px] h-[142px] bg-cover bg-center bg-no-repeat">
                                        <img src="/assets/images/tracking/biji.png" alt="Deskripsi gambar" />
                                    </div>
                                </div>
                                <div class="flex flex-col w-full items-start gap-4 p-4 sm:p-6">
                                    <p class="text-white text-[18px] sm:text-[22px] font-bold">4 Minggu</p>
                                    <div class="w-full h-[2px] bg-[rgba(81,75,75,0.14)]"></div>
                                    <p class="text-white text-[14px] font-bold">
                                        Panjang Fetus: 7,5 - 10 mm
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link href="/pemantauan_usia_kandungan">
                            <div class="flex flex-col items-center rounded-2xl bg-[rgba(229,103,122,0.70)] w-[290px] m-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                <div class="flex flex-col items-center gap-4 p-4 sm:p-6 w-full rounded-t-2xl border border-[rgba(229,103,122,0.70)] bg-white">
                                    <div class="w-[135px] h-[142px] bg-cover bg-center bg-no-repeat">
                                        <img src="/assets/images/tracking/biji.png" alt="Deskripsi gambar" />
                                    </div>
                                </div>
                                <div class="flex flex-col w-full items-start gap-4 p-4 sm:p-6">
                                    <p class="text-white text-[18px] sm:text-[22px] font-bold">4 Minggu</p>
                                    <div class="w-full h-[2px] bg-[rgba(81,75,75,0.14)]"></div>
                                    <p class="text-white text-[14px] font-bold">
                                        Panjang Fetus: 7,5 - 10 mm
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div class="flex justify-center items-center gap-8 md:gap-16 lg:gap-5 w-full flex-wrap">
                        <Link href="/pemantauan_usia_kandungan">
                            <div class="flex flex-col items-center rounded-2xl bg-[rgba(229,103,122,0.70)] w-[290px] m-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                <div class="flex flex-col items-center gap-4 p-4 sm:p-6 w-full rounded-t-2xl border border-[rgba(229,103,122,0.70)] bg-white">
                                    <div class="w-[135px] h-[142px] bg-cover bg-center bg-no-repeat">
                                        <img src="/assets/images/tracking/biji.png" alt="Deskripsi gambar" />
                                    </div>
                                </div>
                                <div class="flex flex-col w-full items-start gap-4 p-4 sm:p-6">
                                    <p class="text-white text-[18px] sm:text-[22px] font-bold">4 Minggu</p>
                                    <div class="w-full h-[2px] bg-[rgba(81,75,75,0.14)]"></div>
                                    <p class="text-white text-[14px] font-bold">
                                        Panjang Fetus: 7,5 - 10 mm
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link href="/pemantauan_usia_kandungan">
                            <div class="flex flex-col items-center rounded-2xl bg-[rgba(229,103,122,0.70)] w-[290px] m-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                <div class="flex flex-col items-center gap-4 p-4 sm:p-6 w-full rounded-t-2xl border border-[rgba(229,103,122,0.70)] bg-white">
                                    <div class="w-[135px] h-[142px] bg-cover bg-center bg-no-repeat">
                                        <img src="/assets/images/tracking/biji.png" alt="Deskripsi gambar" />
                                    </div>
                                </div>
                                <div class="flex flex-col w-full items-start gap-4 p-4 sm:p-6">
                                    <p class="text-white text-[18px] sm:text-[22px] font-bold">4 Minggu</p>
                                    <div class="w-full h-[2px] bg-[rgba(81,75,75,0.14)]"></div>
                                    <p class="text-white text-[14px] font-bold">
                                        Panjang Fetus: 7,5 - 10 mm
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link href="/pemantauan_usia_kandungan">
                            <div class="flex flex-col items-center rounded-2xl bg-[rgba(229,103,122,0.70)] w-[290px] m-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                <div class="flex flex-col items-center gap-4 p-4 sm:p-6 w-full rounded-t-2xl border border-[rgba(229,103,122,0.70)] bg-white">
                                    <div class="w-[135px] h-[142px] bg-cover bg-center bg-no-repeat">
                                        <img src="/assets/images/tracking/biji.png" alt="Deskripsi gambar" />
                                    </div>
                                </div>
                                <div class="flex flex-col w-full items-start gap-4 p-4 sm:p-6">
                                    <p class="text-white text-[18px] sm:text-[22px] font-bold">4 Minggu</p>
                                    <div class="w-full h-[2px] bg-[rgba(81,75,75,0.14)]"></div>
                                    <p class="text-white text-[14px] font-bold">
                                        Panjang Fetus: 7,5 - 10 mm
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link href="/pemantauan_usia_kandungan">
                            <div class="flex flex-col items-center rounded-2xl bg-[rgba(229,103,122,0.70)] w-[290px] m-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                <div class="flex flex-col items-center gap-4 p-4 sm:p-6 w-full rounded-t-2xl border border-[rgba(229,103,122,0.70)] bg-white">
                                    <div class="w-[135px] h-[142px] bg-cover bg-center bg-no-repeat">
                                        <img src="/assets/images/tracking/biji.png" alt="Deskripsi gambar" />
                                    </div>
                                </div>
                                <div class="flex flex-col w-full items-start gap-4 p-4 sm:p-6">
                                    <p class="text-white text-[18px] sm:text-[22px] font-bold">4 Minggu</p>
                                    <div class="w-full h-[2px] bg-[rgba(81,75,75,0.14)]"></div>
                                    <p class="text-white text-[14px] font-bold">
                                        Panjang Fetus: 7,5 - 10 mm
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div class="flex justify-center items-center gap-8 md:gap-16 lg:gap-5 w-full flex-wrap">
                        <Link href="/pemantauan_usia_kandungan">
                            <div class="flex flex-col items-center rounded-2xl bg-[rgba(229,103,122,0.70)] w-[290px] m-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                <div class="flex flex-col items-center gap-4 p-4 sm:p-6 w-full rounded-t-2xl border border-[rgba(229,103,122,0.70)] bg-white">
                                    <div class="w-[135px] h-[142px] bg-cover bg-center bg-no-repeat">
                                        <img src="/assets/images/tracking/biji.png" alt="Deskripsi gambar" />
                                    </div>
                                </div>
                                <div class="flex flex-col w-full items-start gap-4 p-4 sm:p-6">
                                    <p class="text-white text-[18px] sm:text-[22px] font-bold">4 Minggu</p>
                                    <div class="w-full h-[2px] bg-[rgba(81,75,75,0.14)]"></div>
                                    <p class="text-white text-[14px] font-bold">
                                        Panjang Fetus: 7,5 - 10 mm
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link href="/pemantauan_usia_kandungan">
                            <div class="flex flex-col items-center rounded-2xl bg-[rgba(229,103,122,0.70)] w-[290px] m-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                <div class="flex flex-col items-center gap-4 p-4 sm:p-6 w-full rounded-t-2xl border border-[rgba(229,103,122,0.70)] bg-white">
                                    <div class="w-[135px] h-[142px] bg-cover bg-center bg-no-repeat">
                                        <img src="/assets/images/tracking/biji.png" alt="Deskripsi gambar" />
                                    </div>
                                </div>
                                <div class="flex flex-col w-full items-start gap-4 p-4 sm:p-6">
                                    <p class="text-white text-[18px] sm:text-[22px] font-bold">4 Minggu</p>
                                    <div class="w-full h-[2px] bg-[rgba(81,75,75,0.14)]"></div>
                                    <p class="text-white text-[14px] font-bold">
                                        Panjang Fetus: 7,5 - 10 mm
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link href="/pemantauan_usia_kandungan">
                            <div class="flex flex-col items-center rounded-2xl bg-[rgba(229,103,122,0.70)] w-[290px] m-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                <div class="flex flex-col items-center gap-4 p-4 sm:p-6 w-full rounded-t-2xl border border-[rgba(229,103,122,0.70)] bg-white">
                                    <div class="w-[135px] h-[142px] bg-cover bg-center bg-no-repeat">
                                        <img src="/assets/images/tracking/biji.png" alt="Deskripsi gambar" />
                                    </div>
                                </div>
                                <div class="flex flex-col w-full items-start gap-4 p-4 sm:p-6">
                                    <p class="text-white text-[18px] sm:text-[22px] font-bold">4 Minggu</p>
                                    <div class="w-full h-[2px] bg-[rgba(81,75,75,0.14)]"></div>
                                    <p class="text-white text-[14px] font-bold">
                                        Panjang Fetus: 7,5 - 10 mm
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link href="pemantauan_usia_kandungan">
                            <div class="flex flex-col items-center rounded-2xl bg-[rgba(229,103,122,0.70)] w-[290px] m-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                <div class="flex flex-col items-center gap-4 p-4 sm:p-6 w-full rounded-t-2xl border border-[rgba(229,103,122,0.70)] bg-white">
                                    <div class="w-[135px] h-[142px] bg-cover bg-center bg-no-repeat">
                                        <img src="/assets/images/tracking/biji.png" alt="Deskripsi gambar" />
                                    </div>
                                </div>
                                <div class="flex flex-col w-full items-start gap-4 p-4 sm:p-6">
                                    <p class="text-white text-[18px] sm:text-[22px] font-bold">4 Minggu</p>
                                    <div class="w-full h-[2px] bg-[rgba(81,75,75,0.14)]"></div>
                                    <p class="text-white text-[14px] font-bold">
                                        Panjang Fetus: 7,5 - 10 mm
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default Pemantauan;
