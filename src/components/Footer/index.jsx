import { Link } from "react-router-dom";
import logowhitegandom from "../../assets/Images/6.Footer/Logowhite.png";
import background from "../../assets/Images/6.Footer/Slide9.png";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FiPhoneForwarded } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative w-full bg-cover bg-center bg-no-repeat text-[#F2EDE0] pt-12 pb-4 md:pt-14 md:pb-4 "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="px-4 md:px-8 lg:px-12 xl:px-40 ">
        {/* Responsive wrapper */}
        <div className="
          grid grid-cols-3 
          md:grid-cols-[auto_1fr_1fr_auto] 
          lg:grid-cols-[1fr_1fr_1fr_1fr] 
          items-start justify-between 
          gap-y-6 gap-x-2 md:gap-x-4 lg:gap-x-6 xl:gap-x-14
        ">
          {/* Logo */}
          <div className="col-span-3 md:col-span-1 space-y-10 flex-shrink-0 lg:pt-[87px]">
            <Link to="/" onClick={scrollToTop}>
              <img
                src={logowhitegandom}
                alt="Gandom Logo"
                className="w-[84px] md:w-[165px] lg:w-[309px] object-contain"
              />
            </Link>
            <div className="w-full md:w-[249px] lg:w-[326px] h-auto grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-0">
              <div className="md:mb-4">
                <h3 className="font-inter font-bold leading-[150%] tracking-[-1.1%] text-[8px] md:text-[13px] lg:text-[14px] whitespace-nowrap">We Are Gandom</h3>
                <div className="text-inter font-normal leading-[150%] tracking-[-1.9%] text-[8px] md:text-[13px] lg:text-[14px] break-words">
                  <p>We make homemade, naturally protein, and special dishes using 100% organic and completely fresh ingredients.</p>
                  <p>Each recipe is crafted with care to bring you healthy, authentic flavors from around the world, a true balance of tradition and joy in every bite.</p>
                </div>
              </div>

              <div>
                <h3 className="font-inter font-bold leading-[150%] tracking-[-1.1%] text-[8px] md:text-[13px] lg:text-[14px] whitespace-nowrap">Gandom AB</h3>
                <p className="text-inter font-normal leading-[150%] tracking-[-1.9%] text-[8px] md:text-[13px] lg:text-[14px] break-words">
                  Org. nr: 559430-0781 VAT & F-skatt registered
                  Registered with Stockholm Stad and Livsmedelsverket
                  GS1 certified for barcode registration
                  Based in Stockholm, Sweden
                </p>
              </div>
            </div>
          </div>

          {/* Pages */}
          <div className="space-y-2 md:mt-[100px] lg:mt-[141px] lg:pl-12">
            <h3 className="font-inter font-bold leading-[150%] tracking-[-1.9%] text-[8px] md:text-[13px] lg:text-[24px] whitespace-nowrap">
              Pages
            </h3>
            <ul className="space-y-1 font-inter font-normal leading-[150%] tracking-[-1.9%] text-[8px] md:text-[13px] lg:text-[20px]">
              <li><Link to="/" onClick={scrollToTop} className="hover:underline">Home</Link></li>
              <li><Link to="/productsPage" onClick={scrollToTop} className="hover:underline">Dishes</Link></li>
              <li><Link to="/about-us" onClick={scrollToTop} className="hover:underline">About Us</Link></li>
              <li><Link to="/gym" onClick={scrollToTop} className="hover:underline">Gym</Link></li>
              <li><Link to="/events" onClick={scrollToTop} className="hover:underline">Events</Link></li>
              <li><Link to="/subscription" onClick={scrollToTop} className="hover:underline">Subscription</Link></li>
            </ul>
          </div>

          {/* Utility Pages */}
          <div className="space-y-1 md:mt-[100px] lg:mt-[141px]">
            <h3 className="font-inter font-bold leading-[150%] tracking-[-1.9%] text-[8px] md:text-[13px] lg:text-[24px] whitespace-nowrap">
              Utility Pages
            </h3>
            <ul className="space-y-1 font-inter font-normal leading-[150%] tracking-[-1.9%] text-[8px] md:text-[13px] lg:text-[20px]">
              <li><Link to="/pay" onClick={scrollToTop} className="hover:underline">Pay</Link></li>
              <li><Link to="/your-cart" onClick={scrollToTop} className="hover:underline">Your Cart</Link></li>
              <li><Link to="/login" onClick={scrollToTop} className="hover:underline">Login</Link></li>
              <li><Link to="/your-cart" onClick={scrollToTop} className="hover:underline">Calendar</Link></li>
              <li><Link to="/register" onClick={scrollToTop} className="hover:underline">Register</Link></li>
            </ul>
          </div>

          {/* Social Media & Contact Us */}
          <div className="space-y-5 md:space-y-8 lg:space-y-10 md:mt-[100px] lg:mt-[141px]">
            <div className="flex flex-col">
              <h3 className="font-inter font-bold leading-[150%] tracking-[-1.9%] text-[8px] md:text-[13px] lg:text-[24px] mb-3 whitespace-nowrap">
                Follow Us On..
              </h3>
              <div className="flex flex-row md:flex-col gap-2 md:gap-1">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  <FaSquareInstagram className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[33px] lg:h-[33px]" />
                  <p className="hidden md:block md:text-[13px] lg:text-[20px]">Instagram</p>
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  <FaFacebookSquare className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[33px] lg:h-[33px]" />
                  <p className="hidden md:block md:text-[13px] lg:text-[20px]">Facebook</p>
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  <FaLinkedin className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[33px] lg:h-[33px]" />
                  <p className="hidden md:block md:text-[13px] lg:text-[20px]">Linkedin</p>
                </a>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="font-inter font-bold leading-[150%] tracking-[-1.9%] text-[8px] md:text-[13px] lg:text-[24px] mb-3 whitespace-nowrap">
                Contact Us on..
              </h3>
              <div className="space-y-2">
                <a href="tel:0703382691" className="flex flex-row items-center gap-2 hover:underline">
                  <FiPhoneForwarded className="flex-shrink-0 w-[12px] h-[12px] md:w-[24px] md:h-[24px] lg:w-[30px] lg:h-[30px]" />
                  <p className="whitespace-nowrap text-[8px] md:text-[13px] lg:text-[20px]">: 0703382691 </p>
                </a>
                <a href="mailto:customer@gandom.se" className="flex flex-row items-center gap-2 hover:underline">
                  <BsEnvelope className="flex-shrink-0 w-[12px] h-[12px] md:w-[24px] md:h-[24px] lg:w-[30px] lg:h-[30px]" />
                  <p className="whitespace-nowrap text-[8px] md:text-[13px] lg:text-[20px]">: customer@gandom.se</p>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center pt-6  ">
          <p className="font-inter font-normal leading-[150%] tracking-[-1.9%] text-[8px] md:text-[11px] lg:text-[14px]">Copyright © 2026 Company Gandom. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;