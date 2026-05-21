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

      <section className="mt-10 mb-10">
        {/* Events Cards Section */}
        <div className="flex flex-col gap-2 md:gap-12 px-4 md:px-6 lg:px-12 xl:px-24 max-w-8xl mx-auto">
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
    </div>
  );
};

export default EventsPage;
