import React from 'react';
import whatsapplogo from '../../assets/Images/1.Home Page/logos_whatsapp-icon.png';

const WhatsAppButton = ({ phoneNumber = "46703382691" }) => {

  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-3 right-0 z-50 flex items-center justify-center bg-[#FAFAF5] border-[1px] border-[#E6B220] border-r-0 rounded-l-[10px] pl-4 pr-3 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
      aria-label="Contact us on WhatsApp"
    >
      <img src={whatsapplogo} alt="WhatsApp" className="w-[36px] md:w-[40px]" />
    </a>
  );
};

export default WhatsAppButton;
