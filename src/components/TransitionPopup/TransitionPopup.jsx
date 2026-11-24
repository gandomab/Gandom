import React from "react";

const TransitionPopup = ({ isOpen, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px] px-4">
      <div className="bg-[#FAF9F6] border-2 border-[#E6B220] rounded-[20px] shadow-xl max-w-md w-full p-6 md:p-8 text-center font-inter animate-fadeIn">
        {/* Spinner / Check icon */}
        <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-[#E6B220]/20 flex items-center justify-center">
          <div className="w-6 h-6 border-3 border-[#E6B220] border-t-transparent rounded-full animate-spin" />
        </div>

        <h3 className="font-bold text-[#000000] text-[18px] md:text-[22px] mb-2">
          {title}
        </h3>
        <p className="font-normal text-[#4A4A4A] text-[13px] md:text-[16px]">
          {message}
        </p>
      </div>
    </div>
  );
};

export default TransitionPopup;