import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getArticles } from "@/pages/api/article/get_articles";

const GambarArtikelLainnya = ({ imageSrc, content, id }) => {
  return (
    <Link
      href={`/detail_artikel?id=${id}`}
      onClick={() => window.location.reload()}
    >
      <div className="flex items-start gap-[30px] self-stretch mt-3">
        <img
          src={imageSrc}
          className="w-[186px] h-[112px] rounded-lg"
          alt="Related Article Image"
        />
        <p
          className="text-red-400"
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            overflowWrap: "break-word",
          }}
        >
          {content}
        </p>
      </div>
    </Link>
  );
};

const ArtikelLainnya = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((res) => {
      if (res.data) {
        const data = res.data;
        setArticles(data);
      }
    });
  }, []);

  return (
    <div className="w-full flex flex-col items-start gap-[10px] p-8 rounded-[20px] bg-[rgba(255,140,157,0.20)]">
      <p className="text-[20px] text-red-400">Lihat Artikel Lainnya</p>
      <div className="w-full h-[2px] bg-red-400"></div>
      {articles.map((article, index) => (
        <GambarArtikelLainnya
          key={index}
          id={article.id}
          imageSrc={article.image}
          content={article.content}
        />
      ))}
    </div>
  );
};

export default ArtikelLainnya;
