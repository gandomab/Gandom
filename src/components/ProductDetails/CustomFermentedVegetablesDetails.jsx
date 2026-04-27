import React, { useState } from "react";
import { productdetailsdata } from "../../data/productdetailsdata";

const CustomFermentedVegetablesDetails = ({ productdish }) => {
    if (!productdish || productdish.id !== 403) return null;
    // find the product details from the productdetailsdata array by id
    const details = productdetailsdata.find((item) => item.id === 403);
    if (!details) return null;

    // Track selections for checkboxes
    const [selectedOptions, setSelectedOptions] = useState({});
    const [suggestionTexts, setSuggestionTexts] = useState({});

    // this function is for toggle the checkboxes
    const handleToggle = (categoryId, optionIndex) => {
        const key = `${categoryId}-${optionIndex}`;
        setSelectedOptions((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    // this function is for toggle the suggestion checkboxes
    const handleSuggestionToggle = (categoryId, suggKey) => {
        const key = `${categoryId}-${suggKey}`;
        // if the suggestion text is empty, do not check the checkbox
        if (!suggestionTexts[key] || suggestionTexts[key].trim() === "") {
            return; // do not check if empty
        }
        handleToggle(categoryId, suggKey);
    };

    // this function is for handle the suggestion inputs
    const handleSuggestionChange = (categoryId, suggKey, text) => {
        const key = `${categoryId}-${suggKey}`;
        setSuggestionTexts(prev => ({ ...prev, [key]: text }));
        // Auto-uncheck if the text is fully cleared
        if (!text.trim()) {
            setSelectedOptions(prev => prev[key] ? { ...prev, [key]: false } : prev);
        }
    };

    // sub-component for render the suggestion inputs
    const renderSuggestions = (categoryId) => (
        <div className="pt-4 space-y-2 pr-4 md:pr-10">
            <p className="font-inter text-[12px] md:text-[14px] xl:text-[16px]">Your suggestion:</p>
            <div className="flex items-center justify-between mt-2">
                <input
                    type="text"
                    value={suggestionTexts[`${categoryId}-sugg-1`] || ""}
                    onChange={(e) => handleSuggestionChange(categoryId, 'sugg-1', e.target.value)}
                    className="border border-[#000000] bg-transparent w-full mr-4 outline-none text-[12px] md:text-[14px] xl:text-[16px] px-1"
                />
                <div
                    onClick={() => handleSuggestionToggle(categoryId, 'sugg-1')}
                    className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] bg-[#D9D9D9] flex items-center justify-center transition-colors shrink-0 outline-none cursor-pointer"
                >
                    {selectedOptions[`${categoryId}-sugg-1`] && <span className="text-[16px] md:text-[20px] text-[#00DD00] font-black pointer-events-none mb-1 ml-1 cursor-pointer">✓</span>}
                </div>
            </div>
            <div className="flex items-center justify-between mt-2">
                <input
                    type="text"
                    value={suggestionTexts[`${categoryId}-sugg-2`] || ""}
                    onChange={(e) => handleSuggestionChange(categoryId, 'sugg-2', e.target.value)}
                    className="border border-[#000000] bg-transparent w-full mr-4 outline-none text-[12px] md:text-[14px] xl:text-[16px] px-1"
                />
                <div
                    onClick={() => handleSuggestionToggle(categoryId, 'sugg-2')}
                    className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] bg-[#D9D9D9] flex items-center justify-center transition-colors shrink-0 outline-none cursor-pointer"
                >
                    {selectedOptions[`${categoryId}-sugg-2`] && <span className="text-[16px] md:text-[20px] text-[#00DD00] font-black pointer-events-none mb-1 ml-1 cursor-pointer">✓</span>}
                </div>
            </div>
        </div>
    );

    // sub-component for render the category options in columns
    const renderCategory = (category, columns = 1) => {
        if (!category) return null;

        // Split options array in half for 2-column layouts
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
                        {/* Suggestion inputs for Column 1 if not fullWidth + 2 columns */}
                        {!(category.fullWidth && columns === 2) && renderSuggestions(category.id)}
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

                            {/* Suggestion inputs for Column 2 if fullWidth + 2 columns */}
                            {category.fullWidth && columns === 2 && renderSuggestions(category.id)}
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <section className="w-full max-w-[1440px] mx-auto px-8 md:px-12 py-6">
            <div className="space-y-10">
                <h3 className="font-inter text-[20px] xl:text-[24px] font-bold">Customize your Dish</h3>

                {/* 
                   fullWidth: true categories take span 2.
                   fullWidth: false categories take span 1.
                */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    {details.customizationCategories.map((category) => (
                        <div
                            key={category.id}
                            className={`${category.fullWidth ? "md:col-span-2" : "md:col-span-1"}`}
                        >
                            {renderCategory(category, category.columns)}
                        </div>
                    ))}
                </div>

                <div className="flex justify-end pt-10">
                    <button className="bg-[#E6B220] text-white px-10 py-3 rounded-[30px] font-bold">
                        Add to cart
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CustomFermentedVegetablesDetails;
