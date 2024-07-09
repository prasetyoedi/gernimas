import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Navbar />
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-start items-start gap-6 md:gap-36 p-4 md:p-16 bg-white">
        <img
          className="order-1 md:order-2 w-full md:w-[593px] h-auto"
          src="/assets/images/header.png"
          alt="Header Image"
        />
        <div className="order-2 md:order-1 flex flex-col justify-start items-start gap-6">
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="text-red-400 text-xl md:text-3xl lg:text-4xl font-bold">
              Tracking Kehamilan Tepercaya untuk Perjalanan Sehat.
            </div>
            <div className="text-red-400 text-xs text-justify md:text-left md:text-lg font-medium md:mt-9">
            Tingkatkan perjalanan kehamilan Anda dengan percaya diri bersama Gernimas. 
            Pantau perkembangan bayi dan kesehatan Anda dengan alat yang akurat dan personal. 
            Dapatkan informasi terkini tentang setiap tahap penting dan nikmati kehamilan yang sehat dan bahagia.
            </div>
          </div>
          <div className="relative md:mt-16">
            <div className="bg-red-500 opacity-50 rounded-[10px] w-[178px] h-[36px] flex justify-center items-center p-2 shadow-lg cursor-pointer hover:shadow-lg hover:bg-red-600 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center text-white text-base font-bold">
                MULAI PEMANTAUAN
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Us */}
      <div className="bg-white md:p-16 pt-14">
        <div className="w-full text-center text-red-400 text-xl md:text-3xl font-bold mb-8">
          ABOUT US
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="w-full md:w-1/3 h-auto flex justify-center">
            <img
              src="/assets/images/doctor.png"
              alt="Doctor Image"
              className="justify-center w-24 md:w-72"
            />
          </div>
          <div className="w-full md:w-2/4">
            <div className="p-2 md:p-5 bg-red-300 bg-opacity-10 rounded-[10px] border border-red-400 backdrop-blur-sm m-5">
              <div className="text-justify text-red-400 text-xs md:text-sm md:font-bold leading-[16px] md:leading-[30px]">
                GERNIMAS Strategi Ibu Cerdas Lahirkan Generasi Emas merupakan
                <span className="text-red-400"> website tracking</span>
                perkembangan ibu hamil yang terinspirasi dari Buku Kesehatan Ibu
                dan Anak. Modernisasi website Buku Kesehatan Ibu dan Anak (KIA)
                memiliki potensi besar untuk memberikan kontribusi yang
                signifikan terhadap pelayanan kesehatan masyarakat di Indonesia.
                Dengan memanfaatkan teknologi informasi, program ini dapat
                meningkatkan aksesibilitas informasi kesehatan ibu dan anak,
                membantu masyarakat dalam memantau pertumbuhan, perkembangan,
                dan perawatan kesehatan secara lebih efektif.
              </div>
            </div>
            <div className="p-2 md:p-5 bg-red-300 bg-opacity-10 rounded-[10px] border border-red-400 backdrop-blur-sm m-5">
              <div className="text-justify text-red-400 text-xs md:text-sm md:font-bold leading-[16px] md:leading-[30px]">
                Dalam rangka mengoptimalkan pelayanan kesehatan ibu dan anak di
                Indonesia, pembuatan website ini menjadi langkah progresif yang
                bertujuan untuk meningkatkan efisiensi, aksesibilitas, dan
                akurasi informasi kesehatan. Langkah ini tidak hanya
                meningkatkan transparansi dan akuntabilitas dalam pelayanan
                kesehatan di tingkat masyarakat, tetapi juga mempercepat
                penanganan serta respons terhadap kebutuhan kesehatan ibu dan
                anak yang mengarah pada perbaikan sistem kesehatan masyarakat
                secara keseluruhan.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Article */}
      <div className="bg-white md:p-16 pt-14">
        <div className="w-full text-center text-red-400 text-xl md:text-3xl font-bold mb-8">
          ARTICLE
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden m-5 cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <img
              src="/assets/images/article.png"
              alt="Pregnant woman cutting fruit"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="text-rose-500 text-[13px] font-medium leading-3 tracking-wide">
                IBU HAMIL
              </div>
              <div className="w-80 text-neutral-900 text-base md:text-xl font-normal leading-[22px] md:leading-[30px] mt-4">
                Tips Kehamilan Sehat: Nutrisi dan Gizi yang Tepat untuk Ibu
                Hamil"
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden m-5 cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <img
              src="/assets/images/article.png"
              alt="Pregnant woman cutting fruit"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="text-rose-500 text-[13px] font-medium leading-3 tracking-wide">
                IBU HAMIL
              </div>
              <div className="w-80 text-neutral-900 text-base md:text-xl font-normal leading-[22px]  md:leading-[30px] mt-4">
                Tips Kehamilan Sehat: Nutrisi dan Gizi yang Tepat untuk Ibu
                Hamil"
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden m-5 cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <img
              src="/assets/images/article.png"
              alt="Pregnant woman cutting fruit"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="text-rose-500 text-[13px] font-medium leading-3 tracking-wide">
                IBU HAMIL
              </div>
              <div className="w-80 text-neutral-900 text-base md:text-xl font-normal leading-[22px]  md:leading-[30px] mt-4">
                Tips Kehamilan Sehat: Nutrisi dan Gizi yang Tepat untuk Ibu
                Hamil"
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden m-5 cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <img
              src="/assets/images/article.png"
              alt="Pregnant woman cutting fruit"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="text-rose-500 text-[13px] font-medium leading-3 tracking-wide">
                IBU HAMIL
              </div>
              <div className="w-80 text-neutral-900 text-base md:text-xl font-normal leading-[22px]  md:leading-[30px] mt-4">
                Tips Kehamilan Sehat: Nutrisi dan Gizi yang Tepat untuk Ibu
                Hamil"
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden m-5 cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <img
              src="/assets/images/article.png"
              alt="Pregnant woman cutting fruit"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="text-rose-500 text-[13px] font-medium leading-3 tracking-wide">
                IBU HAMIL
              </div>
              <div className="w-80 text-neutral-900 text-base md:text-xl font-normal leading-[22px]  md:leading-[30px] mt-4">
                Tips Kehamilan Sehat: Nutrisi dan Gizi yang Tepat untuk Ibu
                Hamil"
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden m-5 cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <img
              src="/assets/images/article.png"
              alt="Pregnant woman cutting fruit"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="text-rose-500 text-[13px] font-medium leading-3 tracking-wide">
                IBU HAMIL
              </div>
              <div className="w-80 text-neutral-900 text-base md:text-xl font-normal leading-[22px]  md:leading-[30px] mt-4">
                Tips Kehamilan Sehat: Nutrisi dan Gizi yang Tepat untuk Ibu
                Hamil"
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10 pb-10 md:pb-0">
          <Link href="/article" passHref>
            <div className="w-[179px] h-[31px] p-5 bg-white rounded-[10px] border border-red-400 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-red-400 transition-colors duration-300">
              <div className="text-center text-red-400 text-sm font-bold leading-[30px] hover:text-white">
                SELENGKAPNYA
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
