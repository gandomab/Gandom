import coverImage from "../../assets/Images/7.Gym/coverhealthygympage.png";

// this component is for the Gym hero section on the Gym page
const GymPageHeroSection = () => {

    return (

        <section className="w-full flex h-[208px] md:h-[326px] lg:h-[474px]">
            <div className="relative w-full overflow-hidden">

                {/* Background + Gradient */}
                <div className="absolute inset-0 flex justify-end">
                    <div className="relative w-[75%] h-full">
                        <img
                            src={coverImage}
                            alt="About Us"
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
                            text-[40px] md:text-[50px] lg:text-[60px] xl:text-[88px]">
                            Healthy
                        </span>
                        <span className="block font-santa font-normal text-[#0C8CE9] leading-[132%] tracking-[-2%] 
                            text-[40px] md:text-[50px] lg:text-[60px] xl:text-[94px]
                            w-[67px] h-[42px] md:w-[212px] md:h-[78px] xl:w-[338px] xl:h-[124px]
                            mt-1 ml-20 md:ml-28 lg:ml-32 xl:ml-40 rotate-[3.62deg]">
                            Gym
                        </span>
                    </h1>
                </div>

            </div>
        </section>
    );
};

export default GymPageHeroSection;