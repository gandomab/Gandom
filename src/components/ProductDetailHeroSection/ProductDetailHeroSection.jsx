import React, { useState, useEffect } from "react";
import { FaStar, FaHeart, FaArrowLeft, FaArrowRight, FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BestSellerBadge from "../../assets/Images/2.Dishes/BestSellerBadge.svg";
import { useCart } from "../../contexts/CartContext";

// this is product detail page hero section with responsive images
const ProductDetailHeroSection = ({ product }) => {
    if (!product) return null;

    const rating = product.rating || 0;
    const fillPercentage = (rating / 5) * 100;
    const navigate = useNavigate();
    const { addToCart, cart } = useCart();

    const isOutOfStock = product.stock_status === "out_of_stock" || (product.stock_quantity !== undefined && product.stock_quantity <= 0);
    const isFewLeft = product.stock_status === "few_left";

    // track selected options for option groups and sub-options
    const [selectedSubOptions, setSelectedSubOptions] = useState(() => {
        const init = {};
        (product.option_groups || []).forEach((group) => {
            (group.options || []).forEach((subOpt) => {
                init[subOpt.id] = false;
            });
        });
        return init;
    });

    // Reset selection state when the product changes
    useEffect(() => {
        const subOptInit = {};
        if (product && product.option_groups) {
            product.option_groups.forEach((group) => {
                (group.options || []).forEach((subOpt) => {
                    subOptInit[subOpt.id] = false;
                });
            });
        }
        setSelectedSubOptions(subOptInit);
        setValidationError("");
    }, [product]);

    const [added, setAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [validationError, setValidationError] = useState("");

    const handleSubOptionToggle = (groupId, subOptionId) => {
        const group = (product.option_groups || []).find(g => g.id === groupId);
        if (!group) return;

        setSelectedSubOptions((prev) => {
            const isCurrentlyChecked = prev[subOptionId];

            if (isCurrentlyChecked) {
                return { ...prev, [subOptionId]: false };
            }

            const maxSelect = group.max_select;
            if (maxSelect === 1) {
                // Uncheck all other sub-options in this group
                const updated = { ...prev };
                (group.options || []).forEach((subOpt) => {
                    updated[subOpt.id] = (subOpt.id === subOptionId);
                });
                setValidationError(""); // Clear error since selection has been made
                return updated;
            } else if (maxSelect > 1) {
                // Count current checked sub-options in this group
                let checkedCount = 0;
                (group.options || []).forEach((subOpt) => {
                    if (prev[subOpt.id]) checkedCount++;
                });

                if (checkedCount >= maxSelect) {
                    return prev; // ignore check
                }
            }

            setValidationError(""); // Clear error since selection has been made
            return { ...prev, [subOptionId]: true };
        });
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    // Build a flat list of all image URLs (primary image first, followed by others)
    const images = [];
    if (product.primary_image) {
        images.push(product.primary_image);
    }
    if (product.images && Array.isArray(product.images)) {
        product.images.forEach(imgObj => {
            const url = typeof imgObj === "string" ? imgObj : imgObj.image;
            if (url && !images.includes(url)) {
                images.push(url);
            }
        });
    }

    const nextImage = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    // Calculate dynamic displayed price based on selected customizations
    const basePrice = parseFloat(product.price) || 0;
    let extraPrice = 0;
    if (product.option_groups && Array.isArray(product.option_groups)) {
        product.option_groups.forEach((group) => {
            (group.options || []).forEach((subOpt) => {
                if (selectedSubOptions[subOpt.id]) {
                    extraPrice += parseFloat(subOpt.price_modifier || 0);
                }
            });
        });
    }
    const displayedPrice = (basePrice + extraPrice).toFixed(2);

    // this function is for adding the product to the cart
    const handleAddToCart = () => {
        if (isOutOfStock) {
            setValidationError("This product is out of stock.");
            return;
        }

        const cartQuantity = (cart || [])
            .filter(item => item.id === product.id)
            .reduce((sum, item) => sum + item.quantity, 0);

        if (product.stock_quantity !== undefined && product.stock_quantity !== null && cartQuantity + 1 > product.stock_quantity) {
            setValidationError(`Cannot add more items. Only ${product.stock_quantity} left in stock.`);
            return;
        }

        if (product.option_groups && Array.isArray(product.option_groups)) {
            for (const group of product.option_groups) {
                if (group.required) {
                    const groupOptionIds = (group.options || []).map(o => o.id);
                    const hasSelection = groupOptionIds.some(id => selectedSubOptions[id]);
                    if (!hasSelection) {
                        setValidationError(`Please select an option`);
                        return; // Block addition to cart
                    }
                }
            }
        }

        const selectedLabels = [];
        const selectedOptionIds = [];
        let totalExtraPrice = 0;
        if (product.option_groups && Array.isArray(product.option_groups)) {
            product.option_groups.forEach((group) => {
                (group.options || []).forEach((subOpt) => {
                    if (selectedSubOptions[subOpt.id]) {
                        selectedLabels.push(`${group.name}: ${subOpt.name}`);
                        selectedOptionIds.push(subOpt.id);
                        totalExtraPrice += parseFloat(subOpt.price_modifier || 0);
                    }
                });
            });
        }

        const finalPrice = (basePrice + totalExtraPrice).toFixed(2);

        const cartItem = {
            ...product,
            price: finalPrice,
            selectedCustomizations: selectedLabels,
            options: selectedOptionIds
        };
        addToCart(cartItem);
    };

    return (
        <section className="w-full flex flex-col items-center mt-12 px-2 md:px-5">
            <div className="flex flex-col md:flex-row md:gap-10 lg:gap-24 xl:gap-24 p-6 space-y-5 md:space-y-0 w-full md:items-stretch">
                {/* Image Section */}
                <div className="relative shrink-0 mx-auto md:mx-0 w-full max-w-[342px] aspect-[342/245] md:max-w-none md:w-[350px] md:h-[251px] md:aspect-auto xl:w-[615px] xl:h-[441px]">
                    <img src={images[currentIndex] || product.primary_image} className="rounded-[14px] md:rounded-[20px] xl:rounded-[34px] w-full h-full object-cover" alt={product.name || "product"} />
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
                    <div className="flex justify-between items-start w-full gap-4">
                        <div className="flex-1 flex flex-col space-y-1 min-w-0">
                            <div className="inline-block md:block items-center gap-x-2">
                                <h1 className="font-inter font-semibold text-[16px] md:text-[27px] xl:text-[48px] leading-[130%] inline word-break">{product.name}</h1>
                                {" "}
                                {/* Mobile Rating */}
                                <div className="inline-flex md:hidden items-center gap-1 text-lg font-bold mt-0.5">
                                    <div className="mb-0.5 text-[12px] inline-flex items-center justify-center">
                                        <div className="relative"><FaStar className="text-gray-300" />
                                            <div
                                                className="absolute top-0 left-0 overflow-hidden"
                                                style={{ width: `${fillPercentage}%` }}>
                                                <FaStar className="text-[#FFC94B]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="font-inter font-semibold text-[13px] leading-[130%]">{product.rating}</div>
                                </div>
                            </div>
                            <p className="font-inter font-semibold text-[#426B1F] text-[16px] md:text-[20px] xl:text-[36px] leading-[130%]">{displayedPrice} <span>{product.currency}</span></p>
                            <p className="font-inter font-normal text-[12px] md:text-[20px] xl:text-[36px] leading-[130%]">(Include all taxes)</p>

                        </div>
                        {/* Right aligned icons and mobile buttons */}
                        <div className="flex flex-col items-center flex-shrink-0 mt-0 md:mt-1">
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

                    {/* Mobile ID 403 customise block */}
                    {product?.id === 403 && (
                        <div className="flex md:hidden justify-between items-center w-full mt-2">
                            <div className="font-inter font-medium text-black text-[13px] flex items-center gap-1.5">
                                <p className="font-inter font-medium text-black text-[12px] md:text-[13px] xl:text-[24px] whitespace-nowrap">customise and order</p>
                                <div className="bg-[#D9D9D9] rounded-[4px] p-[2px] flex items-center justify-center">
                                    <FaArrowDown className="text-[10px]" />
                                </div>
                            </div>
                            <button
                                onClick={() => navigate("/productsPage")}
                                className="text-[#E6B220] border border-[#E6B220] font-inter font-bold text-[11px] px-4 py-1.5 rounded-[20px] whitespace-nowrap"
                            >
                                Back to menu
                            </button>
                        </div>
                    )}

                    {/* Dynamic Customization List */}
                    <div className="flex justify-between items-start w-full mt-2 md:mt-1 xl:mt-2">
                        <div className="w-auto">
                            {product?.id !== 403 && (
                                <>
                                    {product.option_groups?.length > 0 ? (
                                        <>
                                            <h3 className="font-inter font-semibold text-[13px] md:text-[15px] xl:text-[24px] leading-[130%] mb-3">Customize your Dish</h3>
                                            <div className="space-y-4">
                                                {product.option_groups.map((group) => (
                                                    <div key={group.id} className="mb-4">
                                                        {/* Group Header Checkbox */}
                                                        <div
                                                            className="flex items-center justify-between w-[250px] md:w-[300px] xl:w-[400px] mb-2"
                                                        >
                                                            <span className="font-inter font-semibold text-black text-[10px] md:text-[16px] xl:text-[22px] leading-[130%] capitalize">
                                                                {group.name}
                                                            </span>
                                                        </div>

                                                        {/* Sub-options List */}
                                                        <div className="pl-4 space-y-1.5 md:space-y-1 xl:space-y-1.5 mt-2">
                                                            {(group.options || []).map((subOpt) => {
                                                                const priceMod = parseFloat(subOpt.price_modifier || 0);
                                                                const displayLabel = priceMod > 0
                                                                    ? `${subOpt.name} (+${priceMod.toFixed(2)} ${product.currency || 'SEK'})`
                                                                    : subOpt.name;
                                                                return (
                                                                    <div
                                                                        key={subOpt.id}
                                                                        onClick={() => handleSubOptionToggle(group.id, subOpt.id)}
                                                                        className="flex items-center justify-between w-[220px] md:w-[260px] xl:w-[350px] cursor-pointer group"
                                                                    >
                                                                        <span className="font-inter font-normal text-[#6D6D6D] text-[12px] md:text-[14px] xl:text-[20px] leading-[150%] capitalize">
                                                                            {displayLabel}
                                                                        </span>
                                                                        <div
                                                                            className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] xl:w-[16px] xl:h-[16px] bg-[#D9D9D9] flex items-center justify-center transition-colors shrink-0"
                                                                        >
                                                                            {selectedSubOptions[subOpt.id] && <span className="text-[16px] md:text-[20px] xl:text-[24px] text-[#00DD00] font-black pointer-events-none mb-1 ml-1">✓</span>}
                                                                        </div>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <p className="font-inter font-semibold text-[13px] md:text-[14px] xl:text-[24px] leading-[130%]">No customization available</p>
                                    )}
                                </>
                            )}
                        </div>

                        {/* Mobile Buttons */}
                        {product?.id !== 403 && (
                            <div className="flex md:hidden flex-col gap-3">
                                {isOutOfStock && (
                                    <p className="text-[#CC0000] font-bold font-inter text-[8px] text-center mb-1">
                                        Out of Stock
                                    </p>
                                )}
                                {isFewLeft && (
                                    <p className="text-[#E6B220] font-semibold font-inter text-[8px] text-center mb-1">
                                        Few left ({product.stock_quantity} remaining)
                                    </p>
                                )}
                                {validationError && (
                                    <p className="text-[#CC0000] font-inter text-[8px] text-center mb-1">
                                        {validationError}
                                    </p>
                                )}
                                <button
                                    onClick={handleAddToCart}
                                    disabled={isOutOfStock}
                                    className={`font-inter font-bold text-[10px] leading-[130%] w-[74px] h-[33px] rounded-[23px] ${isOutOfStock ? "bg-gray-400 text-white cursor-not-allowed opacity-50" : "bg-[#E6B220] text-white"}`}>
                                    Add to cart
                                </button>
                                <button
                                    onClick={() => navigate("/productsPage")}
                                    className="text-[#E6B220] border border-gray-300 font-inter font-bold text-[9px] leading-[130%] w-[74px] h-[33px] rounded-[23px]"
                                >
                                    Back to menu
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Rating */}
                    {product?.id === 403 ? (
                        <div className="hidden md:flex items-end gap-10 xl:gap-16 md:mt-1 xl:mt-2">
                            <div className="flex flex-col items-start gap-1">
                                <div className="flex items-center gap-2 text-lg font-bold">
                                    <div className="mb-1 md:text-[14px] xl:text-[22px] inline-flex items-center justify-center">
                                        <div className="relative"><FaStar className="text-gray-300" />
                                            <div
                                                className="absolute top-0 left-0 overflow-hidden"
                                                style={{ width: `${fillPercentage}%` }}>
                                                <FaStar className="text-[#FFC94B]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="font-inter font-semibold md:text-[15px] xl:text-[20px] leading-[130%]">{product.rating}</div>
                                </div>
                                <div className="font-inter font-medium text-black text-[12px] md:text-[14px] xl:text-[16px] leading-[130%] flex items-center gap-1.5 ml-1">
                                    <span className="whitespace-nowrap">customise and order</span>
                                    <div className="bg-[#D9D9D9] rounded-[4px] p-[2px] flex items-center justify-center">
                                        <FaArrowDown className="text-[10px]" />
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => navigate("/productsPage")}
                                className="text-[#E6B220] border border-[#E6B220] font-inter font-bold text-[9px] md:text-[13px] xl:text-[28px] leading-[130%]
                                md:px-4 md:py-2 xl:px-8 xl:py-3 w-[74px] h-[33px] md:w-[123px] md:h-[38px] xl:w-[259px] xl:h-[67px] rounded-[23px] md:rounded-[13px] xl:rounded-[20px]"
                            >
                                Back to menu
                            </button>
                        </div>
                    ) : (
                        <div className="hidden md:flex items-center gap-2 text-lg font-bold md:mt-1 xl:mt-2">
                            <div className="mb-1 md:text-[14px] xl:text-[22px] inline-flex items-center justify-center">
                                <div className="relative"><FaStar className="text-gray-300" />
                                    <div
                                        className="absolute top-0 left-0 overflow-hidden"
                                        style={{ width: `${fillPercentage}%` }}>
                                        <FaStar className="text-[#FFC94B]" />
                                    </div>
                                </div>
                            </div>
                            <div className="font-inter font-semibold md:text-[15px] xl:text-[20px] leading-[130%]">{product.rating}</div>
                        </div>
                    )}

                    {/* Buttons */}
                    {product.id !== 403 && (
                        <div className="hidden md:flex flex-col mt-2 md:mt-1 xl:mt-2 gap-2">
                            {isOutOfStock && (
                                <p className="text-[#CC0000] font-bold font-inter text-[8px] md:text-[10px] xl:text-[14px] mb-1">
                                    Out of Stock
                                </p>
                            )}
                            {isFewLeft && (
                                <p className="text-[#E6B220] font-semibold font-inter text-[8px] md:text-[10px] xl:text-[14px] mb-1">
                                    Few left ({product.stock_quantity} remaining)
                                </p>
                            )}
                            {validationError && (
                                <p className="text-[#CC0000] font-inter text-[8px] md:text-[10px] xl:text-[14px]">
                                    {validationError}
                                </p>
                            )}
                            <div className="flex gap-6">
                                <button
                                    onClick={handleAddToCart}
                                    disabled={isOutOfStock}
                                    className={`font-inter font-bold text-[10px] md:text-[14px] xl:text-[28px] leading-[130%] 
                                    md:px-4 md:py-2 xl:px-8 xl:py-3 w-[74px] h-[33px] md:w-[123px] md:h-[38px] xl:w-[259px] xl:h-[67px] rounded-[23px] md:rounded-[10px] xl:rounded-[20px] ${isOutOfStock ? "bg-gray-400 text-white cursor-not-allowed opacity-50" : "bg-[#E6B220] text-white"}`}>
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
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProductDetailHeroSection;
