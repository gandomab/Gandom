import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductDetailHeroSection from "../../components/ProductDetailHeroSection/ProductDetailHeroSection";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import CustomFermentedVegetablesDetails from "../../components/ProductDetails/CustomFermentedVegetablesDetails";
import { productService } from "../../services/api";

const ProductDetailPage = () => {
    const { productTitle } = useParams();
    const location = useLocation();

    // Initialize from location state if available to prevent flicker
    const [product, setProduct] = useState(location.state?.product || null);
    const [loading, setLoading] = useState(!location.state?.product);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Initialize state with product from transition state to prevent visual loading flicker
        if (location.state?.product && location.state.product.slug === productTitle) {
            setProduct(location.state.product);
            setLoading(false);
        } else {
            setLoading(true);
        }

        const fetchProduct = async () => {
            try {
                const data = await productService.getBySlug(productTitle);
                setProduct(data);
                setError(null);
            } catch (err) {
                console.error("Failed to fetch product details:", err);
                // Only show full page error if we don't already have valid cached product data
                if (!location.state?.product || location.state.product.slug !== productTitle) {
                    setError("Product not found");
                }
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [productTitle, location.state]);

    if (loading && !product) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center">
                <svg className="animate-spin h-10 w-10 text-[#DEA401]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
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
                <ProductDetails product={product} />
                {product?.id === 403 && (
                    <CustomFermentedVegetablesDetails productdish={product} />
                )}
            </div>
        </main>
    );
};

export default ProductDetailPage;
