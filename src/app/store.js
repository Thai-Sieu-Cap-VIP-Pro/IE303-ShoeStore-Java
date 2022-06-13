import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../features/customer/auth/AuthSlice";
//import CartReducer from "../features/customer/cart/CartSlice";
import BrandReducer from "../features/admin/brandManagement/brandSlice";
import ProductsReducer from "../features/admin/ProductManagement/ProductSlice";
import OrderReducer from "../features/admin/OrderManagement/OrderSlice";
import HomeReducer from "../features/customer/home/HomeSlice";
import CartDetailsReducer from "../features/customer/cart/CartSlice"

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    products: ProductsReducer,
   // cart: CartReducer,
    brand: BrandReducer,
    orders: OrderReducer,
    home: HomeReducer,
    cartDetails: CartDetailsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
