import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../features/customer/auth/AuthSlice";
import ProductsReducer from "../features/admin/ProductManagement/ProductSlice"

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    products: ProductsReducer,
  },
});
