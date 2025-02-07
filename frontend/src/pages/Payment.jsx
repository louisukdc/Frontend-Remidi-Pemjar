// pages/Payment.js
import React from "react";
import PaymentForm from "../components/paymentform";


const Payment = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Payment</h1>
            <PaymentForm />
        </div>
    );
};

export default Payment;