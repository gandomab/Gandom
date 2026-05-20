import React, { useState } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';

const StripeCheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return; // Stripe.js hasn't yet loaded.
        }
        setIsProcessing(true);
        // --- FUTURE BACKEND INTEGRATION GOES HERE ---
        // 1. Fetch the clientSecret from your backend API
        // const response = await fetch("/api/create-payment-intent", { method: "POST", ... });
        // const { clientSecret } = await response.json();

        // 2. Pass the clientSecret to stripe.confirmPayment
        /*
        const { error } = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url: `${window.location.origin}/payment-success`,
            },
        });
        */
        // --- FOR NOW, SIMULATE SUBMISSION ---
        setTimeout(() => {
            setIsProcessing(false);
            navigate('/payment-success');
        }, 1500);
    };
    return (
        <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-6">
            <PaymentElement />
            {errorMessage && <div className="text-red-500 text-sm mt-2">{errorMessage}</div>}
            <button
                disabled={!stripe || isProcessing}
                className="w-full  bg-[#DEA401] text-[#F2EDE0] text-inter font-semibold leading-[130%] whitespace-nowrap text-[18px] py-4 rounded-[12px] hover:opacity-90 transition mt-4"
            >
                {isProcessing ? "Processing..." : "Pay Now"}
            </button>
        </form>
    );
};
export default StripeCheckoutForm;