import { BiSolidCartAdd } from "react-icons/bi";
import { Link } from "react-router-dom";

const ProductBox = ({ product, addToCart, showAddToCartButton = true }) => {
  return (
    <div className="border border-gray-200 bg-white max-auto rounded-lg px-4 py-7 w-56 h-64 flex space-y-5 flex-col justify-center overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <img
          className="h-28 w-28 object-contain mx-auto"
          src={product.image}
          alt={product.title}
        />
      </Link>
      <div className="truncate">{product.title}</div>
      <div className="flex justify-between">
        <div className="">price: {product.price}</div>
        {showAddToCartButton && (
          <button className="" onClick={() => addToCart(product)}>
            <BiSolidCartAdd className="text-2xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductBox;
