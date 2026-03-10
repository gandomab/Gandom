import React from "react";
import coverImg from "../../assets/Images/1.Home Page/Cover1.png";
import logo from "../../assets/Logo Gandom/Logo white.png";


const Hero = () => {
    return (
        <div className="w-full">

            <section
                className="relative w-full h-[450px] md:h-[508px] lg:h-[731px] bg-cover bg-center flex items-center justify-end pr-16 top-4"
                style={{ backgroundImage: `url(${coverImg})` }}
            >

                <div className="absolute inset-0 bg-black/20" />


                <div className="relative z-10 text-right text-white flex flex-col items-end">
                    <img src={logo} alt="GANDOM Logo" className="w-[150px] md:w-[238px] lg:w-[501px] mb-4" />
                    <p className="text-xl font-lexend">
                        Wholesome flavors, redefined.
                    </p>
                </div>
            </section>

            <section className="w-full bg-[#FFF7EC] py-10 flex flex-col items-center">

                <p className="font-lexend text-[20px] font-bold text-[#F5C242] text-center leading-relaxed max-w-[900px]">
                    Gandom provides healthy, high-protein, high-fiber meals rooted in tradition.
                </p>


                <p className="font-lexend text-[20px] font-medium text-[#F5C242] text-center leading-relaxed max-w-[900px] mt-1">
                    Wholesome food inspired by authentic recipes, crafted for today’s lifestyle.
                </p>
            </section>
        </div>
    );
};

export default Hero;
