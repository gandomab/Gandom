import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductSectionOne = ({ productdish }) => {
    const rating = productdish.ratingnum;
    const fillPercentage = (rating / 5) * 100;
    const navigate = useNavigate();
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
                    <p className="text-2xl font-bold mt-2">(Include all taxes)</p>

                    {/* Dynamic Customization List */}
                    <div className="mt-6 p-4">
                        {product.customizations?.length > 0 ? (
                            <>
                                <h3 className="font-bold text-lg mb-3">Customize your Dish</h3>
                                <div className="space-y-3">
                                    {product.customizations.map((option) => (
                                        <label key={option.id} className="flex items-center gap-3 cursor-pointer group">
                                            <div
                                                onClick={() => handleToggle(option.id)}
                                                className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${selectedOptions[option.id] ? "bg-[#DEA401] border-[#DEA401]" : "bg-gray-300 border-gray-300"
                                                    }`}
                                            >
                                                {selectedOptions[option.id] && <span className="text-xs">✓</span>}
                                            </div>
                                            <span className="text-black">{option.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <p className="text-gray-500 italic font-inter text-base">No customization available</p>
                        )}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 text-lg font-bold mt-8">
                        {/* star rating container */}
                        <div className="mb-1 w-[36px] h-[16px] inline-flex items-center justify-center">
                            {/* backround star */}
                            <div className="relative"><FaStar className="text-gray-300" />
                                {/* fill star */}
                                <div
                                    className="absolute top-0 left-0 overflow-hidden"
                                    style={{ width: `${fillPercentage}%` }}>
                                    <FaStar className="text-[#FFC94B]" />
                                </div>
                            </div>
                        </div>
                        <div className="font-inter font-semibold text-[16px] leading-[1.3]">{productdish.ratingnum}</div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-2 flex gap-4">
                        <button className="bg-[#E6B220] text-white px-8 py-3 rounded-lg">
                            Add to Cart
                        </button>
                        <button
                            onClick={() => navigate("/productsPage")}
                            className="text-[#E6B220] border border-gray-300 px-8 py-3 rounded-full"
                        >
                            Back to menu
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductSectionOne;
