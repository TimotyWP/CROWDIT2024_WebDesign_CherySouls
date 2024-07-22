// src/components/SubscriptionCard.jsx
import React from 'react';
import C4ELogo from '../assets/logo.svg'; // Pastikan jalur logo sesuai dengan lokasi file Anda

const SubscriptionCard = ({ plan, price, onClick }) => {
    return (
        <div className="bg-gradient-to-br from-teal-500 to-blue-700 rounded-xl p-6 text-white shadow-lg flex flex-col items-center justify-between">
        <img src={C4ELogo} alt="C4E Logo" className="w-16 h-16 mb-4 rounded-full bg-white p-1" />
        <h3 className="text-xl font-semibold mb-2">{plan}</h3>
        <p className="mb-4">{price}</p>
        <button
            className="bg-blue-500 py-2 px-4 rounded-md text-white hover:bg-blue-600 transition duration-300"
            onClick={onClick}
        >
            Purchase
        </button>
        </div>
    );
};

export default SubscriptionCard;
