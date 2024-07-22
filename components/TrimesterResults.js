import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getPemeriksaan } from "@/pages/api/pemeriksaan/get_pemeriksaan";

const TrimesterResults = () => {
  const [results, setResults] = useState([]);
  const [selectedTrimester, setSelectedTrimester] = useState("Trimester 1");

  useEffect(() => {
    getPemeriksaan().then((res) => {
      const data = res.data;
      if (data) {
        setResults(data);
      }
    });
  }, []);

  return (
    <div className="container mx-auto p-3 md:ps-16 md:pe-16 md:pb-16 bg-white">
      <div className="rounded-[20px] bg-[rgba(255,140,157,0.20)] p-4 md:p-8">
        <div className="flex mb-4">
          <nav className="flex space-x-4">
            <button
              className={`font-semibold ${
                selectedTrimester === "Trimester 1"
                  ? "text-red-500"
                  : "text-gray-400"
              }`}
              onClick={() => setSelectedTrimester("Trimester 1")}
            >
              TRIMESTER 1
            </button>
            <button
              className={`font-semibold ${
                selectedTrimester === "Trimester 2"
                  ? "text-red-500"
                  : "text-gray-400"
              }`}
              onClick={() => setSelectedTrimester("Trimester 2")}
            >
              TRIMESTER 2
            </button>
            <button
              className={`font-semibold ${
                selectedTrimester === "Trimester 3"
                  ? "text-red-500"
                  : "text-gray-400"
              }`}
              onClick={() => setSelectedTrimester("Trimester 3")}
            >
              TRIMESTER 3
            </button>
          </nav>
        </div>
        <div class="w-full  border-2 border-red-400 mb-8"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {results[selectedTrimester]?.map((result, index) => (
            <Link key={index} href={`/detail_riwayat_periksa?id=${result.id}`}>
              <div
                key={index}
                className="bg-pink-50 border border-gray-200 shadow-lg rounded-[20px] overflow-hidden m-5 cursor-pointer hover:scale-110 hover:shadow-lg transition-transform duration-1000 p-4"
              >
                <div className="flex justify-center items-center h-32 bg-white border-b-2 border-pink-500 mb-4">
                  <div className="text-pink-500 text-3xl">📋</div>
                </div>
                <div className="text-center text-red-400 font-semibold">
                  Hasil Pemeriksaan {result.tanggal_pemeriksaan}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrimesterResults;
