import React, { useEffect } from "react";
import Login from "../../login_register/login";
import Register from "../../login_register/register";
import bootstrap from "bootstrap";
import Slide from "./slide/slide";
import BodyProduct from "./body-product/body-product";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  CategorySharp,
  CheckCircle,
  DirectionsCar,
  FlipCameraAndroid,
  Help,
} from "@material-ui/icons";
import Category from "./category/Category";
import BestSeller from "./bestSeller/bestSeller";
import "./style.css";
import sub1 from "../../../../assest/images/sub1.webp";
import sub2 from "../../../../assest/images/sub2.webp";

import sub3 from "../../../../assest/images/sub3.webp";
import ProductItem from "./productItem/productItem";
import subb1 from "../../../../assest/images/subb1.webp";
import subb2 from "../../../../assest/images/subb2.webp";
import subb3 from "../../../../assest/images/subb3.webp";
import subb4 from "../../../../assest/images/subb4.webp";
import subb5 from "../../../../assest/images/subb5.webp";
import subb6 from "../../../../assest/images/subb6.webp";
import subb from "../../../../assest/images/subbb.webp";
import { useDispatch, useSelector } from "react-redux";
import { getDetailproduct } from "../HomeSlice";
import {
  fetchProductsData,
  selectProducts,
} from "../../../admin/ProductManagement/ProductSlice";

const HomeBody = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("AD");
    dispatch(fetchProductsData());
  }, []);
  const products = useSelector(selectProducts);

  console.log(products);
  const handleShowDetail = (id) => {
    const product = products.find((item) => item.product_id === id);
    dispatch(getDetailproduct(product));
    // navigate(`/detail/${id}`);
  };
  return (
    <>
      <Container fluid className="homepage" style={{ padding: 0 }}>
        <Row>
          <Col md={{ span: 2, offset: 1 }}>
            <Category />
          </Col>
          <Col md={8}>
            <Slide />
          </Col>
        </Row>

        {/* <Row>
          <BodyProduct />
        </Row> */}
      </Container>
      <Container>
        <Row>
          <Col md={3}>
            <div className="subIntro">
              <DirectionsCar />
              <span>Free ship toàn quốc</span>
            </div>
          </Col>
          <Col md={3}>
            {" "}
            <div className="subIntro">
              <CheckCircle />
              <span>Kiểm tra trước khi nhận</span>
            </div>
          </Col>
          <Col md={3}>
            {" "}
            <div className="subIntro">
              <FlipCameraAndroid />
              <span>Bảo hành 6 tháng</span>
            </div>
          </Col>
          <Col md={3}>
            {" "}
            <div className="subIntro">
              <Help />
              <span>Hỗ trợ 24/7</span>
            </div>
          </Col>
        </Row>
      </Container>

      <BestSeller />
      <Container>
        <Row>
          <Col md={{ span: 3 }}>
            <div className="sub1">
              <img src={sub1} alt="" />
            </div>
          </Col>
          <Col md={{ span: 6 }}>
            <div className="sub1">
              <img src={sub2} alt="" />
            </div>
          </Col>
          <Col md={3}>
            <div className="sub1">
              <img src={sub3} alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="listPr">Sản phẩm mới</div>
          </Col>
          {products.length > 0 &&
            products.map((item, index) => {
              if (index < 4) {
                return (
                  <Col md={3}>
                    <ProductItem product={item} />
                  </Col>
                );
              }
            })}
        </Row>
        <Row>
          <Col md={12}>
            <div className="listPr">Gợi ý phối đồ</div>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={4}>
                <div className="subb1">
                  <img src={subb1} alt="" />
                </div>
              </Col>
              <Col md={4}>
                <div className="subb1">
                  <img src={subb2} alt="" />
                </div>
              </Col>
              <Col md={4}>
                <div className="subb1">
                  <img src={subb3} alt="" />
                </div>
              </Col>
              <Col md={4}>
                <div className="subb1">
                  <img src={subb4} alt="" />
                </div>
              </Col>
              <Col md={4}>
                <div className="subb1">
                  <img src={subb5} alt="" />
                </div>
              </Col>
              <Col md={4}>
                <div className="subb1">
                  <img src={subb6} alt="" />
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <div className="subb2">
              <img src={subb} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeBody;
