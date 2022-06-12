import React from "react";
import { Col, Row } from "react-bootstrap";
import "./style.css";

const ProductItem = () => {
  return (
    <Row className="prItem">
      <Col md={1} />
      <Col md={2}>
        <div className="itemImg">
          <img
            src="https://toancr.com/wp-content/uploads/2021/08/giay-adidas-chinh-hang-tphcm-sale.jpg"
            alt=""
          />
        </div>
      </Col>
      <Col md={7}>
        <div className="itemName">
          <div className="name">Giày addas airforce 1</div>
        </div>
      </Col>
      <Col md={2}>
        <div className="itemQuantity">10</div>
      </Col>
    </Row>
  );
};

export default ProductItem;
