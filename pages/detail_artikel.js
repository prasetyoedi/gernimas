import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArtikelLainnya from "../components/ArtikelLainnya";
import { getArticle } from "./api/article/get_article";
import { useRouter } from "next/router";

const DetailArtikel = () => {
  const [article, setArticle] = useState({});
  const [id, setId] = useState();
  const router = useRouter();

  useEffect(() => {
    setId(router.query.id);
    getArticle(router.query.id).then((res) => {
      if (res.data) {
        setArticle(res.data);
      }
    });
  }, [id]);
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-start items-start gap-4 md:gap-20 p-10 md:p-16 bg-white">
        <div className="flex flex-col w-full md:w-[990px] h-auto md:h-[1028px] items-start space-y-[34px]">
          <p className="w-full md:w-[763px] text-[25px] font-bold leading-[30px] text-red-400">
            {article ? article.judul : "-"}
          </p>
          {article && (
            <img
              src={article.image}
              className="w-full md:h-[293px] flex-shrink-0 rounded-lg"
              alt="Artikel Image"
            />
          )}

          <div className="flex w-full items-center gap-4">
            <p className="text-[20px] text-red-400 font-bold">
              {article && article.author}
            </p>
            <p className="text-[20px] text-red-400 font-bold">-</p>
            <p className="text-[20px] text-red-400 font-bold">
              {article && article.date}
            </p>
          </div>
          <p className="text-[16px] text-red-400 text-justify">
            {article && article.content}
          </p>
        </div>
        <ArtikelLainnya />
      </div>
      <Footer />
    </div>
  );
};

export default DetailArtikel;
