import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Suplemen = () => {
    return (
        <div>
            <Navbar />
            <div className="flex items-center gap-1.5 pt-6 pl-4 md:pl-20 bg-white">
                <p className="text-primary text-base font-bold leading-normal text-red-400">Layanan</p>
                <img src="/assets/images/arrow.png" className="w-[20px] h-[20px]" />
                <p className="text-custom-color text-red-400 text-base font-bold leading-normal">Suplemen</p>
            </div>
            <div className="flex flex-col p-6 md:p-16 bg-white justify-center items-center">
                <div className="flex flex-col w-full h-auto md:h-[200px] px-4 md:px-[35px] py-4 flex-shrink-0 rounded-[20px] bg-[rgba(255,140,157,0.20)] gap-4">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-[296px]">
                        <div className="flex flex-col w-full md:w-[720px] items-start gap-4">
                            <h1 className="text-red-400 text-2xl md:text-4xl font-bold leading-normal mt-6">Hai Bunda!</h1>
                            <h2 className="text-red-400 text-base md:text-lg font-medium leading-normal">Selama kehamilan jangan lupa mengonsumsi suplemen  untuk mendukung kesehatan Anda dan perkembangan janin, ya!</h2>
                        </div>
                        <img src="/assets/images/services/woman.png" className="w-[218px] h-auto md:h-[163px]" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Suplemen;
