import React from "react";
import { Route, Routes } from "react-router-dom";
import BrandPage from "./pages/brandPage";

const BrandIndex = () => {
  return (
    <div>
      <Routes>
        <Route index element={<BrandPage />} />
      </Routes>
    </div>
  );
};

export default BrandIndex;
