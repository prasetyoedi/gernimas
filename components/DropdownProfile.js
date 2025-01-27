import { useState, useEffect, useRef } from 'react';

const DropdownProfile = ({ isOpen, onClose }) => {
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div 
            ref={dropdownRef} 
            className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg ${isOpen ? '' : 'hidden'}`}
        >
            <ul>
                <li>
                    <a href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={onClose}>Profile</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={onClose}>Logout</a>
                </li>
            </ul>
        </div>
    );
};

export default DropdownProfile;
