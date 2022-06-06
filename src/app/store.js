import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../features/customer/auth/AuthSlice";
import productsReducer from "../features/customer/products/ProductsSlice";
import { productsApi } from "../features/customer/products/productApi";
import cartReducer from "../features/customer/cart/CartSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
