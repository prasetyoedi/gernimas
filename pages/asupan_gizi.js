import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AsupanGiziCard from "@/components/AsupanGiziCard";

const AsupanGiziTrimaster = [
  {
    imageSrc: "/assets/images/asupan/janin-trimester1.png",
    title: "Trimester Asupan Pertama",
    description:
      "Trimester 1 dimulai dari konsepsi sampai 3 bulan (0-12 minggu)",
  },
  {
    imageSrc: "/assets/images/asupan/janin-trimester2.png",
    title: "Trimester Asupan Kedua",
    description: "Trimester 2 dimulai dari umur kehamilan 13-28 minggu",
  },
  {
    imageSrc: "/assets/images/asupan/janin-trimester3.png",
    title: "Trimester Asupan Ketiga",
    description: "Trimester 3 dimulai dari umur kehamilan 29-40 minggu.",
  },
];

const AsupanGizi = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap items-center gap-1.5 pt-6 pl-4 md:pl-20 bg-white">
        <p className="text-primary text-base font-bold leading-normal text-red-400">
          Layanan
        </p>
        <img src="/assets/images/arrow.png" className="w-[20px] h-[20px]" />
        <p className="text-custom-color text-red-400 text-base font-bold leading-normal">
          Asupan Gizi
        </p>
      </div>
      <div className="flex flex-col p-6 md:p-16 bg-white justify-center items-center">
        <div className="flex flex-col w-full h-auto md:h-[200px] px-4 md:px-[35px] py-4 flex-shrink-0 rounded-[20px] bg-[rgba(255,140,157,0.20)] gap-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-between gap-4 md:gap-[296px]">
          <div className="flex flex-col w-full md:w-[720px] items-between gap-4 justify-between">
              <h1 className="text-red-400 text-2xl md:text-4xl font-bold leading-normal mt-6">
                Hai Bunda!
              </h1>
              <h2 className="text-red-400 text-base md:text-lg font-medium leading-normal">
                Selama kehamilan jangan lupa mengonsumsi makanan yang bergizi
                dan dapat disesuaikan dengan trimester kehamilan, ya!
              </h2>
            </div>
            <img
              src="/assets/images/services/woman.png"
              className="w-[218px] h-auto md:h-[163px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 w-full mt-12 h-auto flex-shrink-0 rounded-[20px] justify-center">
          {AsupanGiziTrimaster.map((card, index) => (
            <AsupanGiziCard
              key={index}
              trimester={index + 1}
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AsupanGizi;
