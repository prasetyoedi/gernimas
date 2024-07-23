import React from "react";
import Navbar from "../components/Navbar";
import PemantauanIbuHamilCard from "../components/PemantauanIbuHamilCard";
import PemantauanJaninCard from "../components/PemantauanJaninCard";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { getPemeriksaan } from "./api/pemeriksaan/get_pemeriksaan";
import { getLastPemeriksaan } from "@/utils/get_last_pemeriksaan";
import { getWeightCategory } from "@/utils/get_weight_category";
import { getKehamilan } from "./api/kehamilan/get_kehamilan";

const pemantauanJaninData = [
  {
    href: "/pemantauan_usia_kandungan",
    image: "/assets/images/tracking/janin4.png",
    week: "4 Minggu",
    length: "Panjang Fetus: 7,5 - 10 mm",
  },
  {
    href: "/pemantauan_usia_kandungan",
    image: "/assets/images/tracking/janin8.png",
    week: "8 Minggu",
    length: "Panjang Fetus: 2,5 cm",
  },
  {
    href: "/pemantauan_usia_kandungan",
    image: "/assets/images/tracking/janin12.png",
    week: "12 Minggu",
    length: "Panjang Fetus: 9 cm",
  },
  {
    href: "/pemantauan_usia_kandungan",
    image: "/assets/images/tracking/janin16.png",
    week: "16 Minggu",
    length: "Panjang Fetus: 16 - 18 cm",
  },
  {
    href: "/pemantauan_usia_kandungan",
    image: "/assets/images/tracking/janin20.png",
    week: "20 Minggu",
    length: "Panjang Fetus: 25 cm",
  },
  {
    href: "/pemantauan_usia_kandungan",
    image: "/assets/images/tracking/janin24.png",
    week: "24 Minggu",
    length: "Panjang Fetus: 330 - 32 cm",
  },
  {
    href: "/pemantauan_usia_kandungan",
    image: "/assets/images/tracking/janin28.png",
    week: "28 Minggu",
    length: "Panjang Fetus: 35 cm",
  },
  {
    href: "/pemantauan_usia_kandungan",
    image: "/assets/images/tracking/janin32.png",
    week: "32 Minggu",
    length: "Panjang Fetus:  40 - 43 cm",
  },
  {
    href: "/pemantauan_usia_kandungan",
    image: "/assets/images/tracking/janin36.png",
    week: "36 Minggu",
    length: "Panjang Fetus:  48 cm",
  },
];

const Pemantauan = () => {
  const [dataPemeriksaan, setDataPemeriksaan] = useState({});
  const [dataKehamilan, setDataKehamilan] = useState({});
  useEffect(() => {
    getPemeriksaan().then((res) => {
      const data = res.data;
      if (data) {
        setDataPemeriksaan(getLastPemeriksaan(data));
        console.log(getLastPemeriksaan(data));
      }
    });
    getKehamilan().then((res) => {
      const data = res.data;
      if (data) {
        setDataKehamilan(data);
      }
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-16 self-stretch bg-white p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 mt-6">
          <PemantauanIbuHamilCard
            href={`/pemantauan_usia_kandungan`}
            title="Usia Kandungan"
            value={dataKehamilan.usia ?? "0"}
            unit="Minggu"
          />
          <PemantauanIbuHamilCard
            href="/pemantauan_berat_badan"
            title="Berat Badan"
            value={dataPemeriksaan.berat_badan ?? "0"}
            unit="kg"
            category={`(${getWeightCategory(dataPemeriksaan.berat_badan)})`}
          />
          <PemantauanIbuHamilCard
            title="Lingkar Lengan"
            value={dataPemeriksaan.lingkar_lengan_atas ?? "0"}
            unit="cm"
          />
          <PemantauanIbuHamilCard
            title="Tinggi Badan"
            value={dataPemeriksaan.tinggi_badan ?? "0"}
            unit="cm"
          />
        </div>
        <div className="w-full max-w-[1281px] h-auto rounded-[20px] bg-[rgba(255,140,157,0.20)] flex justify-start p-5">
          <p className="text-[#E5677A] text-[22px] font-bold">
            Yuk Ketahui Setiap Perkembangan Bentuk Janin Tiap Minggu-nya!
          </p>
        </div>
        <div className="flex justify-center items-center gap-8 md:gap-10 w-full flex-wrap mb-6">
          {pemantauanJaninData.map((data, index) => (
            <PemantauanJaninCard
              key={index}
              href={data.href}
              image={data.image}
              week={data.week}
              length={data.length}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Pemantauan;
