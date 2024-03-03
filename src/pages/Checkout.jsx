import { useSelector } from "react-redux";
import ProductBox from "../components/ProductBox";

const Checkout = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <>
      <div className="mb-6">checkout</div>
      <div className="grid grid-cols-5 gap-6">
        {cart.map((item) => (
          <ProductBox key={item.id} product={item} />
        ))}
      </div>
    </>
  );
};

export default Checkout;
