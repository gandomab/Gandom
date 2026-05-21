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
    <div className="w-full bg-white rounded-2xl p-4 flex flex-col md:flex-row gap-6 shadow-md">

      {/* Image Section */}
      <div className="flex flex-col md:w-[370px] items-center">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="w-[370px] h-[276px] flex overflow-x-auto snap-x snap-mandatory rounded-xl hide-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((imgSrc, idx) => (
            <img
              key={idx}
              src={imgSrc}
              alt={`${title} - image ${idx + 1}`}
              className="w-[370px] h-[276px] object-cover shrink-0 snap-center rounded-xl"
            />
          ))}
        </div>

        {/* Dots - Only show if there is more than 1 image */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 mt-3">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`transition-all duration-300 rounded-full ${activeIndex === idx
                    ? "w-3 h-3 bg-gray-500"
                    : "w-3 h-3 bg-gray-300"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Title under dots */}
        <h3 className="text-black font-semibold text-lg mt-3 mb-14 text-left w-full pl-2">
          {title}
        </h3>
      </div>

      {/* Text Section */}
      <div className="font-inter text-base leading-normal tracking-[-1.1%] flex-1 text-[#333] whitespace-pre-line p-5">
        {description}
      </div>
    </div>
  );
};

export default EventsCard;
