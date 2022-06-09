import { Outlet, Route, Routes, Navigate } from "react-router-dom";
import Admin from "./features/admin/pages/Admin";
import "./App.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import BrandIndex from "./features/admin/brandManagement/brandIndex";
import ProductIndex from "./features/admin/ProductManagement/ProductIndex";
import OrderIndex from "./features/admin/OrderManagement/OrderIndex";
import HomeIndex from "./features/customer/home/HomeIndex";
import Login from "./features/customer/login_register/login";
import Register from "./features/customer/login_register/register";
import DetailIndex from "./features/customer/detail/DetailIndex";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin/*" element={<Admin />}>
          <Route path="product/*" element={<ProductIndex />} />

          <Route path="brand/*" element={<BrandIndex />} />
          {/* <Route path="order" element={<OrderManager />} /> */}
          {/* <Route path="report" element={<Report />} /> */}
        </Route>
        <Route path="/home/*" element={<HomeIndex />} />
        <Route path="/detail/*" element={<DetailIndex />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
export default App;
