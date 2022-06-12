import React from "react";
import { Col } from "react-bootstrap";
import ProductItem from "../productItem/productItem";
import "./style.css";

const BestSeller = () => {
  return (
    <Col md={4}>
      <div className="seller">
        <div className="topSellerForm">
          <div className="topSellerHeader">Sản phẩm bán chạy</div>
          <div className="custom-select">
            <select>
              <option value="1">Trong tuần</option>
              <option value="2">Trong tháng</option>
              <option value="3">Trong năm</option>
            </select>
          </div>
        </div>
        <div className="listproduct">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </Col>
  );
};

export default BestSeller;
