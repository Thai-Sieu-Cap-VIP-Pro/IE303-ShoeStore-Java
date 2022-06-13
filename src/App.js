import { Outlet, Route, Routes, Navigate } from "react-router-dom";
import Admin from "./features/admin/pages/Admin";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import React from "react";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import BrandIndex from "./features/admin/brandManagement/brandIndex";
import ProductIndex from "./features/admin/ProductManagement/ProductIndex";
import OrderIndex from "./features/admin/OrderManagement/OrderIndex";
import HomeIndex from "./features/customer/home/HomeIndex";
import Login from "./features/customer/login_register/login";
import Register from "./features/customer/login_register/register";
import DetailIndex from "./features/customer/detail/DetailIndex";
import Dashboard from "./features/admin/dashboard";
import Introduction from "./features/customer/intro/introduction";
import Products from "./features/customer/products/Product";
import Contact from "./features/customer/contact/Contact";
import News from "./features/customer/news/News";
import Profile from "./features/customer/profile/Profile";
import NotFound from "./features/customer/notFound/NotFound";
import Cart from "./features/customer/cart/Cart";
import OrderPage from "./features/customer/order/pages/OrderPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin/*" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="product/*" element={<ProductIndex />} />
          <Route path="brand/*" element={<BrandIndex />} />
          <Route path="order/*" element={<OrderIndex />} />
          {/* <Route path="report" element={<Report />} /> */}
        </Route>

        <Route path="/*" element={<HomeIndex />} />
        <Route path="/detail/:productId" element={<DetailIndex />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/notFound" element={<NotFound />} />
        <Route path="/order/*" element={<OrderPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
export default App;
