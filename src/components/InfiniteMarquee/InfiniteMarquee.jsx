const InfiniteMarquee = () => {
    const baseItems = ["10% special discount", "20% off on first purchase", "25% Black Friday discount"];
    const items = [...baseItems, ...baseItems]; // Duplicate to ensure it spans the full screen width smoothly

    return (
        <div className="relative flex overflow-hidden bg-[#E9610C] h-[24px] md:h-[33px] lg:h-[54px] items-center mt-8 md:mt-10 lg:mt-16">
            {/* 1. The Container  */}
            <div className="flex animate-marquee min-w-full shrink-0 items-center justify-around">
                {items.map((item, index) => (
                    <span key={index} className="text-inter text-[15px] md:text-[27px] lg:text-[44px] font-bold 
                                               mx-2 md:mx-5 lg:mx-10 text-white leading-[120%] tracking-[-2%] whitespace-nowrap">
                        {item}
                    </span>
                ))}
            </div>


            {/* 2. The Duplicate (Essential for the infinite loop) */}
            <div aria-hidden="true" className="flex animate-marquee min-w-full shrink-0 items-center justify-around">
                {items.map((item, index) => (
                    <span key={index} className="text-inter text-[15px] md:text-[27px] lg:text-[44px] font-bold 
                                               mx-2 md:mx-5 lg:mx-10 text-white leading-[120%] tracking-[-2%] whitespace-nowrap">
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default InfiniteMarquee;