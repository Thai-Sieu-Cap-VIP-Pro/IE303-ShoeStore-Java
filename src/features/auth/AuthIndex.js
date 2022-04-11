import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const AuthIndex = () => {
  return (
    <>
      <Routes>
        <Route index element={<LoginPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
      <Outlet />
    </>
  );
};

export default AuthIndex;
