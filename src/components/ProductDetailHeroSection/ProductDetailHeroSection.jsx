import React, { useState } from "react";
import { FaStar, FaHeart, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BestSellerBadge from "../../assets/Images/2.Dishes/BestSellerBadge.svg";
const ProductDetailHeroSection = ({ productdish }) => {
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
    const [isFavorite, setIsFavorite] = useState(false);

    const handleToggle = (id) => {
        setSelectedOptions((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    // Safety check: Fallback to an empty array if images don't exist
    const images = product.images;

    const nextImage = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
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
        <section className="w-full flex flex-col items-center mt-12 px-2 md:px-5">
            <div className="flex flex-col md:flex-row md:gap-10 lg:gap-24 xl:gap-24 p-6 space-y-5 md:space-y-0 w-full md:items-stretch">
                {/* Image Section */}
                <div className="relative shrink-0 mx-auto md:mx-0 w-full max-w-[342px] aspect-[342/245] md:max-w-none md:w-[350px] md:h-[251px] md:aspect-auto xl:w-[615px] xl:h-[441px]">
                    <img src={images[currentIndex]} className="rounded-[14px] md:rounded-[20px] xl:rounded-[34px] w-full h-full object-cover" alt={product.name || "product"} />
                    {images.length > 1 && (
                        <>
                            {/* Left Icon (Previous) */}
                            <button className="absolute left-3 xl:left-5 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 bg-black/20 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm">
                                <FaArrowLeft
                                    onClick={prevImage}
                                    className="text-sm md:text-base xl:text-lg" />
                            </button>
                            {/* Right Icon (Next) */}
                            <button className="absolute right-3 xl:right-5 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 bg-black/20 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm">
                                <FaArrowRight
                                    onClick={nextImage}
                                    className="text-sm md:text-base xl:text-lg" />
                            </button>
                        </>
                    )}
                </div>

                {/* Info Section */}
                <div className="w-full flex-1 text-left flex flex-col justify-between md:py-0 xl:py-1">
                    <div className="flex justify-between items-start w-full">
                        <div className="flex flex-col space-y-1">
                            <div className="flex items-center gap-2">
                                <h1 className="font-inter font-semibold text-[16px] md:text-[27px] xl:text-[48px] leading-[130%]">{product.title}</h1>
                                {/* Mobile Rating */}
                                <div className="flex md:hidden items-center gap-1 text-lg font-bold mt-0.5">
                                    <div className="mb-0.5 text-[12px] inline-flex items-center justify-center">
                                        <div className="relative"><FaStar className="text-gray-300" />
                                            <div
                                                className="absolute top-0 left-0 overflow-hidden"
                                                style={{ width: `${fillPercentage}%` }}>
                                                <FaStar className="text-[#FFC94B]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="font-inter font-semibold text-[13px] leading-[130%]">{productdish.ratingnum}</div>
                                </div>
                            </div>
                            <p className="font-inter font-semibold text-[#426B1F] text-[16px] md:text-[20px] xl:text-[36px] leading-[130%]">{product.price} SEK</p>
                            <p className="font-inter font-normal text-[12px] md:text-[20px] xl:text-[36px] leading-[130%]">(Include all taxes)</p>
                        </div>
                        {/* Right aligned icons and mobile buttons */}
                        <div className="flex flex-col items-center mt-0 md:mt-1">
                            <div className="flex flex-row md:flex-col items-center gap-2 md:gap-3">
                                <button
                                    onClick={() => setIsFavorite(!isFavorite)}
                                    className="order-2 md:order-1 w-[28px] h-[28px] md:w-[33px] md:h-[33px] xl:w-[59px] xl:h-[59px] bg-[#D9D9D9] rounded-full flex items-center justify-center hover:bg-[#c9c9c9] transition-colors"
                                >
                                    <FaHeart className={`text-sm md:text-xl xl:text-2xl transition-colors ${isFavorite ? "text-red-500" : "text-[#9F9F9F]"}`} />
                                </button>
                                <img src={BestSellerBadge} alt="share" className="order-1 md:order-2 w-[38px] h-[34px] md:w-[45px] md:h-[40px] xl:w-[80px] xl:h-[71px] flex items-center justify-center" />
                            </div>
                        </div>
                    </div>

                    {/* Dynamic Customization List */}
                    <div className="flex justify-between items-start w-full mt-2 md:mt-1 xl:mt-2">
                        <div className="w-auto">
                            {product.customizations?.length > 0 ? (
                                <>
                                    <h3 className="font-inter font-semibold text-[13px] md:text-[15px] xl:text-[24px] leading-[130%] mb-3">Customize your Dish</h3>
                                    <div className="space-y-1 md:space-y-0.5 xl:space-y-1">
                                        {product.customizations.map((option) => (
                                            <label key={option.id} className="flex items-center justify-between w-[125px] md:w-[150px] xl:w-[200px] cursor-pointer group">
                                                <span className="font-inter font-normal text-[#6D6D6D] text-[12px] md:text-[14px] xl:text-[20px] leading-[150%]">{option.label}</span>
                                                <div
                                                    onClick={() => handleToggle(option.id)}
                                                    className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] xl:w-[16px] xl:h-[16px] bg-[#D9D9D9] flex items-center justify-center transition-colors shrink-0"
                                                >
                                                    {selectedOptions[option.id] && <span className="text-[16px] md:text-[20px] xl:text-[24px] text-[#00DD00] font-black pointer-events-none mb-1 ml-1">✓</span>}
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <p className="font-inter font-semibold text-[13px] md:text-[14px] xl:text-[24px] leading-[130%]">No customization available</p>
                            )}
                        </div>

                        {/* Mobile Buttons */}
                        <div className="flex md:hidden flex-col gap-3">
                            <button className="bg-[#E6B220] text-white font-inter font-bold text-[10px] leading-[130%] w-[74px] h-[33px] rounded-[23px]">
                                Add to cart
                            </button>
                            <button
                                onClick={() => navigate("/productsPage")}
                                className="text-[#E6B220] border border-gray-300 font-inter font-bold text-[9px] leading-[130%] w-[74px] h-[33px] rounded-[23px]"
                            >
                                Back to menu
                            </button>
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="hidden md:flex items-center gap-2 text-lg font-bold md:mt-1 xl:mt-2">
                        {/* star rating container */}
                        <div className="mb-1 md:text-[14px] xl:text-[22px] inline-flex items-center justify-center">
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
                        <div className="font-inter font-semibold md:text-[15px] xl:text-[20px] leading-[130%]">{productdish.ratingnum}</div>
                    </div>

                    {/* Buttons */}
                    <div className="hidden md:flex mt-2 md:mt-1 xl:mt-2 gap-6">
                        <button className="bg-[#E6B220] text-white font-inter font-bold text-[10px] md:text-[14px] xl:text-[28px] leading-[130%] 
                            md:px-4 md:py-2 xl:px-8 xl:py-3 w-[74px] h-[33px] md:w-[123px] md:h-[38px]  xl:w-[259px] xl:h-[67px] rounded-[23px] md:rounded-[10px] xl:rounded-[20px]">
                            Add to cart
                        </button>
                        <button
                            onClick={() => navigate("/productsPage")}
                            className="text-[#E6B220] border border-gray-300 font-inter font-bold text-[9px] md:text-[13px] xl:text-[28px] leading-[130%]
                            md:px-4 md:py-2 xl:px-8 xl:py-3 w-[74px] h-[33px] md:w-[123px] md:h-[38px]  xl:w-[259px] xl:h-[67px] rounded-[23px] md:rounded-[13px] xl:rounded-[20px]"
                        >
                            Back to menu
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetailHeroSection;
