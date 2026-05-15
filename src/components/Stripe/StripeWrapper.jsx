import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import StripeCheckoutForm from './StripeCheckoutForm';
import { useCart } from '../../contexts/CartContext'; // <-- 1. Import your context
// Replace with your actual key from your project owner
const stripePromise = loadStripe('pk_test_51TXHZx7OUQV7MJKVpzxlpRlis8DxkJF9n4sVXEOtlfWvhElMtdeJq4OkGxheTrbthb6eTycm0qt9lvdFYTxytdWO003dXjvaB7');
const StripeWrapper = () => {
    // 2. Pull the totals from your cart
    const { totalCost, deliveryFee } = useCart();

    // 3. Calculate the grand total (e.g., 500 SEK totalCost + 0 SEK deliveryFee = 500 SEK)
    const grandTotal = totalCost + deliveryFee;

    // 4. Convert to smallest currency unit for Stripe (öre for SEK, cents for USD)
    // Example: 500 SEK * 100 = 50000 öre
    // We use Math.round to prevent any weird decimals like 50000.00000001 from crashing Stripe.
    const stripeAmount = Math.round(grandTotal * 100);
    // Stripe has a minimum charge requirement (usually ~5 SEK). 
    // We provide a fallback just in case the cart is empty while testing the UI.
    const finalAmount = stripeAmount > 0 ? stripeAmount : 500;
    const options = {
        mode: 'payment',
        amount: finalAmount, // <-- 5. Dynamic amount applied here!
        currency: 'sek',     // <-- Changed to SEK to match your app
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