// components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full h-auto relative bg-[rgba(250,225,228,1)] py-6">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="flex flex-col lg:flex-row items-center lg:items-start">
                    <img className="w-14 h-18 mb-4 lg:mb-0 lg:mr-4" src="/assets/images/logo.png" alt="Logo" />
                    <div className="text-red-400 text-2xl font-bold mt-6">GERNIMAS</div>
                </div>
                <div className="mt-6 text-red-400 text-xs font-bold leading-tight md:w-1/4">
                    <span>GERNIMAS untuk meningkatkan aksesibilitas informasi kesehatan ibu dan anak. Bersama Wujudkan Generasi Emas Sebagai Langkah Cerdas Ibu Hamil.</span>
                </div>
                <div className="border-t border-red-400 my-6"></div>
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="flex flex-col lg:flex-row items-center mt-4 lg:mt-0">
                        <div className="relative mb-4 lg:mb-0 lg:mr-6">
                            <div className="text-red-400 text-xl font-semibold capitalize leading-tight">Follow us</div>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="relative w-11 h-11 bg-white rounded-full flex items-center justify-center">
                                <img className="w-6 h-6" src="/assets/images/sosmed/gmail.png" alt="Gmail" />
                            </a>
                            <a href="#" className="relative w-11 h-11 bg-white rounded-full flex items-center justify-center">
                                <img className="w-6 h-6" src="/assets/images/sosmed/instagram.png" alt="Instagram" />
                            </a>
                            <a href="#" className="relative w-11 h-11 bg-white rounded-full flex items-center justify-center">
                                <img className="w-6 h-6" src="/assets/images/sosmed/youtube.png" alt="YouTube" />
                            </a>
                            <a href="#" className="relative w-11 h-11 bg-white rounded-full flex items-center justify-center">
                                <img className="w-6 h-6" src="/assets/images/sosmed/facebook.png" alt="Facebook" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-red-400 text-sm font-normal font-['Inter'] lg:text-right md:-mt-7 pt-6 text-center">
                    GERNIMAS © 2024 Teknologi Untuk Kemajuan Indonesia
                </div>
            </div>
        </footer>
    );
};

export default Footer;
