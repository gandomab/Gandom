import React, { useState } from "react";
import LoginHeroSection from "../../components/LoginHeroSection/LoginHeroSection";


const LoginPage = () => {

    return (
        <div className="w-full">
            {/* Hero section for the login page */}
            <section className="mt-4 mb-4">
                <LoginHeroSection />
            </section>
        </div>
    );
};

export default LoginPage;
