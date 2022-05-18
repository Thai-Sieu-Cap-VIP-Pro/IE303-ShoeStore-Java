import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

const Auth = () => {
  return (
    <div>
      <Routes>
        <Route index element={<LoginPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
      </Routes>
      <Outlet />
    </div>
  );
};

export default Auth;
