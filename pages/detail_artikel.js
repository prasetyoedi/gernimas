import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArtikelLainnya from "../components/ArtikelLainnya";
import { getArticle } from "./api/article/get_article";
import { useRouter } from "next/router";

const DetailArtikel = () => {
  const [article, setArticle] = useState({});
  const router = useRouter();

  useEffect(() => {
    getArticle(router.query.id).then((res) => {
      if (res.data) {
        setArticle(res.data);
      }
    });
  }, [router.query.id]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col md:flex-row justify-start items-start gap-4 md:gap-14 p-6 md:p-16 bg-white flex-grow">
        <div className="flex flex-col w-full md:w-2/3 lg:w-[900px] h-auto items-start space-y-4">
          <p className="w-full text-[22px] md:text-[25px] font-bold leading-snug text-red-400">
            {article ? article.judul : "-"}
          </p>
          {article && (
            <img
              src={article.image}
              className="w-full h-auto md:h-[450px] flex-shrink-0 rounded-lg"
              alt="Artikel Image"
            />
          )}

          <div className="flex w-full items-center gap-2 md:gap-4">
            <p className="text-[16px] md:text-[20px] text-red-400 font-bold">
              {article && article.author}
            </p>
            <p className="text-[16px] md:text-[20px] text-red-400 font-bold">-</p>
            <p className="text-[16px] md:text-[20px] text-red-400 font-bold">
              {article && article.date}
            </p>
          </div>
          <p className="text-[14px] md:text-[16px] text-red-400 text-justify">
            {article && article.content}
          </p>
          <div className="bg-red-100 p-2 md:p-4 rounded-[8px] w-full">
            <p className="text-[16px] md:text-[18px] text-red-400 text-justify pt-2 font-bold">Referensi:</p>
            <p className="text-[14px] md:text-[16px] text-red-400 text-justify pt-2">
              {article && article.reference}
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-[600px]">
          <ArtikelLainnya />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailArtikel;
