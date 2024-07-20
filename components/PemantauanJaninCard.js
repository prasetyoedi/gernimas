import React from "react";
import Link from 'next/link';

const PemantauanJaninCard = ({ href, image, week, length }) => (
    <Link href={`${href}?week=${week}`}>
      <div className="flex flex-col items-center rounded-2xl bg-[rgba(229,103,122,0.70)] w-[290px] m-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <div className="flex flex-col items-center gap-4 p-4 sm:p-6 w-full rounded-t-2xl border border-[rgba(229,103,122,0.70)] bg-white">
          <div className="w-[135px] h-[142px] bg-cover bg-center bg-no-repeat">
            <img src={image} alt="Deskripsi gambar" />
          </div>
        </div>
        <div className="flex flex-col w-full items-start gap-4 p-4 sm:p-6">
          <p className="text-white text-[18px] sm:text-[22px] font-bold">{week}</p>
          <div className="w-full h-[2px] bg-[rgba(81,75,75,0.14)]"></div>
          <p className="text-white text-[14px] font-bold">{length}</p>
        </div>
      </div>
    </Link>
);

export default PemantauanJaninCard;
