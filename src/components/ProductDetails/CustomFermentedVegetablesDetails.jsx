import React, { useState } from "react";
import { productdetailsdata } from "../../data/productdetailsdata";

const CustomFermentedVegetablesDetails = ({ productdish }) => {
    if (!productdish || productdish.id !== 403) return null;

    const details = productdetailsdata.find((item) => item.id === 403);
    if (!details) return null;

    // Track selections for checkboxes
    const [selectedOptions, setSelectedOptions] = useState({});

    const handleToggle = (categoryId, optionIndex) => {
        const key = `${categoryId}-${optionIndex}`;
        setSelectedOptions((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    // Helper to render a category's options in columns
    const renderCategory = (category, columns = 1) => {
        if (!category) return null;

        // Compute half length for 2 columns
        const half = Math.ceil(category.options.length / 2);
        const col1 = columns === 2 ? category.options.slice(0, half) : category.options;
        const col2 = columns === 2 ? category.options.slice(half) : [];

        return (
            <div className="flex flex-col space-y-3 w-full">
                <div>
                    <h4 className="font-inter font-bold text-[14px] md:text-[16px] xl:text-[20px] leading-[130%]">{category.title}</h4>
                    {category.note && (
                        <p className="font-inter text-[12px] md:text-[14px] xl:text-[16px] font-normal leading-[130%] mt-1">{category.note}</p>
                    )}
                </div>

                <div className={`grid grid-cols-1 ${columns === 2 ? 'md:grid-cols-2' : ''} gap-x-8 gap-y-2`}>
                    {/* Column 1 */}
                    <div className="space-y-2">
                        {col1.map((opt, index) => {
                            if (!opt) return <div key={index} className="h-5"></div>; // Empty placeholder
                            const globalIndex = index;
                            return (
                                <label key={globalIndex} className="flex items-center justify-between cursor-pointer group pr-4 md:pr-10">
                                    <span className="font-inter font-normal text-[12px] md:text-[14px] xl:text-[16px] leading-[150%]">{opt}</span>
                                    <div
                                        onClick={() => handleToggle(category.id, globalIndex)}
                                        className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] bg-[#D9D9D9] flex items-center justify-center transition-colors shrink-0 outline-none"
                                    >
                                        {selectedOptions[`${category.id}-${globalIndex}`] && <span className="text-[16px] md:text-[20px] text-[#00DD00] font-black pointer-events-none mb-1 ml-1 cursor-pointer">✓</span>}
                                    </div>
                                </label>
                            );
                        })}
                        {/* Suggestion inputs for Column 1 */}
                        <div className="pt-4 space-y-2 pr-4 md:pr-10">
                            <p className="font-inter text-[12px] md:text-[14px] xl:text-[16px]">Your suggestion:</p>
                            <div className="flex items-center justify-between">
                                <input type="text" className="border-b border-gray-400 bg-transparent w-full mr-4 outline-none text-[14px]" />
                                <div className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] bg-[#D9D9D9] shrink-0"></div>
                            </div>
                            <div className="flex items-center justify-between">
                                <input type="text" className="border-b border-gray-400 bg-transparent w-full mr-4 outline-none text-[14px]" />
                                <div className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] bg-[#D9D9D9] shrink-0"></div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 */}
                    {columns === 2 && (
                        <div className="space-y-2">
                            {col2.map((opt, index) => {
                                if (!opt) return <div key={index} className="h-4 md:h-5 w-full"></div>; // Empty placeholder
                                const globalIndex = index + half;
                                return (
                                    <label key={globalIndex} className="flex items-center justify-between cursor-pointer group pr-4 md:pr-10">
                                        <span className="font-inter font-normal text-[12px] md:text-[14px] xl:text-[16px] leading-[150%]">{opt}</span>
                                        <div
                                            onClick={() => handleToggle(category.id, globalIndex)}
                                            className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] bg-[#D9D9D9] flex items-center justify-center transition-colors shrink-0 outline-none"
                                        >
                                            {selectedOptions[`${category.id}-${globalIndex}`] && <span className="text-[16px] md:text-[20px] text-[#00DD00] font-black pointer-events-none mb-1 ml-1">✓</span>}
                                        </div>
                                    </label>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <section className="w-full flex flex-col items-center mt-2 md:mt-6 xl:mt-12 mb-12 px-8 md:px-12 max-w-[1440px] mx-auto">
            <div className="space-y-8 w-full">

                {/* Header Section */}
                <div className="space-y-6">
                    <div className="border-b-4 border-black inline-block pb-1">
                        <h3 className="font-inter text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-bold leading-[130%]">{details.title}</h3>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-inter text-[14px] md:text-[18px] xl:text-[20px] font-bold leading-[130%]">
                            {details.heading}
                        </h4>

                        {/* Description paragraphs (split by newline) */}
                        <div className="space-y-4">
                            {details.description.split('\n\n').map((paragraph, idx) => (
                                <p key={idx} className="font-inter text-[12px] md:text-[14px] xl:text-[18px] font-normal leading-[150%]">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Notes */}
                        {details.notes && (
                            <div className="pt-2">
                                <p className="font-inter text-[12px] md:text-[14px] xl:text-[18px] font-normal pb-1">{details.notesLabel}</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    {details.notes.map((note, idx) => (
                                        <li key={idx} className="font-inter text-[12px] md:text-[14px] xl:text-[18px] font-normal leading-[150%]">
                                            {note}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Customizer Form Area */}
                <div className="space-y-10 pt-4">
                    <h3 className="font-inter text-[16px] md:text-[20px] xl:text-[24px] font-bold leading-[130%] mb-6">Customize your Dish</h3>

                    {/* Vegetables & Fruits (2 columns) */}
                    <div>
                        {renderCategory(details.customizationCategories.find(c => c.id === 'vegFruits'), 2)}
                    </div>

                    {/* Side-by-side Herbs and Vinegars */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {renderCategory(details.customizationCategories.find(c => c.id === 'herbsFlavors'), 1)}
                        {renderCategory(details.customizationCategories.find(c => c.id === 'vinegars'), 1)}
                    </div>

                    {/* Flavor Boosters (2 columns) */}
                    <div>
                        {renderCategory(details.customizationCategories.find(c => c.id === 'flavorBoosters'), 2)}
                    </div>
                </div>

                {/* Bottom Add to Cart Button */}
                <div className="flex justify-end pt-10">
                    <button className="bg-[#E6B220] hover:bg-[#d4a01c] transition-colors text-white font-inter font-bold text-[14px] md:text-[18px] xl:text-[24px] leading-[130%] px-6 py-2 md:px-8 md:py-3 xl:px-10 xl:py-4 rounded-[30px] md:rounded-[15px]">
                        Add to cart
                    </button>
                </div>

            </div>
        </section>
    );
};

export default CustomFermentedVegetablesDetails;
