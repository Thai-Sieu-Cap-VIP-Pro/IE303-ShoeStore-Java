import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import BrandReducer from "../features/admin/brandManagement/brandSlice";
import AuthReducer from "../features/admin/auth/authSlice";
import ProductsReducer from "../features/admin/ProductManagement/ProductSlice";
import HomeReducer from "../features/customer/home/HomeSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    products: ProductsReducer,
    brand: BrandReducer,
    home: HomeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
