const ProductDetails = ({ product }) => {
    

    if (!product) return null;

    // Keep the rest of your existing code unchanged.
    // Split the description into lines
    const lines = (product.description || "")
        .split(/\r?\n/)
        .map(line => line.trim())
        .filter(Boolean);
    

    const ingredientsIndex = lines.findIndex(line =>
        /^Ingredients:/i.test(line)
    );

    const additionalIndex = lines.findIndex(line =>
        /^Additional information:/i.test(line)
    );

    // Introduction
    const introEnd = ingredientsIndex !== -1
        ? ingredientsIndex
        : additionalIndex !== -1
            ? additionalIndex
            : lines.length;

    const introduction = lines.slice(0, introEnd);

    // Ingredients
    const ingredients = ingredientsIndex !== -1
        ? lines.slice(
            ingredientsIndex + 1,
            additionalIndex !== -1 ? additionalIndex : lines.length
        )
        : [];

    // Additional information
    const additionalInfo = additionalIndex !== -1
        ? lines.slice(additionalIndex + 1)
        : [];

    return (
        <section className="w-full flex flex-col items-center mt-2 md:mt-6 xl:mt-12 mb-12 px-8 md:px-12">
            <div className="w-full space-y-6">

                <div className="border-b-4 border-black inline-block pb-1">
                    <h3 className="font-inter text-[14px] md:text-[20px] xl:text-[24px] font-bold leading-[130%]">
                        Product Details
                    </h3>
                </div>

                {/* Introduction */}
                <div className="space-y-2">
                    {introduction.map((line, index) => (
                        <p
                            key={index}
                            className="font-inter text-[12px] md:text-[18px] xl:text-[20px] leading-[130%]"
                        >
                            {line}
                        </p>
                    ))}
                </div>

                {/* Ingredients */}
                {ingredients.length > 0 && (
                    <div className="space-y-2">
                        <h4 className="font-inter font-bold text-[14px] md:text-[18px] xl:text-[20px]">
                            Ingredients
                        </h4>

                        <ul className="list-disc pl-6 space-y-1">
                            {ingredients.map((item, index) => (
                                <li
                                    key={index}
                                    className="font-inter text-[12px] md:text-[18px] xl:text-[20px] leading-[130%]"
                                >
                                    {item.replace(/^-\s*/, "")}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Additional Information */}
                {additionalInfo.length > 0 && (
                    <div className="space-y-2">
                        <h4 className="font-inter font-bold text-[14px] md:text-[18px] xl:text-[20px]">
                            Additional Information
                        </h4>

                        <ul className="list-disc pl-6 space-y-1">
                            {additionalInfo.map((item, index) => (
                                <li
                                    key={index}
                                    className="font-inter text-[12px] md:text-[18px] xl:text-[20px] leading-[130%]"
                                >
                                    {item.replace(/^-\s*/, "")}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Nutrition Image */}
                {product.nutrition_image && (
                    <div className="pt-2 md:pt-4 space-y-6">
                        <h3 className="font-inter text-[14px] md:text-[20px] xl:text-[32px] font-bold">
                            Nutritional Information
                        </h3>

                        <div className="pt-1 w-full max-w-[1440px] mx-auto">
                            <img
                                src={product.nutrition_image}
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
