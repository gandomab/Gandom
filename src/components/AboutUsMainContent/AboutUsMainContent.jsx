import React from "react";
import img1 from "../../assets/Images/3.About Us/Sakineh 1.png";
import img2 from "../../assets/Images/3.About Us/Sakineh 2.png";
import img3 from "../../assets/Images/3.About Us/Sakineh 3.png";
import img4 from "../../assets/Images/3.About Us/Sakineh 4.png";

// this component is for the about us main content section on the about us page
const AboutUsMainContent = () => {

    const sections = [
        { title: 'Studies', text: 'xxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx.', img: img1 },
        { title: 'Travels', text: 'xxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx.', img: img2 },
        { title: 'Volunteer', text: 'xxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx.', img: img3 },
        { title: 'Creation', text: 'xxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx.', img: img4 },
    ];

    return (
        <section>
            <div className="relative px-10 md:px-32">
                <h2 className="text-[20px] md:text-[30px] lg:text-[40px] font-bold text-[#DEA401] text-center leading-[160%]">
                    A journey of passion, family, and wholesome food.
                </h2>

                {sections.map((section, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center gap-12 py-20 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                            }`}
                    >
                        {/* The Image Box with the title */}
                        <div className={`md:w-[288px] md:h-[324px] lg:w-[509px] lg:h-[573px] 
                            p-2 pb-12 flex flex-col items-center justify-center relative
                            shadow-[0px_4px_4px_0px_#00000040] border-2 border-[#E6E6E6] bg-[#FAFAF5] 
                            transition-transform ${index % 2 !== 0 ? 'rotate-[3.82deg]' : 'rotate-[-4.7deg]'
                            }`}>
                            <div className="md:w-[252px] md:h-[252px] lg:w-[445px] lg:h-[445px] flex items-center justify-center">
                                <img src={section.img} alt="imgs" />
                            </div>
                            <h2 className="absolute bottom-1 z-10 md:text-[36px] lg:text-[64px] font-santa font-normal text-[#DEA401] leading-[150%] tracking-[-2.3%]">{section.title}</h2>
                        </div>

                        {/* The Text Content */}
                        <div className="flex-1 space-y-4">
                            <div className="h-2">{section.text}</div>
                            <div className="h-2">{section.text}</div>
                            <div className="h-2">{section.text}</div>
                            <div className="h-2">{section.text}</div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default AboutUsMainContent;
