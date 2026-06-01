import React from "react";
import { useNavigate } from "react-router-dom";
import AboutImg from "../../assets/Images/1.Home Page/_CoverAboutUs1.png";
import DiscoverMoreButton from "../DiscoverMoreButton/DiscoverMoreButton";

// this component is for the about us section on the home page
const AboutUsSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about-us");
    window.scrollTo(0, 0);
  };

  return (
    <section className="w-full flex h-[208px] md:h-[326px] lg:h-[463px] mt-8 md:mt-10 lg:mt-16">
      <div className="relative w-full overflow-hidden">

        {/* Background + Gradient */}
        <div className="absolute inset-0 flex justify-end">
          <div className="relative w-[75%] h-full">
            <img
              src={AboutImg}
              alt="About Us"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[#F7F3EB] to-transparent" />
          </div>
        </div>

        {/* Text + Button */}
        <div className="relative z-10 flex h-full items-center pl-10 md:pl-20 lg:pl-30 xl:pl-60">
          <div className="space-y-4 text-center">

            <h2 className="font-inter font-bold text-[#E6B220] 
                                    text-[13px] md:text-[24px] lg:text-[40px] leading-[130%] tracking-[-2.3%]">
              Every dish is made with
              <br />
              love, passion, and the
              <br />
              warmth of home.
            </h2>

            <DiscoverMoreButton onClick={handleClick} title="More About Us" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUsSection;
