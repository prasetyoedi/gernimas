import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-[rgba(250,225,228,1)] px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 md:ps-16 md:px-16">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link href="/">
                    <div className="flex items-center cursor-pointer">
                        <img src="/assets/images/logo.png" className="mr-3 w-[57px] h-[77.03px]" alt="Gernimas Logo" />
                        <div className="w-[127px] h-[36.97px] text-[#E5677A] text-2xl font-bold font-['Poppins']">GERNIMAS</div>
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
                            <Link href="/home">
                                <div className="w-12 h-6 pt-2 text-red-400/80 text-base font-bold font-['Poppins'] hover:text-red-400 transition duration-300 ease-in-out cursor-pointer">
                                    HOME
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/article">
                                <div className="w-[60px] h-6 pt-2 text-center text-red-400/80 text-base font-bold font-['Poppins'] hover:text-red-400 transition duration-300 ease-in-out cursor-pointer">
                                    ARTICLE
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/tracking">
                                <div className="w-[87px] h-6 pt-2 text-red-400/80 text-base font-bold font-['Poppins'] hover:text-red-400 transition duration-300 ease-in-out cursor-pointer">
                                    TRACKING
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/notification">
                                <div className="w-[116px] h-6 pt-2 mb-3 text-red-400/80 text-base font-bold font-['Poppins'] hover:text-red-400 transition duration-300 ease-in-out cursor-pointer">
                                    NOTIFICATION
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/login">
                                <div className="w-[106px] h-[41px] relative cursor-pointer">
                                    <div className="w-[106px] h-[41px] left-0 top-0 absolute bg-red-300/60 rounded-[10px]">
                                        <div className="w-[50px] left-[28px] top-[8.50px] absolute text-white text-base font-bold font-['Poppins']">
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
