import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Chart from "chart.js/auto";
import { getPemeriksaanMandiri } from "./api/pemeriksaan/get_pemeriksaan_mandiri";
import { extractNumberFromArray } from "@/utils/extract_number";

const PemantauanBeratBadan = () => {
  const now = new Date();
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dataPemeriksaan, setDataPemeriksaan] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Augustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const [selectedMonth, setSelectedMonth] = useState(
    monthNames[now.getMonth()] + " " + now.getFullYear()
  );

  useEffect(() => {
    getPemeriksaanMandiri().then((res) => {
      const data = res.data;
      if (data) {
        setDataPemeriksaan(data);
      }
    });
  }, []);

  useEffect(() => {
    setFilteredData(
      filterDataByMonth(dataPemeriksaan, selectedMonth.split(" ")[0])
    );
  }, [dataPemeriksaan, selectedMonth]);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: filteredData.map((data) => {
          const date = new Date(data.created_at);
          const result = `${date.getDate()} ${monthNames[date.getMonth()]}`;
          return result;
        }),
        datasets: [
          {
            label: selectedMonth,
            data: extractNumberFromArray(
              filteredData.map((data) => data.berat_badan)
            ),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [filteredData]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    setFilteredData(filterDataByMonth(dataPemeriksaan, month.split(" ")[0]));
    setDropdownOpen(false);
  };

  const filterDataByMonth = (data, month) => {
    return data
      .filter((item) => {
        const date = new Date(item.created_at);
        return monthNames[date.getMonth()] === month;
      })
      .slice(Math.max(data.length - 5, 0));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center gap-8 bg-white p-4">
        <div className="w-full max-w-[1281px] rounded-[20px] bg-[rgba(255,140,157,0.20)] p-5">
          <p className="text-[#E5677A] text-[22px] font-bold">
            Yuk Ketahui Setiap Perkembangan Berat Badan Bunda Tiap Minggu-nya!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1281px] gap-8">
          <div className="w-full lg:w-[384px] h-auto">
            <img
              src="/assets/images/tracking/tracking_bb.png"
              alt="Descriptive Alt Text"
              className="w-full h-auto object-cover rounded-[20px]"
            />
          </div>
          <div className="w-full lg:w-[864px] rounded-[20px] bg-[rgba(255,140,157,0.20)] p-8">
            <div className="flex justify-between items-start mb-4">
              <p className="text-[#E5677A] text-[20px] font-bold">
                PEMANTAUAN BERAT BADAN
              </p>
              <div className="relative">
                <div
                  className="flex items-center gap-[12px]"
                  onClick={toggleDropdown}
                >
                  <div className="text-[#E5677A] text-right text-[14px] font-medium cursor-pointer">
                    {selectedMonth}
                  </div>
                  <img
                    src="/assets/images/dropdown_icon.svg"
                    alt="Dropdown icon"
                    className="w-[26px] h-[26px] cursor-pointer"
                  />
                </div>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#E5677A] border border-gray-300 rounded-lg shadow-lg z-10">
                    <ul className="py-1 text-[12px]">
                      {[
                        "Januari 2024",
                        "Februari 2024",
                        "Maret 2024",
                        "April 2024",
                        "Mei 2024",
                        "Juni 2024",
                        "Juli 2024",
                        "Agustus 2024",
                        "September 2024",
                        "Oktober 2024",
                        "November 2024",
                        "Desember 2024",
                      ].map((month) => (
                        <li
                          key={month}
                          className="px-4 py-2 bg-[#E5677A] text-white hover:bg-[#d05463] cursor-pointer"
                          onClick={() => handleMonthChange(month)}
                        >
                          {month}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="relative w-full h-[400px]">
              <canvas ref={chartRef} id="myChart"></canvas>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1281px] rounded-[20px] bg-[rgba(255,140,157,0.20)] p-5">
          <p className="text-[#E5677A] text-[22px] font-bold">
            Yuk Ketahui Standar Pertambahan Berat Badan Bunda Selama Kehamilan!
          </p>
        </div>
        <div className="w-full max-w-[1281px] rounded-[20px] bg-white p-5 overflow-x-auto">
          <table className="rounded-[20px] overflow-hidden min-w-full bg-white shadow-lg ">
            <thead>
              <tr className="bg-[#FFE3E7]">
                <th className="py-4 px-6 text-left">IMT Prahamil (Kg/m²)</th>
                <th className="py-4 px-6 text-left">
                  Total Pertambahan Berat Badan (Kg)
                </th>
                <th className="py-4 px-6 text-left">
                  Rerata Pertambahan BB Hamil Trimester II dan III (Kg/minggu)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4 px-6 border-t">Underweight (&lt;18,5)</td>
                <td className="py-4 px-6 border-t">12,5 - 18</td>
                <td className="py-4 px-6 border-t">0,51 (0,44 - 0,58)</td>
              </tr>
              <tr className="bg-[#FFF5F7]">
                <td className="py-4 px-6 border-t">Normal (18,5 - 24,9)</td>
                <td className="py-4 px-6 border-t">11,5 - 16</td>
                <td className="py-4 px-6 border-t">0,42 (0,35 - 0,50)</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-t">Overweight (25 - 29,9)</td>
                <td className="py-4 px-6 border-t">7 - 11,5</td>
                <td className="py-4 px-6 border-t">0,28 (0,23 - 0,33)</td>
              </tr>
              <tr className="bg-[#FFF5F7]">
                <td className="py-4 px-6 border-t">Obes (&gt;30)</td>
                <td className="py-4 px-6 border-t">5 - 9</td>
                <td className="py-4 px-6 border-t">0,22 (0,17 - 0,27)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full max-w-[1281px] rounded-[20px] bg-[rgba(255,140,157,0.20)] p-5">
          <p className="text-[#E5677A] text-[22px] font-bold">
            Tahukah, Bunda? Berikut Merupakan Informasi Mengenai Berat Badan
            Bunda!
          </p>
        </div>
        <div className="w-full max-w-[1281px] bg-white mb-10">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-60">
            <div className="flex flex-col items-center gap-8 md:gap-10">
              <div className="w-full md:w-104 h-auto p-10 border border-gray-300 rounded-lg bg-opacity-10 bg-red-200 shadow-md flex justify-center items-center mb-4 md:mb-0">
                <p className="text-center text-lg font-semibold text-red-500">
                  Peningkatan berat badan selama kehamilan tergantung dari berat
                  badan sebelum hamil. Perhitungan BMI menggunakan ukuran berat
                  badan dan tinggi badan untuk memperkirakan jumlah total lemak
                  dalam tubuh.
                </p>
              </div>
              <div className="w-full md:w-104 h-auto p-10 border border-gray-300 rounded-lg bg-opacity-10 bg-red-200 shadow-md flex justify-center items-center">
                <p className="text-center text-lg font-semibold text-red-500">
                  Peningkatan berat badan selama kehamilan tergantung dari berat
                  badan sebelum hamil. Perhitungan BMI menggunakan ukuran berat
                  badan dan tinggi badan untuk memperkirakan jumlah total lemak
                  dalam tubuh.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-96 mt-4 md:mt-0">
              <img
                src="/assets/images/tracking/doctor.png"
                alt="Descriptive Alt Text"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PemantauanBeratBadan;
