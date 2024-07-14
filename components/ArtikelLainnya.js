import React from "react";

const GambarArtikelLainnya = ({ imageSrc, content }) => {
  return (
    <div className="flex items-start gap-[30px] self-stretch mt-3">
      <img src={imageSrc} className="w-[186px] h-[112px] rounded-lg" alt="Related Article Image" />
      <p className="text-red-400">
        {content}
      </p>
    </div>
  );
};

const ArtikelLainnya = () => {
  const articles = [
    {
      imageSrc: "/assets/images/article/artikel_lain.png",
      content: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
    },
    {
      imageSrc: "/assets/images/article/artikel_lain.png",
      content: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
    },
    {
      imageSrc: "/assets/images/article/artikel_lain.png",
      content: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
    },
    {
      imageSrc: "/assets/images/article/artikel_lain.png",
      content: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
    },
    {
      imageSrc: "/assets/images/article/artikel_lain.png",
      content: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
    },
    {
      imageSrc: "/assets/images/article/artikel_lain.png",
      content: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
    }
  ];

  return (
    <div className="w-full flex flex-col items-start gap-[10px] p-8 rounded-[20px] bg-[rgba(255,140,157,0.20)]">
      <p className="text-[20px] text-red-400">
        Lihat Artikel Lainnya
      </p>
      <div className="w-full h-[2px] bg-red-400"></div>
      {articles.map((article, index) => (
        <GambarArtikelLainnya key={index} imageSrc={article.imageSrc} content={article.content} />
      ))}
    </div>
  );
};

export default ArtikelLainnya;
