
import Header from "./components/Header";
import Footer from "./components/Footer";
import HealthySection from "./components/HealthyDishes";
import AboutUsSection from "./components/AboutUs/AboutUs";
import GymPage from "./pages/GymPage/page.jsx";
import GymHealthy from "./components/Gym/GymHealthy.jsx";
import Hero from "./components/Hero/Hero";
import Delivery from "./components/Delivery";
import AboutUsPage from "./pages/AboutUs/about-us.jsx";
import PayPage from "./pages/Pay/PayPage";
import PaymentSuccessPage from "./pages/PaymentSuccess/PaymentSuccessPage.jsx";
import YourCart from "./pages/YourCart/YourCart";
import HomeEvents from "./components/HomeEvents";
import EventsPage from "./pages/EventsPage/page.jsx";
import { Routes, Route } from "react-router-dom";
import HomeCard from "./components/HomeCard/Card.jsx";
import ProductsPage from "./pages/ProductsPage/ProductsPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage/page.jsx";
import SubscribeSection from "./components/SubscribeSection/SubscribeSection.jsx";
import InfiniteMarquee from "./components/InfiniteMarquee/InfiniteMarquee.jsx";
import HomeIconSection from "./components/HomeIconSection/HomeIconSection.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import AddressPage from "./pages/AddressPage/AddressPage.jsx";
import WhatsAppButton from "./components/WhatsAppButton";

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
                <Delivery />
                <HealthySection />
                <InfiniteMarquee />
                <HomeEvents />
                <GymHealthy />
                <SubscribeSection />

                <AboutUsSection />
                <HomeCard />
              </>
            }
          />


          {/* Dishes pages */}
          <Route path="/productsPage" element={<ProductsPage />} />
          <Route path="/productdetail/:productTitle" element={<ProductDetailPage />} />

          {/* Other pages */}
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/pay" element={<PayPage />} />
          <Route path="/payment-success" element={<PaymentSuccessPage />} />
          <Route path="/your-cart" element={<YourCart />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/gym" element={<GymPage />} />

          {/* Login/Register pages */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/address" element={<AddressPage />} />


        </Routes>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>

  );
}

export default App;