import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectProducts } from "../../../../admin/ProductManagement/ProductSlice";
import ProductItem from "../productItem/productItem";
import "./style.css";

const BestSeller = () => {
  const products = useSelector(selectProducts);
  return (
    <Col md={12} className="bestSeller">
      <Row>
        <Col md={12}>
          <div className="header">Best Seller</div>
        </Col>
      </Row>
      <Row>
        <Col md={1}></Col>
        {products.map((item, index) => {
          if (index > 5 && index < 11) {
            return (
              <Col md={2}>
                <ProductItem product={item} />
              </Col>
            );
          }
        })}
      </Row>
    </Col>
  );
};

export default BestSeller;
