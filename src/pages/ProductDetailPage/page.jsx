import { useParams } from "react-router-dom";
import { productData } from "../../data/productData";
//import { productdetails } from "../../data/productdetailsdata";
import ProductDetailHeroSection from "../../components/ProductDetailHeroSection/ProductDetailHeroSection";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import CustomFermentedVegetablesDetails from "../../components/ProductDetails/CustomFermentedVegetablesDetails";

const ProductDetailPage = () => {
    const { productTitle } = useParams();

    // Find the product across all categories
    let productdish = null;
    let productCategory = "";

    for (const [category, products] of Object.entries(productData)) {
        const found = products.find(p => p.title.replace(/\s+/g, '-') === productTitle);
        if (found) {
            productdish = found;
            productCategory = category;
            break;
        }
    }

    return (
        <main className="w-full ">
            <div className="max-w-[1440px] mx-auto">
                <ProductDetailHeroSection productdish={productdish} />
            </div>
            <div className="max-w-[1440px] mx-auto">
                <ProductDetails productdish={productdish} />
                {productdish?.id === 403 && (
                    <CustomFermentedVegetablesDetails productdish={productdish} />
                )}
            </div>

        </main>
    );
};

export default ProductDetailPage;
