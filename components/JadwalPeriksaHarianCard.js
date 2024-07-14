import React from 'react';

const JadwalPeriksaHarianCard = ({ date, title, description }) => {
    return (
        <div className="flex flex-col items-start gap-5 p-6 md:p-10 lg:p-26 bg-white rounded-3xl shadow-xl">
            <p className='text-[16px] text-red-400'>Catatan {date}</p>
            <div className='w-full h-[2px] bg-red-400'></div>
            <p className='text-[14px] text-red-400'>
                {description}
            </p>
        </div>
    );
};

export default JadwalPeriksaHarianCard;
