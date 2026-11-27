
import { useNavigate } from 'react-router-dom';
import GandomLogo from "../../assets/Images/1.Home Page/Gandom Logo.png";
import FoodoraLogo from "../../assets/Images/1.Home Page/Foodora Logo.png";

// Delivery section on the home page
const Delivery = () => {
  const navigate = useNavigate();

  const handleGandomClick = () => {
    navigate('/productsPage');
    window.scrollTo(0, 0);
  };

  const handleFoodoraClick = () => {
    window.open(
      'https://www.foodora.se/en/restaurant/cph5/gandom',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const cardClass =
    "group flex flex-col items-center gap-3 text-left w-full sm:w-auto cursor-pointer";

  const imageClass = `
    rounded-[10px]
    w-[165px] h-[66px]
    md:w-[340px] md:h-[136px]
    lg:w-[501px] lg:h-[201px]
    object-cover shadow-md
    transition-all duration-300
    group-hover:scale-[1.03]
    group-hover:shadow-xl
  `;

  const descriptionClass =
    "font-inter font-bold leading-[130%] text-[#426B1F] text-center text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] transition-colors duration-200 group-hover:text-[#DE7202]";

  return (
    <section className="w-full py-10 md:py-20 flex flex-col items-center px-4">

      {/* Heading */}
      <h1 className="
        font-santa font-normal
        text-[28px] md:text-[60px] lg:text-[70px]
        leading-[150%] tracking-[-0.023em]
        text-[#E6B220] mb-4 text-center whitespace-nowrap align-middle
      ">
        Order it Here
      </h1>

      {/* Paragraph */}
      <div className="
        w-full max-w-[815px]
        h-auto min-h-[80px] md:min-h-[100px] lg:h-[120px]
        flex items-center justify-center
        mb-12 px-2
      ">
        <p className="
          font-inter font-semibold
          text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px]
          leading-[150%] tracking-[-0.022em]
          text-[#426B1F] text-center
        ">
          You can place your order through one of the channels below.
        </p>
      </div>

      {/* Gandom and Foodora Cards */}
      <div className="flex flex-row items-start justify-center gap-6 sm:gap-8 lg:gap-10">

        {/* Gandom Card */}
        <button
          type="button"
          onClick={handleGandomClick}
          className={cardClass}
          aria-label="Order through Gandom"
        >
          <img
            src={GandomLogo}
            alt="Gandom Logo"
            className={imageClass}
          />

          <p className={descriptionClass}>
            Place your Gandom order for 5+ dishes or catering starting at 10 dishes.
          </p>
        </button>

        {/* Foodora Card */}
        <button
          type="button"
          onClick={handleFoodoraClick}
          className={cardClass}
          aria-label="Order through Foodora"
        >
          <img
            src={FoodoraLogo}
            alt="Foodora Logo"
            className={imageClass}
          />

          <p className={descriptionClass}>
            For single orders (under 5 items), please order via Foodora.
          </p>
        </button>

      </div>
    </section>
  );
};

export default Delivery;
