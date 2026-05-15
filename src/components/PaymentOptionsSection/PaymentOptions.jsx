import React, { useState } from 'react';
import CreditDebitIcon from "../../assets/Images/11.Pay/Credit-Debit-icon.png";
import SwishIcon from "../../assets/Images/11.Pay/Swish-icon.png";
import StripeWrapper from '../Stripe/StripeWrapper';

const PaymentOptions = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        // In the future, this will show the payment form
    };

    return (
        <div className="bg-[#FAF8F5] p-6 md:p-8 rounded-[20px] border border-[#EBEBEB] shadow-sm font-inter w-full h-full">
            <h3 className="font-inter font-semibold text-[#000000] text-[20px] md:text-[24px] lg:text-[28px] xl:text-[36px] leading-[130%] mb-6 md:mb-8">
                Choose your payment option
            </h3>

            <div className="flex flex-col gap-6">
                <div className="flex flex-row md:flex-col xl:flex-row gap-4 md:gap-6">
                    {/* Credit/Debit Card Option */}
                    <div className="w-1/2 md:w-full xl:w-1/2">
                        <button
                            onClick={() => handleOptionClick('card')}
                            className="relative w-full h-[75px] md:h-[87px] lg:h-[130px] xl:h-[144px] flex flex-col items-center justify-center rounded-[12px] border border-black bg-[#E6B22080] focus:outline-none"
                        >
                            {/* Radio Button */}
                            <div className={`absolute top-3 left-3 w-[10px] h-[10px] md:w-[14px] md:h-[14px] lg:w-[16px] lg:h-[16px] xl:w-[18px] xl:h-[18px] rounded-full border border-black transition-colors ${selectedOption === 'card' ? 'bg-[#E6B220]' : 'bg-[#E5E7EB]'}`}>
                            </div>

                            {/* Icon */}
                            <img src={CreditDebitIcon} alt="Credit/Debit Card Icon" className="h-[55px] md:h-[65px] lg:h-[75px] xl:h-[108px] object-contain transition-all duration-300 hover:scale-[1.02] active:scale-95 hover:drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)] cursor-pointer" />
                        </button>
                    </div>

                    {/* Swish Option */}
                    <div className="w-1/2 md:w-full xl:w-1/2">
                        <button
                            onClick={() => handleOptionClick('swish')}
                            className="relative w-full h-[75px] md:h-[87px] lg:h-[130px] xl:h-[144px] flex flex-col items-center justify-center rounded-[12px] border border-black bg-[#E6B22080] focus:outline-none"
                        >
                            {/* Radio Button */}
                            <div className={`absolute top-3 left-3 w-[10px] h-[10px] md:w-[14px] md:h-[14px] lg:w-[16px] lg:h-[16px] xl:w-[18px] xl:h-[18px] rounded-full border border-black transition-colors ${selectedOption === 'swish' ? 'bg-[#E6B220]' : 'bg-[#E5E7EB]'}`}>
                            </div>

                            {/* Icon */}
                            <img src={SwishIcon} alt="Swish Icon" className="h-[55px] md:h-[65px] lg:h-[75px] xl:h-[108px] object-contain transition-all duration-300 hover:scale-[1.02] active:scale-95 hover:drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)] cursor-pointer" />
                        </button>
                    </div>
                </div>

                {/* Stripe Form container spans full width below the options */}
                <div className="w-full">
                    {selectedOption === 'card' && (
                        <div className="pt-6 animate-fadeIn">
                            <StripeWrapper />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PaymentOptions;