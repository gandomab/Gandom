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
            <section className="mt-10 mb-20">
                <div className="relative ">

                    <h2 className="text-[15px] md:text-[25px] xl:text-[40px] font-bold text-[#DEA401] text-center leading-[160%] mb-12 md:mb-6 ">
                        The Perfect Partner for Every Workout
                    </h2>

                    <div className="flex flex-row mx-2 md:mx-10 lg:mx-40 xl:mx-48 gap-2 md:gap-8 xl:gap-24 items-start">

                        {/* The images container */}
                        <div className="relative pb-[140px]">

                            <img
                                src={Image2}
                                alt="Gym vending machine"
                                className="w-[210px] h-[210px] md:w-[335px] md:h-[335px] xl:w-[533px] xl:h-[533px] block shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
                            />


                            <div className="absolute md:left-[0px] md:-bottom-4 xl:left-[0px] xl:-bottom-32 rotate-[-3.24deg]">
                                <div className="w-[140px] h-[154px] md:w-[166px] md:h-[183px] xl:w-[278px] xl:h-[313px] 
                                             p-2 pb-4 md:pb-8 xl:pb-10 flex flex-col items-center justify-center relative shrink-0
                                             shadow-[0px_4px_4px_0px_#00000040] border-2 border-[#E6E6E6] bg-[#FAFAF5] ">
                                    <img
                                        src={Image3}
                                        alt="Soup at the gym"
                                        className="w-[132px] h-[132px] md:w-[161px] md:h-[161px] xl:w-[255px] xl:h-[255px] object-cover"
                                    />
                                </div>
                            </div>


                            <div className="absolute md:left-[170px] md:-bottom-8 xl:left-[270px] xl:-bottom-40 rotate-[3.82deg]">
                                <div className="w-[140px] h-[154px] md:w-[166px] md:h-[183px] xl:w-[278px] xl:h-[313px] 
                                             p-2 pb-4 md:pb-8 xl:pb-10 flex flex-col items-center justify-center relative shrink-0
                                             shadow-[0px_4px_4px_0px_#00000040] border-2 border-[#E6E6E6] bg-[#FAFAF5] ">
                                    <img
                                        src={Image1}
                                        alt="Gym waffle"
                                        className="w-[132px] h-[132px] md:w-[161px] md:h-[161px] xl:w-[255px] xl:h-[255px] object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* The text container */}
                        <div className="w-[336px] h-[513px] md:w-[336px] md:h-[588px] xl:w-[640px] xl:h-[767px] 
                        ">
                            <p className="text-inter text-[#000000] text-justify font-normal text-[12px] md:text-[13px] xl:text-[20px] leading-[160%] mb-4">
                                Your workout doesn’t start or end at the gym — it begins with what you eat.
                                Proper nutrition before, during, and after exercise is key to performance and recovery.
                                Before training, your body needs energy from complex carbohydrates and proteins to prepare
                                your muscles for exertion. During your workout, it’s important to stay fueled and hydrated to
                                maintain strength and focus. Afterward, a meal rich in protein and natural nutrients helps rebuild
                                muscle tissue and restore balance.
                            </p>

                            <p className="text-inter text-[#000000] text-justify font-normal text-[12px] md:text-[13px] xl:text-[20px] leading-[160%] mb-4">
                                Gandom meals and snacks are carefully crafted to support each of these stages.
                                Our high-protein waffles make a great pre- or post-workout option, giving you quick
                                energy without processed sugars. Our soups and porridges provide slow-release carbohydrates
                                and plant-based protein to keep you full and nourished. Whether you’re building strength,
                                improving endurance, or just staying active, Gandom gives you the nutrition you need to
                                perform at your best — naturally.
                            </p>

                            <p className="text-inter text-[#000000] text-justify font-normal text-[12px] md:text-[13px] xl:text-[20px] leading-[160%] mb-4">
                                And now, enjoying your favorite Gandom products is easier than ever.
                                Our vending machines will be available in gyms across the city, so you can grab a
                                wholesome, protein-rich meal or snack right where you train. Whether you’re finishing
                                a workout or preparing to start one, you’ll always have access to real, healthy food —
                                made for movement and ready when you are.
                            </p>
                        </div>

                    </div>
                </div>

            </section>

        </div>
    );
};

export default GymPage;
