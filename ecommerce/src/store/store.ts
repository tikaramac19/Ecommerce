import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productSlice from "./productSlice/productSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REHYDRATE, REGISTER } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, productSlice);

const store = configureStore({
  reducer: {
    products: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REHYDRATE, REGISTER ]
      }
  })
});

export default store;
