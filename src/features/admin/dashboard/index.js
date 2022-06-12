import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";

const Dashboard = () => {
  return (
    <div>
      <Routes>
        <Route index element={<DashboardPage />}></Route>
      </Routes>
    </div>
  );
};

export default Dashboard;
