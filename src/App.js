import { Outlet, Route, Routes } from "react-router-dom";
//import AuthIndex from "./features./customer/auth/AuthIndex";
import Admin from "./features/admin/pages/Admin";
import ProductManager from "./features/admin/pages/ProductManager";
import BrandManager from "./features/admin/pages/BrandManager";
import OrderManager from "./features/admin/pages/OrderManager";
import Report from "./features/admin/pages/Report";
import './App.css'
import HomeIndex from "./features/customer/home/HomeIndex";
import Login from "./features/customer/login_register/login";
import Register from "./features/customer/login_register/register";
import DetailIndex from "./features/customer/detail/DetailIndex";
function App() {
  return (
    <div className="App">

      <Routes>
        {/* <Route path="/auth/*" element={<AuthIndex />}/> */}
        <Route path="/admin/*" element={<Admin/>}>
          <Route path="product" element={<ProductManager/>} />
          <Route path="brand" element={<BrandManager/>} />
          <Route path="order" element={<OrderManager/>} />
          <Route path="report" element={<Report/>} />
        </Route>
        <Route path="/home/*" element={<HomeIndex />}/>
        <Route path="/detail/*" element={<DetailIndex />}/>

        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;
