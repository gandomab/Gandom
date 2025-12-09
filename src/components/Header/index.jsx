import LogoGandom from "../LogoGandom";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <header className="w-full bg-beigebg flex items-center px-4  sm:px-8 md:px-16 py-2 md:py-4">
      <div className="w-full max-w-[2560px] mx-auto flex items-center justify-between pb-4">
        {/* Logo */}
        <LogoGandom />

        {/* Navbar */}
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
