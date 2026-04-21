import { productdetailsdata } from "../../data/productdetailsdata";
const ProductDetails = ({ productdish }) => {
    if (!productdish) return null;

    // Find details for the specific product
    const details = productdetailsdata.find((item) => item.id === productdish.id);

    // If no details exist, render nothing (or you can add a fallback message here)
    if (!details) return null;

    return (
        <section className="w-full flex flex-col items-center mt-12 mb-12 px-2 md:px-5">
            <div className="space-y-6">
                {/* Section Title with Underline */}
                <div className="border-b-4 border-black inline-block pb-1">
                    <h3 className=" font-inter text-[14px] md:text-[20px] xl:text-[24px] font-bold leading-[130%]">{details.title}</h3>
                </div>

                {/* Product Description */}
                <div className="space-y-2">
                    <h4 className="font-inter text-[12px] md:text-[18px] xl:text-[20px] font-bold leading-[130%]">
                        {details.heading} <span className="font-inter text-[12px] md:text-[18px] xl:text-[20px] font-normal leading-[130%]">{details.subheading}</span>
                    </h4>
                    <p className="font-inter text-[12px] md:text-[18px] xl:text-[20px] font-normal leading-[130%]">
                        {details.description}
                    </p>
                </div>

                {/* Ingredients Section */}
                <div className="space-y-1">
                    <h5 className="font-inter text-[12px] md:text-[18px] xl:text-[20px] font-bold leading-[130%]">{details.ingredientsLabel}</h5>
                    <p className="font-inter text-[12px] md:text-[18px] xl:text-[20px] font-normal leading-[130%]">
                        {details.ingredientsBody}
                    </p>
                </div>

                {/* Dynamic Footnotes */}
                {details.footnotes && details.footnotes.length > 0 && (
                    <div className="pt-4 space-y-1">
                        {details.footnotes.map((note, index) => (
                            <p key={index} className="font-inter text-[12px] md:text-[18px] xl:text-[20px] font-normal leading-[130%]">
                                {note}
                            </p>
                        ))}
                    </div>
                )}

                {/* Nutritional Table Image */}
                {details.nutritionImage && (
                    <div className="pt-4 space-y-6">
                        <h3 className="font-inter text-[14px] md:text-[20px] xl:text-[32px] font-bold leading-[130%]">Nutritional Information</h3>
                        <div className="pt-6 w-full max-w-[1440px] mx-auto">
                            <img
                                src={details.nutritionImage}
                                alt="Nutritional Information"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
};

export default ProductDetails;
