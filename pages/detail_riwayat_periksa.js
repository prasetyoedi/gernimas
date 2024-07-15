import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DetailRiwayatPeriksa = () => {
    return (
        <div>
            <Navbar />
            <div className="flex items-center gap-1.5 pt-6 pl-4 md:pl-20 bg-white flex-wrap">
                <p className="text-primary text-base font-bold leading-normal text-red-400">Layanan</p>
                <img src="/assets/images/arrow.png" className="w-[20px] h-[20px]" />
                <p className="text-custom-color text-red-400 text-base font-bold leading-normal">Riwayat Periksa</p>
                <img src="/assets/images/arrow.png" className="w-[20px] h-[20px]" />
                <p className="text-custom-color text-red-400 text-base font-bold leading-normal">Trimester 1</p>
                <img src="/assets/images/arrow.png" className="w-[20px] h-[20px]" />
                <p className="text-custom-color text-red-400 text-base font-bold leading-normal">Riwayat Pemeriksaan</p>
            </div>
            <div className="flex flex-col p-6 md:p-16 bg-white justify-center items-center">
                <div className="flex flex-col w-full h-auto md:h-auto p-8 flex-shrink-0 rounded-[20px] bg-[rgba(255,140,157,0.20)] gap-4">
                    <div className="flex flex-col md:flex-row justify-between p-16 rounded-[20px] bg-white shadow-md w-full">
                        <img src="/assets/images/riwayat-periksa/default-profile.png" className="w-[150px] h-[164px] md:w-[216px] md:h-[236px] mb-4" />
                        <div className="flex flex-col justify-center md:ml-8">
                            <p className="text-red-400 font-semibold text-[18px]">Nama Dokter</p>
                            <p className="flex w-full md:w-[807.731px] h-[50px] p-[12px_21px] text-red-400 mt-4 items-center gap-2.5 flex-shrink-0 rounded-lg border border-[#F5556E]">
                                Dr. Lucia Leonie Sp.OG
                            </p>
                            <p className="text-red-400 font-semibold text-[18px] mt-4">Tanggal Pemeriksaan</p>
                            <p className="flex w-full md:w-[807.731px] h-[50px] p-[12px_21px] text-red-400 mt-4 items-center gap-2.5 flex-shrink-0 rounded-lg border border-[#F5556E]">
                                10 Juli 2023
                            </p>
                            <p className="text-red-400 font-semibold text-[18px] mt-4">Judul Pemeriksaan</p>
                            <p className="flex w-full md:w-[807.731px] h-[50px] p-[12px_21px] text-red-400 mt-4 items-center gap-2.5 flex-shrink-0 rounded-lg border border-[#F5556E]">
                                Pemeriksaan 1
                            </p>
                            <p className="text-red-400 font-semibold text-[18px] mt-4">Fasilitas Kesehatan</p>
                            <p className="flex w-full md:w-[807.731px] h-[50px] p-[12px_21px] text-red-400 mt-4 items-center gap-2.5 flex-shrink-0 rounded-lg border border-[#F5556E]">
                                RSA UGM
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full mt-8 h-auto md:h-auto p-8 flex-shrink-0 rounded-[20px] bg-[rgba(255,140,157,0.20)] gap-4">
                    <div className="rounded-2xl w-full bg-white p-4 shadow overflow-x-auto">
                        <table className="w-full bg-white text-red-400">
                            <thead>
                                <tr className="text-left">
                                    <th className="px-4 py-2 border-b border-pink-200">No</th>
                                    <th className="px-4 py-2 border-b border-pink-200">Nama Periksaan</th>
                                    <th className="px-4 py-2 border-b border-pink-200">Hasil Pemeriksaan</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-pink-50">
                                    <td className="px-4 py-4 border-b border-pink-200">1</td>
                                    <td className="px-4 py-4 border-b border-pink-200">Tinggi Badan</td>
                                    <td className="px-4 py-4 border-b border-pink-200">160 cm</td>
                                </tr>
                                <tr className="hover:bg-pink-50">
                                    <td className="px-4 py-4 border-b border-pink-200">2</td>
                                    <td className="px-4 py-4 border-b border-pink-200">Berat Badan</td>
                                    <td className="px-4 py-4 border-b border-pink-200">50 kg</td>
                                </tr>
                                <tr className="hover:bg-pink-50">
                                    <td className="px-4 py-4 border-b border-pink-200">3</td>
                                    <td className="px-4 py-4 border-b border-pink-200">Lingkar Lengan Atas</td>
                                    <td className="px-4 py-4 border-b border-pink-200">22 cm</td>
                                </tr>
                                <tr className="hover:bg-pink-50">
                                    <td className="px-4 py-4 border-b border-pink-200">4</td>
                                    <td className="px-4 py-4 border-b border-pink-200">Tekanan Darah</td>
                                    <td className="px-4 py-4 border-b border-pink-200">120/80 mmhg cm</td>
                                </tr>
                                <tr className="hover:bg-pink-50">
                                    <td className="px-4 py-4 border-b border-pink-200">5</td>
                                    <td className="px-4 py-4 border-b border-pink-200">Riwayat Penyakit</td>
                                    <td className="px-4 py-4 border-b border-pink-200">Anemia</td>
                                </tr>
                                <tr className="hover:bg-pink-50">
                                    <td className="px-4 py-4 border-b border-pink-200">6</td>
                                    <td className="px-4 py-4 border-b border-pink-200">Riwayat Penyakit Keluarga</td>
                                    <td className="px-4 py-4 border-b border-pink-200">Melahirkan bayi kembar, hipertensi, jantung</td>
                                </tr>
                                <tr className="hover:bg-pink-50">
                                    <td className="px-4 py-4 border-b border-pink-200">7</td>
                                    <td className="px-4 py-4 border-b border-pink-200">Letak dan Denyut Jantung Bayi</td>
                                    <td className="px-4 py-4 border-b border-pink-200">Ball +</td>
                                </tr>
                                <tr className="hover:bg-pink-50">
                                    <td className="px-4 py-4 border-b border-pink-200">8</td>
                                    <td className="px-4 py-4 border-b border-pink-200">Gula Darah</td>
                                    <td className="px-4 py-4 border-b border-pink-200">95 mg/dL </td>
                                </tr>
                                <tr className="hover:bg-pink-50">
                                    <td className="px-4 py-4 border-b border-pink-200">9</td>
                                    <td className="px-4 py-4 border-b border-pink-200">Hemoglobi</td>
                                    <td className="px-4 py-4 border-b border-pink-200">11 g/dL</td>
                                </tr>
                                <tr className="hover:bg-pink-50">
                                    <td className="px-4 py-4 border-b border-pink-200">10</td>
                                    <td className="px-4 py-4 border-b border-pink-200">Tinggi Rahim</td>
                                    <td className="px-4 py-4 border-b border-pink-200">150 cm</td>
                                </tr>
                                <tr className="hover:bg-pink-50">
                                    <td className="px-4 py-4 border-b border-pink-200">11</td>
                                    <td className="px-4 py-4 border-b border-pink-200">Letak Janin</td>
                                    <td className="px-4 py-4 border-b border-pink-200">Letak Kepala, Presentasi Belakang Kepala</td>
                                </tr>
                                <tr className="hover:bg-pink-50">
                                    <td className="px-4 py-4 border-b border-pink-200">12</td>
                                    <td className="px-4 py-4 border-b border-pink-200">Denyut Jantung Janin</td>
                                    <td className="px-4 py-4 border-b border-pink-200">160 x/menit</td>
                                </tr>
                                <tr className="hover:bg-pink-50">
                                    <td className="px-4 py-4 border-b border-pink-200">13</td>
                                    <td className="px-4 py-4 border-b border-pink-200">Gerakan Janin</td>
                                    <td className="px-4 py-4 border-b border-pink-200">Aktif</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DetailRiwayatPeriksa;
