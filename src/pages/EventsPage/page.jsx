import EventPageHeroSection from "../../components/EventPageHeroSection/EventPageHeroSection";
import EventsCard from "../../components/EventsCard";
import { eventsData as events } from "../../data/events";

const EventsPage = () => {
  return (
    <div className="w-full">
      {/* Hero section for the cart page */}
      <section className="mt-4">
        <EventPageHeroSection />
      </section>

      {/* Events Cards Section */}
      <section className="mt-10">
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-12 px-4 md:px-6 lg:px-12 xl:px-24 max-w-8xl mx-auto">
          {events.map((event, idx) => (
            <EventsCard
              key={idx}
              title={event.title}
              image={event.images}
              description={event.description}
              isSpecial={idx === 0 || idx === 1}
            />
          ))}
        </div>
      </section>

      {/* Text section */}
      <section className="mt-10 mb-10">
        <div className="font-inter font-semibold text-[#1E1E1E] text-[12px] md:text-[16px] xl:text-[24px] leading-[150%] text-center px-4 md:px-6 lg:px-12 xl:px-24">
          <p>You can place your order easily through our website.</p>
          <p> During checkout, you'll have the option to add a specific message for your order.</p>
          <p>If you prefer, you can also contact us directly and our team will be happy to assist you personally.</p>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
