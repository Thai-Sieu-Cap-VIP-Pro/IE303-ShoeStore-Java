import { Outlet, Route, Routes } from "react-router-dom";
import Admin from "./features/admin/pages/Admin";
import "./App.css";
import BrandIndex from "./features/admin/brandManagement/brandIndex";
import ProductIndex from "./features/admin/ProductManagement/ProductIndex";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin/*" element={<Admin />}>

          <Route path="product/*" element={<ProductIndex/>} />

          <Route path="brand/*" element={<BrandIndex />} />
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
