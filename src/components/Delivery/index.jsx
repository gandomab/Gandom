import { useNavigate } from 'react-router-dom';
import GandomLogo from "../../assets/Images/1.Home Page/Gandom Logo.png"
import FoodoraLogo from "../../assets/Images/1.Home Page/Foodora Logo.png";

// this component is for the delivery section on the home page
const Delivery = () => {
  const navigate = useNavigate();

  const foodoraInstagramLink =
    "https://l.instagram.com/?u=https%3A%2F%2Fwww.foodora.se%2Fen%2Frestaurant%2Fcph5%2Fgandom%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio";

  return (
    <section className="w-full py-10 md:py-20 flex flex-col items-center px-4">

      {/* Heading */}
      <h1
        className="
          font-santa font-normal
          text-[28px] md:text-[60px] lg:text-[70px]
          leading-[150%] tracking-[-0.023em]
          text-[#E6B220] mb-4 text-center whitespace-nowrap align-middle
        "
      >
        Order it Here
      </h1>

      {/* Paragraph */}
      <div className="
        w-full max-w-[815px] 
        h-auto min-h-[80px] md:min-h-[100px] lg:h-[120px]
        flex items-center justify-center 
        mb-12 px-2
      ">
        <p
          className="
            font-inter font-semibold
            text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px]
            leading-[150%] tracking-[-0.022em]
            text-primary text-center
          "
        >
          You can place your order through one of the channels below.
        </p>
      </div>

      {/* Images */}
      <div className="flex flex-row items-start justify-center gap-6 sm:gap-8 lg:gap-10 ">

        <div className="flex flex-col items-center gap-3 text-left w-full sm:w-auto">
          <img
            src={GandomLogo}
            alt="Gandom Logo"
            className="
              rounded-[10px]
              w-[165px] h-[66px]
              md:w-[340px] md:h-[136px]
              lg:w-[501px] lg:h-[201px]
              object-cover shadow-md
            "
            onClick={() => navigate('/delivery/order')}
          />
          <p className="font-inter font-medium leading-[130%] text-center justify-center items-center text-[8px] sm:text-[11px] md:text-[13px] lg:text-[16px]">
            Place your Gandom order for 5+ dishes or <br /> catering starting at 10 dishes.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 text-left w-full sm:w-auto">
          <img
            src={FoodoraLogo}
            alt="Foodora Logo"
            className="
              rounded-[10px]
              w-[165px] h-[66px]
              md:w-[340px] md:h-[136px]
              lg:w-[501px] lg:h-[201px]
              object-cover shadow-md
            "
            onClick={() =>
              window.open('https://www.foodora.se/en/restaurant/cph5/gandom', '_blank')
            }
          />
          <p className="font-inter font-medium leading-[130%] text-center justify-center items-center text-[8px] sm:text-[11px] md:text-[13px] lg:text-[16px]">
            For single orders (under 5 items) <br /> please order via Foodora.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Delivery;
