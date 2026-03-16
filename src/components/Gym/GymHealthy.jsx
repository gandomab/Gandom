import { useNavigate } from "react-router-dom";
import coverGymHealthy from "../../assets/Images/7.Gym/coverhealthygymhome.png";
import DiscoverMoreButton from "../DiscoverMoreButton/DiscoverMoreButton";

const GymHealthy = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/gym");
    };

    return (
        <section className="w-full flex h-[208px] md:h-[326px] lg:h-[463px] mt-16">
            <div className="relative w-full overflow-hidden">

                {/* Background + Gradient */}
                <div className="absolute inset-0 flex justify-end">
                    <div className="relative w-[75%] h-full">
                        <img
                            src={coverGymHealthy}
                            alt="Healthy Gym Meals"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[#F7F3EB] to-transparent" />
                    </div>
                </div>

                {/* Text + Button */}
                <div className="relative z-10 flex h-full items-center pl-10 md:pl-20 lg:pl-60">
                    <div className="space-y-4 text-center">

                        <h2 className="font-inter font-bold text-[#3b6f22] 
                                    text-[13px] md:text-[24px] lg:text-[40px] leading-[130%] tracking-[-2.3%]">
                            All-natural, high-protein
                            <br />
                            meals to refuel before and
                            <br />
                            after your workout.
                        </h2>

                        <DiscoverMoreButton onClick={handleClick} title="Discover More" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default GymHealthy;
