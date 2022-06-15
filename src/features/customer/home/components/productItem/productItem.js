import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import shoe from "../../../../../assest/images/image.jpeg";
import { getDetailproduct } from "../../HomeSlice";
import "./style.css";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const handleShowDetail = (pr) => {
    dispatch(getDetailproduct(pr));
    // navigate(`/detail/${id}`);
  };

  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
  });

  return (
    <div className="productItem">
      <img src={product.product_img} alt="" />
      <div className="viewDetail" onClick={() => handleShowDetail(product)}>
        <Link to={`/detail/${product.product_id}`}>Xem chi tiết</Link>
      </div>
      <div className="name">{product.product_name}</div>
      <div className="price">{formatter.format(product.product_price)} đ</div>
    </div>
  );
};

export default ProductItem;
