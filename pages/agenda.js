import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Agenda = () => {
    return (
        <div>
            <Navbar />
            <div className="flex items-center gap-1.5 pt-6 pl-4 md:pl-20 bg-white">
                <p className="text-primary text-base font-bold leading-normal text-red-400">Layanan</p>
                <img src="/assets/images/arrow.png" className="w-[20px] h-[20px]" />
                <p className="text-custom-color text-red-400 text-base font-bold leading-normal">Agenda</p>
            </div>
            <div className="flex flex-col p-6 md:p-20 bg-white justify-center items-center">
                <div className="flex flex-col w-full h-auto md:h-[200px] px-4 md:px-[35px] py-4 flex-shrink-0 rounded-[20px] bg-[rgba(255,140,157,0.20)] gap-4">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-[296px]">
                        <div className="flex flex-col w-full md:w-[720px] items-start gap-4">
                            <h1 className="text-red-400 text-2xl md:text-4xl font-bold leading-normal mt-6">Hai Bunda!</h1>
                            <h2 className="text-red-400 text-base md:text-lg font-medium leading-normal">Jangan lupa cek jadwal pemeriksaan rutin dan catat hasilnya agar tetap terpantau, ya!</h2>
                        </div>
                        <img src="/assets/images/services/woman.png" className="w-[218px] h-auto md:h-[163px]" />
                    </div>
                </div>

                <div className="flex flex-col w-full items-center gap-[10px] h-auto self-stretch rounded-[20px] bg-[rgba(255,140,157,0.20)] shadow-md backdrop-blur-[20px] mt-8 p-6">
                    <div className="w-full max-w-6xl bg-white p-4 rounded-lg shadow">
                        <div className="overflow-y-auto max-h-[400px]">
                            <table className="min-w-full bg-white border border-pink-200">
                                <thead>
                                    <tr className="text-left">
                                        <th className="px-4 py-2 border-b border-pink-200">No</th>
                                        <th className="px-4 py-2 border-b border-pink-200">Tanggal</th>
                                        <th className="px-4 py-2 border-b border-pink-200">Nama Acara</th>
                                        <th className="px-4 py-2 border-b border-pink-200">Pukul</th>
                                        <th className="px-4 py-2 border-b border-pink-200">Tempat</th>
                                        <th className="px-4 py-2 border-b border-pink-200">Alamat</th>
                                        <th className="px-4 py-2 border-b border-pink-200">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { no: 1, date: '03/01/2024', name: 'Pemeriksaan Rutin Minggu 1', time: '10:00 AM', place: 'RSA UGM', address: 'Jl. Kabupaten, Kranggan I, Trihanggo, Kec. Gamping, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55291', status: 'Done' },
                                        { no: 2, date: '10/01/2024', name: 'Pemeriksaan Rutin Minggu 2', time: '10:00 AM', place: 'RSA UGM', address: 'Jl. Kabupaten, Kranggan I, Trihanggo, Kec. Gamping, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55291', status: 'To Do' },
                                        { no: 3, date: '17/01/2024', name: 'Pemeriksaan Rutin Minggu 3', time: '10:00 AM', place: 'RSA UGM', address: 'Jl. Kabupaten, Kranggan I, Trihanggo, Kec. Gamping, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55291', status: 'To Do' },
                                        { no: 4, date: '24/01/2024', name: 'Pemeriksaan Rutin Minggu 4', time: '13:00 PM', place: 'RSA UGM', address: 'Jl. Kabupaten, Kranggan I, Trihanggo, Kec. Gamping, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55291', status: 'To Do' },
                                        { no: 5, date: '24/01/2024', name: 'Pemeriksaan Rutin Minggu 4', time: '13:00 PM', place: 'RSA UGM', address: 'Jl. Kabupaten, Kranggan I, Trihanggo, Kec. Gamping, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55291', status: 'To Do' },
                                    ].map((item) => (
                                        <tr key={item.no} className="hover:bg-pink-50">
                                            <td className="px-4 py-2 border-b border-pink-200">{item.no}</td>
                                            <td className="px-4 py-2 border-b border-pink-200">{item.date}</td>
                                            <td className="px-4 py-2 border-b border-pink-200">{item.name}</td>
                                            <td className="px-4 py-2 border-b border-pink-200">{item.time}</td>
                                            <td className="px-4 py-2 border-b border-pink-200">{item.place}</td>
                                            <td className="px-4 py-2 border-b border-pink-200">{item.address}</td>
                                            <td className="px-4 py-2 border-b border-pink-200">
                                                <span className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${
                                                    item.status === 'Done' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                                }`}>
                                                    {item.status}
                                                </span>
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

export default Agenda;
