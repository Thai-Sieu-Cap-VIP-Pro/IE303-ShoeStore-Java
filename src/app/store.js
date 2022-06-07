import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../features/customer/auth/AuthSlice";
import productsReducer from "../features/customer/products/ProductsSlice";
import { productsApi } from "../features/customer/products/productApi";
import cartReducer from "../features/customer/cart/CartSlice";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import BrandReducer from "../features/admin/brandManagement/brandSlice";
import ProductsReducer from "../features/admin/ProductManagement/ProductSlice";
import HomeReducer from "../features/customer/home/HomeSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    products: productsReducer,
    cart: cartReducer,
    brand: BrandReducer,
    home: HomeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
