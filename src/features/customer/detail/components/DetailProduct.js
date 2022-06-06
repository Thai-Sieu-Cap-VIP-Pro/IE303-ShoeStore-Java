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
              src="https://kingshoes.vn/data/upload/media/jordan-1-mid-tuft-orange-bq6931-802-king-shoes-sneaker-real-hcm-1624273330.jpeg"
            />
            <Card.Body>
              <Row>
                <Col sm={3}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://kingshoes.vn/data/upload/media/jordan-1-mid-tuft-orange-bq6931-802-king-shoes-sneaker-real-hcm-1624273330.jpeg"
                    />
                  </Card>
                </Col>
                <Col sm={3}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://kingshoes.vn/data/upload/media/jordan-1-mid-tuft-orange-bq6931-802-king-shoes-sneaker-real-hcm-1624273330.jpeg"
                    />
                  </Card>
                </Col>
                <Col sm={3}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://kingshoes.vn/data/upload/media/jordan-1-mid-tuft-orange-bq6931-802-king-shoes-sneaker-real-hcm-1624273330.jpeg"
                    />
                  </Card>
                </Col>
                <Col sm={3}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://kingshoes.vn/data/upload/media/jordan-1-mid-tuft-orange-bq6931-802-king-shoes-sneaker-real-hcm-1624273330.jpeg"
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
          <p class="ps-product__category">
            Mã SP: <strong>DD6834 802 - BQ6931 802</strong>
          </p>
          <h3 class="ps-product__price">
            <b class="new-price">5,800,000 đ</b>{" "}
          </h3>
          <div className="detail-buttom">
            <Button variant="primary" className="addToCart">
              THÊM VÀO GIỎ HÀNG
            </Button>
            <Button variant="primary" className="buy">
              MUA NGAY
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default DetailProduct;
