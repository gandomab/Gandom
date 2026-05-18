import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import Cover1 from "../../assets/Images/1.Home Page/Cover1.png";
import Covermob from "../../assets/Images/1.Home Page/Covermob.png";
import Covertab from "../../assets/Images/1.Home Page/Covertab.png";
import logo from "../../assets/Logo Gandom/Logo white.png";
import DiscoverMoreButton from '../../components/DiscoverMoreButton/DiscoverMoreButton';

const PaymentSuccessPage = () => {
    const navigate = useNavigate();
    const { clearCart } = useCart();

    // Clear the cart when they successfully reach this page!
    useEffect(() => {
        clearCart();
    }, [clearCart]);

    const handleClick = () => {
        navigate("/");
        window.scrollTo(0, 0);
    };

    return (

        <section
            className="relative w-full h-[450px] md:h-[508px] lg:h-[731px] bg-cover bg-center 
                                    flex flex-row
                                    items-center 
                                    justify-end 
                                    pb-2 md:pb-0 md:pr-16 
                                    top-4 
                                    bg-[image:var(--bg-mobile)] md:bg-[image:var(--bg-tablet)] lg:bg-[image:var(--bg-desktop)]"
            style={{
                '--bg-mobile': `url(${Covermob})`,
                '--bg-tablet': `url(${Covertab})`,
                '--bg-desktop': `url(${Cover1})`
            }}
        >

            <div className="relative z-10 text-right text-white 
                                        flex flex-col items-end w-auto px-4 md:px-0">

                <div className="flex flex-col items-end gap-3 md:gap-4">
                    <div className="font-inter font-bold text-[#F2EDE0] text-right text-[15px] md:text-[24px] lg:text-[34px] xl:text-[64px] leading-[130%]">
                        <p>Thank you for <br />your purchase</p>
                    </div>
                    <div className="w-max">
                        <DiscoverMoreButton
                            onClick={handleClick}
                            title="Home Page"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-end mt-16 md:mt-20 lg:mt-28 xl:mt-32">
                    <img src={logo} alt="GANDOM Logo" className="w-[126px] md:w-[170px] lg:w-[250px] xl:w-[300px] mb-2 lg:mb-4" />
                    <p className="font-inter font-bold text-[#F2EDE0] text-right text-[6px] md:text-[8px] lg:text-[12px] xl:text-[15px] leading-[120%]">
                        Wholesome flavors, redefined.
                    </p>
                </div>
            </div>
        </section >

    );
};

export default PaymentSuccessPage;
