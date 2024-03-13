import { BiSolidCartAdd, BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ProductType, TodoType } from "../types";

type ProductBoxType = {
  product: ProductType | TodoType;
  addToCart?: (product: ProductType) => void;
  removeCart?: (product: ProductType) => void;
  todosType?: boolean;
};

const ProductBox = ({
  product,
  addToCart,
  removeCart,
  todosType,
}: ProductBoxType) => {
  const productData = product as ProductType;
  const todoData = product as TodoType;
  return (
    <>
      <div className="border border-gray-200 bg-white max-auto rounded-lg px-4 py-7 w-56 h-64 flex space-y-5 flex-col justify-center overflow-hidden">
        {!todosType ? (
          <>
            <Link to={`/product/${productData.id}`}>
              <img
                className="h-28 w-28 object-contain mx-auto"
                src={productData.image}
                alt={productData.title}
              />
            </Link>
            <div className="truncate">{product.title}</div>
            <div className="flex justify-between">
              <div className="">price: {productData.price}</div>
              {addToCart && (
                <button className="" onClick={() => addToCart(productData)}>
                  <BiSolidCartAdd className="text-2xl" />
                </button>
              )}
              {removeCart && (
                <button className="" onClick={() => removeCart(productData)}>
                  <BiX className="text-2xl" />
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            <div>{todoData.id}</div>
            <div className="font-semibold text-center">{todoData.title}</div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductBox;
