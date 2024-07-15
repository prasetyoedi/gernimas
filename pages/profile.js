import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Profile = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col p-6 md:p-20 bg-white">
                <div className="flex justify-end mb-4">
                    <img src='/assets/images/profile/icon-edit.png' className='w-[40px]' alt="edit icon" />
                </div>
                <div className="flex items-start gap-16 m-4">
                    <div className="flex flex-col items-center w-[269px]">
                        <img src='/assets/images/profile/foto-profile.png' className="w-[200x] h-auto rounded-full" alt="profile" />
                        <p className='text-red-400 font-bold text-[24px]'>Hai, Bunda!</p>
                    </div>
                    <div className="border-l-4 border-pink-500 h-full"></div>
                    <div className="flex flex-col w-full">
                        <form className="space-y-4">
                            <div>
                                <label className="block text-[18px] font-medium text-red-400">Nama</label>
                                <input type="text" value="Nikita Willy" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" readOnly />
                            </div>
                            <div>
                                <label className="block text-[18px] font-medium text-red-400">No Telepon</label>
                                <input type="text" value="085963369857" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" readOnly />
                            </div>
                            <div>
                                <label className="block text-[18px] font-medium text-red-400">E-mail</label>
                                <input type="email" value="nikitawilly@gmail.com" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" readOnly />
                            </div>
                            <div>
                                <label className="block text-[18px] font-medium text-red-400">NIK</label>
                                <input type="text" value="nikitawilly@gmail.com" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" readOnly />
                            </div>
                            <div>
                                <label className="block text-[18px] font-medium text-red-400">Tanggal Lahir</label>
                                <input type="text" value="12 Juli 1992" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" readOnly />
                            </div>
                            <div>
                                <label className="block text-[18px] font-medium text-red-400">Alamat Rumah</label>
                                <input type="text" value="Sleman, DIY" className="text-red-400 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" readOnly />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;
