import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/index";

export const store = configureStore({
  reducer: {
    reducer: productReducer,
  },
});
