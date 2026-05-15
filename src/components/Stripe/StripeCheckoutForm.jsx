import React, { useState } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
const StripeCheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
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
            alert("Frontend is working! Waiting for backend to complete the actual payment.");
            setIsProcessing(false);
        }, 1500);
    };
    return (
        <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-6">
            {/* This renders Stripe's built-in, secure input fields for card details */}
            <PaymentElement />
            {errorMessage && <div className="text-red-500 text-sm mt-2">{errorMessage}</div>}
            <button
                disabled={!stripe || isProcessing}
                className="w-full bg-[#E6B220] hover:bg-[#D4A31D] text-black font-semibold text-[18px] py-4 rounded-[12px] transition-colors disabled:opacity-50 mt-4"
            >
                {isProcessing ? "Processing..." : "Pay Now"}
            </button>
        </form>
    );
};
export default StripeCheckoutForm;