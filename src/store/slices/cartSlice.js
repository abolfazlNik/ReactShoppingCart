import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
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
        console.log("this is exist!");
      } else {
        state.cart.push({ ...item });
      }
    },
    decreaseCart: (state, action) => {
      const { id } = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
    },
  },
});

export const { incrementCart, decreaseCart } = cartSlice.actions;
export default cartSlice.reducer;
