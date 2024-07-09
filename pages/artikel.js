import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ArtikelCard from '../components/ArtikelCard';

const Artikel = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-white md:p-16 pt-14">
                <div className="w-full text-center text-red-400 text-xl md:text-3xl font-bold mb-8">
                    ARTIKEL
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <ArtikelCard
                        imageUrl="/assets/images/article.png"
                        category="IBU HAMIL"
                        title="Tips Kehamilan Sehat: Nutrisi dan Gizi yang Tepat untuk Ibu Hamil"
                    />
                    <ArtikelCard
                        imageUrl="/assets/images/article.png"
                        category="KESEHATAN ANAK"
                        title="Pentingnya Vaksinasi untuk Anak"
                    />
                    <ArtikelCard
                        imageUrl="/assets/images/article.png"
                        category="GIZI SEHAT"
                        title="Makanan Sehat untuk Menjaga Berat Badan Ideal"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <ArtikelCard
                        imageUrl="/assets/images/article.png"
                        category="KESEHATAN IBU"
                        title="Perawatan Pasca Melahirkan yang Tepat"
                    />
                    <ArtikelCard
                        imageUrl="/assets/images/article.png"
                        category="PENGOBATAN ALAMI"
                        title="Manfaat dan Cara Menggunakan Daun Sirsak untuk Kesehatan"
                    />
                    <ArtikelCard
                        imageUrl="/assets/images/article.png"
                        category="KULIT SEHAT"
                        title="Tips Sederhana Merawat Kulit Wajah Agar Tetap Sehat"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Artikel;
