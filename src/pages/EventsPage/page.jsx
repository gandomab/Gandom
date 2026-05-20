import EventPageHeroSection from "../../components/EventPageHeroSection/EventPageHeroSection";
import EventsCard from "../../components/EventsCard";
import { eventsData as events } from "../../data/events";

const EventsPage = () => {
  return (
    <div className="w-full">
      {/* Hero section for the cart page */}
      <section className="mt-4 mb-4">
        <EventPageHeroSection />
      </section>
      <section className="w-full min-h-[calc(100vh-90px)] pb-16 sm:pb-20 md:pb-24">

        {/* Events Cards Section */}
        <div className="flex flex-col gap-12 px-4 sm:px-6 lg:px-24 py-16 max-w-7xl mx-auto">
          {events.map((event, idx) => (
            <EventsCard
              key={idx}
              title={event.title}
              image={event.image}
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
