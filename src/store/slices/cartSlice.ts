import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../types";
const storedCart = localStorage.getItem("cart");
const initialState = {
  cart: storedCart ? JSON.parse(storedCart) : [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementCart: (state, action: PayloadAction<{ item: ProductType }>) => {
      const { item } = action.payload;
      const existItem = state.cart.findIndex(
        (cartIndex: { id: number }) => cartIndex.id === item.id
      );
      if (existItem !== -1) {
        alert("this is exist!");
      } else {
        state.cart.push({ ...item });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decreaseCart: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      state.cart = state.cart.filter((item: { id: number }) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { incrementCart, decreaseCart } = cartSlice.actions;
export default cartSlice.reducer;
