import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getPemeriksaanMandiri } from "./api/pemeriksaan/get_pemeriksaan_mandiri";
import { createPemeriksaanMandiri } from "./api/pemeriksaan/post_pemeriksaan_mandiri";

const PemeriksaanPribadi = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newData, setNewData] = useState({
    weight: "",
    height: "",
    armCircumference: "",
    notes: "",
  });
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getPemeriksaanMandiri().then((res) => {
      const data = res.data;
      if (data) {
        setDatas(data);
      }
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const handleSubmit = () => {
    setDatas([
      ...datas,
      {
        tinggi_badan: newData.height,
        berat_badan: newData.weight,
        lingkar_lengan_atas: newData.armCircumference,
        keluhan: newData.notes,
        tanggal: new Date().toISOString().split("T")[0],
      },
    ]);
    setIsModalOpen(false);
    const payload = {
      tinggi_badan: newData.height,
      berat_badan: newData.weight,
      lingkar_lengan: newData.armCircumference,
      keluhan: newData.notes,
    };
    createPemeriksaanMandiri(payload);
    setNewData({ weight: "", height: "", armCircumference: "", notes: "" });
  };

  const filteredData = datas.filter((examination) => {
    const searchLower = searchTerm.toLocaleLowerCase();
    return (
      examination?.tanggal?.toLowerCase().includes(searchLower) ||
      examination?.berat_badan?.toLowerCase().includes(searchLower) ||
      examination?.tinggi_badan?.toLowerCase().includes(searchLower) ||
      examination?.lingkar_lengan_atas?.toLowerCase().includes(searchLower) ||
      examination?.keluhan?.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div>
      {!isModalOpen && <Navbar />}
      <div className="flex flex-wrap items-center gap-1.5 pt-6 pl-4 md:pl-20 bg-white">
        <p className="text-primary text-base font-bold leading-normal text-red-400">
          Layanan
        </p>
        <img src="/assets/images/arrow.png" className="w-[20px] h-[20px]" />
        <p className="text-custom-color text-red-400 text-base font-bold leading-normal">
          Pemeriksaan Pribadi
        </p>
      </div>
      <div className="flex flex-col p-6 md:p-16 bg-white justify-center items-center">
        <div className="flex flex-col w-full h-auto md:h-[200px] px-4 md:px-[35px] py-4 flex-shrink-0 rounded-[20px] bg-[rgba(255,140,157,0.20)] gap-4">
          <div className="flex flex-col md:flex-row items-between justify-between md:items-between gap-4">
            <div className="flex flex-col w-full items-start gap-4">
              <h1 className="text-red-400 text-2xl md:text-4xl font-bold leading-normal mt-6">
                Hai Bunda!
              </h1>
              <h2 className="text-red-400 text-base md:text-lg font-medium leading-normal">
                Yuk mulai pemeriksaan mandiri agar kesehatan Bunda dan janin
                tetap terpantau dengan baik. Pemeriksaan pribadi akan membantu
                dokter memastikan kesehatan optimal selama kehamilan!
              </h2>
            </div>
            <img
              src="/assets/images/services/woman.png"
              className="w-[218px] h-auto md:h-[163px]"
            />
          </div>
        </div>
        <div className="flex flex-col w-full mt-8 h-auto md:h-auto p-8 flex-shrink-0 rounded-[20px] bg-[rgba(255,140,157,0.20)] gap-4">
          <div className="flex w-full h-auto justify-between items-center">
            <p className="text-red-400 font-bold text-[22px]">
              PEMERIKSAAN PRIBADI
            </p>
            <button className="w-[40px]" onClick={() => setIsModalOpen(true)}>
              <img src="/assets/images/pemeriksaan_pribadi/btn_plus.png" />
            </button>
          </div>
          <div className="w-full h-[2px] bg-red-400"></div>
          <div className="flex justify-center items-center mb-4 space-x-4 mt-2 w-full">
            <input
              type="text"
              className="w-full border border-red-400 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pink-200"
              placeholder="Cari data pemeriksaan mandiri Bunda!"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg flex items-center">
              Cari
              <img
                src="/assets/images/article/search.svg"
                alt="Cari"
                className="w-4 h-4 ml-2"
              />
            </button>
          </div>
          <div className="rounded-2xl w-full bg-white p-4 shadow overflow-auto max-h-[400px]">
            {filteredData.length > 0 ? (
              <table className="w-full bg-white text-red-400">
                <thead>
                  <tr className="text-left">
                    <th className="px-4 py-2 border-b border-pink-200 w-[50px]">
                      No
                    </th>
                    <th className="px-4 py-2 border-b border-pink-200 w-[300px]">
                      Tanggal
                    </th>
                    <th className="px-4 py-2 border-b border-pink-200 w-[300px]">
                      Berat Badan
                    </th>
                    <th className="px-4 py-2 border-b border-pink-200 w-[300px]">
                      Tinggi Badan
                    </th>
                    <th className="px-4 py-2 border-b border-pink-200 w-[300px]">
                      Lingkar Lengan
                    </th>
                    <th className="px-4 py-2 border-b border-pink-200 w-[300px]">
                      Catatan Harian
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((examination, index) => (
                    <tr key={index} className="hover:bg-pink-50">
                      <td className="px-4 py-4 border-b border-pink-200">
                        {index + 1}
                      </td>
                      <td className="px-4 py-4 border-b border-pink-200">
                        {examination?.tanggal ?? ""}
                      </td>
                      <td className="px-4 py-4 border-b border-pink-200">
                        {examination?.berat_badan ?? ""}
                      </td>
                      <td className="px-4 py-4 border-b border-pink-200">
                        {examination?.tinggi_badan ?? ""}
                      </td>
                      <td className="px-4 py-4 border-b border-pink-200">
                        {examination?.lingkar_lengan_atas ?? ""}
                      </td>
                      <td className="px-4 py-4 border-b border-pink-200">
                        {examination?.keluhan ?? ""}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="bg-red-200 text-red-400 p-4 rounded-lg">
                Tidak ada hasil ditemukan
              </div>
            )}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-[90%] md:w-[50%]">
            <h2 className="text-red-400 text-[20px] font-bold mb-4">
              Tambah Pemeriksaan
            </h2>
            <div className="w-full h-[2px] bg-red-400 mb-4"></div>
            <div className="mb-4">
              <label className="block text-red-400 font-bold mb-2">
                Berat Badan (kg)
              </label>
              <input
                type="number"
                name="weight"
                value={newData.weight}
                onChange={handleInputChange}
                className="w-full border border-red-400 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-red-400 font-bold mb-2">
                Tinggi Badan (cm)
              </label>
              <input
                type="number"
                name="height"
                value={newData.height}
                onChange={handleInputChange}
                className="w-full border border-red-400 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-red-400 font-bold mb-2">
                Lingkar Lengan (cm)
              </label>
              <input
                type="number"
                name="armCircumference"
                value={newData.armCircumference}
                onChange={handleInputChange}
                className="w-full border border-red-400 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-red-400 font-bold mb-2">
                Catatan Harian
              </label>
              <textarea
                name="notes"
                value={newData.notes}
                onChange={handleInputChange}
                className="w-full border border-red-400 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pink-200"
                rows="4"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg mr-2"
              >
                Batal
              </button>
              <button
                onClick={handleSubmit}
                className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
      {!isModalOpen && <Footer />}
    </div>
  );
};

export default PemeriksaanPribadi;
