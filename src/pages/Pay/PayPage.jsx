import React from "react";
import PayPageHeroSection from "../../components/PayPageHeroSection/PayPageHeroSection";
import PaymentOrderSummary from "../../components/PaymentOrderSummarySection/PaymentOrderSummary";

const PayPage = () => {
    return (
        <div className="w-full">
            {/* Hero section for the pay page */}
            <section className="mt-4 mb-4">
                <PayPageHeroSection />
            </section>
            <section className="max-w-7xl mx-auto px-4 mt-8 mb-4">
                <h2 className="font-inter font-bold text-[#E6B220] text-[13px] md:text-[32px] xl:text-[64px] leading-[130%] mb-4">Review and Order</h2>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* LEFT COLUMN: Your Order Summary */}
                    <div className="md:col-span-7 xl:col-span-6">
                        <PaymentOrderSummary />
                    </div>
                    {/* RIGHT COLUMN: Payment Options */}
                    <div className="md:col-span-5 xl:col-span-6">
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                            <h3 className="font-inter font-semibold text-[#000000] text-[20px] md:text-[20px] lg:text-[25px] xl:text-[36px] leading-[130%] mb-6">Choose your payment option</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PayPage;
