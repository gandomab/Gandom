
import Header from "./components/Header";
import Footer from "./components/Footer";
import HealthySection from "./components/HealthyDishes";
import AboutUsSection from "./components/AboutUs/AboutUs";
import EventsSpecialpromotions from "./components/EventsSpecialpromotions";
import GymPage from "./pages/Dishes/GymPage/page.jsx";
import GymHealthy from "./components/Gym/GymHealthy.jsx";
import Hero from "./components/Hero/Hero";
import SoupsPage from "./pages/Dishes/SoupsPage/page.jsx";
import DessertsPage from "./pages/Dishes/DessertsPage/page.jsx"
import WafflesPage from "./pages/Dishes/WafflesPage/page.jsx";
import SidedishesPage from "./pages/Dishes/SidedishesPage/page.jsx";
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
import SubscribeSection from "./components/SubscribeSection/SubscribeSection.jsx";

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
                <HealthySection />
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
          {/* <Route path="/dishes/soups" element={<SoupsPage />} />
          <Route path="/dishes/desserts" element={<DessertsPage />} />
          <Route path="/dishes/waffles" element={<WafflesPage />} />
          <Route path="/dishes/sidedishes" element={<SidedishesPage />} /> */}

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