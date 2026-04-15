import { useParams } from "react-router-dom";
import { productData } from "../../data/productData";
import ProductDetailHeroSection from "../../components/ProductDetailHeroSection/ProductDetailHeroSection";

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

        </main>
    );
};

export default ProductDetailPage;
