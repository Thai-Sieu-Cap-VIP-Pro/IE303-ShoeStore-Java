import { Outlet, Route, Routes } from "react-router-dom";
import Admin from "./features/admin/pages/Admin";
import "./App.css";
import BrandIndex from "./features/admin/brandManagement/brandIndex";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin/*" element={<Admin />}>
          <Route path="brand/*" element={<BrandIndex />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
