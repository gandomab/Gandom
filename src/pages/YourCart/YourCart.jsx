import React, { useState } from "react";
import YourCartHeroSection from "../../components/YourCartHeroSection/YourCartHeroSection";
import CartItem from "../../components/YourCart/CartItem";
import CalenderSection from "../../components/YourCart/CalenderSection";
import { useCart } from "../../contexts/CartContext";

const YourCart = () => {
    const { cart } = useCart();
    const [isCalendarOpen, setIsCalendarOpen] = useState(true);

    return (
        <div className="w-full">
            {/* Hero section for the cart page */}
            <section className="mt-4 mb-4">
                <YourCartHeroSection />
            </section>
            {/* Cart item section */}
            <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4 mb-4">
                <div className="lg:col-span-8 space-y-8">
                    {/* LEFT COLUMN: Ordered Items & Date Selection */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                        <h2 className="text-[#D4A017] text-2xl font-bold mb-6">Ordered Items</h2>
                        {cart.length > 0 ? (
                            cart.map((productdish) => (
                                <CartItem key={productdish.id} productdish={productdish} />
                            ))
                        ) : (
                            <p className="text-gray-500">Your cart is empty.</p>
                        )}
                    </div>
                    <div className="md:bg-white md:p-8 md:rounded-3xl md:shadow-sm md:border md:border-gray-100">
                        {/* Mobile Accordion Header */}
                        <button 
                            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                            className="w-full flex justify-between items-center bg-white p-4 md:hidden rounded-xl shadow-sm mb-4"
                        >
                            <h2 className="text-[#D4A017] text-lg font-bold">choose your date & time</h2>
                            <div className="bg-gray-100 p-1 rounded-full">
                                <svg className={`w-4 h-4 transition-transform ${isCalendarOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>
                        
                        {/* Desktop Header */}
                        <h2 className="hidden md:block text-[#D4A017] text-2xl font-bold mb-6">choose your date & time</h2>
                        
                        {/* Calendar Content */}
                        <div className={`md:block ${isCalendarOpen ? 'block' : 'hidden'}`}>
                            <CalenderSection />
                        </div>
                    </div>
                </div>
                {/* RIGHT COLUMN: Order Total */}
            </section>

        </div>
    );
};

export default YourCart;
