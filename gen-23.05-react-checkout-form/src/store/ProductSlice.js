import { createSlice } from "@reduxjs/toolkit";

const producSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    AddProduct(state, action) {
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        product.amount++;
        console.log(product.amount);
      } else {
        state.push(action.payload);
      }
      console.log(action.payload);
    },
    DeleteProduct(state, action) {
      const hasilFilter = state.filter((cart, index) => {
        return index !== action.payload;
      });
      return hasilFilter;
    },
    IncreaseAmount(state, action) {
      const product = state.find((item) => item.id === action.payload);
      if (product && product.amount < 99) {
        product.amount++;
      }
    },
    DecreaseAmount(state, action) {
      const product = state.find((item) => item.id === action.payload);
      if (product && product.amount > 1) {
        product.amount--;
      }
    },
  },
});
export const { DeleteProduct, AddProduct, IncreaseAmount, DecreaseAmount } = producSlice.actions;
export default producSlice.reducer;
