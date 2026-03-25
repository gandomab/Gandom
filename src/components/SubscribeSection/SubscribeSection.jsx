import { useNavigate } from "react-router-dom";
import CoverSubscribe from "../../assets/Images/8.Subscription/CoverSubscribe.png";
import DiscoverMoreButton from "../DiscoverMoreButton/DiscoverMoreButton";

// this component is for the subscribe section on the home page
const SubscribeSection = () => {
    //const navigate = useNavigate();

    // const handleClick = () => {
    //     navigate("/subscription");
    // };

    return (
        <section className="w-full flex h-[208px] md:h-[326px] lg:h-[463px] mt-16">
            <div className="relative w-full overflow-hidden">

                {/* Background + Gradient */}
                <div className="absolute inset-0 flex justify-start">
                    <div className="relative w-[75%] h-full">
                        <img
                            src={CoverSubscribe}
                            alt="Healthy Gym Meals"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-y-0 right-0 w-[45%] bg-gradient-to-l from-[#F7F3EB] to-transparent" />
                    </div>
                </div>

                {/* Text + Button */}
                <div className="relative z-10 flex h-full items-center justify-end pr-10 md:pr-20 lg:pr-60">
                    <div className="space-y-4 text-center">

                        <h2 className="font-inter font-bold text-[#E6B220] 
                                    text-[13px] md:text-[24px] lg:text-[40px] leading-[130%] tracking-[-2.3%]">
                            Eat Better Every Week
                        </h2>

                        <DiscoverMoreButton title="Subscribe" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SubscribeSection;
