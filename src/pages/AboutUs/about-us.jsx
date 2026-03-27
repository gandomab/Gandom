import React from "react";
import iranFlag from "../../assets/Images/3.About Us/Flags/Captura de pantalla 2025-09-24 a la(s) 13.32.40.png";
import turkeyFlag from "../../assets/Images/3.About Us/Flags/Captura de pantalla 2025-09-24 a la(s) 13.30.42.png";
import georgiaFlag from "../../assets/Images/3.About Us/Flags/Captura de pantalla 2025-09-24 a la(s) 13.31.13.png";
import armeniaFlag from "../../assets/Images/3.About Us/Flags/Captura de pantalla 2025-09-24 a la(s) 13.31.24.png";
import malaysiaFlag from "../../assets/Images/3.About Us/Flags/Captura de pantalla 2025-09-24 a la(s) 13.31.35.png";
import thailandFlag from "../../assets/Images/3.About Us/Flags/Captura de pantalla 2025-09-24 a la(s) 13.31.44.png";
import cambodiaFlag from "../../assets/Images/3.About Us/Flags/Captura de pantalla 2025-09-24 a la(s) 13.31.57.png";
import vietnamFlag from "../../assets/Images/3.About Us/Flags/Captura de pantalla 2025-09-24 a la(s) 13.32.12.png";
import kenyaFlag from "../../assets/Images/3.About Us/Flags/Captura de pantalla 2025-09-24 a la(s) 13.32.23.png";
import africa from "../../assets/Images/3.About Us/Flags/Captura de pantalla 2025-09-24 a la(s) 13.32.39.png";
import AboutUsHeroSection from "../../components/AboutUsHeroSection/AboutUsHeroSection";
import AboutUsMainContent from "../../components/AboutUsMainContent/AboutUsMainContent";

const flags = [
    iranFlag,
    turkeyFlag,
    georgiaFlag,
    armeniaFlag,
    malaysiaFlag,
    thailandFlag,
    cambodiaFlag,
    vietnamFlag,
    kenyaFlag,
    africa,
];

const AboutUsPage = () => {
    return (
        <div className="w-full">
            <section className="mt-4">
                <AboutUsHeroSection />
            </section>
            <section className="mt-4">
                <AboutUsMainContent />
            </section>
            <section className="my-4">
                <p className="font-inter font-semibold text-[12px] md:text-[16px] xl:text-[24px] leading-[160%] text-center mb-2">Countries through which she traveled learning the secrets of each cuisine.</p>
                <div className="flex flex-wrap items-center justify-center gap-2 w-[271px] h-[75px] md:w-[550px] md:h-[32px] xl:w-[752px] xl:h-[45px] mx-auto ">
                    {flags.map((flag, idx) => (
                        <img
                            key={idx}
                            src={flag}
                            alt={`flag-${idx}`}
                            className="w-[47px] h-[32px] md:w-[47px] md:h-[32px] xl:w-[65px] xl:h-[44px]"
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutUsPage;
