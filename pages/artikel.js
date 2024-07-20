import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArtikelCard from "../components/ArtikelCard";
import { getArticles } from "./api/article/get_articles";

const Artikel = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((res) => {
      if (res.data) {
        const data = res.data;
        setArticles(data);
      }
    });
  }, []);

  const filteredArtikelData = articles.filter(
    (artikel) =>
      artikel.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artikel.judul.toLowerCase().includes(searchTerm.toLowerCase())
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
            <img
              src="/assets/images/article/search.svg"
              alt="Cari"
              className="w-4 h-4 ml-2"
            />
          </button>
        </div>
        {filteredArtikelData.length > 0 ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filteredArtikelData.slice(0, 3).map((artikel, index) => (
                <ArtikelCard
                  key={index}
                  id={artikel.id}
                  imageUrl={artikel.image}
                  category={artikel.author}
                  title={artikel.judul}
                />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filteredArtikelData.slice(3).map((artikel, index) => (
                <ArtikelCard
                  key={index}
                  id={artikel.id}
                  imageUrl={artikel.image}
                  category={artikel.author}
                  title={artikel.judul}
                />
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="bg-red-200 text-red-400 p-4 rounded-lg">
              Tidak ada hasil ditemukan
            </div>
            <div style={{ height: 500 }}></div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Artikel;
