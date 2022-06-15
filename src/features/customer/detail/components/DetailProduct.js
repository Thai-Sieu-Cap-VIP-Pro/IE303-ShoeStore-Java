import { ShoppingCart } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Breadcrumb,
  Tab,
  Tabs,
  Alert,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectProducts } from "../../../admin/ProductManagement/ProductSlice";
import {
  fetchAddCartDetail,
  fetchCartDetailData,
  fetchUpdateCartDetail,
  selectCartDetails,
} from "../../cart/CartSlice";
import "./DetailProduct.css";

function DetailProduct() {
  const DetailProduct = useSelector((state) => state.home.DetailProduct);
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  useEffect(() => {
    dispatch(fetchCartDetailData(1));
  }, []);
  const [key, setKey] = useState("home");
  const carts = useSelector(selectCartDetails);
  const { productId } = useParams();
  const [image, setImage] = useState(null);

  useEffect(() => {
    products.forEach((product) => {
      console.log(product.product_id);
      if (product.product_id.toString() === productId) {
        setImage(product.product_img);
      }
    });
  }, [products]);
  const [quantity, setQuantity] = useState(1);
  const handleRaise = () => {
    let Quantity = quantity + 1;
    setQuantity(Quantity);
  };
  const handleLower = () => {
    if (quantity > 0) {
      let Quantity = quantity - 1;
      setQuantity(Quantity);
    }
  };
  const handleChangeQuantity = (e) => {
    setQuantity(Number(e.target.value));
  };
const navigate = useNavigate()
  const handleAddProductToCart = async () => {
      if(!localStorage.getItem("user")) {
        navigate("/login")
      }
      else {
        let isExist = false;
        carts.forEach((item) => {
          if (item.productId == productId) {
            isExist = true;
            let updateItem = {
              ...item,
              cartProductQuanity: item.cartProductQuanity + quantity,
            };
            dispatch(fetchUpdateCartDetail(updateItem));
          }
        });
        if (isExist == false) {
          
          await dispatch(
            fetchAddCartDetail({
              accountId: "1",
              productId: productId,
              cartProductQuanity: quantity,
            })
          ).unwrap();
          await dispatch(fetchCartDetailData(1)).unwrap();
        }
      }
  };
  return (
    <>
      <Container>
        <Row>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

            <Breadcrumb.Item active>Chi tiết sản phẩm</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        {image && (
          <div>
            <Row>
              <Col sm={6}>
                <Card>
                  <Card.Img variant="top" src={image} />
                  <Card.Body>
                    <Row>
                      <Col sm={3}>
                        <Card>
                          <Card.Img variant="top" src={image} />
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
                <h1 class="product-title product_title entry-title">
                  {DetailProduct.product_name}
                </h1>
                <h3 class="ps-product__price">
                  {DetailProduct.product_price} đ
                </h3>

                <div
                  class="btn-group abc"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button
                    type="button"
                    onClick={handleLower}
                    class="btn btn-outline-primary minus"
                  >
                    -
                  </button>
                  <input
                    style={{ width: "40px" }}
                    value={quantity}
                    onChange={handleChangeQuantity}
                  ></input>
                  <button
                    type="button"
                    onClick={handleRaise}
                    class="btn btn-outline-primary plus"
                  >
                    +
                  </button>
                </div>

                <div className="detail-buttom">
                  <div className="addToCart">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleAddProductToCart}
                    >
                      <ShoppingCart />
                      add to cart
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab eventKey="home" title="Mô tả sản phẩm">
                  <div className="dest">mô tả sản phẩm</div>
                </Tab>
                <Tab eventKey="profile" title="Hướng dẫn tính size">
                  <div className="dest">Hướng dẫn tính size</div>
                </Tab>
              </Tabs>
            </Row>
          </div>
        )}
      </Container>
    </>
  );
}

export default DetailProduct;
