import logowhitegandom from "../../assets/Images/6.Footer/Logowhite.png";
import background from "../../assets/Images/6.Footer/Slide9.png";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FiPhoneForwarded } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";

const Footer = () => {
  return (
    <footer
      className="relative w-full bg-cover bg-center bg-no-repeat text-[#F2EDE0] py-12 md:py-16"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20">
        {/* Responsive wrapper */}
        <div className="
          grid grid-cols-3 
          md:grid-cols-[auto_1fr_1fr_1fr] 
          items-start justify-between 
          gap-y-10 lg:gap-y-0 gap-x-2 md:gap-x-4 lg:gap-x-8
        ">
          {/* Logo */}
          <div className="col-span-3 md:col-span-1 space-y-10 flex-shrink-0 lg:mt-[87px]">
            <img
              src={logowhitegandom}
              alt="Gandom Logo"
              className="w-[84px] md:w-[165px] lg:w-[309px] object-contain"
            />
            <div className="w-full md:w-[249px] lg:w-[326px] h-auto grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-0">
              <div className="md:mb-4">
                <h3 className="font-inter font-bold leading-[150%] tracking-[-1.1%] text-[8px] md:text-[13px] lg:text-[14px] whitespace-nowrap">We Are xxxxxxxx</h3>
                <div className="text-inter font-normal leading-[150%] tracking-[-1.9%] text-[8px] md:text-[13px] lg:text-[14px] break-words">
                  <p>xxxxxxxxxxxxxxxxxxxxxxxxxx
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.</p>
                  <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.</p>
                </div>
              </div>

              <div>
                <h3 className="font-inter font-bold leading-[150%] tracking-[-1.1%] text-[8px] md:text-[13px] lg:text-[14px] whitespace-nowrap">xxxxxxxx AB</h3>
                <p className="text-inter font-normal leading-[150%] tracking-[-1.9%] text-[8px] md:text-[13px] lg:text-[14px] break-words">
                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                </p>
              </div>
            </div>
          </div>

          {/* Pages */}
          <div className="space-y-2 md:mt-[100px] lg:mt-[141px] ">
            <h3 className="font-inter font-bold leading-[150%] tracking-[-1.9%] text-[8px] md:text-[13px] lg:text-[14px] whitespace-nowrap">
              Pages
            </h3>
            <ul className="space-y-1 font-inter font-normal leading-[150%] tracking-[-1.9%] text-[8px] md:text-[13px] lg:text-[14px]">
              <li><a href="#">Home</a></li>
              <li><a href="#">Dishes</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Gym</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Subscription</a></li>
            </ul>
          </div>

          {/* Utility Pages */}
          <div className="space-y-1 md:mt-[100px] lg:mt-[141px] ">
            <h3 className="font-inter font-bold text-[8px] md:text-[13px] lg:text-[14px] whitespace-nowrap">
              Utility Pages
            </h3>
            <ul className="space-y-1 font-inter font-normal leading-[150%] tracking-[-1.9%] text-[8px] md:text-[13px] lg:text-[14px]">
              <li><a href="#">Pay</a></li>
              <li><a href="#">Your Cart</a></li>
              <li><a href="#">Login</a></li>
              <li><a href="#">Calendar</a></li>
              <li><a href="#">Register</a></li>
            </ul>
          </div>

          {/* Social Media & Contact Us */}
          <div className="space-y-5 md:space-y-8 lg:space-y-10 md:mt-[100px] lg:mt-[141px]">
            <div className="flex flex-col">
              <h3 className="font-inter font-bold text-[8px] md:text-[13px] lg:text-[14px] mb-3 whitespace-nowrap">
                Follow Us On..
              </h3>
              <div className="flex flex-row md:flex-col gap-2 md:gap-1">
                <div className="flex items-center gap-2">
                  <FaSquareInstagram className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]" />
                  <p className="hidden md:block md:text-[13px] lg:text-[14px]">Instagram</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaFacebookSquare className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]" />
                  <p className="hidden md:block md:text-[13px] lg:text-[14px]">Facebook</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaLinkedin className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]" />
                  <p className="hidden md:block md:text-[13px] lg:text-[14px]">Linkedin</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="font-inter font-bold text-[8px] md:text-[13px] lg:text-[14px] mb-3 whitespace-nowrap">
                Contact Us on..
              </h3>
              <div className="flex items-center gap-2">
                <FiPhoneForwarded className="w-[12px] h-[12px] md:w-[24px] md:h-[24px] lg:w-[30px] lg:h-[30px]" />
                <p className="text-[8px] md:text-[13px] lg:text-[14px]">:  xxxxxxxxxxxxx </p>
              </div>
              <div className="flex items-center gap-2">
                <BsEnvelope className="w-[12px] h-[12px] md:w-[24px] md:h-[24px] lg:w-[30px] lg:h-[30px]" />
                <p className="text-[8px] md:text-[13px] lg:text-[14px]">:  xxxxxxxx@xxxxx.se</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
