import React from "react";
import AboutImg from "../../assets/Images/1.Home Page/_CoverAboutUs1.png";

// this component is for the about us hero section on the about us page
const AboutUsHeroSection = () => {

    return (
        <section className="w-full flex h-[208px] md:h-[326px] lg:h-[474px]">
            <div className="relative w-full overflow-hidden">

                {/* Background + Gradient */}
                <div className="absolute inset-0 flex justify-end">
                    <div className="relative w-[75%] h-full">
                        <img
                            src={AboutImg}
                            alt="About Us"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[#F7F3EB] to-transparent" />
                    </div>
                </div>

                {/* Text + Button */}
                <div className="relative z-10 flex h-full items-center pl-5 md:pl-20 lg:pl-30 xl:pl-60">
                    <h2 className="font-santa font-normal text-center text-[#E6B220] 
                                    text-[32px] md:text-[50px] lg:text-[70px]  leading-[150%] tracking-[-2.3%]">
                        The Story Of <br />
                        Gandom
                    </h2>
                </div>

            </div>
        </section>
    );
};

export default AboutUsHeroSection;
