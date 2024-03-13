import { useDispatch, useSelector } from "react-redux";
import ProductBox from "../components/ProductBox";
import { decreaseCart } from "../store/slices/cartSlice";
import { RootState } from "../store/store";
import { ProductType } from "../types";

const Checkout = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();
  const removeCart = (product: { id: number }) => {
    dispatch(decreaseCart({ id: product.id }));
  };
  return (
    <>
      <div className="mb-6">checkout</div>
      <div className="grid grid-cols-5 gap-6">
        {cart.map((item: ProductType) => (
          <ProductBox key={item.id} product={item} removeCart={removeCart} />
        ))}
      </div>
    </>
  );
};

export default Checkout;
