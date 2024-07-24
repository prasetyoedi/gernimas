import React from "react";

const ModalSuplemen = ({ isVisible, onClose, content }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative bg-white p-8 m-4 mt-20 mb-20 rounded-lg shadow-lg w-full max-w-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-500 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-red-400 font-bold text-2xl mb-4">
          {content.suplemen}
        </h2>
        <div className="border-2 border-pink-300 p-2 rounded-lg mb-4 flex justify-center">
          <img
            src={content.gambar}
            alt={content.suplemen}
            className="w-[460px] h-[130px] object-cover rounded-xl p-2"
          />
        </div>
        <p className="text-red-400">{content.keterangan}</p>
      </div>
    </div>
  );
};

export default ModalSuplemen;
