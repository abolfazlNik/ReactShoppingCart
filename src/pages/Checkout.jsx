import { useDispatch, useSelector } from "react-redux";
import ProductBox from "../components/ProductBox";
import { decreaseCart } from "../store/slices/cartSlice";

const Checkout = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const removeCart = (product) => {
    dispatch(decreaseCart({ id: product.id }));
  };
  return (
    <>
      <div className="mb-6">checkout</div>
      <div className="grid grid-cols-5 gap-6">
        {cart.map((item) => (
          <ProductBox
            key={item.id}
            product={item}
            showRemoveCartButton={true}
            removeCart={removeCart}
          />
        ))}
      </div>
    </>
  );
};

export default Checkout;
