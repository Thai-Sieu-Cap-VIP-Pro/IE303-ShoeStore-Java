import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Tab, Sonnet, Nav, Container } from "react-bootstrap";
import "./ProfileBody.css";
import Info from "./Info";
import HistoryOrder from "./HistoryOrder";
import orderAPI from "../../../../api/OrderApi";
import OrderDetail from "../../../admin/OrderManagement/Components/OrderDetail";
import "../pages/style.css";

function ProfileBody() {
  return (
    <>
      <Container>
        <div className="wrap">
          <Info />

          <HistoryOrder />
        </div>
      </Container>
    </>
  );
}

export default ProfileBody;
