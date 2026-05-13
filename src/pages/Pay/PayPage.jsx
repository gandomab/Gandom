import React from "react";
import PayPageHeroSection from "../../components/PayPageHeroSection/PayPageHeroSection";

const PayPage = () => {
    return (
        <div className="w-full">
            {/* Hero section for the pay page */}
            <section className="mt-4 mb-4">
                <PayPageHeroSection />
            </section>
        </div>
    );
};

export default PayPage;
