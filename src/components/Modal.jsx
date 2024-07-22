// src/components/Modal.jsx
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import FlashMessage from './FlashMessage';

ReactModal.setAppElement('#root');

const Modal = ({ isOpen, onRequestClose, subscription, total }) => {
    const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

    const handlePayment = () => {
        setIsPaymentSuccessful(true);
        onRequestClose();
    };

    const closeFlashMessage = () => {
        setIsPaymentSuccessful(false);
    };

    return (
        <>
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Checkout Modal"
            className="modal"
            overlayClassName="overlay"
        >
            <div className="bg-gradient-to-br from-teal-500 to-blue-700 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-semibold mb-6">Checkout</h2>
            <p className="text-lg mb-2">Subscription: {subscription}</p>
            <p className="text-lg mb-2">Total</p>
            <h3 className="text-xl font-semibold mb-4">{total}</h3>
            <button
                className="bg-blue-500 py-2 px-4 rounded-md text-white"
                onClick={handlePayment}
            >
                Make Payment
            </button>
            </div>
        </ReactModal>
        <FlashMessage 
            message="Thank You, Payment Successful" 
            isVisible={isPaymentSuccessful} 
            onClose={closeFlashMessage} 
        />
        </>
    );
};

export default Modal;
