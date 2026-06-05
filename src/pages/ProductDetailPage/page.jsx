import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductDetailHeroSection from "../../components/ProductDetailHeroSection/ProductDetailHeroSection";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import CustomFermentedVegetablesDetails from "../../components/ProductDetails/CustomFermentedVegetablesDetails";
import { productService } from "../../services/api";

const ProductDetailPage = () => {
    const { productTitle } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const data = await productService.getBySlug(productTitle);
                setProduct(data);
            } catch (err) {
                console.error("Failed to fetch product details:", err);
                setError("Product not found");
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [productTitle]);

    if (loading) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center text-xl font-inter text-[#DEA401]">
                Loading product details...
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center text-xl font-inter text-[#DEA401]">
                {error || "Product not found"}
            </div>
        );
    }

    return (
        <main className="w-full ">
            <div className="max-w-[1440px] mx-auto">
                <ProductDetailHeroSection product={product} />
            </div>
            <div className="max-w-[1440px] mx-auto">
                <ProductDetails productdish={product} />
                {product?.id === 403 && (
                    <CustomFermentedVegetablesDetails productdish={product} />
                )}
            </div>
        </main>
    );
};

export default ProductDetailPage;
