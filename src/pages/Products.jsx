import { getProducts } from "../api/products";
import { useDispatch } from "react-redux";
import { incrementCart } from "../store/slices/cartSlice";
import { useQuery } from "@tanstack/react-query";
import ProductBox from "../components/ProductBox";

const Products = () => {
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch(incrementCart({ item: product }));
  };

  const { data, isLoading } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProducts,
  });

  const skeletonItems = Array.from({ length: 20 }, (_, index) => index);

  return (
    <>
      <div className="mb-6">products</div>
      <div className="grid grid-cols-5 gap-6">
        {isLoading ? (
          <>
            {skeletonItems.map((index) => (
              <div
                key={index}
                className="border border-gray-200 bg-gray-200 max-auto rounded-lg px-4 py-7 w-56 h-64 flex space-y-5 flex-col justify-center overflow-hidden animate-pulse"
              ></div>
            ))}
          </>
        ) : (
          <>
            {data?.map((product) => (
              <ProductBox
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Products;
