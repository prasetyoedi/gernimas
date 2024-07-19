import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

const examinationData = [
    { no: 1, date: "2023-07-01", weight: "50 kg", height: "160 cm", armCircumference: "22 cm", notes: "Merasa sehat, tidak ada keluhan" },
    { no: 2, date: "2023-07-08", weight: "51 kg", height: "160 cm", armCircumference: "23 cm", notes: "Sedikit pusing di pagi hari" },
    { no: 3, date: "2023-07-15", weight: "52 kg", height: "160 cm", armCircumference: "23 cm", notes: "Nafsu makan meningkat" },
    { no: 4, date: "2023-07-22", weight: "53 kg", height: "160 cm", armCircumference: "24 cm", notes: "Merasa lelah di sore hari" },
    { no: 5, date: "2023-07-29", weight: "54 kg", height: "160 cm", armCircumference: "24 cm", notes: "Ada sedikit nyeri di punggung bawah" },
    // Add more data if needed
];

const PemeriksaanPribadi = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newData, setNewData] = useState({ weight: '', height: '', armCircumference: '', notes: '' });
    const [data, setData] = useState(examinationData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewData({ ...newData, [name]: value });
    };

    const handleSubmit = () => {
        const newEntry = {
            no: data.length + 1,
            date: new Date().toISOString().split('T')[0],
            weight: newData.weight,
            height: newData.height,
            armCircumference: newData.armCircumference,
            notes: newData.notes
        };
        setData([...data, newEntry]);
        setIsModalOpen(false);
        setNewData({ weight: '', height: '', armCircumference: '', notes: '' });
    };

    const filteredData = data.filter(examination => 
        examination.date.includes(searchTerm) ||
        examination.weight.includes(searchTerm) ||
        examination.height.includes(searchTerm) ||
        examination.armCircumference.includes(searchTerm) ||
        examination.notes.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            {!isModalOpen && <Navbar />}
            <div className="flex flex-wrap items-center gap-1.5 pt-6 pl-4 md:pl-20 bg-white">
                <p className="text-primary text-base font-bold leading-normal text-red-400">Layanan</p>
                <img src="/assets/images/arrow.png" className="w-[20px] h-[20px]" />
                <p className="text-custom-color text-red-400 text-base font-bold leading-normal">Pemeriksaan Pribadi</p>
            </div>
            <div className="flex flex-col p-6 md:p-16 bg-white justify-center items-center">
                <div className="flex flex-col w-full h-auto md:h-[200px] px-4 md:px-[35px] py-4 flex-shrink-0 rounded-[20px] bg-[rgba(255,140,157,0.20)] gap-4">
                    <div className="flex flex-col md:flex-row items-between justify-between md:items-between gap-4">
                        <div className="flex flex-col w-full items-start gap-4">
                            <h1 className="text-red-400 text-2xl md:text-4xl font-bold leading-normal mt-6">Hai Bunda!</h1>
                            <h2 className="text-red-400 text-base md:text-lg font-medium leading-normal">Yuk mulai pemeriksaan mandiri agar kesehatan Bunda dan janin tetap terpantau dengan baik. Pemeriksaan pribadi akan membantu dokter memastikan kesehatan optimal selama kehamilan!</h2>
                        </div>
                        <img src="/assets/images/services/woman.png" className="w-[218px] h-auto md:h-[163px]" />
                    </div>
                </div>
                <div className="flex flex-col w-full mt-8 h-auto md:h-auto p-8 flex-shrink-0 rounded-[20px] bg-[rgba(255,140,157,0.20)] gap-4">
                    <div className='flex w-full h-auto justify-between items-center'>
                        <p className='text-red-400 font-bold text-[22px]'>
                            PEMERIKSAAN PRIBADI
                        </p>
                        <button className='w-[40px]' onClick={() => setIsModalOpen(true)}>
                            <img src='/assets/images/pemeriksaan_pribadi/btn_plus.png'/>
                        </button>
                    </div>
                    <div className='w-full h-[2px] bg-red-400'></div>
                    <div className="flex justify-center items-center mb-4 space-x-4 mt-2 w-full">
                        <input
                            type="text"
                            className="w-full border border-red-400 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pink-200"
                            placeholder="Cari data pemeriksaan mandiri Bunda Bunda!"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg flex items-center">
                            Cari
                            <img src="/assets/images/article/search.svg" alt="Cari" className="w-4 h-4 ml-2" />
                        </button>
                    </div>
                    <div className="rounded-2xl w-full bg-white p-4 shadow">
                        <div className="overflow-y-auto max-h-[400px]">
                            {filteredData.length > 0 ? (
                                <table className="w-full bg-white text-red-400">
                                    <thead>
                                        <tr className="text-left">
                                            <th className="px-4 py-2 border-b border-pink-200 w-[50px]">No</th>
                                            <th className="px-4 py-2 border-b border-pink-200 w-[300px]">Tanggal</th>
                                            <th className="px-4 py-2 border-b border-pink-200 w-[300px]">Berat Badan</th>
                                            <th className="px-4 py-2 border-b border-pink-200 w-[300px]">Tinggi Badan</th>
                                            <th className="px-4 py-2 border-b border-pink-200 w-[300px]">Lingkar Lengan</th>
                                            <th className="px-4 py-2 border-b border-pink-200 w-[300px]">Catatan Harian</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData.map((examination, index) => (
                                            <tr key={index} className="hover:bg-pink-50">
                                                <td className="px-4 py-4 border-b border-pink-200">{examination.no}</td>
                                                <td className="px-4 py-4 border-b border-pink-200">{examination.date}</td>
                                                <td className="px-4 py-4 border-b border-pink-200">{examination.weight}</td>
                                                <td className="px-4 py-4 border-b border-pink-200">{examination.height}</td>
                                                <td className="px-4 py-4 border-b border-pink-200">{examination.armCircumference}</td>
                                                <td className="px-4 py-4 border-b border-pink-200">{examination.notes}</td>
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
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 w-[90%] md:w-[50%]">
                        <h2 className="text-red-400 text-[20px] font-bold mb-4">Tambah Pemeriksaan</h2>
                        <div className='w-full h-[2px] bg-red-400 mb-4'></div>
                        <div className="flex flex-col gap-4">
                            <input
                                type="text"
                                name="weight"
                                value={newData.weight}
                                onChange={handleInputChange}
                                placeholder="Berat Badan"
                                className="border border-red-400 rounded-lg py-2 px-4"
                            />
                            <input
                                type="text"
                                name="height"
                                value={newData.height}
                                onChange={handleInputChange}
                                placeholder="Tinggi Badan"
                                className="border border-red-400 rounded-lg py-2 px-4"
                            />
                            <input
                                type="text"
                                name="armCircumference"
                                value={newData.armCircumference}
                                onChange={handleInputChange}
                                placeholder="Lingkar Lengan"
                                className="border border-red-400 rounded-lg py-2 px-4"
                            />
                            <textarea
                                name="notes"
                                value={newData.notes}
                                onChange={handleInputChange}
                                placeholder="Catatan Harian"
                                rows="4"
                                className="border border-red-400 rounded-lg py-2 px-4"
                            />
                            <button
                                onClick={handleSubmit}
                                className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg"
                            >
                                Tambah
                            </button>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-lg"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default PemeriksaanPribadi;
