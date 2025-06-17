import { FiFilter } from "react-icons/fi";
import usePublicState from "../../GlobalState/publicState";

const CategoryFilter = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    getProductsByCategory,
    getProducts,
  } = usePublicState();

  const categories = ["Tops", "Bottoms", "dress", "Shoes", "bag", "others"];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "") {
      getProducts(); // fetch all products
    } else {
      getProductsByCategory(category);
    }
  };

  return (
    <div className="mb-6 bg-cream p-4 rounded-lg shadow-sm sticky top-20 z-10">
      <div className="flex items-center gap-2 mb-3">
        <FiFilter className="text-forestgreen text-lg" />
        <h2 className="text-lg font-semibold text-forestgreen">
          Filter Products
        </h2>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
            selectedCategory === ""
              ? "bg-forestgreen text-white shadow-md"
              : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
          }`}
          onClick={() => handleCategoryChange("")}
        >
          All Products
        </button>

        {categories.map((category) => (
          <button
            key={category}
            className={`capitalize px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
              selectedCategory === category
                ? "bg-forestgreen text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
