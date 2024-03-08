import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();
  localStorage.setItem("cart", JSON.stringify(state.cart.cart));
  return result;
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    localStorageMiddleware,
  ],
});

setupListeners(store.dispatch);
