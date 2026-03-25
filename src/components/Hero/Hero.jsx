import React from "react";
import Cover1 from "../../assets/Images/1.Home Page/Cover1.png";
import Covermob from "../../assets/Images/1.Home Page/Covermob.png";
import Covertab from "../../assets/Images/1.Home Page/Covertab.png";
import logo from "../../assets/Logo Gandom/Logo white.png";

// this component is for the hero section on the home page
const Hero = () => {
    return (
        <div className="w-full">

            <section
                className="relative w-full h-[450px] md:h-[508px] lg:h-[731px] bg-cover bg-center 
                            flex flex-col md:flex-row 
                            items-end md:items-center 
                            justify-end 
                            pb-2 md:pb-0 md:pr-16 
                            top-4
                            bg-[image:var(--bg-mobile)] md:bg-[image:var(--bg-tablet)] lg:bg-[image:var(--bg-desktop)]"
                style={{
                    '--bg-mobile': `url(${Covermob})`,
                    '--bg-tablet': `url(${Covertab})`,
                    '--bg-desktop': `url(${Cover1})`
                }}
            >

                {/* <div className="absolute inset-0 bg-black/20" /> */}


                <div className="relative z-10 text-center md:text-right text-white 
                                flex flex-col items-center md:items-end w-full md:w-auto px-4 md:px-0">
                    <img src={logo} alt="GANDOM Logo" className="w-[150px] md:w-[238px] lg:w-[501px] mb-4" />
                    <p className="text-[10px] md:text-sm lg:text-xl font-lexend">
                        Wholesome flavors, redefined.
                    </p>
                </div>
            </section>

            <section className="w-full py-10 flex flex-col items-center">

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
