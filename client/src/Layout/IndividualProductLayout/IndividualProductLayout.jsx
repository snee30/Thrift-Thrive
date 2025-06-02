import { useParams } from "react-router-dom";

const IndividualProduct = () => {
  const { productId } = useParams();
  // Steps to do
  // 1. Backend bata when productId aaucha then return productId, in routes the path will be "/product/:productId"
  // 2. Receive that api and through oublic state inside the GlobalState get the result in an object
  // 3. UseEffect to call that function and the product
  // 3. Style that product
  return (
    <div className="min-h-screen flex justify-center items-center">
      Display the product of id: {productId}
    </div>
  );
};
export default IndividualProduct;
