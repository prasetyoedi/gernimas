import React from "react";
import Link from 'next/link';

const PemantauanIbuHamilCard = ({ href, title, value, unit }) => (
  <div className="flex w-full sm:w-[270px] px-12 py-4 justify-center items-center rounded-[20px] bg-[rgba(255,140,157,0.30)] shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    <Link href={href}>
      <div className="flex w-full h-full flex-col justify-center items-center gap-3">
        <p className="text-center text-[16px] text-[#E5677A] font-bold">{title}</p>
        <p className="text-center text-[60px] text-[#E5677A] font-bold">{value}</p>
        <p className="text-center text-[16px] text-[#E5677A] font-bold">{unit}</p>
      </div>
    </Link>
  </div>
);


export default PemantauanIbuHamilCard;