import { Outlet, Route, Routes } from "react-router-dom";
import AuthIndex from "./features/auth/AuthIndex";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth/*" element={<AuthIndex />} />
      </Routes>
    </div>
  );
}

export default App;
