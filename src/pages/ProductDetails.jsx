import { product } from "../api/products";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { incrementCart } from "../store/slices/cartSlice";
import { BiSolidCartAdd } from "react-icons/bi";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryFn: () => product(id),
    queryKey: ["product", id],
  });
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(incrementCart({ item: product }));
  };

  return (
    <>
      {isLoading ? (
        <div className="border border-gray-200 bg-gray-300 max-auto rounded-lg px-4 py-7 w-full h-96 flex space-y-5 flex-col justify-center overflow-hidden animate-pulse" />
      ) : (
        <div className="flex space-x-20">
          <img className="w-80" src={data.image} alt={data.title} />
          <div className="">
            <div className="border-b pb-4 mb-4">
              <span className="font-bold">category:</span> {data.category}
            </div>
            <div className="">
              <span className="font-bold">title:</span> {data.title}
            </div>
            <div className="">
              <span className="font-bold">price:</span> {data.price}
            </div>
            <div className="">
              <span className="font-bold">ate:</span> {data.rating?.rate}
            </div>
          </div>
          <button
            className="flex items-center bg-blue-400 h-10 p-3 rounded-md space-x-2"
            onClick={() => addToCart(data)}
          >
            <BiSolidCartAdd className="text-3xl" />
            <span>add to cart</span>
          </button>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
