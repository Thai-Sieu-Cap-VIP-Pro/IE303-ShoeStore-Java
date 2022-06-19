import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import authAPI from "../../../api/AuthApi";
import "./Admin.css";

function Admin() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    } else {
      if (JSON.parse(localStorage.getItem("user")).accountRole) {
        navigate("/login");
      }
    }
  }, []);

  const handleLogOut = () => {
    authAPI.logout();
    navigate("/login");
  };
  return (
    <Container fluid>
      <Row>
        <Col md={2} className="navigate">
          <div className="admin__navigation">
            <h2 onClick={() => navigate("/admin")}>Admin</h2>
            <span onClick={() => navigate("product")}>Quản lí sản phẩm</span>
            <span onClick={() => navigate("brand")}>Quản lí nhãn hàng</span>
            <span onClick={() => navigate("order")}>Quản lí đơn hàng</span>
            <span onClick={handleLogOut}>Đăng xuất</span>
          </div>
        </Col>
        <Col md={10} className="navigate">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default Admin;
