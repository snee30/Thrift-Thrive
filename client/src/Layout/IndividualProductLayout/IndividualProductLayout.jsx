import { useParams } from "react-router-dom";

const IndividualProduct = () => {
  const { productId } = useParams();
  // Steps to do
  // 1. Backend bata when productId aaucha then return productId, in routes the path will be "/product/:productId"
  // 2. Receive that api and use useEffect to get the result inside this function
  // 3. Style that product
  return (
    <div className="min-h-screen flex justify-center items-center">
      Display the product of id: {productId}
    </div>
  );
};
export default IndividualProduct;
