import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../features/customer/auth/AuthSlice";
import CartReducer from "../features/customer/cart/CartSlice";
import BrandReducer from "../features/admin/brandManagement/brandSlice";
import ProductsReducer from "../features/admin/ProductManagement/ProductSlice";
<<<<<<< HEAD
import OrderReducer from "../features/admin/OrderManagement/OrderSlice";

=======
import HomeReducer from "../features/customer/home/HomeSlice";
>>>>>>> 59381d4df6df0680344405b305b4d53cfa9cf0f8

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    products: ProductsReducer,
    cart: CartReducer,
    brand: BrandReducer,
<<<<<<< HEAD
    orders: OrderReducer,
=======
    home: HomeReducer,
>>>>>>> 59381d4df6df0680344405b305b4d53cfa9cf0f8
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
