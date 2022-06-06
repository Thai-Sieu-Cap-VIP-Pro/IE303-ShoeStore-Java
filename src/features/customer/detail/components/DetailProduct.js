import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./DetailProduct.css";

function DetailProduct() {
  const DetailProduct = useSelector((state) => state.home.DetailProduct);

  return (
    <div>
      <Row>
        <Col sm={6}>
          <Card>
            <Card.Img
              variant="top"
              src="https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-nmd-human-race-black-gy0093-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-1645858910.jpeg"
            />
            <Card.Body>
              <Row>
                <Col sm={3}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-nmd-human-race-black-gy0093-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-5.jpeg"
                    />
                  </Card>
                </Col>
                <Col sm={3}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-nmd-human-race-black-gy0093-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-4.jpeg"
                    />
                  </Card>
                </Col>
                <Col sm={3}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-nmd-human-race-black-gy0093-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-7.jpeg"
                    />
                  </Card>
                </Col>
                <Col sm={3}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-nmd-human-race-black-gy0093-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-1645858910.jpeg"
                    />
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6}>
          <nav class="woocommerce-breadcrumb breadcrumbs">
            <a href="home">Trang chủ</a>
            <span class="divider">/</span> <a href="nu">Nữ</a>
            <span class="divider">/</span> <a href="nu/classic-nu/">Classic</a>
          </nav>
          <h1 class="product-title product_title entry-title">
            {DetailProduct.product_name}
          </h1>
          <h3 class="ps-product__price">
            {DetailProduct.product_price}
          </h3>

          <div class="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" class="btn btn-outline-primary">-</button>
            <button type="button" class="btn btn-outline-primary">01</button>
            <button type="button" class="btn btn-outline-primary">+</button>
          </div>

          <div className="detail-buttom">
            <div className="addToCart">
              <Button variant="primary" >
                THÊM VÀO GIỎ HÀNG
              </Button>
            </div>
            <div className="buy">
              <Button variant="primary" >
                MUA NGAY
              </Button>
            </div>
          </div>
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Thông tin sản phẩm</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Hướng dẫn tính size</a>
            </li>
            <p>
            - Đế cao su mềm, êm ái giúp bạn cảm thấy dễ chịu khi di chuyển trong thời gian dài. Thêm vào đó, giày thể thao nữ MWC NUTT- 0698 có tính năng thoáng khí, giúp cân bằng nhiệt và độ ẩm trong những điều kiện môi trường khác nhau.
            - Sản phẩm hướng theo phong cách hiện đại, khỏe khoắn, màu sắc trẻ trung phù hợp với nhiều lứa tuổi và dáng người.
            - Đường may tỉ mỉ, tinh tế tạo cho bạn cảm giác yên tâm về chất lượng.
            - Sản phẩm có tính ứng dụng cao: thích hợp mang khi tập luyện thể thao, đi làm, đi chơi và tham gia các hoạt động thường ngày...
            </p>
          </ul>
        </Col>
      </Row>

    </div>
  );

}

export default DetailProduct;
