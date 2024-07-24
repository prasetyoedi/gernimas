import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getArticles } from "@/pages/api/article/get_articles";


const GambarArtikelLainnya = ({ imageSrc, title, author, id }) => {
  return (
    <Link href={`/detail_artikel?id=${id}`} className="w-full">
      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 mt-3 w-full">
        <img
          src={imageSrc}
          className="w-full h-[220px] md:w-[150px] md:h-[150px] rounded-lg"
          alt="Related Article Image"
        />
        <div className="flex flex-col justify-between w-full">
          <p className="text-[16px] md:text-[18px] text-red-400 font-semibold">{title}</p>
          <p className="text-[14px] md:text-[15px] text-red-400 mt-2 md:mt-4">{author}</p>
        </div>
      </div>
      <div className="w-full h-[2px] mt-4 md:mt-6 bg-red-400"></div>
    </Link>
  );
};


const ArtikelLainnya = () => {
  const [articles, setArticles] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getArticles().then((res) => {
      if (res.data) {
        const data = res.data;
        setArticles(data.filter((o) => o.id != router.query.id));
      }
    });
  }, [router.query.id]);

  return (
    <div className="w-full flex flex-col items-start gap-4 p-4 md:p-8 rounded-[20px] bg-[rgba(255,140,157,0.20)]">
      <p className="text-[18px] md:text-[20px] text-red-400 font-bold">Lihat Artikel Lainnya</p>
      <div className="w-full h-[2px] bg-red-400"></div>
      {articles.map((article, index) => (
        <GambarArtikelLainnya
          key={index}
          id={article.id}
          imageSrc={article.image}
          title={article.judul}
          author={article.author}
        />
      ))}
    </div>
  );
};

export default ArtikelLainnya;