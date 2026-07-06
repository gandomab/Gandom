import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { IoPerson } from "react-icons/io5";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = useCart();
  // this is for the total number of items in the cart
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const links = [
    { label: "Home", href: "/" },
    { label: "Dishes", href: "/productsPage" },
    { label: "About Us", href: "/about-us" },
    { label: "Gym", href: "/gym" },
    { label: "Events", href: "/events" },
  ];

  const linkClasses = (href, isActive) => {
    const isCustomActive = href === "/productsPage" && location.pathname.startsWith("/productdetail/");
    const finalIsActive = isActive || isCustomActive;
    return `font-inter text-[16px] ${finalIsActive ? "text-primary font-bold" : "text-black hover:text-black hover:font-bold"}`;
  };

  const mobileLinkClasses = (href, isActive) => {
    const isCustomActive = href === "/productsPage" && location.pathname.startsWith("/productdetail/");
    const finalIsActive = isActive || isCustomActive;
    return `font-inter text-[18px] w-full text-center py-2 rounded ${finalIsActive
      ? "text-primary font-bold underline"
      : "text-black hover:text-primary "
      }`;
  };

  return (
    <div className="flex items-center justify-end gap-6 relative  xl:translate-y-[9px]">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex items-center gap-6">
        {links.map((link) => (
          <NavLink key={link.href} to={link.href} className={({ isActive }) => linkClasses(link.href, isActive)}>
            {link.label}
          </NavLink>
        ))}
        <button
          onClick={() => navigate("/your-cart")}
          className={`relative p-2 rounded hover:text-primary ${location.pathname === '/your-cart' || location.pathname === '/pay' ? 'text-[#E6B220]' : 'text-black'}`}>
          <TiShoppingCart className="w-[27px] h-[24px]" />
          {totalItems > 0 && (
            <span className="absolute top-1 right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-[#E6B220] rounded-full">
              {totalItems}
            </span>
          )}
        </button>
        <button
          onClick={() => navigate("/login")}
          className={`relative p-2 rounded hover:text-primary ${location.pathname === '/login' || location.pathname === '/register' ? 'text-[#E6B220]' : 'text-black'}`}>
          <IoPerson className="w-[19px] h-[24px]" />
        </button>
      </div>

      {/* Tablet & Mobile Hamburger + Cart */}
      <div className="flex lg:hidden items-center gap-2 translate-y-[6px] md:translate-y-[7px] lg:translate-y-[8px]">
        <button
          onClick={() => {
            navigate("/your-cart");
            setMobileMenuOpen(false); // Close menu if open
          }}
          className={`relative p-2 rounded hover:text-primary ${location.pathname === '/your-cart' || location.pathname === '/pay' ? 'text-[#E6B220]' : 'text-black'}`}
        >
          <TiShoppingCart className="w-[24px] h-[21px] md:w-[32px] md:h-[29px] lg:w-[27px] lg:h-[24px]" />
          {totalItems > 0 && (
            <span className="absolute top-1 right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-[#E6B220] rounded-full">
              {totalItems}
            </span>
          )}
        </button>
        <button
          onClick={() => navigate("/login")}
          className={`relative p-2 rounded hover:text-primary ${location.pathname === '/login' || location.pathname === '/register' ? 'text-[#E6B220]' : 'text-black'}`}>
          <IoPerson className="w-[18px] h-[16px] md:w-[28px] md:h-[24px] lg:w-[24px] lg:h-[20px]" />
        </button>
        <button
          className={`p-2 rounded hover:text-primary ${isMobileMenuOpen ? 'text-primary' : 'text-black'}`}
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <RxCross2 className="w-[22px] h-[22px] md:w-[27px] md:h-[27px]" />
          ) : (
            <RxHamburgerMenu className="w-[22px] h-[22px] md:w-[27px] md:h-[27px]" />
          )}
        </button>
      </div>

      {/* Mobile & Tablet Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full right-0 w-56 bg-grayLight shadow-md flex flex-col items-center py-4 gap-4 lg:hidden z-50">
          {links.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => mobileLinkClasses(link.href, isActive)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
