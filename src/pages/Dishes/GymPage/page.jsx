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
            <section className="my-6">

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
