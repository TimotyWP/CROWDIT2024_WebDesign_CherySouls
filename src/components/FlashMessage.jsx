// src/components/FlashMessage.jsx
import React, { useEffect } from 'react';

const FlashMessage = ({ message, isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
        const timer = setTimeout(() => {
            onClose();
        }, 3000); // Pop-up akan hilang setelah 3 detik
        return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-4 flex items-center">
        <img src="src\assets\paymentsuccess.png" alt="Success" className="w-6 h-6 mr-2" />
        <p className="text-green-600 font-semibold">{message}</p>
        </div>
    );
};

export default FlashMessage;
