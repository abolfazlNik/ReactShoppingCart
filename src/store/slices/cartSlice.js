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
      console.log(existItem);
      if (existItem !== -1) {
        console.log("this is exist!");
      } else {
        state.cart.push({ ...item });
      }
    },
  },
});

export const { incrementCart } = cartSlice.actions;
export default cartSlice.reducer;
