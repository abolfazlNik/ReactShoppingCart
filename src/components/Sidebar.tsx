import { useState } from "react";
import { BiCartAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import ProductBox from "./ProductBox";
import { decreaseCart } from "../store/slices/cartSlice";
import { RootState } from "../store/store";
import { ProductType } from "../types";

const Sidebar = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const dispatch = useDispatch();
  const removeCart = (product: { id: number }) => {
    dispatch(decreaseCart({ id: product.id }));
  };

  return (
    <div>
      <div
        className="absolute right-10 top-7"
        onClick={() => setIsDrawerOpen(true)}
      >
        <BiCartAlt className="text-2xl" />
        {cartItems.length !== 0 && (
          <div className="absolute top-[-10px] right-[-4px] rounded-full bg-blue-300 w-5 h-5 flex items-center justify-center text-sm">
            {cartItems.length}
          </div>
        )}
      </div>

      <div className={`drawer drawer-end ${isDrawerOpen && "open"}`}>
        <input
          id="my-drawer-4"
          type="checkbox"
          className="drawer-toggle"
          checked={isDrawerOpen}
          onChange={() => setIsDrawerOpen(!isDrawerOpen)}
        />

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          />
          <div className="menu flex items-center space-y-3 p-4 w-80 min-h-full bg-base-200 text-base-content">
            {cartItems.length !== 0 ? (
              <>
                {cartItems.map((item: ProductType) => (
                  <ProductBox
                    key={item.id}
                    product={item}
                    removeCart={removeCart}
                  />
                ))}
              </>
            ) : (
              <div className="text-black">cart empty!</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
