import React from "react";
import img1 from "../../assets/Images/3.About Us/Sakineh 1.png";
import img2 from "../../assets/Images/3.About Us/Sakineh 2.png";
import img3 from "../../assets/Images/3.About Us/Sakineh 3.png";
import img4 from "../../assets/Images/3.About Us/Sakineh 4.png";

// this component is for the about us main content section on the about us page
const AboutUsMainContent = () => {

    const sections = [
        {
            title: 'Studies',
            text: 'The story of how “Gandom” came to life is a heartfelt journey, born from the love and shared dreams of a mother and her two daughters. The mother has always had a deep passion for foods that are not only delicious but also nutritionally rich and steeped in history. She aimed to craft meals for her daughters that fuelled their daily school routines, brought them joy in eating, and expressed her love, while also allowing her to follow her own passion for cooking.',
            img: img1
        },
        {
            title: 'Travels',
            text: 'She attended culinary classes, studied nutrition, and actively participated in cooking workshops. She traveled around the world and did volunteer work in well known traditional kitchens to learn recipe secrets and gather inspiration from different cultures. Driven by her passion, she volunteered in kitchens around the world, collecting traditional recipes. She blended these timeless recipes with the rich flavors of her Persian culture to create dishes that are both traditional and modern, nutrient dense, preservative free, organic, and made with fresh ingredients.',
            img: img2
        },
        {
            title: 'Volunteer',
            text: 'Her daughters, both combining engineering expertise with an entrepreneurial mindset, decided to turn this family passion into a business. They remember the joy, love, and distinct taste of these healthy meals and want to share that experience. They aim to bring meals to everyone’s table that are rooted in history, balanced in health, and full of joy and energy. With all their heart, the company strives to offer meals made with fresh, eco friendly oils and natural ingredients, rich in protein, for its consumers.',
            img: img3
        },
        {
            title: 'Creation',
            text: 'The name “Gandom” is deeply meaningful in Persian culture. It stands for nourishment, blessing, and everyday sustenance. The golden color of wheat fields brings to mind happiness, health, and abundance. We warmly invite you to a table full of wholesome and delicious food, where “Gandom” brings moments of pure enjoyment and well being.',
            img: img4
        },
    ];

    return (
        <section>
            <div className="relative px-4 md:px-11 lg:px-20 xl:px-32">
                <h2 className="text-[20px] md:text-[25px] xl:text-[40px] font-bold text-[#DEA401] text-center leading-[160%] mb-12 md:mb-6 ">
                    A journey of passion, family, and wholesome food.
                </h2>

                {sections.map((section, index) => (
                    <div
                        key={index}
                        className={`flex flex-row items-center justify-center gap-2 md:gap-14 my-8 md:my-20 ${index % 2 !== 0 ? 'flex-row-reverse' : ''
                            }`}
                    >
                        {/* The Image Box with the title */}
                        <div className={`w-[164px] h-[184px] md:w-[288px] md:h-[324px] xl:w-[509px] xl:h-[573px] 
                            p-2 pb-5 md:pb-10 xl:pb-12 flex flex-col items-center justify-center relative shrink-0
                            shadow-[0px_4px_4px_0px_#00000040] border-2 border-[#E6E6E6] bg-[#FAFAF5] 
                            transition-transform ${index % 2 !== 0 ? 'md:rotate-[3.82deg]' : 'md:rotate-[-4.7deg]'
                            }`}>
                            <div className="w-[143px] h-[143px] md:w-[252px] md:h-[252px] xl:w-[445px] xl:h-[445px] flex items-center justify-center">
                                <img src={section.img} alt="imgs" />
                            </div>
                            <h2 className="absolute bottom-0 md:bottom-1 z-10 text-[16px] md:text-[36px] xl:text-[64px] font-santa font-normal text-[#DEA401] leading-[150%] tracking-[-2.3%]">{section.title}</h2>
                        </div>

                        {/* The Text Content */}
                        <div className="flex-1 w-[179px] h-auto md:w-[364px] xl:w-[492px] xl:h-[374px] relative md:-top-4 xl:-top-16">
                            <div className="font-inter font-semibold text-[12px] md:text-[16px] xl:text-[24px] leading-[130%] md:leading-[150%] xl:leading-[175%]">{section.text}</div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default AboutUsMainContent;
