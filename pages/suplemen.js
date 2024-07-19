import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SuplemenCard from "@/components/SuplemenCard";
import ModalSuplemen from "@/components/ModalSuplemen";
import { useEffect } from "react";
import { getSuplemens } from "./api/suplemen/get_suplemens";

const suplemenData = [
  {
    src: "/assets/images/suplemen/asam-folat.png",
    alt: "Asam Folat",
    label: "Asam Folat",
    description:
      "American College of Obstrics and Gynecology (ACOG) merekomendasikan ibu untuk mengonsumsi 600-800 mikrogram folat selama kehamilan. Ibu hamil memerlukan asam folat yang cukup untuk mencegah cacat pada sistem saraf bayi (neural tube defect – NTD). NTD mulai berkembang di 28 hari pertama setelah pembuahan. Ibu bisa mendapatkan asupan folat dari makanan, seperti hati, kacang-kacangan, telur, sayuran berdaun hijau tua, serta kacang polong. ",
  },
  {
    src: "/assets/images/suplemen/kalsium.png",
    alt: "Kalsium",
    label: "Kalsium",
    description:
      "Ibu hamil membutuhkan 1000 miligram kalsium yang bisa dibagi dalam dua dosis 500 miligram per hari. Kalsium penting untuk inu hamil karena ibu hamil rentan akan kondisi osteoporosis. Kepadatan tulang ibu hamil banyak berkurang karena janin di dalam kandungan membutuhkannya untuk pertumbuhan tulangnya. Sumber kalsium yang baik bisa ditemukan pada susu, yoghurt, keju, ikan, dan seafood yang rendah merkuri, seperti salmon, udang, serta ikan lele, selain itu terdapat tahu yang mengandung kalsium juga sayuran berdaun hijau tua. Namun, perlu ditambahkan suplementasi kalsium sebanyak 1,5-2 gram untuk mencegah preeklampsia semasa kehamilan. ",
  },
  {
    src: "/assets/images/suplemen/protein.png",
    alt: "Protein",
    label: "Protein",
    description:
      "Ibu hamil membutuhkan 1000 miligram kalsium yang bisa dibagi dalam dua dosis 500 miligram per hari. Kalsium penting untuk inu hamil karena ibu hamil rentan akan kondisi osteoporosis. Kepadatan tulang ibu hamil banyak berkurang karena janin di dalam kandungan membutuhkannya untuk pertumbuhan tulangnya. Sumber kalsium yang baik bisa ditemukan pada susu, yoghurt, keju, ikan, dan seafood yang rendah merkuri, seperti salmon, udang, serta ikan lele, selain itu terdapat tahu yang mengandung kalsium juga sayuran berdaun hijau tua. Namun, perlu ditambahkan suplementasi kalsium sebanyak 1,5-2 gram untuk mencegah preeklampsia semasa kehamilan. ",
  },
  {
    src: "/assets/images/suplemen/ttd.png",
    alt: "TTD",
    label: "TTD",
    description:
      "Tableh tambah darah dinilai wajib karena untuk membentuk plasenta yang kuat, melancarkan sirkulasi oksigen dalam tubuh, dan menjaga kebugaran tubuh Bunda serta janin. Tablet tambah darah (TTD) harus diminum minimal 90 TABLET selama kehamilan.",
  },
  {
    src: "/assets/images/suplemen/vitamin.png",
    alt: "Vitamin",
    label: "Vitamin",
    description:
      "Vitamin D Ibu hamil membutuhkan asupan vitamin D sebanyak 600 unit internasional (IU) per hari. Tujuannya untuk membantu menunjang kesehatan tulang dan gigi, serta mendukung pertumbuhan tulang janin. Jika kekurangan asupannya, tulang janin tidak dapat tumbuh secara maksimal. Nutrisi ini bisa ibu dapatkan dari salmon dan sarden, telur, serta daging. Selain itu, ibu juga bisa berjemur di bawah sinar matahari.",
  },
  {
    src: "/assets/images/suplemen/zat-besi.png",
    alt: "Zat Besi",
    label: "Zat Besi",
    description:
      "Ibu hamil membutuhkan 27 miligram zar besi sehari. Nutrisi ini berperan untuk mengalirkan oksigen ke seluruh tubuh lewat aliran darah. Selain itu, zat besi juga berperan dalam pembentukan sel darah merah. Jika kekurangan asupannya, ibu hamil lebih rentan terkena anemia. Dampak lainnya, yaitu peningkatan risiko terkena anemia saat lahir, kelahiran prematur, dan bayi lahir dengan berat badan rendah. Cara untuk memenuhi kebutuhan nutrisi tersebut adalah dengan mengonsumsi makanan, seperti daging merah tanpa lemak, unggas, dan ikan. Pilihan makanan lain yang mengandung zat besi, yaitu sereal yang diperkaya zat besi, kacang-kacangan, dan sayuran. ",
  },
  {
    src: "/assets/images/suplemen/zinc.png",
    alt: "Zinc",
    label: "Zinc",
    description:
      "Penelitian Zinc supplementation for improving pregnancy and infant outcome, yang dipublikasikan dalam About the Cochrane Database of Systematic Reviews menemukan, mengonsumsi seng selama kehamilan menurunkan risiko kelahiran prematur. Jadi, pastikan untuk memberikan suplemen atau makanan yang mengandung zinc sebelum kehamilan menginjak usia 27 minggu. Namun, jenis vitamin ibu hamil ini tidak mampu mencegah masalah lain, seperti bayi dengan berat lahir rendah.",
  },
  {
    src: "/assets/images/suplemen/dha.png",
    alt: "DHA",
    label: "DHA",
    description:
      "DHA atau docosahexaenoic acid termasuk salah satu asam lemak omega-3. DHA mudah didapatkan secara alami dari ikan. Namun, pada ibu hamil yang kekurangan, dokter bisa memberikan suplemen tambahan. DHA sangat baik untuk perkembangan otak bayi baik sebelum maupun setelah lahir. ",
  },
];

