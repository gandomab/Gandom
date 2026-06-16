import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // Initialize from LocalStorage so data persists on refresh
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('localCart');
        const parsed = savedCart ? JSON.parse(savedCart) : [];

        // Helper check for customization support
        const checkCustomizable = (item) => {
            if (item.option_groups && Array.isArray(item.option_groups) && item.option_groups.length > 0) return true;
            if (item.id === 403) return true;
            return false;
        };

        // Sanitize legacy items to ensure they all have a cartItemId
        return parsed.map((item) => {
            if (!item.cartItemId) {
                const isCustomizable = checkCustomizable(item);
                const hasCustomizations = item.selectedCustomizations && item.selectedCustomizations.length > 0;
                let cartItemId;
                if (isCustomizable) {
                    if (hasCustomizations) {
                        const sortedCustomizations = [...item.selectedCustomizations].sort().join('|');
                        cartItemId = `${item.id}-${sortedCustomizations}`;
                    } else {
                        // Unique ID for customizable items with no selections
                        cartItemId = `${item.id}-none-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
                    }
                } else {
                    // Stable ID for standard items
                    cartItemId = `${item.id}-`;
                }
                return { ...item, cartItemId };
            }
            return item;
        });
    });

    const [deliveryFee, setDeliveryFee] = useState(50.00);

    const [scheduledDelivery, setScheduledDelivery] = useState(() => {
        const savedSchedule = localStorage.getItem('localSchedule');
        return savedSchedule ? JSON.parse(savedSchedule) : null;
    });

    const [createdOrderId, setCreatedOrderIdState] = useState(() => {
        return localStorage.getItem('createdOrderId') || null;
    });

    const setCreatedOrderId = (id) => {
        setCreatedOrderIdState(id);
        if (id) {
            localStorage.setItem('createdOrderId', id);
        } else {
            localStorage.removeItem('createdOrderId');
        }
    };

    useEffect(() => {
        localStorage.setItem('localCart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        if (scheduledDelivery) {
            localStorage.setItem('localSchedule', JSON.stringify(scheduledDelivery));
        } else {
            localStorage.removeItem('localSchedule');
        }
    }, [scheduledDelivery]);

    const isProductCustomizable = (product) => {
        if (product.option_groups && Array.isArray(product.option_groups) && product.option_groups.length > 0) {
            return true;
        }
        if (product.id === 403) {
            return true;
        }
        return false;
    };

    const getCartItemId = (product) => {
        const isCustomizable = isProductCustomizable(product);
        const customizations = product.selectedCustomizations || [];

        if (isCustomizable) {
            if (customizations.length > 0) {
                const sortedCustomizations = [...customizations].sort().join('|');
                return `${product.id}-${sortedCustomizations}`;
            } else {
                // If it is customizable but has no options selected, it should be treated as unique
                return `${product.id}-none-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
            }
        } else {
            // Standard product gets a stable identifier
            return `${product.id}-`;
        }
    };

    const addToCart = (product) => {
        const cartItemId = getCartItemId(product);
        const productWithCartId = { ...product, cartItemId };
        setCart((prev) => {
            if (product.stock_status === "out_of_stock" || (product.stock_quantity !== undefined && product.stock_quantity <= 0)) {
                return prev;
            }
            if (product.stock_status === "few_left") {
                const totalQuantityInCart = prev
                    .filter((item) => item.id === product.id)
                    .reduce((sum, item) => sum + item.quantity, 0);
                if (totalQuantityInCart + 1 > product.stock_quantity) {
                    return prev;
                }
            }
            const existing = prev.find((item) => item.cartItemId === cartItemId);
            if (existing) {
                return prev.map((item) =>
                    item.cartItemId === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...productWithCartId, quantity: 1 }];
        });
    };

    const updateQuantity = (cartItemId, amount) => {
        setCart((prev) => {
            const targetItem = prev.find((item) => item.cartItemId === cartItemId);
            if (!targetItem) return prev;
            if (amount > 0) {
                if (targetItem.stock_status === "few_left") {
                    const totalQuantityInCart = prev
                        .filter((item) => item.id === targetItem.id)
                        .reduce((sum, item) => sum + item.quantity, 0);
                    if (totalQuantityInCart + amount > targetItem.stock_quantity) {
                        return prev;
                    }
                }
            }
            return prev.map((item) =>
                item.cartItemId === cartItemId ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
            );
        });
    };

    // this function is used to remove a product from the cart
    const removeFromCart = (cartItemId) => {
        setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
    };

    // Logic to calculate sub total
    const totalCost = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    // Delivery fee logic
    useEffect(() => {
        if (cart.length === 0) {
            setDeliveryFee(0.00);
        } else {
            setDeliveryFee(50.00);
        }
    }, [cart.length]);

    // this function is used to clear the cart
    const clearCart = () => {
        setCart([]);
        setCreatedOrderId(null);
        localStorage.removeItem('createdOrderDetails');
        localStorage.removeItem('createdOrderCheckoutToken');
    };


    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart, totalCost, deliveryFee, scheduledDelivery, setScheduledDelivery, createdOrderId, setCreatedOrderId }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);