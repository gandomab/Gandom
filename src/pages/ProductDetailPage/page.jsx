import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductDetailHeroSection from "../../components/ProductDetailHeroSection/ProductDetailHeroSection";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import CustomFermentedVegetablesDetails from "../../components/ProductDetails/CustomFermentedVegetablesDetails";
import { productService } from "../../services/api";

const ProductDetailPage = () => {
    const { productTitle } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [product, setProduct] = useState(location.state?.product || null);
    const [loading, setLoading] = useState(!location.state?.product);
    const [error, setError] = useState(null);

    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [showLeaveModal, setShowLeaveModal] = useState(false);

    useEffect(() => {
        if (location.state?.product && location.state.product.slug === productTitle) {
            setProduct(location.state.product);
            setLoading(false);
        } else {
            setLoading(true);
        }

        setHasUnsavedChanges(false);
        setIsAddedToCart(false);
        setShowLeaveModal(false);

        const fetchProduct = async () => {
            try {
                const data = await productService.getBySlug(productTitle);
                setProduct(data);
                setError(null);
            } catch (err) {
                console.error("Failed to fetch product details:", err);
                if (!location.state?.product || location.state.product.slug !== productTitle) {
                    setError("Product not found");
                }
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [productTitle, location.state]);

    const handleBackToMenuRequest = () => {
        if (hasUnsavedChanges && !isAddedToCart) {
            setShowLeaveModal(true);
            return true;
        }
        navigate("/productsPage");
        return false;
    };

    const handleStay = () => {
        setShowLeaveModal(false);
    };

    const handleLeave = () => {
        setShowLeaveModal(false);
        setHasUnsavedChanges(false);
        navigate("/productsPage");
    };

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
        <main className="w-full">
            {showLeaveModal && (
                <div
                    role="dialog"
                    aria-modal="true"
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
                >
                    <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl space-y-4 text-center">
                        <h3 className="font-inter text-lg md:text-xl font-bold text-black">
                            Leave without adding?
                        </h3>
                        <p className="font-inter text-sm text-gray-600">
                            You have unsaved changes to this dish. If you leave now, they won&apos;t be added to your cart.
                        </p>
                        <div className="flex items-center justify-center gap-3 pt-2">
                            <button
                                type="button"
                                onClick={handleStay}
                                className="px-5 py-2 rounded-[20px] border border-gray-300 font-inter font-semibold text-sm text-black hover:bg-gray-100 transition-colors cursor-pointer"
                            >
                                Stay
                            </button>
                            <button
                                type="button"
                                onClick={handleLeave}
                                className="px-5 py-2 rounded-[20px] bg-[#E6B220] font-inter font-semibold text-sm text-white hover:opacity-90 transition-opacity cursor-pointer"
                            >
                                Leave
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-[1440px] mx-auto">
                <ProductDetailHeroSection
                    product={product}
                    onBackToMenuClick={handleBackToMenuRequest}
                    onOptionModified={() => {
                        setHasUnsavedChanges(true);
                        setIsAddedToCart(false);
                    }}
                    onAddedToCart={() => {
                        setIsAddedToCart(true);
                        setHasUnsavedChanges(false);
                    }}
                />
            </div>
            <div className="max-w-[1440px] mx-auto">
                <ProductDetails product={product} />
                {product?.id === 403 && (
                    <CustomFermentedVegetablesDetails
                        productdish={product}
                        onOptionModified={() => {
                            setHasUnsavedChanges(true);
                            setIsAddedToCart(false);
                        }}
                        onAddedToCart={() => {
                            setIsAddedToCart(true);
                            setHasUnsavedChanges(false);
                        }}
                    />
                )}
            </div>
        </main>
    );
};

export default ProductDetailPage;