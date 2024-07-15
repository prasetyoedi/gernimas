import React from 'react';
import Link from 'next/link';

const AsupanGiziCard = ({ imageSrc, title, description }) => {
    return (
        <Link href="detail_asupan_gizi">
            <div className="flex flex-col p-6 items-start gap-2.5 rounded-[20px] bg-[rgba(255,140,157,0.20)] w-full max-w-md h-auto cursor-pointer hover:scale-110 transition-transform duration-1000">
                <div className="flex flex-col items-start gap-6">
                    <img src={imageSrc} className="w-full" />
                    <p className="text-red-400 text-[22px] font-bold mt-2">
                        {title}
                    </p>
                    <p className="text-red-400 text-[18px]">
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default AsupanGiziCard;
