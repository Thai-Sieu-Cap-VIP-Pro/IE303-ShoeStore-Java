import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  Phone,
  Twitter,
} from "@material-ui/icons";
import React from "react";

import "./style.css";
import logo from "../../../../assest/images/logo.png";

import { Col, Container, Row } from "react-bootstrap";

const HomeFooter = () => {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md={{ span: 2, offset: 1 }}>
          <img src={logo} alt="" style={{ width: 200 }} />
        </Col>
        <Col md={{ span: 8 }} style={{ margin: 50 }}>
          Giày dép là vật dụng không thể thiếu của mỗi người, nhất là tại các
          thành phố lớn, nhu cầu sử dụng giày dép rất đa dạng. Có những người
          thậm chí sử dụng rất nhiều đôi giày, dép khác nhau. Chẳng hạn như giày
          đi học, giày đi làm, giày chơi thể thao, giày đi chơi, dép mang ở nhà,
          dép đi du lịch, đi chơi,..
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 3, offset: 1 }}>
          <div className="aboutme">
            <p className="ht">Về chúng tôi</p>
            <p>Shop bán giày UIT Sneaker</p>

            <p>90 Đỗ xuân hợp quận 9</p>
          </div>
        </Col>
        <Col md={3}>
          <div className="contact">
            <p className="ht">Thông tin liên hệ</p>
            <p>
              {" "}
              <Phone /> 03456788
            </p>
            <p>
              <Email></Email> giathai1505@gmail.com
            </p>
          </div>
        </Col>
        <Col md={3}>
          <div className="socialMedia">
            <p className="ht">Social Media</p>
            <Facebook />
            <Instagram />
            <Twitter />
            <LinkedIn />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeFooter;
