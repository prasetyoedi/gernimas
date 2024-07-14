import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrimesterResults from "@/components/TrimesterResults";

const RiwayatPeriksa = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col justify-center items-center p-3 md:p-16 bg-white">
                <div className="w-full flex flex-col gap-10">
                    <div className="flex flex-row justify-between items-center gap-2 rounded-[20px] bg-[rgba(255,140,157,0.20)] p-4 md:p-8">
                        <div class="flex justify-content-between">
                            <div class="basis-8/12">
                                <div className="text-red-400 text-3xl font-bold">
                                    Hai Bunda
                                </div>
                                <div className="text-red-400 text-base font-medium text-justify">
                                    Yuk cek hasil pemeriksaan yang telah dilakukan, baca serta pahami hasil pemeriksaan dari dokter untuk meningkatkan kesehatan janin!
                                </div>
                            </div>
                            <div class="basis-4/12 ">
                                <img
                                    className="w-[183px] h-auto float-right"
                                    src="/assets/images/services/woman.png"
                                    alt="Header Image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TrimesterResults />
            <Footer />
        </div>
    );
};

export default RiwayatPeriksa;
