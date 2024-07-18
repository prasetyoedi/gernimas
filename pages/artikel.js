import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ArtikelCard from '../components/ArtikelCard';

const artikelData = [
    {
        imageUrl: "/assets/images/article.png",
        category: "IBU HAMIL",
        title: "Tips Kehamilan Sehat: Nutrisi dan Gizi yang Tepat untuk Ibu Hamil"
    },
    {
        imageUrl: "/assets/images/article.png",
        category: "KESEHATAN ANAK",
        title: "Pentingnya Vaksinasi untuk Anak"
    },
    {
        imageUrl: "/assets/images/article.png",
        category: "GIZI SEHAT",
        title: "Makanan Sehat untuk Menjaga Berat Badan Ideal"
    },
    {
        imageUrl: "/assets/images/article.png",
        category: "KESEHATAN IBU",
        title: "Perawatan Pasca Melahirkan yang Tepat"
    },
    {
        imageUrl: "/assets/images/article.png",
        category: "PENGOBATAN ALAMI",
        title: "Manfaat dan Cara Menggunakan Daun Sirsak untuk Kesehatan"
    },
    {
        imageUrl: "/assets/images/article.png",
        category: "KULIT SEHAT",
        title: "Tips Sederhana Merawat Kulit Wajah Agar Tetap Sehat"
    },
    {
        imageUrl: "/assets/images/article.png",
        category: "KESEHATAN ANAK",
        title: "Tips Sederhana Merawat Anak agar Tumbuh Sehat dan Cerdas"
    }
];

const Artikel = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredArtikelData = artikelData.filter(artikel =>
        artikel.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artikel.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Navbar />
            <div className="bg-white md:p-16 pt-14">
                <div className="w-full text-center text-red-400 text-xl md:text-3xl font-bold mb-8">
                    ARTIKEL
                </div>
                <div className="flex justify-center items-center mb-4 space-x-4 p-2">
                    <input
                        type="text"
                        className="w-full border border-red-400 rounded-lg py-2 px-4 w-1/2 focus:outline-none focus:ring-2 focus:ring-pink-200"
                        placeholder="Cari artikel sesuai dengan pilihan Bunda!"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg flex items-center">
                        Cari
                        <img src="/assets/images/article/search.svg" alt="Cari" className="w-4 h-4 ml-2" />
                    </button>
                </div>
                {filteredArtikelData.length > 0 ? (
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {filteredArtikelData.slice(0, 3).map((artikel, index) => (
                                <ArtikelCard
                                    key={index}
                                    imageUrl={artikel.imageUrl}
                                    category={artikel.category}
                                    title={artikel.title}
                                />
                            ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {filteredArtikelData.slice(3).map((artikel, index) => (
                                <ArtikelCard
                                    key={index}
                                    imageUrl={artikel.imageUrl}
                                    category={artikel.category}
                                    title={artikel.title}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="bg-red-200 text-red-400 p-4 rounded-lg">
                        Tidak ada hasil ditemukan
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Artikel;
