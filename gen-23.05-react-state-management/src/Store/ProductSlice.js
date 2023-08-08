import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const productFetch = createAsyncThunk("Product/productFetch", async () => {
  const ress = await axios.get(" http://localhost:3001/posts");
  return ress?.data;
});

const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {},
  extraReducers: {
    [productFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productFetch.fulfilled]: (state, action) => {
      state.status = "pending";
      state.items = action.payload;
    },
    [productFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});
export default ProductSlice.reducer;
