import React from "react";
import YourCartHeroSection from "../../components/YourCartHeroSection/YourCartHeroSection";
import CartItem from "../../components/YourCart/CartItem";
import { useCart } from "../../contexts/CartContext";

const YourCart = () => {
    const { cart } = useCart();

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
                </div>
                {/* RIGHT COLUMN: Order Total */}
            </section>

        </div>
    );
};

export default YourCart;
