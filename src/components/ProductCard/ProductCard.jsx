const ProductCard = ({ productdish }) => {
  return (
    <div className="bg-[#FFFFFF] border rounded-xl overflow-hidden w-full h-[331.46px] shadow-[4.73px_4.73px_16.9px_0.68px_rgba(0,0,0,0.25)]">

        {/* Top Section: Image */}
        <div className="h-60 overflow-hidden">
        <img 
            src={productdish.image} 
            alt={productdish.title} 
            className="w-full min-h-64 object-cover" />
        </div>

        {/* Bottom Section: Details */}
        <div className="p-4 min-h-20 flex justify-between items-end">
            {/* Left Column: Name and Price */}
            <div className="flex flex-col">
            <h3 className="font-inter font-semibold text-2xl leading-[130%]">{productdish.title}</h3>
            <p className="text-[#426B1F] font-semibold h-[26px] text-sm leading-[130%]">{productdish.price} SEK</p>
            </div>

            {/* Right Column: Rating and View Button */}
        <   div className="flex flex-col items-end h-full justify-between gap-1">
            {/* Rating - using a hardcoded star for now, or use an icon library */}
            <div className="flex items-center gap-1 text-lg font-bold">
                <div className="text-[#FFC94B] w-[38px] h-[16px] inline-flex items-center justify-center ">★</div>
                <div className="font-inter font-semibold leading-[1.3]">4.5</div>
            </div>
            
            <button className="px-5 py-1 bg-[#F5C242] text-white font-semibold font-inter rounded-[10px] text-sm hover:opacity-90">
                View
            </button>
            </div>
        </div>

    </div>
  );
};

export default ProductCard;