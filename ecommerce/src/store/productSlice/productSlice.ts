import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface itemInterface {
  id: number;
  title: string;
  description: string;
  brand: string;
  category: string;
  image: string[];
  price?: number;
  rating: number;
  thumbnail: string;
}
interface intialStateType {
  products: itemInterface[];
  favroute: itemInterface[];
  cartItems: itemInterface[];
  deleteItem: itemInterface[];
  favroutes: itemInterface[];
  totalPrice: number;
  pageTitle: string;
}

const initialState = {
  products: [],
  favroute: [],
  cartItems: [],
  deleteItem: [],
  favroutes: [],
  totalPrice: 0,
  pageTitle: "Products",
} as intialStateType;

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, actions) => {
      state.products = actions.payload;
    },
    favrouteList: (state, actions) => {
      let tempId = actions.payload;
    },
    addToCart: (state: any, actions) => {
      // console.log(state.products, "kera");

      // let getItem = actions.payload;
      // console.log(getItem);
      let tempCarts = [...state.cartItems];
      tempCarts.push(actions.payload);

      state.cartItems = tempCarts;
      // console.log(tempCarts);
    },
    deleteCart: (state: any, actions) => {
      state.cartItems = actions.payload;
    },
  },
  extraReducers: (builder) => {},
});
export const { addProducts, addToCart, deleteCart } = productSlice.actions;
export default productSlice.reducer;
