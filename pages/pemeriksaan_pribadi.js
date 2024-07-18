import React from "react";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const examinationData = [
    { no: 1, date: "2023-07-01", weight: "50 kg", height: "160 cm", armCircumference: "22 cm", notes: "Merasa sehat, tidak ada keluhan" },
    { no: 2, date: "2023-07-08", weight: "51 kg", height: "160 cm", armCircumference: "23 cm", notes: "Sedikit pusing di pagi hari" },
    { no: 3, date: "2023-07-15", weight: "52 kg", height: "160 cm", armCircumference: "23 cm", notes: "Nafsu makan meningkat" },
    { no: 4, date: "2023-07-22", weight: "53 kg", height: "160 cm", armCircumference: "24 cm", notes: "Merasa lelah di sore hari" }
];

const PemeriksaanPribadi = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-wrap items-center gap-1.5 pt-6 pl-4 md:pl-20 bg-white">
                <p className="text-primary text-base font-bold leading-normal text-red-400">Layanan</p>
                <img src="/assets/images/arrow.png" className="w-[20px] h-[20px]" />
                <p className="text-custom-color text-red-400 text-base font-bold leading-normal">Pemeriksaan Pribadi</p>
            </div>
            <div className="flex flex-col p-6 md:p-16 bg-white justify-center items-center">
                <div className="flex flex-col w-full h-auto md:h-[200px] px-4 md:px-[35px] py-4 flex-shrink-0 rounded-[20px] bg-[rgba(255,140,157,0.20)] gap-4">
                    <div className="flex flex-col md:flex-row items-between justify-between md:items-between gap-4">
                        <div className="flex flex-col w-full items-start gap-4">
                            <h1 className="text-red-400 text-2xl md:text-4xl font-bold leading-normal mt-6">Hai Bunda!</h1>
                            <h2 className="text-red-400 text-base md:text-lg font-medium leading-normal">Yuk mulai pemeriksaan mandiri agar kesehatan Bunda dan janin tetap terpantau dengan baik. Pemeriksaan pribadi akan membantu dokter memastikan kesehatan optimal selama kehamilan!</h2>
                        </div>
                        <img src="/assets/images/services/woman.png" className="w-[218px] h-auto md:h-[163px]" />
                    </div>
                </div>
                <div className="flex flex-col w-full mt-8 h-auto md:h-auto p-8 flex-shrink-0 rounded-[20px] bg-[rgba(255,140,157,0.20)] gap-4">
                    <div className="rounded-2xl w-full bg-white p-4 shadow overflow-x-auto">
                        <table className="w-full bg-white text-red-400">
                            <thead>
                                <tr className="text-left">
                                    <th className="px-4 py-2 border-b border-pink-200 w-[50px]">No</th>
                                    <th className="px-4 py-2 border-b border-pink-200 w-[300px]">Tanggal</th>
                                    <th className="px-4 py-2 border-b border-pink-200 w-[300px]">Berat Badan</th>
                                    <th className="px-4 py-2 border-b border-pink-200 w-[300px]">Tinggi Badan</th>
                                    <th className="px-4 py-2 border-b border-pink-200 w-[300px]">Lingkar Lengan</th>
                                    <th className="px-4 py-2 border-b border-pink-200 w-[300px]">Catatan Harian</th>
                                </tr>
                            </thead>
                            <tbody>
                                {examinationData.map((examination, index) => (
                                    <tr key={index} className="hover:bg-pink-50">
                                        <td className="px-4 py-4 border-b border-pink-200">{examination.no}</td>
                                        <td className="px-4 py-4 border-b border-pink-200">{examination.date}</td>
                                        <td className="px-4 py-4 border-b border-pink-200">{examination.weight}</td>
                                        <td className="px-4 py-4 border-b border-pink-200">{examination.height}</td>
                                        <td className="px-4 py-4 border-b border-pink-200">{examination.armCircumference}</td>
                                        <td className="px-4 py-4 border-b border-pink-200">{examination.notes}</td>
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

export default PemeriksaanPribadi;
