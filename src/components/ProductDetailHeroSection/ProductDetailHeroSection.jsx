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
        <section className="w-full flex flex-col items-center mt-12 mb-12 px-2 md:px-10 xl:px-20">
            <div className="flex flex-col md:flex-row md:gap-12 xl:gap-24 p-6 space-y-5 md:space-y-0">
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <img src={product.image} className="md:rounded-[20px] xl:rounded-[34px] w-full object-cover" alt={product.name || "product"} />
                </div>

                {/* Info Section */}
                <div className="w-full md:w-1/2 text-left">
                    <div className="flex flex-col space-y-1">
                        <h1 className="font-inter font-semibold text-[16px] md:text-[27px] xl:text-[48px] leading-[130%]">{product.title}</h1>
                        <p className="font-inter font-semibold text-[#426B1F] text-[16px] md:text-[20px] xl:text-[36px] leading-[130%]">{product.price} SEK</p>
                        <p className="font-inter font-normal text-[12px] md:text-[20px] xl:text-[36px] leading-[130%]">(Include all taxes)</p>
                    </div>

                    {/* Dynamic Customization List */}
                    <div className="mt-6">
                        {product.customizations?.length > 0 ? (
                            <>
                                <h3 className="font-inter font-semibold text-[13px] md:text-[15px] xl:text-[24px] leading-[130%] mb-3">Customize your Dish</h3>
                                <div className="space-y-1">
                                    {product.customizations.map((option) => (
                                        <label key={option.id} className="flex items-center justify-between w-[125px] md:w-[150px] xl:w-[200px] cursor-pointer group">
                                            <span className="font-inter font-normal text-[#6D6D6D] text-[12px] md:text-[14px] xl:text-[20px] leading-[150%]">{option.label}</span>
                                            <div
                                                onClick={() => handleToggle(option.id)}
                                                className={`w-[12px] h-[12px] md:w-[14px] md:h-[14px] xl:w-[16px] xl:h-[16px] border-2 flex items-center justify-center transition-colors ${selectedOptions[option.id] ? "bg-[#DEA401] border-[#DEA401]" : "bg-[#D9D9D9] border-[#D9D9D9]"
                                                    }`}
                                            >
                                                {selectedOptions[option.id] && <span className="text-xs">✓</span>}
                                            </div>
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
                        <div className="mb-1 text-[12px] md:text-[14px] xl:text-[22px] inline-flex items-center justify-center">
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
                        <div className="font-inter font-semibold text-[13px] md:text-[15px] xl:text-[20px] leading-[130%]">{productdish.ratingnum}</div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-2 flex gap-4">
                        <button className="bg-[#E6B220] text-white font-inter font-bold text-[10px] md:text-[14px] xl:text-[36px] leading-[130%] 
                            md:px-4 md:py-2 xl:px-8 xl:py-3 w-[74px] h-[33px] md:w-[123px] md:h-[38px]  xl:w-[271px] xl:h-[67px] rounded-[23px] md:rounded-[10px] xl:rounded-[20px]">
                            Add to Cart
                        </button>
                        <button
                            onClick={() => navigate("/productsPage")}
                            className="text-[#E6B220] border border-gray-300 font-inter font-bold text-[9px] md:text-[13px] xl:text-[20px] leading-[130%]
                            md:px-4 md:py-2 xl:px-8 xl:py-3 w-[74px] h-[33px] md:w-[123px] md:h-[38px]  xl:w-[271px] xl:h-[67px] rounded-[23px] md:rounded-[13px] xl:rounded-[20px]"
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
