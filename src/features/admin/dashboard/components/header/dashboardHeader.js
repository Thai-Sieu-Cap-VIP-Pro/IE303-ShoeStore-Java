import React from "react";
import { Col } from "react-bootstrap";
import "./style.css";

const DashboardHeader = () => {
  return (
    <Col md={12}>
      <div className="dashboardHeader">
        <div className="dashboardHeaderName">Dashboard</div>
        <div className="breakcum">
          {" "}
          <span>Home</span> &rsaquo; Dashboard
        </div>
      </div>
    </Col>
  );
};

export default DashboardHeader;
