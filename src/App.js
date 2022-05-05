import { Outlet, Route, Routes } from "react-router-dom";
import Auth from "./features/admin/auth";
import AuthReducer from "./features/customer/auth/AuthSlice";
import Example from "./shareComponent/formikCustom/example";

function App() {
  return (
    <div className="App">
      <Example />
      <Routes>
        <Route path="/admin/*" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
