const ProductSoupSection = () => {
    return (
<div className="flex items-center w-[1264px] h-[52px] top-[202px] mx-auto my-12 gap-4 ">

        {/* Left line */}
        <div className="w-20 border-t-8 border-[#DEA401]"></div>
        
        {/* Text */}
        <h2 className="font-santa font-normal sm:text-3xl md:text-4xl lg:text-5xl text-[#DEA401] text-center leading-tight">
            Soups
        </h2>
        
        {/* Right line */}
        <div className="grow border-t-8 border-[#DEA401]"></div>
      </div>
    );
};

export default ProductSoupSection;
