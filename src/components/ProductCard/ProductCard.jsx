import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
// This component represents a single product card, displaying the product's image, name, price, and rating. It also includes a "View" button for more details.
const ProductCard = ({ product }) => {

    const rating = product.rating;
    const fillPercentage = (rating / 5) * 100;

    const baseImage = product.primary_image;
    const [currentImage, setCurrentImage] = useState(baseImage);
    return (
        <div className="bg-[#FFFFFF] border rounded-xl overflow-hidden w-full h-[331.46px] shadow-[4.73px_4.73px_16.9px_0.68px_rgba(0,0,0,0.25)]">

            {/* Top Section: Image */}
            <div className="h-60 overflow-hidden">
                <img
                    src={currentImage || product.primary_image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onMouseEnter={() => {
                        if (window.innerWidth > 1024 && product.images && product.images[1] && product.images[1].image) {
                            setCurrentImage(product.images[1].image);
                        }
                    }}
                    onMouseLeave={() => {
                        setCurrentImage(product.primary_image);
                    }}
                />
            </div>

            {/* Bottom Section: Details */}
            <div className="p-4 min-h-20 flex justify-between items-end">
                {/* Left Column: Name and Price */}
                <div className="flex flex-col">
                    <h3 className="font-inter font-semibold text-2xl leading-[130%] line-clamp-1">{product.name}</h3>
                    <p className="text-[#426B1F] font-semibold h-[26px] text-[20px] leading-[130%]">{product.price} <span>{product.currency}</span></p>
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
                        <div className="font-inter font-semibold text-[16px] leading-[1.3]">{product.rating}</div>
                    </div>
                    {/* View Button: to view more details about the product */}
                    <Link
                        to={`/productdetail/${product.slug}`}
                        onClick={() => window.scrollTo(0, 0)}
                        className="px-5 py-1 bg-[#F5C242] text-white font-semibold font-inter rounded-[10px] text-sm hover:opacity-90">
                        View
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;