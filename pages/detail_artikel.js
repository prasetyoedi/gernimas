import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const DetailArtikel = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col md:flex-row justify-start items-start gap-4 md:gap-36 p-4 md:p-16 bg-white">
                <div className="flex flex-col w-full md:w-[766px] h-auto md:h-[1028px] items-start space-y-[34px]">
                    <p className="w-full md:w-[763px] text-[25px] font-bold leading-[30px] text-red-400">
                        Tips Kehamilan Sehat: Nutrisi dan Gizi yang Tepat untuk Ibu Hamil
                    </p>
                    <img src="/assets/images/article/pict_artikel.png" className="w-full md:h-[293px] flex-shrink-0 rounded-lg" alt="Artikel Image"/>
                    <div className="flex w-full items-center gap-4">
                        <p className="text-[20px] text-red-400 font-bold">
                            Tim Ahli Gizi Faskes Panti Rapih
                        </p>
                        <p className="text-[20px] text-red-400 font-bold">-</p>
                        <p className="text-[20px] text-red-400 font-bold">
                            14 Januari 2024
                        </p>
                    </div>
                    <p className="text-[16px] text-red-400 text-justify">
                        Kehamilan adalah masa penting yang memerlukan perhatian khusus terhadap asupan nutrisi. Ibu hamil disarankan untuk mengonsumsi makanan bergizi yang kaya protein, karbohidrat kompleks, lemak sehat, serta vitamin dan mineral seperti asam folat, zat besi, kalsium, dan vitamin D. Makan dalam porsi kecil tapi sering dapat membantu menjaga kadar gula darah stabil dan mengurangi mual. 
                        Penting juga untuk minum cukup air, setidaknya 8-10 gelas sehari, untuk menjaga hidrasi. Hindari konsumsi kafein berlebihan, alkohol, makanan mentah atau setengah matang, serta makanan tinggi gula dan garam. Konsultasikan dengan dokter mengenai suplemen kehamilan yang dibutuhkan, dan selalu perhatikan kebersihan makanan dengan mencuci tangan serta memastikan makanan dimasak dengan baik.
                        Selain itu, aktivitas fisik ringan seperti berjalan kaki atau prenatal yoga dapat membantu menjaga kesehatan ibu dan mendukung persiapan tubuh untuk proses persalinan. Mengelola stres juga penting, sehingga ibu hamil dianjurkan untuk beristirahat yang cukup dan melakukan kegiatan yang menenangkan, seperti membaca buku atau mendengarkan musik. Dukungan dari keluarga dan teman juga berperan 
                        besar dalam menjaga kesehatan mental selama kehamilan. Dengan memperhatikan nutrisi, hidrasi, aktivitas fisik, dan kesejahteraan mental, ibu hamil dapat menjalani kehamilan yang sehat dan nyaman.
                    </p>
                </div>
                <div className="w-full flex flex-col items-start gap-[10px] p-[23px_24px] rounded-[20px] bg-[rgba(255,140,157,0.20)]">
                    <p className="text-[20px] text-red-400">
                        Lihat Artikel Lainnya
                    </p>
                    <div className="w-full h-[2px] bg-red-400"></div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DetailArtikel;
