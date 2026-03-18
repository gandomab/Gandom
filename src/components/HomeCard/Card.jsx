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

            <h1 className="font-santa font-normal
                text-[28px] md:text-[60px] lg:text-[70px]
                leading-[150%] tracking-[-0.023em]
                text-[#E6B220] mb-4 text-center whitespace-nowrap align-middle
            ">
                What our Customers say
            </h1>

            {/* this is the scrollable container for the cards */}
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="w-full max-w-6xl flex overflow-x-auto gap-4 md:gap-10 px-6 pb-8 snap-x snap-mandatory hide-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {/* this is the map function that maps through the reviews array and returns a card for each review */}
                {reviews.map((review) => (
                    <article
                        key={review.id}
                        className="px-10 py-12 flex flex-col justify-between w-[85vw] md:w-[450px] lg:w-[609px] shrink-0 snap-center">
                        {/* this is the div that contains the stars */}
                        <div>
                            <div className="flex gap-1 text-[16px] md:text-[20px] lg:text-[24px] text-[#FFC94B] justify-center mb-6">
                                {/* this is the map function that maps through the stars array and returns a star for each star */}
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
                            {/* this is the div that contains the review text */}
                            <div className="relative flex items-start gap-4">
                                <span className="absolute -top-3 -left-1 md:-top-5 md:-left-3 lg:-top-10 lg:-left-6 text-[25px] md:text-[68px] lg:text-[112px] leading-none font-merriweather font-normal text-[#1E1E1E]">“</span>
                                <p className="text-[8px] py-2 md:py-4 lg:py-6 md:text-[14px] lg:text-[24px] text-[#1E1E1E] font-medium leading-[1.7]">
                                    {review.text}
                                </p>
                                <span className="absolute -bottom-1 -right-1 md:-bottom-5 md:-right-3 lg:-bottom-10 lg:-right-6 text-[25px] md:text-[68px] lg:text-[112px] leading-none font-merriweather font-normal text-[#1E1E1E]">”</span>
                            </div>
                        </div>
                        {/* this is the div that contains the author name */}
                        <p className="mt-10 text-center text-[8px] md:text-[14px] lg:text-[24px] text-[#1E1E1E] font-medium">
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
                            ? "w-3 h-3 bg-gray-500"
                            : "w-3 h-3 bg-gray-300"
                            }`}
                    />
                ))}
            </div>

        </section>



    );
};

export default Cards;
