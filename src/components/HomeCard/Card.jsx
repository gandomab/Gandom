import React, { useRef, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const reviews = [
    {
        id: 1,
        stars: 5,
        text: "Maten är fantastisk och det kommer att bli min nya favoriträtt",
        author: "Gandoms customer",
    },
    {
        id: 2,
        stars: 4,
        text: "The food arrived hot. Yogurt dishes are often good, and I thought it was pretty good with noodles. Also, being vegetarian is really important to me. Thanks.",
        author: "Gandoms customer",
    },
    {
        id: 3,
        stars: 3.5,
        text: "The food arrived hot. Yogurt dishes are often good, and I thought it was pretty good with noodles. Also, being vegetarian is really important to me. Thanks.",
        author: "Gandoms customer",
    },
    {
        id: 4,
        stars: 4.5,
        text: "The food arrived hot. Yogurt dishes are often good, and I thought it was pretty good with noodles. Also, being vegetarian is really important to me. Thanks.",
        author: "Gandoms customer",
    },
];

const Cards = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Update the active dot based on scroll position
    const handleScroll = () => {
        if (scrollRef.current) {
            const index = Math.round(
                scrollRef.current.scrollLeft / scrollRef.current.offsetWidth
            );
            setActiveIndex(index);
        }
    };

    // Scroll to a specific card when clicking a dot
    const scrollTo = (index) => {
        scrollRef.current.scrollTo({
            left: index * scrollRef.current.offsetWidth,
            behavior: 'smooth',
        });
    };

    return (
        <section className="w-full py-20 flex flex-col items-center">

            <h2 className="font-santa font-normal text-[#E6B220] mb-16 text-center
            text-[24px] md:text-[60px] lg:text-[70px]
            ">
                What our Customers say
            </h2>


            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="w-full max-w-6xl flex overflow-x-auto gap-6 md:gap-10 px-6 pb-8 snap-x snap-mandatory hide-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >

                {reviews.map((review) => (
                    <article
                        key={review.id}
                        className="bg-white rounded-[30px] shadow-md px-10 py-12 flex flex-col justify-between w-[85vw] md:w-[450px] shrink-0 snap-center">

                        <div>
                            <div className="flex gap-1 text-[26px] text-[#FFC94B] justify-center mb-6">
                                {[...Array(5)].map((_, i) => {
                                    const starValue = i + 1;
                                    if (review.stars >= starValue) {
                                        return <FaStar key={i} />;
                                    } else if (review.stars >= starValue - 0.5) {
                                        return <FaStarHalfAlt key={i} />;
                                    } else {
                                        return <FaRegStar key={i} />;
                                    }
                                })}
                            </div>


                            <div className="flex items-start gap-4">
                                <span className="text-[44px] leading-none">“</span>
                                <p className="text-[17px] text-[#333] font-medium leading-[1.7]">
                                    {review.text}
                                </p>
                                <span className="text-[44px] leading-none">”</span>
                            </div>
                        </div>

                        <p className="mt-10 text-center text-[15px] text-[#444] font-medium">
                            {review.author}
                        </p>
                    </article>
                ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center gap-3 mt-4">
                {reviews.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`transition-all duration-300 rounded-full ${activeIndex === index
                            ? "w-3 h-3 bg-[#E6B220]"
                            : "w-3 h-3 bg-gray-300"
                            }`}
                    />
                ))}
            </div>

        </section>



    );
};

export default Cards;
