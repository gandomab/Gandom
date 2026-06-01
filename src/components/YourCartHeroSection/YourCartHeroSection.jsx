import React from "react";
import coverImage from "../../assets/Images/9.YourCart/YourCartCover.png";
const YourCartHeroSection = () => {
    return (
        <section className="w-full flex h-[208px] md:h-[326px] lg:h-[474px]">
            <div className="relative w-full overflow-hidden">

                {/* Background + Gradient */}
                <div className="absolute inset-0 flex justify-end">
                    <div className="relative w-[75%] h-full">
                        <img
                            src={coverImage}
                            alt="Your Cart"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[#F7F3EB] to-transparent" />
                    </div>
                </div>

                {/* Text + Button */}
                <div className="relative z-10 flex h-full items-center pl-5 md:pl-20 lg:pl-30 xl:pl-60">
                    <h1 className=" leading-tight text-left">
                        <span className="block font-inter font-bold text-[#DEA401] leading-[120%] tracking-[-2.2%] 
                                    w-[122px] h-[38px] md:w-[211px] md:h-[67px] xl:w-[335px] xl:h-[106px]
                                    text-[40px] md:text-[50px] lg:text-[60px] xl:text-[88px] mt-2 md:mt-6 lg:mt-8 xl:mt-8">
                            Your
                        </span>
                        <span className="block font-santa font-normal text-[#FFC943] leading-[132%] tracking-[-2%] 
                                    text-[40px] md:text-[50px] lg:text-[60px] xl:text-[94px]
                                    w-[67px] h-[42px] md:w-[212px] md:h-[78px] xl:w-[338px] xl:h-[124px]
                                   -mt-2 md:-mt-6 lg:-mt-8 xl:-mt-8 ml-12 md:ml-16 lg:ml-24 xl:ml-30 rotate-[3.62deg]">
                            Cart
                        </span>
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default YourCartHeroSection;