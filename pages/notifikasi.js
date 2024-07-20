import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrimesterResults from "@/components/TrimesterResults";

const Notifikasi = () => {
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
                        <img src="/assets/images/services/woman.png" className="w-[218px] h-auto md:h-[163px]" />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Notifikasi;