const Suplemen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [suplemens, setSuplemens] = useState([]);

  useEffect(() => {
    getSuplemens().then((res) => {
      const data = res.data;
      console.log(data);
      if (data) {
        setSuplemens(res.data);
      }
    });
  }, []);

  const handleCardClick = (item) => {
    setModalContent(item);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      {!isModalVisible && <Navbar />}
      <div className="flex items-center gap-1.5 pt-6 pl-4 md:pl-20 bg-white">
        <p className="text-primary text-base font-bold leading-normal text-red-400">
          Layanan
        </p>
        <img src="/assets/images/arrow.png" className="w-[20px] h-[20px]" />
        <p className="text-custom-color text-red-400 text-base font-bold leading-normal">
          Suplemen
        </p>
      </div>
      <div className="flex flex-col p-6 md:p-16 bg-white justify-center items-center">
        <div className="flex flex-col w-full h-auto md:h-[200px] px-4 md:px-[35px] py-4 flex-shrink-0 rounded-[20px] bg-[rgba(255,140,157,0.20)] gap-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-[296px]">
            <div className="flex flex-col w-full md:w-[720px] items-start gap-4">
              <h1 className="text-red-400 text-2xl md:text-4xl font-bold leading-normal mt-6">
                Hai Bunda!
              </h1>
              <h2 className="text-red-400 text-base md:text-lg font-medium leading-normal">
                Selama kehamilan jangan lupa mengonsumsi suplemen untuk
                mendukung kesehatan Anda dan perkembangan janin, ya!
              </h2>
            </div>
            <img
              src="/assets/images/services/woman.png"
              className="w-[218px] h-auto md:h-[163px]"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mt-8 p-8 bg-[rgba(255,140,157,0.20)] rounded-[20px] shadow-md backdrop-blur-[20px]">
          {suplemenData.map((item, index) => (
            <SuplemenCard
              key={index}
              src={item.src}
              alt={item.alt}
              label={item.label}
              onClick={() => handleCardClick(item)}
            />
          ))}
        </div>
      </div>
      <ModalSuplemen
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        content={modalContent}
      />
      {!isModalVisible && <Footer />}
    </div>
  );
};

export default Suplemen;
