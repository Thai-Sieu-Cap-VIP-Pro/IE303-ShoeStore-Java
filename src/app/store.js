import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import BrandReducer from "../features/admin/brandManagement/brandSlice";
import AuthReducer from "../features/admin/auth/authSlice"
import ProductsReducer from "../features/admin/ProductManagement/ProductSlice";
import OrderReducer from "../features/admin/OrderManagement/OrderSlice";


export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    products: ProductsReducer,
    brand: BrandReducer,
    orders: OrderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
