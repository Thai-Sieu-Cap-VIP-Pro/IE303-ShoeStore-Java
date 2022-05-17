import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import BrandReducer from "../features/admin/brandManagement/brandSlice";

export const store = configureStore({
  reducer: {
    brand: BrandReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
