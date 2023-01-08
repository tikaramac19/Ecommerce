import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice/productSlice";
import authSlice from "./authSlice/authSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REHYDRATE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const slice = combineReducers({
  authSlice,
  productSlice,
});

const persistedReducer = persistReducer(persistConfig, slice);
// const authPersistedReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REHYDRATE, REGISTER],
      },
    }),
});
