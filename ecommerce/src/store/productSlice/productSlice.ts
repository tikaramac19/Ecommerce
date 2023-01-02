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
  grandTotal: number;
  pageTitle: string;
}

const initialState = {
  products: [],
  favroute: [],
  cartItems: [],
  deleteItem: [],
  favroutes: [],
  totalPrice: 0,
  grandTotal: 0,
  pageTitle: "Products",
} as intialStateType;

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, actions) => {
      state.products = actions.payload;
    },
    addToCart: (state: any, actions) => {
      let tempCarts = [...state.cartItems];
      let newItem = actions.payload;
      const calculatedGrandTotal = tempCarts.reduce(
        (total: number, curr, id: number, arr) => {
          total += arr[id].price;
          console.log(total);
          console.log(arr[id].price);
        },
        0
      );
      // console.log(calculatedGrandTotal);
      tempCarts.push(actions.payload);

      state.cartItems = tempCarts;
      // console.log(actions.payload);
      // state.grandTotal =
    },
    deleteCart: (state: any, actions) => {
      state.cartItems = actions.payload;
    },
    addToFavroute: (state: any, actions) => {
      let tempFavroutes = [...state.favroutes];
      let newItems = actions.payload;

      // let existingItem = tempFavroutes.filter((item:itemInterface,id:number)=>item.id === newItems.id )
      // console.log(existingItem, newItems);

      tempFavroutes.push(actions.payload);

      state.favroutes = tempFavroutes;

      // console.log(state.favroutes);
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
      // console.log(filterFavroute);
      // state.favroutes = actions.payload;
      state.favroutes = filterFavroute;
    },
  },
  extraReducers: (builder) => {},
});
export const {
  addProducts,
  addToCart,
  deleteCart,
  addToFavroute,
  deleteFavroute,
} = productSlice.actions;
export default productSlice.reducer;
