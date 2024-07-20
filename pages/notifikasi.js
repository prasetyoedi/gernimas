import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NotificationItem from "../components/NotificationItem";

const Notifikasi = () => {
    const notifications = [
        { title: "Pemeriksaan Rutin Minggu ke-4", date: "17/10/24", time: "10:00 AM", location: "RSA UGM" },
        { title: "Pemeriksaan Rutin Minggu ke-8", date: "17/10/24", time: "10:00 AM", location: "RSA UGM" },
        { title: "Pemeriksaan Rutin Minggu ke-16", date: "17/10/24", time: "10:00 AM", location: "RSA UGM" },
        { title: "Pemeriksaan Rutin Minggu ke-20", date: "17/10/24", time: "10:00 AM", location: "RSA UGM" }
    ];

    return (
        <div>
            <Navbar />
            <div className="flex flex-col p-6 md:p-16 bg-white justify-between items-center">
                <div className="flex flex-col w-full h-auto md:h-[200px] px-4 md:px-[35px] py-4 flex-shrink-0 rounded-[20px] bg-[rgba(255,140,157,0.20)] gap-4">
                    <div className="flex flex-col md:flex-row items-between justify-between md:items-start md:gap-[296px]">
                        <div className="flex flex-col w-full md:w-[720px] items-between justify-between gap-4">
                            <h1 className="text-red-400 text-2xl md:text-4xl font-bold leading-normal mt-6">Hai Bunda!</h1>
                            <h2 className="text-red-400 text-base md:text-lg font-medium leading-normal">Pantau terus jadwal pemeriksaan dan rutin minum tablet tambah darah untuk memastikan kesehatan optimal bagi Anda dan janin!</h2>
                        </div>
                        <img src="/assets/images/services/woman.png" className="w-[218px] h-auto md:h-[163px] mt-4" />
                    </div>
                </div>
                {notifications.length > 0 ? (
                    <div className="flex flex-col w-full items-center gap-[10px] h-auto self-stretch rounded-[20px] bg-[rgba(255,140,157,0.20)] shadow-md backdrop-blur-[20px] mt-8 p-8">
                        {notifications.map((notification, index) => (
                            <NotificationItem key={index} notification={notification} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col w-full items-center gap-[10px] h-auto self-stretch rounded-[20px] bg-[rgba(255,140,157,0.20)] shadow-md backdrop-blur-[20px] mt-8 p-8">
                        <div className="flex flex-col items-center gap-[20px] w-full md:w-[503px]">
                            <img src="/assets/images/notifikasi/warning.png" className="w-[300px] h-auto items-center justify-center" />
                            <p className="text-red-400 text-[24px] mt-4 font-bold">Belum Ada Notifikasi</p>
                            <p className="text-red-400 text-[20px] text-center">Semua notifikasi yang kami kirim akan muncul di sini supaya Anda dapat mengeceknya dengan mudah.</p>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Notifikasi;
