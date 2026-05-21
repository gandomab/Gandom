import React, { useState, useRef } from 'react';

const EventsCard = ({ title, image, description }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  // Safely ensure `image` is handled as an array
  const images = Array.isArray(image) ? image : [image];

  // Update the active dot based on scroll position
  const handleScroll = () => {
    if (scrollRef.current) {
      const index = Math.round(
        scrollRef.current.scrollLeft / scrollRef.current.offsetWidth
      );
      if (index !== activeIndex && index >= 0 && index < images.length) {
        setActiveIndex(index);
      }
    }
  };

  // Scroll to a specific card when clicking a dot
  const scrollTo = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full md:bg-white md:rounded-2xl p-4 flex flex-col md:flex-row gap-4 md:gap-6 md:shadow-md">

      {/* Title for Mobile */}
      <h3 className="md:hidden font-inter font-semibold text-black text-[20px] leading-[130%] text-left mb-5 w-full pl-2">
        {title}
      </h3>

      {/* Image Section */}
      <div className="flex flex-col w-full md:w-[199px] lg:w-[299px] xl:w-[354px] items-center">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="w-full h-[120px] sm:h-[160px] md:w-[199px] md:h-[143px] lg:w-[299px] lg:h-[214px] xl:w-[354px] xl:h-[254px] flex flex-row gap-3 md:gap-0 md:overflow-x-auto md:snap-x md:snap-mandatory rounded-[20px] md:hide-scrollbar md:scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((imgSrc, idx) => (
            <img
              key={idx}
              src={imgSrc}
              alt={`${title} - image ${idx + 1}`}
              className="w-0 flex-1 md:flex-none h-full md:w-full object-cover md:shrink-0 md:snap-center rounded-[20px]"
            />
          ))}
        </div>

        {/* Dots - Only show if there is more than 1 image */}
        {images.length > 1 && (
          <div className="hidden md:flex justify-center gap-2 mt-2 mb-2 md:mt-3 md:mb-5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`transition-all duration-300 rounded-full ${activeIndex === idx
                  ? "w-2 h-2 md:w-3 md:h-3 bg-gray-500"
                  : "w-2 h-2 md:w-3 md:h-3 bg-gray-300"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Title under dots for Desktop and Tablet */}
        <h3 className="hidden md:block font-inter font-semibold text-black md:text-[15px] lg:text-[18px] xl:text-[24px] leading-[130%] text-left mt-2 mb-1 md:mt-3 md:mb-14 w-full pl-2">
          {title}
        </h3>
      </div>

      {/* Text Section */}
      <div className="font-inter font-medium text-[#1E1E1E] text-[11px] md:text-[13px] lg:text-[15px] xl:text-[18px] leading-[150%] tracking-[-1.1%] flex-1 whitespace-pre-line p-1">
        {description}
      </div>
    </div>
  );
};

export default EventsCard;
