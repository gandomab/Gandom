import React, { useState } from "react";

const ProductSectionOne = ({ productdish }) => {
    const product = productdish || {};

    const [selectedOptions, setSelectedOptions] = useState(() => {
        const init = {};
        (product.customizations || []).forEach((opt) => {
            init[opt.id] = false;
        });
        return init;
    });

    const [added, setAdded] = useState(false);

    const handleToggle = (id) => {
        setSelectedOptions((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    // const handleAddToCart = () => {
    //     const selected = Object.keys(selectedOptions).filter((id) => selectedOptions[id]);
    //     const cartItem = { ...product, selectedCustomizations: selected };

    //     try {
    //         const existing = JSON.parse(localStorage.getItem("cart") || "[]");
    //         existing.push(cartItem);
    //         localStorage.setItem("cart", JSON.stringify(existing));
    //     } catch (e) {
    //         console.error("Failed to save cart:", e);
    //     }

    //     setAdded(true);
    //     setTimeout(() => setAdded(false), 1800);
    // };

    return (
        <section className="w-full flex flex-col items-center  mb-12">
            <div className="flex flex-col md:flex-row gap-10 p-6">
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <img src={product.image} className="rounded-2xl w-full object-cover" alt={product.name || "product"} />
                </div>

                {/* Info Section */}
                <div className="w-full md:w-1/2 text-left">
                    <h1 className="text-4xl font-santa">{product.title}</h1>
                    <p className="text-2xl font-bold mt-2">{product.price} SEK</p>

                    {/* Dynamic Customization List */}
                    {product.customizations?.length > 0 && (
                        <div className="mt-6 p-4">
                            <h3 className="font-bold text-lg mb-3">Customize your Dish</h3>
                            <div className="space-y-3">
                                {product.customizations.map((option) => (
                                    <label key={option.id} className="flex items-center gap-3 cursor-pointer group">
                                        <div
                                            onClick={() => handleToggle(option.id)}
                                            className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${selectedOptions[option.id] ? "bg-[#DEA401] border-[#DEA401]" : "border-gray-300"
                                                }`}
                                        >
                                            {selectedOptions[option.id] && <span className="text-xs">✓</span>}
                                        </div>
                                        <span className="text-black">{option.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Add to Cart Button */}
                    <button
                        className="mt-8 w-full bg-[#DEA401] text-white py-4 rounded-full font-bold hover:bg-[#DEA401] transition-colors"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductSectionOne;
