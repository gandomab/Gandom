import { productData } from "../../data/productData.js";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This page is the main products page, which will display all the products in different sections (soups, desserts, waffles, side dishes). Each section will have a heading and a grid of product cards.
//  The product data is imported from the productData file, which contains arrays of products for each category.
//  The page also includes a mobile category navigation at the top, which allows users to quickly jump to different sections of the page.

const ProductsPage = () => {
  const category = Object.keys(productData);
  const { hash } = useLocation();
  // Handle the jump from the Home Page cards
  useEffect(() => {
    if (hash) {
      // Small timeout gives the data a split second to render
      setTimeout(() => {
        const id = hash.replace("#", ""); // Remove the '#' from the hash to get the id
        const element = document.getElementById(id); // Find the element with the corresponding id
        // Scroll to the element smoothly
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [hash]); // Runs whenever the URL hash changes


  return (
    <main className="w-full px-4 mt-[100px] max-w-[1440px] mx-auto">

      {/* Mobile Category Nav */}
      <nav className="sticky top-[100px] z-30 justify-items-center  lg:hidden md:hidden ">
        <div className="flex gap-4 overflow-hidden no-scrollbar">
          {category.map((cate) => (
            <HashLink
              key={cate}
              smooth
              to={`#${cate}`}
              className="font-inter w-[77.33px] h-[28.74px] text-[11px] grid place-items-center text-center text-[#FAFAF5] font-medium p-4 py-2 rounded-full bg-[#DEA401]  hover:bg-transparent hover:border hover:border-[#DEA401] hover:text-[#DEA401] transition-colors whitespace-nowrap"
            >
              {cate.charAt(0).toUpperCase() + cate.slice(1)}
            </HashLink>
          ))}
        </div>
      </nav>

      {/* Dynamic Section Generator */}
      {Object.entries(productData).map(([category, productdishes]) => (
        <section
          key={category}
          id={category}
          className="mb-20 mt-6 lg:px-4 pt-1 scroll-mt-[160px]">
          {/* Section Header with Decorative Lines */}
          <div className="flex items-center w-full mb-8 gap-4">
            <div className="w-20 border-t-8 border-[#DEA401]"></div>
            <h2 className="font-santa font-normal text-3xl md:text-4xl lg:text-5xl text-[#DEA401] text-center leading-tight mx-4 capitalize">{category}</h2>
            <div className="flex-grow border-t-8 border-[#DEA401]"></div>
          </div>
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {productdishes.map(productdish => (
              <ProductCard key={productdish.id} productdish={productdish} />
            ))}
          </div>
        </section>
      ))}
    </main>

  );
};

export default ProductsPage;
