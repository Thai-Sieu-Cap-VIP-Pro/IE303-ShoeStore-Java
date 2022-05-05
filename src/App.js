import { Outlet, Route, Routes } from "react-router-dom";
import AuthIndex from "./features/auth/AuthIndex";
import Admin from "./features/admin/pages/Admin";
import ProductManager from "./features/admin/pages/ProductManager";
import BrandManager from "./features/admin/pages/BrandManager";
import OrderManager from "./features/admin/pages/OrderManager";
import Report from "./features/admin/pages/Report";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Example />
      <Routes>
        <Route path="/auth" element={<AuthIndex />} />
        <Route path="/admin/*" element={<Admin />}>
          <Route path="product" element={<ProductManager />} />
          <Route path="brand" element={<BrandManager />} />
          <Route path="order" element={<OrderManager />} />
          <Route path="report" element={<Report />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
