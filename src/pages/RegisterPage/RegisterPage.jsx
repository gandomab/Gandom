import React, { useState } from "react";
import RegisterHeroSection from "../../components/RegisterHeroSection/RegisterHeroSection";
import RegisterForm from "../../components/RegisterFormSection/RegisterForm";


const RegisterPage = () => {

    return (
        <div className="w-full">
            {/* Hero section for the register page */}
            <section className="mt-4 mb-4">
                <RegisterHeroSection />
            </section>
            <section className="mt-10">
                <div className="w-[375px] h-[59px] md:w-[711px] md:h-[117px] lg:w-[1051px] lg:h-[127px] xl:w-[1248px] xl:h-[141px] mx-auto flex justify-center">
                    <p className="font-inter font-bold text-[#E6B220] text-[12px] md:text-[16px] lg:text-[24px] xl:text-[36px] leading-[130%] px-4 lg:px-10 xl:px-20">
                        Create your Gandom account
                        <span className="font-medium"> and enjoy a personalized experience, exclusive offers,
                            and faster ordering all designed to make your healthy eating journey easier and more delicious. </span>
                    </p>
                </div>

            </section>
            <section className="mt-4 mb-14">
                <RegisterForm />
            </section>
        </div>
    );
};

export default RegisterPage;
