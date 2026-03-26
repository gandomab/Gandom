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
            {/* <div className="relative max-w-[1100px] mx-auto px-6 md:px-10 pt-14 pb-20">

                <div className="py-8 text-center">
                    <h2 className="font-santa font-normal text-primary text-[40px] md:text-[52px] lg:text-[64px] mb-12">
                        How we Born
                    </h2>
                </div>

                <img
                    src={img1}
                    alt="Sakineh"
                    className="hidden lg:block absolute top-40 -left-4 w-[230px] rounded-xl shadow-lg rotate-[-4deg]"
                />
                <img
                    src={img2}
                    alt="Sakineh"
                    className="hidden lg:block absolute top-[420px] -left-10 w-[230px] rounded-xl shadow-lg rotate-[3deg]"
                />
                <img
                    src={img3}
                    alt="Sakineh"
                    className="hidden lg:block absolute top-56 -right-6 w-[230px] rounded-xl shadow-lg rotate-[5deg]"
                /> */}

            {/* متن اصلی
                <div className="mx-auto max-w-[620px] text-center">
                    <p className="text-[#111] text-[15px] leading-7 mb-4 text-left md:text-center">
                        Our co-founder, Sakineh, has always been deeply passionate about
                        food that not only delights the senses but truly nourishes the body.
                        From a young age, she was fascinated by the connection between
                        nutrition, flavor, and well-being, which led her to formally study
                        dietetics, culinary arts, and baking. Yet, Sakineh’s journey was
                        never confined to the classroom.
                    </p>

                    <p className="text-[#111] text-[15px] leading-7 mb-4 text-left md:text-center">
                        Driven by curiosity and a desire to experience authentic food
                        cultures firsthand, she traveled extensively across countries,
                        immersing herself in the local way of life. During her travels, she
                        volunteered in community kitchens, learning the secrets behind
                        traditional recipes and discovering how simple, natural ingredients
                        can create extraordinary flavors.
                    </p>

                    <p className="text-[#111] text-[15px] leading-7 mb-6 text-left md:text-center">
                        Through these experiences, Sakineh cultivated a unique approach to
                        cooking—one that blends health-conscious principles with the rich,
                        aromatic tastes of traditional cuisines. Her dedication and
                        creativity culminated in the development of the distinctive,
                        flavorful recipes that today form the heart and soul of Gandom’s
                        menu.
                    </p>

                    <p className="text-sm text-gray-700 mb-4 text-left md:text-center">
                        Countries through which she traveled learning the secrets of each
                        cuisine.
                    </p> */}

            <div className="flex flex-wrap items-center justify-center gap-2">
                {flags.map((flag, idx) => (
                    <img
                        key={idx}
                        src={flag}
                        alt={`flag-${idx}`}
                        className="h-7 w-auto rounded-sm border border-[#ddd] bg-white"
                    />
                ))}
            </div>
            {/* </div> */}
            {/* </div> */}
        </div>
    );
};

export default AboutUsPage;
