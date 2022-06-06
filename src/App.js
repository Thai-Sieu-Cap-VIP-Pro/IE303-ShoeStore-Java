import { Outlet, Route, Routes, Navigate } from "react-router-dom";
import AuthIndex from "./features/customer/auth/AuthIndex";
import Admin from "./features/admin/pages/Admin";
import ProductManager from "./features/admin/pages/ProductManager";
import BrandManager from "./features/admin/pages/BrandManager";
import OrderManager from "./features/admin/pages/OrderManager";
import Report from "./features/admin/pages/Report";
import HomePage from "./features/customer/home/HomePage";
import Cart from "./features/customer/cart/Cart";
import Navbar from "./features/customer/navbar/Navbar";
import NotFound from "./features/customer/notFound/NotFound";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/auth" element={<AuthIndex />} />
        <Route path="/admin/*" element={<Admin />}>
          <Route path="product" element={<ProductManager />} />
          <Route path="brand" element={<BrandManager />} />
          <Route path="order" element={<OrderManager />} />
          <Route path="report" element={<Report />} />
        </Route>
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </div>
  );
}

export default App;
