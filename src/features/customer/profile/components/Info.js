import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthApi from "../../../../api/AuthApi";

function Info() {
  const navigate = useNavigate();
  let User = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (!User) {
      navigate("/");
    }
  }, []);
  const handleLogOut = () => {
    AuthApi.logout();
    navigate("/");
  };
  return (
    <Row>
      <Col md={5}>Hình đại diện</Col>
      <Col md={12}>Name: {User.accountName}</Col>
      <Col md={12}>Email: {User.accountEmail}</Col>
      <button onClick={handleLogOut}>Logout</button>
    </Row>
  );
}

export default Info;
