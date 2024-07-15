// SuplemenCard.js
import React from "react";

const SuplemenCard = ({ src, alt, label, onClick }) => {
    return (
        <div 
            onClick={onClick} 
            className="flex flex-col justify-center items-center gap-4 w-300 p-6 rounded-xl shadow-md bg-white cursor-pointer hover:scale-110 transition-transform duration-1000"
        >
            <div className="flex h-auto w-full p-1 justify-center items-center rounded-lg border-2 border-pink-300 bg-white">
                <img src={src} alt={alt} className="w-[220px] p-2 rounded-xl" />
            </div>
            <p className="text-red-400 font-bold text-[20px]">
                {label}
            </p>
        </div>
    );
};

export default SuplemenCard;
