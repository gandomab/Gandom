import icon1 from "../../assets/Images/1.Home Page/icons/icon 1.svg";
import icon2 from "../../assets/Images/1.Home Page/icons/icon 2.svg";
import icon3 from "../../assets/Images/1.Home Page/icons/icon 3.svg";
import icon4 from "../../assets/Images/1.Home Page/icons/icon 4.svg";
import icon5 from "../../assets/Images/1.Home Page/icons/icon 5.svg";
import icon6 from "../../assets/Images/1.Home Page/icons/icon 6.svg";

const icons = [
    { src: icon1, alt: "icon1", label: "100% Fresh Vegetables" },
    { src: icon2, alt: "icon2", label: "High Quality Ingredients" },
    { src: icon3, alt: "icon3", label: "No Chemical Preservatives" },
    { src: icon4, alt: "icon4", label: "Natural Protein & Fiber" },
    { src: icon5, alt: "icon5", label: "No Artificial Colors" },
    { src: icon6, alt: "icon6", label: "Made With Olive Oil" },
];

// this component is for the icon section on the home page
const HomeIconSection = () => {
    return (

        <section className="w-full my-6 flex flex-col items-center">
            <div className="w-[345px] h-[55px] md:w-[704px] md:h-[119px] xl:w-[1246px] xl:h-[275px] mx-auto">
                <p className="text-inter font-black text-[#DEA401] text-[14px] md:text-[25px] xl:text-[55px] text-center 
                            leading-[160%] tracking-[-1%]
                            ">
                    GANDOM OFFERS HEALTHY TASTY MEALS NATURALLY RICH IN PROTEIN AND FIBRE ROOTED IN TRADITION
                </p>
            </div>

            <div className="grid grid-rows-2 grid-cols-3 items-center justify-center 
                            gap-x-10 md:gap-x-30 lg:gap-x-40 xl:gap-x-48 gap-y-2 md:gap-y-8 xl:gap-y-16
                            mx-4">
                {icons.map((icon, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img src={icon.src} alt={icon.alt} className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] xl:w-[230px] xl:h-[230px]" />
                        <p className="text-inter font-semibold text-[#426B1F] text-[8px] md:text-[13px] xl:text-[20px] w-[154px] h-[60px]
                            leading-[150%] tracking-[-2.2%] 
                            text-center">
                            {icon.label}
                        </p>
                    </div>
                ))}
            </div>

            <div className="w-[344px] h-[54px] md:w-[702px] md:h-[48px] xl:w-[1114px] xl:h-[163px] mx-auto">
                <p className="font-inter font-bold text-[#DEA401] text-[14px] md:text-[20px] xl:text-[36px] 
                            leading-[160%] tracking-[-2.3%] 
                            text-center">
                    WHOLESOME FOOD INSPIRED BY AUTHENTIC RECIPES CRAFTED FOR TODAY’S GATHERING AND ENJOYMENT
                </p>
            </div>
        </section>

    );
};

export default HomeIconSection;
