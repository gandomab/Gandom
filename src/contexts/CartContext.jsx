import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // Initialize from LocalStorage so data persists on refresh
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('localCart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [deliveryFee, setDeliveryFee] = useState(30.00);

    useEffect(() => {
        localStorage.setItem('localCart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const updateQuantity = (id, amount) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
            )
        );
    };

    // this function is used to remove a product from the cart
    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    // Logic to calculate sub total
    const totalCost = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    // Free delivery rule logic
    useEffect(() => {
        const FREE_SHIPPING_THRESHOLD = 500; // Change this value for the free delivery rule.

        if (cart.length === 0) {
            setDeliveryFee(0.00);
        } else if (totalCost >= FREE_SHIPPING_THRESHOLD) {
            setDeliveryFee(0.00);
        } else {
            setDeliveryFee(30.00);
        }
    }, [totalCost, cart.length]);

    // this function is used to clear the cart
    const clearCart = () => {
        setCart([]);
    };


    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart, totalCost, deliveryFee }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);