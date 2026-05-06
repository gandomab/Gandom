
import Header from "./components/Header";
import Footer from "./components/Footer";
import HealthySection from "./components/HealthyDishes";
import AboutUsSection from "./components/AboutUs/AboutUs";
import EventsSpecialpromotions from "./components/EventsSpecialpromotions";
import GymPage from "./pages/GymPage/page.jsx";
import GymHealthy from "./components/Gym/GymHealthy.jsx";
import Hero from "./components/Hero/Hero";
import Delivery from "./components/Delivery";
import DeliveryOrderPage from "./pages/Delivery/DeliveryOrderPage/page.jsx";
import CreateBoxMenuPage from "./pages/Delivery/CreateBoxMenu/page.jsx";
import AboutUsPage from "./pages/AboutUs/about-us.jsx";
import PayPage from "./pages/Pay/PayPage";
import YourCart from "./pages/YourCart/YourCart";
import HomeEvents from "./components/HomeEvents";
import EventsPage from "./pages/EventsPage/page.jsx";
import { Routes, Route } from "react-router-dom";
import Pay from "./pages/Pay/PayPage";
import HomeCard from "./components/HomeCard/Card.jsx";
import ProductsPage from "./pages/ProductsPage/ProductsPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage/page.jsx";
import SubscribeSection from "./components/SubscribeSection/SubscribeSection.jsx";
import InfiniteMarquee from "./components/InfiniteMarquee/InfiniteMarquee.jsx";
import HomeIconSection from "./components/HomeIconSection/HomeIconSection.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-beigebg">
      <Header />

      <main className="bg-beigebg flex-grow w-full">
        <Routes>

          {/* Home page */}

          <Route
            path="/"
            element={
              <>
                <Hero />
                <HomeIconSection />
                <HealthySection />
                <InfiniteMarquee />
                <HomeEvents />
                <GymHealthy />
                <SubscribeSection />
                <Delivery />
                <AboutUsSection />
                <HomeCard />
              </>
            }
          />


          {/* Dishes pages */}
          <Route path="/productsPage" element={<ProductsPage />} />
          <Route path="/productdetail/:productTitle" element={<ProductDetailPage />} />

          {/* Delivery pages */}
          <Route path="/delivery/order" element={<DeliveryOrderPage />} />
          <Route path="/delivery/createboxmenu" element={<CreateBoxMenuPage />} />

          {/* Other pages */}
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/pay" element={<PayPage />} />
          <Route path="/your-cart" element={<YourCart />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/gym" element={<GymPage />} />


        </Routes>
      </main>

      <Footer />
    </div>

  );
}

export default App;