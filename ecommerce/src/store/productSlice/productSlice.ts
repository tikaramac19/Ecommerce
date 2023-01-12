import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { itemInterface } from "../../@types/globleTypes/itemTypes";
interface intialStateType {
  products: any;
  favroute: itemInterface[];
  cartItems: itemInterface[];
  deleteItem: itemInterface[];
  favroutes: itemInterface[];
  miniProducts: itemInterface[];
  increaseTotal: number;
  decreaseTotal: number;
  totalPrice: number;
  pageTitle: string;
  isFavroute: boolean;
}

const initialState = {
  products: [],
  miniProducts: [],
  favroute: [],
  cartItems: [],
  deleteItem: [],
  favroutes: [],
  increaseTotal: 0,
  decreaseTotal: 0,
  totalPrice: 0,
  pageTitle: "Products",
  showDeleteBtn: false,
  isFavroute: false,
} as intialStateType;

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, actions) => {
      state.products = actions.payload;
    },
    addMiniProducts: (state, actions) => {
      state.miniProducts = actions.payload;
    },
    addToCart: (state: any, actions) => {
      let tempCarts = [...state.cartItems];
      let newItem = actions.payload;
      // console.log(newItem);

      if (tempCarts.length === 0) {
        state.cartItems = [newItem];
      } else {
        const filteredItems = tempCarts.filter((item) => {
          return item.id !== newItem.id;
        });

        state.cartItems = [...filteredItems, newItem];
      }
    },
    deleteCart: (state: any, actions) => {
      state.cartItems = actions.payload;
    },
    addToFavroute: (state: any, actions) => {
      let tempFavroutes = [...state.favroutes];
      let newItem = actions.payload;

      if (tempFavroutes.length === 0) {
        state.favroutes = [newItem];
      } else {
        const filteredItems = tempFavroutes.filter((item) => {
          return item.id !== newItem.id;
        });

        state.favroutes = [...filteredItems, newItem];
      }
    },
    deleteFavroute: (state: any, actions) => {
      const tempId = actions.payload;
      const tempFavroutes = [...state.favroutes];

      let filterFavroute = tempFavroutes.filter(
        (item: itemInterface, id: number) => {
          if (id !== tempId) {
            return item;
          }
        }
      );
      state.favroutes = filterFavroute;
    },
    setIsFavroute: (state: any, actions) => {
      state.isFavroute = actions.payload;
    },
    setTotalPrice: (state: any, actions) => {
      state.totalPrice = actions.payload;
    },
    setIncreaseTotal: (state: any, actions) => {
      state.totalPrice += actions.payload;
    },
    setDecreaseTotal: (state: any, actions) => {
      state.totalPrice = state.totalPrice - actions.payload;
    },
  },
});
export const {
  addProducts,
  addMiniProducts,
  addToCart,
  deleteCart,
  addToFavroute,
  deleteFavroute,
  setIsFavroute,
  setTotalPrice,
  setIncreaseTotal,
  setDecreaseTotal,
} = productSlice.actions;

export default productSlice.reducer;
