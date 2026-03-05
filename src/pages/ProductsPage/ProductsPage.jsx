// import ProductSoupSection from "../../components/ProductSoupSection/ProductSoupSection.jsx"
import { productData } from "../../data/productData.js";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
const ProductsPage = () => {
    return (
      <main className="max-w-[1264px] mx-auto px-4 mt-[100px]">
      {/* Dynamic Section Generator */}
      {Object.entries(productData).map(([category, productdishes]) => (
        <section key={category} id={category} className="mb-20 pt-1">
          <div className="flex items-center w-full h-[52px] top-[202px] mx-auto mb-8 gap-4">
            <div className="w-40 border-t-8 border-[#DEA401]"></div>
            <h2 className="font-santa font-normal text-3xl md:text-4xl lg:text-5xl text-[#DEA401] text-center leading-tight mx-4 capitalize">{category}</h2>
            <div className="grow border-t-8 border-[#DEA401]"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productdishes.map(productdish => (
              <ProductCard key={productdish.id} productdish={productdish} />
            ))}
          </div>
        </section>
      ))}
    </main>
    //   <div className="flex flex-col items-center w-full">
      
    //   {/* Sections */}
    //   <ProductSoupSection />
    //   {/* <ProductDessertsSection />
    //   <ProductWafflesSection />
    //   <ProductSideDishSection /> */}
    // </div>
    );
};

export default ProductsPage;
