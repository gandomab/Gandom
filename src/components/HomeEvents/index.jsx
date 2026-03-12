import React from "react";
import { useNavigate } from "react-router-dom";
import CoverImg from "../../assets/Images/4.Events/CoversCatering.png";

const EventsSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/events");
  };

  return (
    <section className="w-full flex h-[208px] md:h-[326px] lg:h-[463px] mt-16">
      <div className="relative w-full overflow-hidden ">

        {/* Background + Gradient */}
        <div className="absolute inset-0 flex justify-end">
          <div className="relative w-[75%] h-full">
            <img
              src={CoverImg}
              alt="Special Promotion Cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[#F7F3EB] to-transparent" />
          </div>
        </div>

        {/* Text + Button */}
        <div className="relative z-10 flex h-full items-center pl-10 md:pl-20 lg:pl-60">
          <div className="space-y-4 text-center">

            <h2 className=" font-inter font-bold text-[#DE7202]  
                          text-[13px] md:text-[24px] lg:text-[40px] leading-[130%] tracking-[-2.3%] 
                          ">
              Healthy catering for<br />
              every occasion
            </h2>

            <button
              onClick={handleClick}
              className="flex mx-auto items-center justify-center align-middle bg-[#DEA401] text-white font-semibold leading-[130%] whitespace-nowrap
              text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]
              w-[90px] h-[33px] sm:w-[100px] sm:h-[36px] md:w-[125px] md:h-[39px] lg:w-[227px] lg:h-[64px] 
              rounded-[23px] md:rounded-[10px] lg:rounded-[8px] hover:opacity-90 transition"
            >
              Discover More
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EventsSection;
