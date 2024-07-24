import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { getAsupans } from "./api/asupan/get_asupans";
import { useRouter } from "next/router";

// const foodData = [
//   {
//     no: 1,
//     item: "Nasi atau Makanan Pokok",
//     trimester1: "5 Porsi",
//     description: "1 Porsi = 100 gr atau 3/4 gelas nasi",
//   },
//   {
//     no: 2,
//     item: "Protein Hewani seperti: Ikan, telur, ayam, dan lainnya",
//     trimester1: "4 Porsi",
//     description:
//       "1 Porsi = 50 gr atau 1 potong sedang ikan, 1 Porsi = 55 gr atau 1 butir telur ayam",
//   },
//   {
//     no: 3,
//     item: "Protein Nabati seperti: tempe, tahu, dan lainnya",
//     trimester1: "4 Porsi",
//     description:
//       "1 Porsi = 50 gr atau 1 potong sedang tempe, 1 Porsi = 100 gr atau 2 potong sedang tahu",
//   },
//   {
//     no: 4,
//     item: "Sayur-sayuran",
//     trimester1: "4 Porsi",
//     description: "1 Porsi = 100 gr atau 1 mangkuk sayur matang tanpa kuah",
//   },
//   {
//     no: 5,
//     item: "Buah-buahan",
//     trimester1: "4 Porsi",
//     description:
//       "1 Porsi = 100 gr atau 1 potong sedang pisang, 1 Porsi = 100-190 gr atau 1 potong besar pepaya",
//   },
//   {
//     no: 6,
//     item: "Minyak / Lemak",
//     trimester1:
//       "5 Porsi Minyak atau lemak termasuk santan yang digunakan dalam pengolahan, makanan digoreng, ditumis atau dimasak dengan santan",
//     description:
//       "1 Porsi = 5 gr atau 1 sendok teh, bersumber dari pengolahan makanan seperti menggoreng, menumis, santan, kemiri, mentega dan sumber lemak lainnya",
//   },
//   {
//     no: 7,
//     item: "Gula",
//     trimester1: "2 Porsi",
//     description:
//       "1 Porsi = 10 gr atau 1 sendok makan bersumber dari kue-kue manis, minum teh manis dan lain-lainnya",
//   },
// ];

const DetailAsupanGizi = () => {
  const [asupans, setAsupans] = useState([]);
  const router = useRouter();
  useEffect(() => {
    getAsupans().then((res) => {
      const data = res;
      if (data) {
        setAsupans(
          data.filter((data) => data.trimester == router.query.trimester)
        );
        console.log(data);
      }
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="flex items-center gap-1.5 pt-6 pl-4 md:pl-20 bg-white">
        <p className="text-primary text-base font-bold leading-normal text-red-400">
          Layanan
        </p>
        <img src="/assets/images/arrow.png" className="w-[20px] h-[20px]" />
        <p className="text-custom-color text-red-400 text-base font-bold leading-normal">
          Asupan Gizi
        </p>
        <img src="/assets/images/arrow.png" className="w-[20px] h-[20px]" />
        <p className="text-custom-color text-red-400 text-base font-bold leading-normal">
          Trimester {router.query.trimester}
        </p>
      </div>
      <div className="flex flex-col p-6 md:p-16 bg-white justify-center items-center">
        <div className="flex flex-col w-full h-auto md:h-auto p-8 flex-shrink-0 rounded-[20px] bg-[rgba(255,140,157,0.20)] gap-4">
          <div className="rounded-2xl w-full bg-white p-4 shadow-md overflow-x-auto">
            <div className="table-responsive">
              <table className="w-full bg-white text-red-400">
                <thead>
                  <tr className="text-left">
                    <th className="px-4 py-2 border-b border-pink-200 md:w-[50px]">
                      No
                    </th>
                    <th className="px-4 py-2 border-b border-pink-200 md:w-[300px]">
                      Bahan Makanan
                    </th>
                    <th className="px-4 py-2 border-b border-pink-200 md:w-[150px]">
                      Porsi
                    </th>
                    <th className="px-4 py-2 border-b border-pink-200 md:w-[300px]">
                      Keterangan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {asupans?.map((food, index) => (
                    <tr key={index} className="hover:bg-pink-50">
                      <td className="px-4 py-4 border-b border-pink-200 md:px-2 md:py-2">
                        {index + 1}
                      </td>
                      <td className="px-4 py-4 border-b border-pink-200 md:px-2 md:py-2">
                        {food.bahan_makanan}
                      </td>
                      <td className="px-4 py-4 border-b border-pink-200 md:px-2 md:py-2 whitespace-pre-line">
                        {food.porsi}
                      </td>
                      <td className="px-4 py-4 border-b border-pink-200 md:px-2 md:py-2">
                        {food.keterangan}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailAsupanGizi;
