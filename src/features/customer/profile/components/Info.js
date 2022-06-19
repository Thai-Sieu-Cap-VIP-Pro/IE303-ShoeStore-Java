import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthApi from "../../../../api/AuthApi";
import avatar from "../../../../assest/images/cc.png";

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
      <Col md={{ span: 5, offset: 5 }}>
        <Row>
          <Col md={5}>
            <div className="jjjj">
              <img width={100} src={avatar} alt="" />
            </div>
          </Col>
          <Col md={12}>{User.accountName}</Col>
          <Col md={12}>{User.accountEmail}</Col>
          <button onClick={handleLogOut} className="kjkdl">
            Đăng xuất
          </button>
        </Row>
      </Col>
    </Row>
  );
}

export default Info;
