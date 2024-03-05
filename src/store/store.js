import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("cart", JSON.stringify(state.cart.cart));
});

setupListeners(store.dispatch);
