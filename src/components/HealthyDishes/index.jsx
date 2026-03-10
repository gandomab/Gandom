import { items } from "../../data/data"
import { useNavigate } from "react-router-dom";

const HealthySection = () => {
  const navigate = useNavigate();


  return (
    <section className="bg-beigebg text-center mt-0 md:mt-4 max-w-[1440px] mx-auto">


      {/* Heading */}
      <h2 className="font-santa font-normal text-primary text-[40px] md:text-[52px] lg:text-[64px] mb-12">
        Browse Our Healthy Lifestyle
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/productsPage#${item.linkId}`)}
            className="relative cursor-pointer"
          >

            <img
              src={item.img}
              alt={item.name}
              className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] lg:w-[288px] lg:h-[288px] object-cover rounded-[20px]"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center drop-shadow-lg leading-tight">
              <p className="text-white font-inter font-bold text-[18px] md:text-[20px] lg:text-[24px] whitespace-nowrap max-w-max">
                {item.name}
              </p>

              {item.subName && (
                <p className="text-white font-inter font-bold text-[16px] md:text-[18px] lg:text-[24px] whitespace-nowrap max-w-max">
                  {item.subName}
                </p>
              )}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default HealthySection;
