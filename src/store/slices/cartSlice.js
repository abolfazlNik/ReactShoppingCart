import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementCart: (state, action) => {
      const { item } = action.payload;
      const existItem = state.cart.findIndex(
        (cartIndex) => cartIndex.id === item.id
      );
      if (existItem !== -1) {
        alert("this is exist!");
      } else {
        state.cart.push({ ...item });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decreaseCart: (state, action) => {
      const { id } = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { incrementCart, decreaseCart } = cartSlice.actions;
export default cartSlice.reducer;
