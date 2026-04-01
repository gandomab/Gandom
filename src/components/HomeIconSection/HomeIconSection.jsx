

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

            <div className="w-[344px] h-[54px] md:w-[702px] md:h-[48px] xl:w-[1114px] xl:h-[163px] mx-auto">
                <p className="font-inter font-bold text-[#DEA401] text-[14px] md:text-[20px] xl:text-[36px] 
                            leading-[160%] tracking-[-2.3%] 
                            text-center py-4">
                    WHOLESOME FOOD INSPIRED BY AUTHENTIC RECIPES CRAFTED FOR TODAY’S GATHERING AND ENJOYMENT
                </p>
            </div>
        </section>

    );
};

export default HomeIconSection;
