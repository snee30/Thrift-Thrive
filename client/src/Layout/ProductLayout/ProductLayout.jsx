import IndividualProduct from "./Component/IndividualProduct";
import { useEffect } from "react";
import usePublicState from "../../GlobalState/publicState";

const ProductLayout = () => {
  const { products, getProducts } = usePublicState();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className=" px-4 py-8 pt-30 bg-sage w-full min-h-screen ">
      <h1 className="text-3xl font-bold mb-8  bg-cream text-center mt-5 rounded-lg p-4 shadow-md w-max mx-auto text-forestgreen">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length === 0 ? (
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-4 mx-auto">
            Sorry!! No products at the moment
          </div>
        ) : (
          products.map((product, index) => (
            <IndividualProduct key={index} details={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductLayout;
