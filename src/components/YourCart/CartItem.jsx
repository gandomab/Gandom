import React from "react";
import { useCart } from "../../contexts/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
const CartItem = ({ productdish }) => {
    const { updateQuantity, removeFromCart } = useCart();

    return (
        <div className="flex items-center justify-between bg-white p-2 md:p-4 w-full gap-2 md:gap-4">
            <div className="flex items-center gap-2 md:gap-4 min-w-0 flex-1">
                <img src={productdish.images?.[0]} className="shrink-0 w-[83px] h-[59px] md:w-[104px] md:h-[73px] xl:w-[180px] xl:h-[128px] rounded-lg object-cover" alt={productdish.title} />
                <div className="min-w-0">
                    <h4 className="font-inter font-semibold text-[10px] md:text-[14px] xl:text-[20px] leading-[130%] line-clamp-2">{productdish.title}</h4>
                    <p className="font-inter font-semibold text-[#426B1F] text-[9px] md:text-[12px] xl:text-[16px] leading-[130%] mt-0.5 md:mt-1">{productdish.price} SEK</p>
                </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4 xl:gap-8 shrink-0">
                <div className="flex items-center border rounded-md md:rounded-lg border-[#000000] px-1 md:px-3 py-0.5 md:py-1">
                    <button onClick={() => updateQuantity(productdish.id, -1)} className="px-1.5 md:px-2 text-[12px] md:text-sm xl:text-lg">-</button>
                    <span className="px-2 md:px-3 font-bold text-[10px] md:text-sm xl:text-lg">{productdish.quantity}</span>
                    <button onClick={() => updateQuantity(productdish.id, 1)} className="px-1.5 md:px-2 text-[12px] md:text-sm xl:text-lg">+</button>
                </div>
                <button onClick={() => removeFromCart(productdish.id)} className="text-[#000000] hover:text-red-500">
                    <FaRegTrashAlt className="w-3.5 h-3.5 md:w-4 md:h-4 xl:w-6 xl:h-6" />
                </button>
            </div>
        </div>
    );
};
export default CartItem;