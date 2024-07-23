import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const examinationData = [
    { no: 1, name: "Tinggi Badan", result: "160 cm" },
    { no: 2, name: "Berat Badan", result: "50 kg" },
    { no: 3, name: "Lingkar Lengan Atas", result: "22 cm" },
    { no: 4, name: "Letak & Denyut Jantung Bayi", result: "160 x/menit" },
    { no: 5, name: "Hemoglobin", result: "11 g/dL" },
    { no: 6, name: "Gula Darah", result: "95 mg/dL" },
    { no: 7, name: "Tinggi Rahim", result: "150 cm" },
    { no: 8, name: "Tekanan Darah", result: "120/80 mmhg" },
    { no: 9, name: "Riwayat Penyakit Keluarga", result: "Melahirkan bayi kembar, hipertensi, jantung" },
    { no: 10, name: "Riwayat Penyakit Pribadi", result: "Anemia" },
    { no: 11, name: "Pemeriksaan Selanjutnya", result: "20 Januari 2024" },
    { no: 12, name: "Riwayat Penyakit Pribadi", result: "Gatal-gatal" },
    { no: 13, name: "Riwayat Penyakit Keluarga", result: "Tidak Ada" },
];

const DetailRiwayatPeriksa = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-wrap items-center gap-1.5 pt-6 pl-4 md:pl-20 bg-white">
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
                    <div className="flex flex-col md:flex-row justify-between p-8 md:p-16 rounded-[20px] bg-white shadow-md w-full">
                        <img src="/assets/images/riwayat-periksa/default-profile.png" className="w-[150px] h-[164px] md:w-[216px] md:h-[236px] mb-4 md:mb-0" />
                        <div className="flex flex-col justify-center md:ml-8 space-y-4">
                            <div>
                                <p className="text-red-400 font-semibold text-[18px]">Nama Dokter</p>
                                <p className="flex w-full md:w-[807.731px] h-[50px] p-[12px_21px] text-red-400 items-center gap-2.5 flex-shrink-0 rounded-lg border border-[#F5556E]">
                                    Dr. Lucia Leonie Sp.OG
                                </p>
                            </div>
                            <div>
                                <p className="text-red-400 font-semibold text-[18px]">Tanggal Pemeriksaan</p>
                                <p className="flex w-full md:w-[807.731px] h-[50px] p-[12px_21px] text-red-400 items-center gap-2.5 flex-shrink-0 rounded-lg border border-[#F5556E]">
                                    10 Juli 2023
                                </p>
                            </div>
                            {/* <div>
                                <p className="text-red-400 font-semibold text-[18px]">Judul Pemeriksaan</p>
                                <p className="flex w-full md:w-[807.731px] h-[50px] p-[12px_21px] text-red-400 items-center gap-2.5 flex-shrink-0 rounded-lg border border-[#F5556E]">
                                    Pemeriksaan 1
                                </p>
                            </div> */}
                            <div>
                                <p className="text-red-400 font-semibold text-[18px]">Fasilitas Kesehatan</p>
                                <p className="flex w-full md:w-[807.731px] h-[50px] p-[12px_21px] text-red-400 items-center gap-2.5 flex-shrink-0 rounded-lg border border-[#F5556E]">
                                    RSA UGM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full mt-8 h-auto md:h-auto p-8 flex-shrink-0 rounded-[20px] bg-[rgba(255,140,157,0.20)] gap-4">
                    <div className="rounded-2xl w-full bg-white p-4 shadow overflow-x-auto">
                        <table className="w-full bg-white text-red-400">
                            <thead>
                                <tr className="text-left">
                                    <th className="px-4 py-2 border-b border-pink-200 w-[50px]">No</th>
                                    <th className="px-4 py-2 border-b border-pink-200 w-[300px]">Nama Pemeriksaan</th>
                                    <th className="px-4 py-2 border-b border-pink-200 w-[300px]">Hasil Pemeriksaan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {examinationData.map((examination, index) => (
                                    <tr key={index} className="hover:bg-pink-50">
                                        <td className="px-4 py-4 border-b border-pink-200">{examination.no}</td>
                                        <td className="px-4 py-4 border-b border-pink-200">{examination.name}</td>
                                        <td className="px-4 py-4 border-b border-pink-200">{examination.result}</td>
                                    </tr>
                                ))}
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
