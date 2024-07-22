// src/components/Purchase.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import SubscriptionCard from './SubscriptionCard';
import Modal from './Modal';
import styles from '../style';

const Purchase = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState('');
    const [total, setTotal] = useState('');

    const openModal = (plan, price) => {
        setSelectedPlan(plan);
        setTotal(price);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="bg-primary w-full overflow-hidden min-h-screen">
        <div className="w-full flex justify-center mt-10 flex-col items-center">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <SubscriptionCard
                plan="1 Month Subscription"
                price="Rp. 119.000"
                onClick={() => openModal("1 Month Subscription", "Rp. 119.000")}
            />
            <SubscriptionCard
                plan="6 Months Subscription"
                price="Rp. 599.000"
                onClick={() => openModal("6 Months Subscription", "Rp. 599.000")}
            />
            <SubscriptionCard
                plan="12 Months Subscription"
                price="Rp. 1.119.000"
                onClick={() => openModal("12 Months Subscription", "Rp. 1.119.000")}
            />
            </div>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            subscription={selectedPlan}
            total={total}
            />
        </div>
        </div>
    );
};

export default Purchase;
