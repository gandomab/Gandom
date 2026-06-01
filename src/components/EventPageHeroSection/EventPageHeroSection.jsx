import React from "react";
import coverImage from "../../assets/Images/4.Events/EventsCover.png";
const EventPageHeroSection = () => {
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
                                    text-[32px] md:text-[42px] lg:text-[52px] xl:text-[88px] mt-2 -mr-4 md:-ml-6 lg:-ml-6 xl:-ml-16 whitespace-nowrap">
                            Events and
                        </span>
                        <span className="block font-santa font-normal text-[#E9610C] leading-[132%] tracking-[-2%] 
                                    text-[32px] md:text-[42px] lg:text-[52px] xl:text-[88px]
                                    w-[67px] h-[42px] md:w-[212px] md:h-[78px] xl:w-[338px] xl:h-[124px]
                                   -mt-2 md:-mt-3 lg:-mt-1 xl:-mt-2 -ml-13 md:-ml-14 lg:-ml-12 xl:-ml-28 rotate-[-3.70deg] whitespace-nowrap">
                            Special Promotions
                        </span>
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default EventPageHeroSection;