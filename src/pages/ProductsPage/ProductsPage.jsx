import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { productService } from "../../services/api.js";

// This page is the main products page, which will display all the products in different sections (soups, desserts, waffles, side dishes). Each section will have a heading and a grid of product cards.
//  The product data is imported from the productData file, which contains arrays of products for each category.
//  The page also includes a mobile category navigation at the top, which allows users to quickly jump to different sections of the page.

const ProductsPage = () => {
  const [productData, setProductData] = useState({});
  const { hash } = useLocation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getAll();
        const groupedData = data.reduce((acc, product) => {
          const cat = product.category
            ? (product.category.slug || product.category.name || "other")
            : "other";

          if (!acc[cat]) acc[cat] = [];
          acc[cat].push(product);
          return acc;
        }, {});

        setProductData(groupedData);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Unable to load the menu at this time.");
      }
    };

    fetchProducts();
  }, []);

  const category = Object.keys(productData);

  // Handle the jump from the Home Page cards
  useEffect(() => {
    if (!hash || category.length === 0) return;

    const timer = setTimeout(() => {
      const decodedHash = decodeURIComponent(hash.replace("#", ""));
      let element = document.getElementById(decodedHash);
      if (!element) {
        const target = decodedHash.toLowerCase().replace(/[\s-_]+/g, "");
        const matchedKey = category.find(
          (cat) => cat.toLowerCase().replace(/[\s-_]+/g, "") === target
        );
        if (matchedKey) {
          element = document.getElementById(matchedKey);
        }
      }
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [hash, category]);


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
              className="font-inter px-4 h-[28.74px] text-[11px] grid place-items-center text-center text-[#FAFAF5] font-medium rounded-full bg-[#DEA401]  hover:bg-transparent hover:border hover:border-[#DEA401] hover:text-[#DEA401] transition-colors whitespace-nowrap"
            >
              {cate.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
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
          <div className="flex items-center mb-8 gap-2 md:gap-4 -mx-4 w-[calc(100%+2rem)] md:mx-0 md:w-full">
            <div className="w-12 md:w-20 border-t-8 border-[#DEA401]"></div>
            <h2 className="font-santa font-normal text-3xl md:text-4xl lg:text-5xl text-[#DEA401] text-center leading-tight mx-2 md:mx-4 capitalize">{productdishes[0]?.category?.name || category}</h2>
            <div className="flex-grow border-t-8 border-[#DEA401]"></div>
          </div>
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {productdishes.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ))}
    </main>

  );
};

export default ProductsPage;
