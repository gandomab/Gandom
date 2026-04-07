import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useState } from "react";
// This component represents a single product card, displaying the product's image, name, price, and rating. It also includes a "View" button for more details.
const ProductCard = ({ productdish }) => {

    const rating = productdish.ratingnum;
    const fillPercentage = (rating / 5) * 100;

    const [currentImage, setCurrentImage] = useState(productdish.image);
    return (
        <div className="bg-[#FFFFFF] border rounded-xl overflow-hidden w-full h-[331.46px] shadow-[4.73px_4.73px_16.9px_0.68px_rgba(0,0,0,0.25)]">

            {/* Top Section: Image */}
            <div className="h-60 overflow-hidden">
                <img
                    src={currentImage}
                    alt={productdish.title}
                    className="w-full h-full object-cover"
                    onMouseEnter={() => {
                        if (window.innerWidth > 1024) {
                            setCurrentImage(productdish.hoverimage);
                        }
                    }}
                    onMouseLeave={() => {
                        setCurrentImage(productdish.image);
                    }}
                />
            </div>

            {/* Bottom Section: Details */}
            <div className="p-4 min-h-20 flex justify-between items-end">
                {/* Left Column: Name and Price */}
                <div className="flex flex-col">
                    <h3 className="font-inter font-semibold text-2xl leading-[130%] line-clamp-1">{productdish.title}</h3>
                    <p className="text-[#426B1F] font-semibold h-[26px] text-[20px] leading-[130%]">{productdish.price} SEK</p>
                </div>

                {/* Right Column: Rating and View Button */}
                <div className="flex flex-col items-end h-full justify-between gap-1">
                    {/* Rating */}
                    <div className="flex items-center gap-2 text-lg font-bold">
                        {/* star rating container */}
                        <div className="mb-1 w-[36px] h-[16px] inline-flex items-center justify-center">
                            {/* backround star */}
                            <div className="relative"><FaStar className="text-gray-300" />
                                {/* fill star */}
                                <div
                                    className="absolute top-0 left-0 overflow-hidden"
                                    style={{ width: `${fillPercentage}%` }}>
                                    <FaStar className="text-[#FFC94B]" />
                                </div>
                            </div>
                        </div>
                        <div className="font-inter font-semibold text-[16px] leading-[1.3]">{productdish.ratingnum}</div>
                    </div>
                    {/* View Button: to view more details about the product */}
                    <button className="px-5 py-1 bg-[#F5C242] text-white font-semibold font-inter rounded-[10px] text-sm hover:opacity-90">
                        View
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;