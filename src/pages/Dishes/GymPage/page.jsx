import React from "react";
import GymPageHeroSection from "../../../components/GymPageHeroSection/GymPageHeroSection";
import Image1 from "../../../assets/Images/7.Gym/Gymwafel.png";
import Image2 from "../../../assets/Images/7.Gym/machine.png";
import Image3 from "../../../assets/Images/7.Gym/soupgym.png";

const GymPage = () => {
    return (
        <div className="w-full">
            <section className="mt-4">
                <GymPageHeroSection />
            </section>
            <section className="mt-10 mb-2 md:mb-6 xl:mb-24 px-4 md:px-10 lg:px-20 xl:px-3">
                <div className="max-w-7xl mx-auto">

                    <h2 className="text-[15px] md:text-[25px] xl:text-[40px] font-bold text-[#DEA401] text-center leading-[160%] mb-12 md:mb-6 ">
                        The Perfect Partner for Every Workout
                    </h2>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-4 xl:gap-24 pb-20 md:pb-32">

                        {/* The images container */}
                        <div className="relative w-full md:w-1/2 lg:w-5/12 flex justify-center mt-0 md:mt-10">
                            <div className="relative z-10 w-fit">
                                <img
                                    src={Image2}
                                    alt="Gym vending machine"
                                    className="w-[210px] h-[210px] md:w-[335px] md:h-[335px] xl:w-[533px] xl:h-[533px] block shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
                                />

                                {/* Tablet & Desktop: Image 3 */}
                                <div className="hidden md:block absolute -left-4 -bottom-16 md:left-3 md:-bottom-40 xl:left-1 xl:-bottom-60 z-20 rotate-[-4deg]">
                                    <div className="w-[166px] h-[183px] xl:w-[278px] xl:h-[313px] 
                                                 p-2 pb-8 xl:pb-10 flex flex-col items-center justify-center relative shrink-0
                                                 shadow-[0px_4px_4px_0px_#00000040] border-2 border-[#E6E6E6] bg-[#FAFAF5] ">
                                        <img
                                            src={Image3}
                                            alt="Soup at the gym"
                                            className="w-[161px] h-[161px] xl:w-[255px] xl:h-[255px] object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Tablet & Desktop: Image 1 */}
                                <div className="hidden md:block absolute left-24 -bottom-24 md:left-44 md:-bottom-44 xl:left-72 xl:-bottom-72 z-30 rotate-[4deg]">
                                    <div className="w-[166px] h-[183px] xl:w-[278px] xl:h-[313px] 
                                                 p-2 pb-8 xl:pb-10 flex flex-col items-center justify-center relative shrink-0
                                                 shadow-[0px_4px_4px_0px_#00000040] border-2 border-[#E6E6E6] bg-[#FAFAF5] ">
                                        <img
                                            src={Image1}
                                            alt="Gym waffle"
                                            className="w-[161px] h-[161px] xl:w-[255px] xl:h-[255px] object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* The text container */}
                        <div className="w-full md:w-1/2 xl:w-7/12 flex flex-col justify-center h-auto">
                            <p className="text-inter text-[#000000] text-wrap font-normal text-[12px] md:text-[13px] xl:text-[20px] leading-[160%] px-2 md:mt-8 mb-4">
                                Your workout doesn’t start or end at the gym — it begins with what you eat.
                                Proper nutrition before, during, and after exercise is key to performance and recovery.
                                Before training, your body needs energy from complex carbohydrates and proteins to prepare
                                your muscles for exertion. During your workout, it’s important to stay fueled and hydrated to
                                maintain strength and focus. Afterward, a meal rich in protein and natural nutrients helps rebuild
                                muscle tissue and restore balance.
                            </p>

                            <p className="text-inter text-[#000000] text-wrap font-normal text-[12px] md:text-[13px] xl:text-[20px] leading-[160%] px-2 mb-4">
                                Gandom meals and snacks are carefully crafted to support each of these stages.
                                Our high-protein waffles make a great pre- or post-workout option, giving you quick
                                energy without processed sugars. Our soups and porridges provide slow-release carbohydrates
                                and plant-based protein to keep you full and nourished. Whether you’re building strength,
                                improving endurance, or just staying active, Gandom gives you the nutrition you need to
                                perform at your best — naturally.
                            </p>

                            <p className="text-inter text-[#000000] text-wrap font-normal text-[12px] md:text-[13px] xl:text-[20px] leading-[160%] px-2 mb-4">
                                And now, enjoying your favorite Gandom products is easier than ever.
                                Our vending machines will be available in gyms across the city, so you can grab a
                                wholesome, protein-rich meal or snack right where you train. Whether you’re finishing
                                a workout or preparing to start one, you’ll always have access to real, healthy food —
                                made for movement and ready when you are.
                            </p>

                            {/* Mobile Only: Img3 and Img1 at the bottom of the text container */}
                            <div className="flex md:hidden justify-center items-center mt-12 mb-2 w-full px-4">
                                <div className="relative w-[280px] h-[220px]">
                                    {/* Left Image */}
                                    <div className="absolute z-30 rotate-[-5.77deg] left-[10px] top-[10px]">
                                        <div className="w-[140px] h-[154px] p-2 pb-4 flex flex-col items-center justify-center relative shrink-0 shadow-[0px_4px_4px_0px_#00000040] border-2 border-[#E6E6E6] bg-[#FAFAF5]">
                                            <img
                                                src={Image3}
                                                alt="Soup at the gym"
                                                className="w-[132px] h-[132px] object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Right Image*/}
                                    <div className="absolute z-20 rotate-[3.97deg] left-[145px] top-[50px]">
                                        <div className="w-[140px] h-[154px] p-2 pb-4 flex flex-col items-center justify-center relative shrink-0 shadow-[3px_6px_12px_1px_#00000040] border-2 border-[#E6E6E6] bg-[#FAFAF5]">
                                            <img
                                                src={Image1}
                                                alt="Gym waffle"
                                                className="w-[132px] h-[132px] object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

        </div>
        // <div className="w-full bg-white">


        //     <section className="relative w-full flex justify-end bg-white">

        //         <div className="relative w-[1005px]">


        //             <img
        //                 src={coverImage}
        //                 alt="Healthy Gym cover"
        //                 className="w-full h-auto block"
        //             />


        //             <div
        //                 className="pointer-events-none absolute inset-y-0 left-0 w-[45%]
        //                 bg-gradient-to-r from-white via-white/80 to-transparent"
        //             />

        //             {/* Healthy / Gym - کامل چپ */}
        //             <div className="absolute -left-[180px] top-[150px]">
        //                 <h1 className="leading-tight text-left">
        //                     <span className="block text-[#F5C242] font-semibold text-[64px]">
        //                         Healthy
        //                     </span>
        //                     <span className="block font-santa text-[#2F7AC4] text-[64px] -mt-3">
        //                         Gym
        //                     </span>
        //                 </h1>
        //             </div>
        //         </div>
        //     </section>

        //     <div className="relative max-w-[1005px] mx-auto px-6 md:px-0 pt-20 pb-24">

        //         <h2 className="text-[26px] font-bold text-[#F5A623] tracking-[0.08em] mb-12 text-center">
        //             The Perfect Partner for Every Workout
        //         </h2>

        //         <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">


        //             <div className="relative w-full md:w-[380px] mx-auto md:mx-0 pb-[140px]">

        //                 <img
        //                     src={Image2}
        //                     alt="Gym vending machine"
        //                     className="w-full h-auto block shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
        //                 />


        //                 <div className="hidden sm:block absolute left-[-25px] -bottom-[40px] rotate-[-4deg]">
        //                     <div className="w-[230px] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.22)] pt-3 px-3 pb-4">
        //                         <img
        //                             src={Image3}
        //                             alt="Soup at the gym"
        //                             className="w-full h-full object-cover"
        //                         />
        //                     </div>
        //                 </div>


        //                 <div className="hidden sm:block absolute left-[175px] -bottom-[65px] rotate-[3deg]">
        //                     <div className="w-[230px] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.22)] pt-3 px-3 pb-4">
        //                         <img
        //                             src={Image1}
        //                             alt="Gym waffle"
        //                             className="w-full h-full object-cover"
        //                         />
        //                     </div>
        //                 </div>
        //             </div>


        //             <div className="md:flex-1 text-left max-w-[460px] md:ml-auto">
        //                 <p className="text-[#111111] text-[14px] leading-[1.9] mb-4">
        //                     Your workout doesn’t start or end at the gym — it begins with what you eat.
        //                     Proper nutrition before, during, and after exercise is key to performance and recovery.
        //                     Before training, your body needs energy from complex carbohydrates and proteins to prepare
        //                     your muscles for exertion. During your workout, it’s important to stay fueled and hydrated to
        //                     maintain strength and focus. Afterward, a meal rich in protein and natural nutrients helps rebuild
        //                     muscle tissue and restore balance.
        //                 </p>

        //                 <p className="text-[#111111] text-[14px] leading-[1.9] mb-4">
        //                     Gandom meals and snacks are carefully crafted to support each of these stages.
        //                     Our high-protein waffles make a great pre- or post-workout option, giving you quick
        //                     energy without processed sugars. Our soups and porridges provide slow-release carbohydrates
        //                     and plant-based protein to keep you full and nourished. Whether you’re building strength,
        //                     improving endurance, or just staying active, Gandom gives you the nutrition you need to
        //                     perform at your best — naturally.
        //                 </p>

        //                 <p className="text-[#111111] text-[14px] leading-[1.9]">
        //                     And now, enjoying your favorite Gandom products is easier than ever.
        //                     Our vending machines will be available in gyms across the city, so you can grab a
        //                     wholesome, protein-rich meal or snack right where you train. Whether you’re finishing
        //                     a workout or preparing to start one, you’ll always have access to real, healthy food —
        //                     made for movement and ready when you are.
        //                 </p>
        //             </div>

        //         </div>
        //     </div>
        // </div>
    );
};

export default GymPage;
