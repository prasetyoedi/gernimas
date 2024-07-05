import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const isActive = (path) => router.pathname === path;

    return (
        <nav className="bg-[rgba(250,225,228,1)] px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 md:ps-16 md:px-16">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link href="/" passHref>
                    <div className="flex items-center cursor-pointer">
                        <img src="/assets/images/logo.png" className="mr-3 w-[57px] h-[77.03px]" alt="Gernimas Logo" />
                        <div className="w-[127px] h-[36.97px] text-[#E5677A] text-2xl font-bold">GERNIMAS</div>
                    </div>
                </Link>
                <div className="flex md:hidden">
                    <button
                        className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                        aria-label="Toggle menu"
                        onClick={toggleMenu}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <div className={`w-full md:flex md:items-center md:w-auto ${menuOpen ? '' : 'hidden'}`} id="menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <Link href="/" passHref>
                                <div className={`w-16 h-6 pt-2 ${isActive('/') ? 'text-red-400 font-bold' : 'text-red-400/80'} text-base hover:text-red-400 transition duration-300 ease-in-out cursor-pointer`}>
                                    BERANDA
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" passHref>
                                <div className={`w-[60px] h-6 pt-2 text-center ${isActive('/services') ? 'text-red-400 font-bold' : 'text-red-400/80'} text-base hover:text-red-400 transition duration-300 ease-in-out cursor-pointer`}>
                                    LAYANAN
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/tracking" passHref>
                                <div className={`w-[94px] h-6 pt-2 ${isActive('/tracking') ? 'text-red-400 font-bold' : 'text-red-400/80'} text-base hover:text-red-400 transition duration-300 ease-in-out cursor-pointer`}>
                                    PEMANTAUAN
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/article" passHref>
                                <div className={`w-[46px] h-6 pt-2 mb-3 ${isActive('/article') ? 'text-red-400 font-bold' : 'text-red-400/80'} text-base hover:text-red-400 transition duration-300 ease-in-out cursor-pointer`}>
                                    ARTIKEL
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link href="/notification" passHref>
                                <div className={`w-[116px] h-6 pt-2 mb-3 ${isActive('/notification') ? 'text-red-400 font-bold' : 'text-red-400/80'} text-base hover:text-red-400 transition duration-300 ease-in-out cursor-pointer`}>
                                    NOTIFIKASI
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/login" passHref>
                                <div className="w-[106px] h-[41px] relative cursor-pointer">
                                    <div className={`w-[106px] h-[41px] left-0 top-0 absolute ${isActive('/login') ? 'bg-red-400' : 'bg-red-300/60'} rounded-[10px]`}>
                                        <div className="w-[50px] left-[28px] top-[8.50px] absolute text-white text-base font-bold">
                                            LOGIN
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
