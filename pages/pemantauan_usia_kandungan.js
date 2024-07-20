import React from "react";
import { useRouter } from 'next/router';
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const PemantauanUsiaKandungan = () => {
    const router = useRouter();
    const { week } = router.query;

    const fetalDevelopmentData = [
        {
            week: '4 Minggu',
            image: '/assets/images/tracking/janin.png',
            length: '7,5 - 10 mm',
            organDevelopment: 'Rudimen mata, telinga dan hidung.'
        },
        {
            week: '8 Minggu',
            image: '/assets/images/tracking/janin8.png',
            length: '2,5 cm',
            organDevelopment: 'Hidung, telinga, jari jemari mulai dibentuk. Kepala menekuk ke dada.'
        },
        {
            week: '12 Minggu',
            image: '/assets/images/tracking/janin12.png',
            length: '9 cm',
            organDevelopment: 'Daun telinga lebih jelas, kelopak mata melekat, leher mulai terbentuk, genetalia eksterna terbentuk tetapi belum berdiferensiasi.'
        },
        {
            week: '16 Minggu',
            image: '/assets/images/tracking/janin16.png',
            length: '16 - 18 cm',
            organDevelopment: 'Genetalia eksterna terbentuk dan dapat dikenal, kulit tipis dan warna merah.'
        },
        {
            week: '20 Minggu',
            image: '/assets/images/tracking/janin20.png',
            length: '25 cm',
            organDevelopment: 'Kulit lebih tebal, rambut mulai tumbuh di kepala, dan rambut halus (lanugo) tumbuh dikulit.'
        },
        {
            week: '24 Minggu',
            image: '/assets/images/tracking/janin24.png',
            length: '30 - 32 cm',
            organDevelopment: 'Kedua kelopak mata ditumbuhi alis dan bulu mata serta kulit keriput. Kepala besar. Jika lahir, dapat bernafas tetapi hanya bertahan hidup beberapa jam saja.'
        },
        {
            week: '28 Minggu',
            image: '/assets/images/tracking/janin28.png',
            length: '35 cm',
            organDevelopment: 'Kulit berwarna merah dan ditutupi verniks kaseosa. Jika lahir dapat bernafas, menangis pelan dan lemah. Bayi imatur.'
        },
        {
            week: '32 Minggu',
            image: '/assets/images/tracking/janin32.png',
            length: '40 - 43 cm',
            organDevelopment: 'Kulit merah dan keriput. Jika lahir, tampak seperti orang tua kecil (little old man).'
        },
        {
            week: '36 Minggu',
            image: '/assets/images/tracking/janin36.png',
            length: '45 cm',
            organDevelopment: 'Muka berseri tidak keriput. Bayi prematur. Pada 40 Minggu panjang janin berada pada rentang 50 - 55 cm. Pada minggu ini Bayi cukup bulan. Kulit licin, verniks kaseosa banyak, rambut kepala tumbuh baik, organ-organ baik. Pada pria, testis sudah sudah berada dalam skrotum, sedangkan pada wanita, labia mayora berkembang baik. Tulang-tulang kepala menulang. Pada 80% kasus, telah berbentuk pusat penulangan pada epifisis tibia proksimal.'
        }
    ];

    const currentData = fetalDevelopmentData.find(data => data.week === week) || fetalDevelopmentData[0];

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
                        <div className="w-auto h-auto sm:w-auto sm:h-[300px] bg-cover bg-center bg-no-repeat rounded-t-2xl p-2">
                            <img src={currentData.image} alt="Deskripsi gambar" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col items-center gap-4 p-4 sm:p-6 w-full bg-[rgba(229,103,122,0.70)] rounded-b-2xl ">
                            <p className="text-[18px] sm:text-[22px] font-bold text-white">{currentData.week}</p>
                            <div className="w-full h-[2px] bg-[rgba(81,75,75,0.14)]"></div>
                            <p className="text-[14px] font-bold text-white">Panjang Fetus: {currentData.length}</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-[50%] h-[50%] flex-shrink-0 rounded-[22px] border-[2px] border-[#E5677A] bg-white m-2">
                        <div className="w-full h-[80.111px] rounded-t-[20px] border border-[#E5677A] bg-[rgba(229,103,122,0.70)]">
                            <p className="text-[22px] font-bold text-white text-center mt-5">Pembentukan Organ Janin</p>
                        </div>
                        <p className="p-6 text-[18px] font-semibold leading-[30px] text-[#E5677A]">
                            {currentData.organDevelopment}
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PemantauanUsiaKandungan;

