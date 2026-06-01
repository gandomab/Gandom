import React from "react";
import coverImage from "../../assets/Images/10.Login Page/LoginHeroImg.png";
const RegisterHeroSection = () => {
    return (
        <section className="w-full flex h-[208px] md:h-[326px] lg:h-[474px]">
            <div className="relative w-full overflow-hidden">

                {/* Background + Gradient */}
                <div className="absolute inset-0 flex justify-start">
                    <div className="relative w-[75%] h-full">
                        <img
                            src={coverImage}
                            alt="Login"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-y-0 right-0 w-[45%] bg-gradient-to-l from-[#F7F3EB] to-transparent" />
                    </div>
                </div>

                {/* Text + Button */}
                <div className="relative z-10 flex h-full items-center justify-end pr-10 md:pr-20 lg:pr-30 xl:pr-60">
                    <h1 className=" leading-tight text-right">
                        <span className="block font-inter font-bold text-[#DEA401] leading-[120%] tracking-[-2.2%] 
                                    w-[122px] h-[38px] md:w-[211px] md:h-[67px] xl:w-[335px] xl:h-[106px]
                                    text-[40px] md:text-[50px] lg:text-[60px] xl:text-[88px] mt-2 md:mt-6 lg:mt-8xl:mt-10">
                            Create
                        </span>
                        <span className="block font-santa font-normal text-[#426B1F] leading-[132%] tracking-[-2%] whitespace-nowrap
                                    text-[32px] md:text-[50px] lg:text-[60px] xl:text-[94px]
                                    w-[160px] h-[42px] md:w-[248px] md:h-[64px] lg:w-[349px] lg:h-[83px] xl:w-[484px] xl:h-[124px]
                                   -mt-2 md:-mt-6 lg:-mt-4 xl:-mt-10 ml-2 md:ml-20 lg:ml-12 xl:ml-28 -rotate-[3.62deg]">
                            Your Account
                        </span>
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default RegisterHeroSection;