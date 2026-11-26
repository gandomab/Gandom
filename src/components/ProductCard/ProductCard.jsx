import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { productService } from "../../services/api.js";
// This component represents a single product card, displaying the product's image, name, price, and rating. It also includes a "View" button for more details.
const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const rating = product.rating;
    const fillPercentage = (rating / 5) * 100;

    const baseImage = product.primary_image;
    const [currentImage, setCurrentImage] = useState(baseImage);

    const handleViewClick = async (e) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        try {
            const data = await productService.getBySlug(product.slug);
            navigate(`/productdetail/${product.slug}`, { state: { product: data } });
            window.scrollTo(0, 0);
        } catch (err) {
            console.error("Failed to fetch product details:", err);
            navigate(`/productdetail/${product.slug}`);
            window.scrollTo(0, 0);
        } finally {
            setLoading(false);
        }
    };
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
                    <button
                        onClick={handleViewClick}
                        disabled={loading}
                        className="px-5 py-1 bg-[#F5C242] text-white font-semibold font-inter rounded-[10px] text-sm hover:opacity-90 flex items-center justify-center min-w-[70px] disabled:opacity-80">
                        {loading ? (
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : "View"}
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;