import { Route, Routes } from "react-router-dom";
import AuthIndex from "./features/customer/auth/AuthIndex";
import Admin from "./features/admin/pages/Admin";
import BrandManager from "./features/admin/pages/BrandManager";
import OrderManager from "./features/admin/pages/OrderManager";
import Report from "./features/admin/pages/Report";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ProductIndex from "./features/admin/ProductManagement/ProductIndex";
function App() {
  return (
    <div className="App">
      {/* <Example /> */}
      <Routes>
        <Route path="/auth" element={<AuthIndex />}/>
        <Route path="/admin/*" element={<Admin/>}>
          <Route path="product" element={<ProductIndex/>} />
          <Route path="brand" element={<BrandManager/>} />
          <Route path="order" element={<OrderManager/>} />
          <Route path="report" element={<Report/>} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
