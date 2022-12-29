import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  pageTitle : "Products"
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, actions) => {
      state.products = actions.payload;
    },
  },
  extraReducers: (builder) => {},
});
export const { addProducts } = productSlice.actions;
export default productSlice.reducer;
