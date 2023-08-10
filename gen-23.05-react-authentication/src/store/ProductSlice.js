import { createSlice } from "@reduxjs/toolkit";

const producSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    AddProduct(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
    DeleteProduct(state, action) {
      const hasilFilter = state.filter((cart, index) => {
        return index !== action.payload;
      });
      return hasilFilter;
    },
  },
});
export const { DeleteProduct } = producSlice.actions;
export const { AddProduct } = producSlice.actions;
export default producSlice.reducer;
