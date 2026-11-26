
import React from "react";

const ProductDetails = ({ product }) => {
    if (!product) return null;

    // Split the description into lines
    const lines = (product.description || "")
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter(Boolean);

    const ingredientsIndex = lines.findIndex((line) =>
        /^Ingredients:/i.test(line)
    );

    const additionalIndex = lines.findIndex((line) =>
        /^Additional information:/i.test(line)
    );

    // Introduction
    const introEnd =
        ingredientsIndex !== -1
            ? ingredientsIndex
            : additionalIndex !== -1
                ? additionalIndex
                : lines.length;

    const introduction = lines.slice(0, introEnd);

    // Ingredients from Django API
    const ingredients = [...(product.ingredients || [])].sort(
        (a, b) => a.sort_order - b.sort_order
    );

    // Additional information
    const additionalInfo =
        additionalIndex !== -1
            ? lines.slice(additionalIndex + 1)
            : [];

    // Nutrition information from Django API
    const nutrition = product.nutrition;

    const nutritionItems = nutrition
    ? [
        { name: "Calories", value: nutrition.calories, unit: "kcal", notes: nutrition.calories_notes },
        { name: "Protein", value: nutrition.protein, unit: "g", notes: nutrition.protein_notes },
        { name: "Fat", value: nutrition.fat, unit: "g", notes: nutrition.fat_notes },
        { name: "Carbohydrates", value: nutrition.carbohydrates, unit: "g", notes: nutrition.carbohydrates_notes },
        { name: "Fiber", value: nutrition.fiber, unit: "g", notes: nutrition.fiber_notes },
        { name: "Sugars", value: nutrition.sugars, unit: "g", notes: nutrition.sugars_notes },
        { name: "Sodium", value: nutrition.sodium, unit: "mg", notes: nutrition.sodium_notes },
    ].filter((item) => item.value != null && item.value !== "")
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

                        <p className="font-inter text-[12px] md:text-[18px] xl:text-[20px] leading-[130%]">
                            {ingredients.map((item, index) => (
                                <React.Fragment key={item.id}>
                                    {index > 0 && ", "}
                                    {item.is_allergen ? (
                                        <strong>{item.name.toUpperCase()}</strong>
                                    ) : (
                                        item.name
                                    )}
                                </React.Fragment>
                            ))}
                        </p>
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

                
{/* Nutritional Information */}
{nutritionItems.length > 0 && (
    <div className="pt-2 md:pt-4 space-y-6">
        <h3 className="font-inter text-[14px] md:text-[20px] xl:text-[32px] font-bold">
            Nutritional Information
        </h3>

        <div className="w-full max-w-[900px]">
            {/* Column headings */}
            <div className="grid grid-cols-3 gap-3 py-3 border-b-2 border-gray-300">
                <span className="font-inter text-sm md:text-base font-bold">
                    Nutrient
                </span>

                <span className="font-inter text-sm md:text-base font-bold">
                    Amount
                </span>

                <span className="font-inter text-sm md:text-base font-bold">
                    Notes
                </span>
            </div>

            {/* Nutrition rows */}
            {nutritionItems.map((item) => (
                <div
                    key={item.name}
                    className="grid grid-cols-3 gap-3 items-center py-3 border-b border-gray-200"
                >
                    <span className="font-inter text-sm md:text-base font-medium">
                        {item.name}
                    </span>

                    <span className="font-inter text-sm md:text-base">
                        {item.value} {item.unit}
                    </span>

                    <span className="font-inter text-sm md:text-base text-gray-600">
                        {item.notes || "—"}
                    </span>
                </div>
            ))}
        </div>
    </div>
)}

                    </div> {/* Closes the main content container */}
        </section>
    );
};

export default ProductDetails;
