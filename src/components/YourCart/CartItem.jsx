import React from "react";
import { useCart } from "../../contexts/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
const CartItem = ({ productdish }) => {
    const { updateQuantity, removeFromCart } = useCart();

    return (
        <div className="flex items-center justify-between bg-white p-4">
            <div className="flex items-center gap-4">
                <img src={productdish.images?.[0]} className="w-[83px] h-[59px] md:w-[104px] md:h-[73px] xl:w-[180px] xl:h-[128px] rounded-lg object-cover" alt={productdish.title} />
                <div>
                    <h4 className="font-inter font-semibold text-[9px] md:text-[12px] xl:text-[20px] leading-[130%]">{productdish.title}</h4>
                    <p className="font-inter font-semibold text-[#426B1F] text-[7px] md:text-[9px] xl:text-[16px] leading-[130%]">{productdish.price} SEK</p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-lg border-[#000000] px-3 py-1">
                    <button onClick={() => updateQuantity(productdish.id, -1)} className="px-2">-</button>
                    <span className="px-3 font-bold">{productdish.quantity}</span>
                    <button onClick={() => updateQuantity(productdish.id, 1)} className="px-2">+</button>
                </div>
                <button onClick={() => removeFromCart(productdish.id)} className="text-[#000000] hover:text-red-500 ml-4">
                    <FaRegTrashAlt className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};
export default CartItem;