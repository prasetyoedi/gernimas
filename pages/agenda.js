import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Agenda = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentDate, setCurrentDate] = useState(new Date());

    const agendaData = [
        { no: 1, date: '03/01/2024', name: 'Pemeriksaan Rutin Minggu 1', time: '10:00 AM', place: 'RSA UGM', address: 'Jl. Kabupaten, Kranggan I, Trihanggo, Kec. Gamping, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55291', status: 'Done' },
        { no: 2, date: '10/01/2024', name: 'Pemeriksaan Rutin Minggu 2', time: '10:00 AM', place: 'RSA UGM', address: 'Jl. Kabupaten, Kranggan I, Trihanggo, Kec. Gamping, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55291', status: 'To Do' },
        { no: 3, date: '17/01/2024', name: 'Pemeriksaan Rutin Minggu 3', time: '10:00 AM', place: 'RSA UGM', address: 'Jl. Kabupaten, Kranggan I, Trihanggo, Kec. Gamping, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55291', status: 'To Do' },
        { no: 4, date: '24/01/2024', name: 'Pemeriksaan Rutin Minggu 4', time: '13:00 PM', place: 'RSA UGM', address: 'Jl. Kabupaten, Kranggan I, Trihanggo, Kec. Gamping, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55291', status: 'To Do' },
        { no: 5, date: '24/01/2024', name: 'Pemeriksaan Rutin Minggu 1', time: '13:00 PM', place: 'RSA UGM', address: 'Jl. Kabupaten, Kranggan I, Trihanggo, Kec. Gamping, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55291', status: 'To Do' },
        { no: 6, date: '24/01/2024', name: 'Pemeriksaan Rutin Minggu 2', time: '13:00 PM', place: 'RSA UGM', address: 'Jl. Kabupaten, Kranggan I, Trihanggo, Kec. Gamping, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55291', status: 'To Do' },
    ];

    const filteredAgendaData = agendaData.filter(item => {
        const searchLower = searchTerm.toLowerCase();
        return (
            item.date.toLowerCase().includes(searchLower) ||
            item.name.toLowerCase().includes(searchLower) ||
            item.time.toLowerCase().includes(searchLower) ||
            item.place.toLowerCase().includes(searchLower) ||
            item.address.toLowerCase().includes(searchLower)
        );
    });

    const getDaysInMonth = (month, year) => {
        const date = new Date(year, month, 1);
        const days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return days;
    };

    const handlePreviousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const days = getDaysInMonth(currentDate.getMonth(), currentDate.getFullYear());
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const firstDayIndex = (firstDayOfMonth.getDay() + 6) % 7; // Adjusting for Monday start
    const startOfWeek = new Date(firstDayOfMonth);
    startOfWeek.setDate(firstDayOfMonth.getDate() - firstDayIndex);

    const previousMonthDays = [];
    let day = new Date(startOfWeek);
    while (day < firstDayOfMonth) {
        previousMonthDays.push(new Date(day));
        day.setDate(day.getDate() + 1);
    }

    const months = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    return (
        <div>
            <Navbar />
            <div className="flex items-center gap-1.5 pt-6 pl-4 md:pl-16 bg-white">
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

                <div className="flex flex-col w-full items-center gap-[10px] h-auto self-stretch rounded-[20px] bg-[rgba(255,140,157,0.20)] shadow-md backdrop-blur-[20px] mt-8 p-8">
                    <div className="flex justify-center items-center mb-4 space-x-4 p-4 w-full">
                        <input
                            type="text"
                            className="w-full border border-red-400 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pink-200"
                            placeholder="Cari artikel sesuai dengan pilihan Bunda!"
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
                            {filteredAgendaData.length > 0 ? (
                                <table className="w-full bg-white text-red-400">
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
                                        {filteredAgendaData.map((item) => (
                                            <tr key={item.no} className="hover:bg-pink-50">
                                                <td className="px-4 py-2 border-b border-pink-200">{item.no}</td>
                                                <td className="px-4 py-2 border-b border-pink-200">{item.date}</td>
                                                <td className="px-4 py-2 border-b border-pink-200">{item.name}</td>
                                                <td className="px-4 py-2 border-b border-pink-200">{item.time}</td>
                                                <td className="px-4 py-2 border-b border-pink-200">{item.place}</td>
                                                <td className="px-4 py-2 border-b border-pink-200">{item.address}</td>
                                                <td className="px-4 py-2 border-b border-pink-200">
                                                    <span className={`px-3 py-1 whitespace-nowrap inline-flex text-sm leading-5 font-semibold rounded-full ${
                                                        item.status === 'Done' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                                    }`}>
                                                        {item.status}
                                                    </span>
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

                <div className="flex flex-col lg:flex-row w-full justify-between mt-8">
    <div className="flex flex-col w-full lg:w-[600px] h-auto p-[38px_39px] gap-2.5 flex-shrink-0 rounded-[20px] bg-[rgba(255,140,157,0.20)] shadow-md backdrop-blur-[20px] mb-8 lg:mb-0">
        <div className="flex flex-col bg-white p-6 rounded-2xl">
            <div className="flex items-center justify-center gap-8 mt-6">
                <div className="flex justify-between w-full mb-4">
                    <button onClick={handlePreviousMonth}>
                        <svg
                            className="w-6 h-6 text-red-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    <h3 className="text-red-400 font-bold text-xl">
                        {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </h3>
                    <button onClick={handleNextMonth}>
                        <svg
                            className="w-6 h-6 text-red-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div className='w-full h-[2px] bg-red-400 mt-2 mb-2'></div>
            <div className="grid grid-cols-7 gap-2 mt-4 text-[14px]">
                <div className="text-red-400 font-bold text-center">Sen</div>
                <div className="text-red-400 font-bold text-center">Sel</div>
                <div className="text-red-400 font-bold text-center">Rab</div>
                <div className="text-red-400 font-bold text-center">Kam</div>
                <div className="text-red-400 font-bold text-center">Jum</div>
                <div className="text-red-400 font-bold text-center">Sab</div>
                <div className="text-red-400 font-bold text-center">Min</div>

                {previousMonthDays.map((day, index) => (
                    <div key={index} className="text-gray-400 text-center">{day.getDate()}</div>
                ))}
                {days.map((day, index) => (
                    <div key={index} className="text-red-400 text-center">{day.getDate()}</div>
                ))}
            </div>
        </div>
        <div className="flex w-full h-auto p-[38px_39px] items-center gap-2.5 flex-shrink-0 rounded-[20px] bg-white shadow-md backdrop-blur-[20px] mt-6">
            <div className="w-full">
                <h2 className="text-xl font-semibold text-red-400 mb-4 text-center">Catatan Harian</h2>
                <div className='w-full h-[2px] bg-red-400'></div>
                <div className="flex justify-end mt-4">
                    <button>
                        <img src="/assets/images/btn_add.png" className="w-[54px] h-[50px]" />
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div className='flex flex-col items-start gap-[10px] w-full lg:w-[724px] auto p-8 rounded-[20px] bg-[rgba(255,140,157,0.20)] shadow-md backdrop-blur-[20px] items-center justify-center'>
        <p className='text-center text-[20px] font-bold text-red-400'>Riwayat Catatan Harian</p>
        <div className="flex flex-col items-start gap-5 p-4 md:p-4 lg:p-4 items-center max-h-[500px] overflow-y-auto">
            <div className="flex flex-col items-start gap-5 p-6 md:p-10 lg:p-26 bg-white rounded-3xl shadow-xl">
                <p className='text-[16px] text-red-400'>Catatan 18 Januari 2024</p>
                <div className='w-full h-[2px] bg-red-400'></div>
                <p className='text-[14px] text-red-400'>
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. 
                </p>
            </div>
            <div className="flex flex-col items-start gap-5 p-10 md:p-10 lg:p-26 bg-white rounded-3xl shadow-xl">
                <p className='text-[16px] text-red-400'>Catatan 12 Januari 2024</p>
                <div className='w-full h-[2px] bg-red-400'></div>
                <p className='text-[14px] text-red-400'>
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. 
                </p>
            </div>
            <div className="flex flex-col items-start gap-5 p-10 md:p-10 lg:p-26 bg-white rounded-3xl shadow-xl">
                <p className='text-[16px] text-red-400'>Catatan 07 Januari 2024</p>
                <div className='w-full h-[2px] bg-red-400'></div>
                <p className='text-[14px] text-red-400'>
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. 
                </p>
            </div>
        </div>
    </div>
</div>
</div>
            <Footer />
        </div>
    );
};

export default Agenda;
