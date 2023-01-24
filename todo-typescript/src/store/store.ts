import { configureStore } from "@reduxjs/toolkit";
import { type } from "os";
import { TypeOf } from "yup";
import todoSlice from "./todoSlice";

const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
