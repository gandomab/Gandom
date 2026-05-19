import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import StripeCheckoutForm from './StripeCheckoutForm';
import { useCart } from '../../contexts/CartContext';

// Replace with your actual key from your project owner
const stripePromise = loadStripe('pk_test_51TYj1dKFcfXGfZDkvAFTi06qweDHOfJHBgv9rEIQSZwOswyWNckdQEeN9BgNC17mPM9LDXS203QXNPfrjoZhGZrW00tSTaAMPA');
const StripeWrapper = ({ selectedMethod }) => {
    const { totalCost, deliveryFee } = useCart();
    const grandTotal = totalCost + deliveryFee;

    // Math.round to prevent any weird decimals like 50000.00000001 from crashing Stripe.
    const stripeAmount = Math.round(grandTotal * 100);
    // Stripe has a minimum charge requirement (usually ~5 SEK). 
    // We provide a fallback just in case the cart is empty while testing the UI.
    const finalAmount = stripeAmount > 0 ? stripeAmount : 500;
    const options = {
        mode: 'payment',
        amount: finalAmount,
        currency: 'sek',
        paymentMethodTypes: [selectedMethod],
        appearance: {
            theme: 'stripe',
            variables: {
                colorPrimary: '#E6B220',
                colorBackground: '#ffffff',
                colorText: '#000000',
                borderRadius: '8px',
            }
        },
    };
    return (
        <Elements stripe={stripePromise} options={options}>
            <StripeCheckoutForm />
        </Elements>
    );
};
export default StripeWrapper;