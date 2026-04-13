import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Home", href: "/" },
    { label: "Dishes", href: "/productsPage" },
    { label: "About Us", href: "/about-us" },
    { label: "Gym", href: "/gym" },
    { label: "Events", href: "/events" },
    { label: "Delivery", href: "/delivery/order" },
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
    <div className="flex items-center justify-end gap-6 relative">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex items-center gap-8">
        {links.map((link) => (
          <NavLink key={link.href} to={link.href} className={({ isActive }) => linkClasses(link.href, isActive)}>
            {link.label}
          </NavLink>
        ))}
        <button className="p-2 rounded hover:text-primary">
          <TiShoppingCart className="w-[27px] h-[24px]" />
        </button>
      </div>

      {/* Tablet & Mobile Hamburger + Cart */}
      <div className="flex lg:hidden items-center gap-4">
        <button className="p-2 rounded hover:text-primary">
          <TiShoppingCart className="w-[27px] h-[24px]" />
        </button>
        <button
          className="p-2 rounded hover:text-primary"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <RxHamburgerMenu className="w-[27px] h-[27px]" />
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
