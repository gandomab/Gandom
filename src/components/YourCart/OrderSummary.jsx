import { useCart } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
    const { totalCost, deliveryFee, clearCart, cart } = useCart();
    const navigate = useNavigate();
    const FREE_SHIPPING_THRESHOLD = 500;
    const remainingForFree = FREE_SHIPPING_THRESHOLD - totalCost;

    const handleClick = () => {
        navigate("/productsPage");
        window.scrollTo(0, 0);
    };

    const handleCheckout = () => {
        navigate("/login");
        window.scrollTo(0, 0);
    };

    return (
        <div className="h-full flex flex-col">
            <div className="space-y-6">
                <div className="flex justify-between font-inter font-semibold text-[12px] md:text-[14px] xl:text-[20px] leading-[130%]">
                    <span>Sub Total</span>
                    <span>{totalCost.toFixed(2)}</span>
                </div>

                <div className="pt-6 border-t border-gray-50">
                    <div className="flex justify-between items-center md:block">
                        <p className="font-inter font-semibold text-[14px] md:text-[16px] xl:text-[24px] leading-[130%]">Estimated Total</p>
                        <p className="font-inter font-semibold text-[14px] md:text-[16px] xl:text-[24px] leading-[130%]">{totalCost.toFixed(2)} SEK</p>
                    </div>
                    <p className="font-inter font-medium text-[10px] md:text-[12px] xl:text-[16px] text-gray-500 leading-[130%] mt-1 md:mt-2">Tax Included</p>
                    <p className="font-inter font-normal text-[9px] md:text-[11px] xl:text-[14px] text-gray-400 leading-[130%] mt-1 md:mt-2">
                        Delivery charges will be calculated and added during checkout.
                    </p>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-auto pt-6 md:pt-20 md:pb-20">
                {/* Mobile View */}
                <div className="flex justify-between items-start w-full md:hidden">
                    <button
                        onClick={handleClick}
                        className="text-[#0C8CE9] font-normal text-[10px] leading-[130%] hover:underline mt-2"
                    >
                        Continue shopping
                    </button>
                    <div className="flex flex-col gap-3">
                        <button
                            className="w-[110px] bg-[#E6B220] hover:opacity-90 transition text-[#F2EDE0] py-2 border border-transparent rounded-full font-inter font-semibold text-[10px] leading-[130%]"
                            onClick={handleCheckout}
                        >
                            Checkout
                        </button>

                        <button
                            onClick={clearCart}
                            className="w-[110px] py-2 border border-[#000000] rounded-full text-[#6D6D6D] font-inter font-normal text-[10px] leading-[130%] hover:bg-gray-50 transition-colors"
                        >
                            Cancel Order
                        </button>
                    </div>
                </div>

                {/* Desktop/Tablet View */}
                <div className="hidden md:flex flex-col items-center gap-4">
                    <button
                        className="w-full bg-[#E6B220] hover:opacity-90 transition text-[#F2EDE0] py-4 rounded-2xl font-inter font-semibold md:text-[20px] lg:text-[36px] leading-[130%] "
                        onClick={handleCheckout}
                    >
                        Checkout
                    </button>

                    <button
                        onClick={handleClick}
                        className="text-[#0C8CE9] font-normal md:text-[12px] xl:text-[24px] leading-[130%] hover:underline"
                    >
                        Continue Shopping
                    </button>

                    <button
                        onClick={clearCart}
                        className="md:mt-2 px-8 py-2 border border-[#000000] rounded-full text-[#6D6D6D] md:text-[12px] xl:text-[24px] leading-[130%] hover:bg-gray-50 transition-colors"
                    >
                        Cancel Order
                    </button>
                </div>
            </div>
        </div>

    );
};

export default OrderSummary;
