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
          flex flex-col 
          lg:flex-row lg:flex-nowrap 
          items-start justify-between 
          gap-y-10 lg:gap-y-0 lg:gap-x-8
        ">

          {/* Logo */}
          <div className="space-y-10 flex-shrink-0 lg:mt-[87px]">
            <img
              src={logowhitegandom}
              alt="Gandom Logo"
              className="w-[84px] md:w-[165px] lg:w-[309px] object-contain"
            />
            <div className="lg:w-[326px] lg:h-[332px]">
              <h3 className="font-inter font-bold leading-[150%] tracking-[-1.1%] text-[8px] md:text-[13px] lg:text-[14px] whitespace-nowrap">We Are Gandom</h3>
              <p className="text-inter font-normal leading-[150%] tracking-[-1.9%] text-[8px] md:text-[13px] lg:text-[14px]">
                We make homemade, naturally protein, and special<br />
                dishes using 100% organic and completely fresh<br />
                ingredients.<br />
                Each recipe is crafted with care to bring you healthy,<br />
                authentic flavors from around the world, a true<br />
                balance of tradition and joy in every bite.
              </p>
              <br />
              <h3 className="font-inter font-bold leading-[150%] tracking-[-1.1%] text-[8px] md:text-[13px] lg:text-[14px] whitespace-nowrap">Gandom AB</h3>
              <p className="text-inter font-normal leading-[150%] tracking-[-1.9%] text-[8px] md:text-[13px] lg:text-[14px]">
                Org. nr: 559430-0781 VAT & F-skatt registered<br />
                Registered with Stockholm Stad and<br />
                Livsmedelsverket<br />
                GS1 certified for barcode registration<br />
                Based in Stockholm, Sweden
              </p>
            </div>
          </div>

          {/* Pages */}
          <div className="space-y-2 lg:mt-[141px] ">
            <h3 className="font-inter font-bold leading-[150%] tracking-[-1.9%] text-[18px] md:text-[20px] lg:text-[24px] whitespace-nowrap">
              Pages
            </h3>
            <ul className="space-y-1 font-inter font-normal leading-[150%] tracking-[-1.9%] text-[8px] md:text-[10px] lg:text-[19px]">
              <li><a href="#">Home</a></li>
              <li><a href="#">Dishes</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Gym</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Subscription</a></li>
            </ul>
          </div>

          {/* Utility Pages */}
          <div className="space-y-1 lg:mt-[141px]">
            <h3 className="font-inter font-bold text-[18px] md:text-[20px] lg:text-[24px] whitespace-nowrap">
              Utility Pages
            </h3>
            <ul className="space-y-1 font-inter font-normal leading-[150%] tracking-[-1.9%] text-[8px] md:text-[10px] lg:text-[19px]">
              <li><a href="#">Pay</a></li>
              <li><a href="#">Your Cart</a></li>
              <li><a href="#">Login</a></li>
              <li><a href="#">Calendar</a></li>
              <li><a href="#">Register</a></li>
            </ul>
          </div>

          {/* Social Media & Contact Us */}
          <div className="space-y-5 md:space-y-8 lg:space-y-10">
            <div className="flex flex-col lg:mt-[141px]">
              <h3 className="font-inter font-bold text-[18px] md:text-[20px] lg:text-[24px] mb-3 whitespace-nowrap">
                Follow Us On..
              </h3>
              <div className="flex items-center gap-2">
                <FaSquareInstagram className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]" />
                <p className="text-[8px] md:text-[10px] lg:text-[19px]">Instagram</p>
              </div>
              <div className="flex items-center gap-2">
                <FaFacebookSquare className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]" />
                <p className="text-[8px] md:text-[10px] lg:text-[19px]">Facebook</p>
              </div>
              <div className="flex items-center gap-2">
                <FaLinkedin className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]" />
                <p className="text-[8px] md:text-[10px] lg:text-[19px]">Linkedin</p>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="font-inter font-bold text-[18px] md:text-[20px] lg:text-[24px] mb-3 whitespace-nowrap">
                Contact Us on..
              </h3>
              <div className="flex items-center gap-2">
                <FiPhoneForwarded className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]" />
                <p className="text-[8px] md:text-[10px] lg:text-[19px]">:  0703382691 </p>
              </div>
              <div className="flex items-center gap-2">
                <BsEnvelope className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]" />
                <p className="text-[8px] md:text-[10px] lg:text-[19px]">:  customer@gandom.se</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
