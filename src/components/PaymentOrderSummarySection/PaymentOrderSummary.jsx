import React from 'react';
import { useCart } from '../../contexts/CartContext';
import DeliveryBikeIcon from '../../assets/Images/11.Pay/DeliveryBikeIcon.png';

const PaymentOrderSummary = () => {
    const { cart, totalCost, deliveryFee } = useCart();

    const grandTotal = totalCost + deliveryFee;

    return (
        <div className="bg-[#FAF8F5] p-6 md:p-8 rounded-[20px] border border-[#EBEBEB] shadow-sm font-inter">
            <h3 className="font-inter font-semibold text-[#000000] text-[20px] md:text-[20px] lg:text-[25px] xl:text-[36px] leading-[130%] mb-6">
                Your order
            </h3>

            {/* Cart Items */}
            <div className="space-y-4 mb-6">
                {cart.map((item, index) => (
                    <div key={index} className="flex justify-between items-center font-inter font-semibold text-[14px] md:text-[16px] leading-[130%] text-[#000000]">
                        <span className="w-1/2 truncate pr-2">{item.title}</span>
                        <span className="w-1/4 text-center">x {item.quantity}</span>
                        <span className="w-1/4 text-right text-[#426B1F]">{(item.price * item.quantity).toFixed(2)} SEK</span>
                    </div>
                ))}
            </div>

            <div className="border-t border-[#000000] mb-6"></div>

            {/* Subtotal & Delivery */}
            <div className="space-y-4 mb-6 text-[14px] md:text-[16px] font-inter font-normal leading-[150%] text-[#6D6D6D]">
                <div className="flex justify-between items-center">
                    <span>Subtotal</span>
                    <span>{totalCost.toFixed(2)} SEK</span>
                </div>
                <div className="flex justify-between items-center">
                    <span>Standard delivery</span>
                    <span>{deliveryFee.toFixed(2)} SEK</span>
                </div>
            </div>

            <div className="border-t border-[#000000] mb-6"></div>

            {/* Total */}
            <div className="flex justify-between items-center mb-8">
                <span className="font-inter font-bold text-[#000000] text-[24px] md:text-[28px] leading-[130%]">Total</span>
                <span className="font-inter font-bold text-[#E6B220] text-[24px] md:text-[28px] xl:text-[32px] leading-[130%]">{grandTotal.toFixed(2)} SEK</span>
            </div>

            {/* Scheduled Delivery Card */}
            <div className="border border-[#000000] rounded-[13px] p-3 md:p-4 flex items-center">
                <img src={DeliveryBikeIcon} alt="Delivery Bike Icon" className="w-[45px] h-[40px]" />
                <div className="ml-3 flex items-center flex-wrap gap-x-2 text-[12px] md:text-[14px] font-inter font-semibold text-[#000000] leading-[130%]">
                    <span>Scheduled <br className="hidden md:block" /> delivery</span>
                    <span className="text-[16px] md:text-[20px] px-1">:</span>
                    <span>November 23, 12.00-1.30 PM</span>
                </div>
            </div>
        </div>
    );
};

export default PaymentOrderSummary;
