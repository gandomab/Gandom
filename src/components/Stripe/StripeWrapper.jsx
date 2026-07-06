import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import StripeCheckoutForm from './StripeCheckoutForm';
import { useCart } from '../../contexts/CartContext';
import { paymentService } from '../../services/api';

const StripeWrapper = ({ selectedMethod }) => {
    const { createdOrderId } = useCart();
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const orderId = createdOrderId || localStorage.getItem('createdOrderId');
        if (!orderId) {
            setError("No order ID found. Please create an order first.");
            return;
        }

        const fetchPaymentDetails = async () => {
            setLoading(true);
            setError(null);
            try {
                const isGuest = !localStorage.getItem('accessToken');
                const payload = {
                    order_id: parseInt(orderId, 10)
                };
                if (isGuest) {
                    const checkoutToken = localStorage.getItem('createdOrderCheckoutToken');
                    if (checkoutToken) {
                        payload.checkout_token = checkoutToken;
                    }
                }

                const data = await paymentService.createPayment(payload);
                setClientSecret(data.client_secret);
                setStripePromise(() => loadStripe(data.publishable_key));
            } catch (err) {
                console.error("Failed to initialize payment details:", err);
                setError(err.response?.data?.message || err.response?.data?.detail || "Failed to initialize payment.");
            } finally {
                setLoading(false);
            }
        };

        fetchPaymentDetails();
    }, [createdOrderId]);

    if (loading) {
        return (
            <div className="flex items-center justify-center p-6 text-[#E6B220] font-semibold font-inter animate-pulse">
                Initializing secure payment...
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-red-500 font-semibold font-inter text-center p-6">
                {error}
            </div>
        );
    }

    if (!stripePromise || !clientSecret) {
        return null;
    }

    const options = {
        clientSecret: clientSecret,
        appearance: {
            theme: 'stripe',
            variables: {
                colorPrimary: '#E6B220',
                colorBackground: '#FAFAF5',
                colorText: '#000000',
                borderRadius: '15px',
            }
        },
    };

    return (
        <Elements stripe={stripePromise} options={options}>
            <StripeCheckoutForm clientSecret={clientSecret} />
        </Elements>
    );
};

export default StripeWrapper;