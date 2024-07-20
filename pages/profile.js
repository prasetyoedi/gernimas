import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { getProfile } from "./api/profile/get_profile";
import { updateProfile } from "./api/profile/upate_profile";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    // nama_lengkap: "Aisa Selvira",
    // nama_pendek: "Aisa",
    // email: "aisa@gmail.com",
    // jenis_kelamin: "P",
    // tempat_lahir: "Yogyakarta",
    // tanggal_lahir: "20 Januari 2003",
    // alamat_rumah: "Sleman, DIY",
    // no_hp: "085963369857",
    // pendidikan: "Mahasiswa",
  });

  useEffect(() => {
    getProfile().then((res) => {
      if (res.data != null) {
        setFormData(res.data);
      } else {
      }
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    updateProfile(formData);
  };

  const keys = [
    "nama_lengkap",
    "nama_panggilan",
    "email",
    "tempat_lahir",
    "tanggal_lahir",
    "alamat",
    "no_hp",
    "pendidikan",
  ];

  const leftInputs = [
    "nama_lengkap",
    "nama_panggilan",
    "email",
    "tempat_lahir",
  ];

  const rightInputs = ["tanggal_lahir", "alamat", "no_hp", "pendidikan"];

  return (
    <div>
      <Navbar />
      <div className="flex flex-col p-6 md:p-20 bg-white">
        <div className="flex justify-end mb-4">
          <img
            src="/assets/images/profile/icon-edit.png"
            className="w-[40px] cursor-pointer"
            alt="edit icon"
            onClick={toggleModal}
          />
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-16 m-4">
          <div className="flex flex-col items-center w-full lg:w-[269px] mb-6 lg:mb-0">
            <img
              src="/assets/images/profile/foto-profile.png"
              className="w-[200px] h-auto rounded-full"
              alt="profile"
            />
            <p className="text-red-400 font-bold text-[24px]">Hai, Bunda!</p>
          </div>
          <div className="border-b-4 lg:border-b-0 lg:border-l-4 border-red-400 w-full lg:h-[740px] lg:w-[4px] mb-6 lg:mb-0"></div>
          <div className="flex flex-col w-full">
            <div className="border border-red-400 p-8 rounded-xl">
              <form className="space-y-4">
                {Object.keys(formData)
                  .filter((data) => keys.includes(data))
                  .map((key) => (
                    <div key={key}>
                      <label className="block text-[18px] font-medium text-red-400 capitalize">
                        {key
                          .replace(/_/g, " ")
                          .replace(/([A-Z])/g, " $1")
                          .replace(/\s+/g, " ")}
                      </label>
                      {key === "jenis_kelamin" ? (
                        <input
                          type="text"
                          value={
                            formData[key] === "P" ? "Perempuan" : "Laki-laki"
                          }
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                          readOnly
                        />
                      ) : (
                        <input
                          type="text"
                          value={formData[key]}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                          readOnly
                        />
                      )}
                    </div>
                  ))}
              </form>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 mt-20">
          <div className="bg-white p-6 rounded-xl max-w-md w-full mx-8">
            <form className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {leftInputs.map((key) => (
                  <div key={key}>
                    <label className="block text-[18px] font-medium text-red-400 capitalize">
                      {key
                        .replace(/_/g, " ")
                        .replace(/([A-Z])/g, " $1")
                        .replace(/\s+/g, " ")}
                    </label>
                    <input
                      type="text"
                      name={key}
                      value={formData[key]}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-[18px] font-medium text-red-400 capitalize">
                    Jenis Kelamin
                  </label>
                  <select
                    name="jenis_kelamin"
                    value={formData.jenis_kelamin}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                  >
                    <option value="P">Perempuan</option>
                    <option value="L">Laki-laki</option>
                  </select>
                </div>
              </div>
              <div className="space-y-4">
                {rightInputs.map((key) => (
                  <div key={key}>
                    <label className="block text-[18px] font-medium text-red-400 capitalize">
                      {key
                        .replace(/_/g, " ")
                        .replace(/([A-Z])/g, " $1")
                        .replace(/\s+/g, " ")}
                    </label>
                    <input
                      type="text"
                      name={key}
                      value={formData[key]}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                    />
                  </div>
                ))}
              </div>
            </form>
            <div className="flex justify-end mt-4">
              <button
                className="bg-red-400 text-white px-4 py-2 rounded-xl"
                onClick={toggleModal}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Profile;
