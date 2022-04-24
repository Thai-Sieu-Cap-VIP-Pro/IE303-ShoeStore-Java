import { Outlet, Route, Routes } from "react-router-dom";
import AuthReducer from "./features/customer/auth/AuthSlice";
import Example from "./shareComponent/formikCustom/example";

function App() {
  return (
    <div className="App">
      <Example />
      <Routes>
        <Route path="/auth/*" element={<AuthReducer />} />
      </Routes>
    </div>
  );
}

export default App;
