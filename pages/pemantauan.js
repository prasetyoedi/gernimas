import React from "react";
import Navbar from "../components/Navbar";
import PemantauanIbuHamilCard from "../components/PemantauanIbuHamilCard";
import PemantauanJaninCard from "../components/PemantauanJaninCard";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { getPemeriksaanMandiri } from "./api/pemeriksaan/get_pemeriksaan_mandiri";

const pemantauanJaninData = [
  {
    href: "/pemantauan_usia_kandungan",
    image: "/assets/images/tracking/biji.png",
    title: "4 Minggu",
    length: "Panjang Fetus: 7,5 - 10 mm",
  },
  {
    href: "/pemantauan_usia_kandungan",
    image: "/assets/images/tracking/biji.png",
    title: "8 Minggu",
    length: "Panjang Fetus: 14 - 20 mm",
  },
  {
    href: "/pemantauan_usia_kandungan",
    image: "/assets/images/tracking/biji.png",
    title: "12 Minggu",
    length: "Panjang Fetus: 45 - 60 mm",
  },
  {
    href: "/pemantauan_usia_kandungan",
    image: "/assets/images/tracking/biji.png",
    title: "16 Minggu",
    length: "Panjang Fetus: 120 - 160 mm",
  },
  {
    href: "/pemantauan_usia_kandungan",
    image: "/assets/images/tracking/biji.png",
    title: "20 Minggu",
    length: "Panjang Fetus: 250 - 300 mm",
  },
  {
    href: "/pemantauan_usia_kandungan",
    image: "/assets/images/tracking/biji.png",
    title: "24 Minggu",
    length: "Panjang Fetus: 350 - 400 mm",
  },
  {
    href: "/pemantauan_usia_kandungan",
    image: "/assets/images/tracking/biji.png",
    title: "28 Minggu",
    length: "Panjang Fetus: 450 - 500 mm",
  },
  {
    href: "/pemantauan_usia_kandungan",
    image: "/assets/images/tracking/biji.png",
    title: "32 Minggu",
    length: "Panjang Fetus: 500 - 550 mm",
  },
];

const Pemantauan = () => {
  const [dataPemeriksaan, setDataPemeriksaan] = useState({});
  // "pasien_id",
  // "tanggal",
  // "tinggi_badan",
  // "berat_badan",
  // "lingkar_lengan",
  // "keluhan",
  useEffect(() => {
    getPemeriksaanMandiri().then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-16 self-stretch bg-white p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 mt-6">
          <PemantauanIbuHamilCard
            href="/pemantauan_usia_kandungan"
            title="Usia Kandungan"
            value="32"
            unit="Minggu"
          />
          <PemantauanIbuHamilCard
            href="/pemantauan_berat_badan"
            title="Berat Badan"
            value="60"
            unit="kg"
          />
          <PemantauanIbuHamilCard
            href="/pemantauan_lingkar_lengan"
            title="Lingkar Lengan"
            value="23,5"
            unit="cm"
          />
          <PemantauanIbuHamilCard
            href="/pemantauan_tinggi_badan"
            title="Tinggi Badan"
            value="165"
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
              title={data.title}
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
