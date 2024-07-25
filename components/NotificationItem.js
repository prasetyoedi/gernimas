import React from "react";
import { calculateWeekGap } from "@/utils/calculate_week_gap";

const NotificationItem = ({ notification, tanggalKehamilan }) => {
  return (
    <>
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center gap-4 md:gap-[67px]">
          <img
            src="/assets/images/notifikasi/notifikasi.png"
            className="w-[60px] h-auto"
          />
          <div className="flex w-full md:w-[328px] flex-col items-start gap-[18px]">
            <p className="text-red-400 text-[18px] font-bold">
              Pemeriksaan Rutin Minggu ke-{" "}
              {calculateWeekGap(notification.tanggal, tanggalKehamilan)}
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-[50px]">
              <p className="text-red-400 text-[16px]">{notification.tanggal}</p>
              <p className="text-red-400 text-[16px]">
                {notification?.waktu ?? "-"}
              </p>
              <p className="text-red-400 text-[16px]">
                {notification?.faskes_1 ?? "-"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[2px] bg-red-400 mt-4"></div>
    </>
  );
};

export default NotificationItem;
