// components/Dropdown.js
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const router = useRouter();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (pathname) => router.pathname === pathname;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    return (
        <div className="relative inline-block text-left" ref={menuRef}>
            <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={toggleDropdown}
            >
                Layanan
                <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                >
                    <ul className="py-1" role="menu">
                        <li>
                            <Link href="/layanan" passHref>
                                <div
                                    className={`w-full px-4 py-2 text-center ${isActive('/layanan')
                                            ? 'text-red-400 font-bold'
                                            : 'text-gray-700 hover:bg-gray-100'
                                        } text-sm cursor-pointer transition duration-300 ease-in-out`}
                                >
                                    Layanan utama
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/layanan/riwayat_periksa" passHref>
                                <div
                                    className={`w-full px-4 py-2 text-center ${isActive('/kontak')
                                            ? 'text-red-400 font-bold'
                                            : 'text-gray-700 hover:bg-gray-100'
                                        } text-sm cursor-pointer transition duration-300 ease-in-out`}
                                >
                                    Layanan Periksa
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
