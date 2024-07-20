import { useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import DropdownProfile from "./DropdownProfile";
import { AuthContext } from "@/context/auth_context";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const { user } = useContext(AuthContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const isActive = (path) => router.pathname === path;

  return (
    <nav className="bg-[rgba(250,225,228,1)] px-2 sm:px-4 py-2.5 rounded md:ps-16 md:px-16 shadow-md sticky top-0 z-10">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer">
            <img
              src="/assets/images/logo.png"
              className="mr-3 w-[57px] h-[77.03px]"
              alt="Gernimas Logo"
            />
            <div className="w-[127px] h-[36.97px] text-[#E5677A] text-2xl font-bold">
              GERNIMAS
            </div>
          </div>
        </Link>
        <div className="flex md:hidden">
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`w-full md:flex md:items-center md:w-auto ${
            menuOpen ? "" : "hidden"
          }`}
          id="menu"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link href="/" passHref>
                <div
                  className={`w-16 h-6 pt-2 ${
                    isActive("/") ? "text-red-400 font-bold" : "text-red-400/80"
                  } text-base hover:text-red-400 transition duration-300 ease-in-out cursor-pointer`}
                >
                  Beranda
                </div>
              </Link>
            </li>
            {user && (
              <>
                <li>
                  <Link href="/layanan" passHref>
                    <div
                      className={`w-[60px] h-6 pt-2 text-center ${
                        isActive("/layanan")
                          ? "text-red-400 font-bold"
                          : "text-red-400/80"
                      } text-base hover:text-red-400 transition duration-300 ease-in-out cursor-pointer`}
                    >
                      Layanan
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/pemantauan" passHref>
                    <div
                      className={`w-[94px] h-6 pt-2 ${
                        isActive("/pemantauan")
                          ? "text-red-400 font-bold"
                          : "text-red-400/80"
                      } text-base hover:text-red-400 transition duration-300 ease-in-out cursor-pointer`}
                    >
                      Pemantauan
                    </div>
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link href="/artikel" passHref>
                <div
                  className={`w-[42px] h-6 pt-2 ${
                    isActive("/artikel")
                      ? "text-red-400 font-bold"
                      : "text-red-400/80"
                  } text-base hover:text-red-400 transition duration-300 ease-in-out cursor-pointer`}
                >
                  Artikel
                </div>
              </Link>
            </li>
            <div className="flex space-x-2 mt-4 md:mt-0">
              {!user ? (
                <li>
                  <Link href="/login" passHref>
                    <div className="w-[106px] h-[41px] relative cursor-pointer group">
                      <div
                        className={`w-[106px] h-[41px] left-0 top-0 absolute ${
                          isActive("/login") ? "bg-red-600" : "bg-red-600/60"
                        } rounded-[10px] transition-colors duration-300 flex items-center justify-center group-hover:bg-transparent group-hover:border-2 group-hover:border-[rgba(255,140,157,0.30)]`}
                      >
                        <div className="text-white text-base font-bold transition-colors duration-300 group-hover:text-red-400">
                          Masuk
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link href="/notification" passHref>
                      <div
                        className={`w-[116px] h-6 pt-2 mb-3 ${
                          isActive("/notification")
                            ? "text-red-400 font-bold"
                            : "text-red-400/80"
                        } text-base hover:text-red-400 transition duration-300 ease-in-out cursor-pointer`}
                      >
                        Notifikasi
                      </div>
                    </Link>
                  </li>
                  <div className="relative group">
                    <button
                      className="w-20 h-10 rounded-full bg-red-400 text-white flex items-center justify-center"
                      onClick={toggleDropdown}
                    >
                      {user?.user?.name[0]}
                      <svg
                        className="ml-2 w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <DropdownProfile
                      isOpen={dropdownOpen}
                      onClose={closeDropdown}
                    />
                  </div>
                </>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
