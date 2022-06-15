import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartDetailAPI from "../../../../api/CartDetailApi";
import productAPI from "../../../../api/ProductApi";
import FormikControl from "../../../../shareComponent/formikCustom/FormikControl";
import { fetchCartDetailData, selectCartDetails } from "../../cart/CartSlice";
import { fetchShippingsData, saveShipping } from "../checkoutSlice";
import "./checkoutPage.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { addOrderData } from "../../../admin/OrderManagement/OrderSlice";
import axios from "axios";
import orderAPI from "../../../../api/OrderApi";
import orderDetailAPI from "../../../../api/OrderDetailApi";
import { useNavigate } from "react-router-dom";
import HomeHeader from "../../home/components/HomeHeader";
import {
  AddCircleOutline,
  AttachMoney,
  LocationOn,
  Phone,
} from "@material-ui/icons";

const validationSchema = Yup.object({
  shippingName: Yup.string().required("Bạn cần phải nhập trường này"),
  shippingPhone: Yup.number().required("Bạn cần phải nhập trường này"),
  shippingAddress: Yup.string().required("Bạn cần phải nhập trường này"),
  shippingEmail: Yup.string().required("Bạn cần phải nhập trường này"),
  shippingNote: Yup.string().required("Bạn cần phải nhập trường này"),
});
function checkoutPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { listShipping } = useSelector((state) => state.checkout);
  useEffect(() => {
    dispatch(fetchCartDetailData(User.accountId));
  }, []);

  let User = JSON.parse(localStorage.getItem("user"));

  useEffect(async () => {
    const action = fetchShippingsData(User.accountId);
    await dispatch(action).unwrap();
  }, []);

  const [isShowAddForm, setisShowAddForm] = useState(false);

  const [products, setProducts] = useState([]);
  const carts = useSelector(selectCartDetails);
  useEffect(() => {
    (async () => {
      const CartDetail = await CartDetailAPI.getCartDetailsByAccountId(
        User.accountId
      );
      console.log(CartDetail);
      CartDetail.data.forEach(async (cartDetail) => {
        const product = await productAPI.getProductById(cartDetail.productId);
        setProducts((p) => [...p, product.data]);
      });
    })();
  }, []);

  let initialValues = {
    shippingName: "",
    shippingPhone: "",
    shippingAddress: "",
    shippingEmail: "",
    shippingNote: "",
  };

  const onSubmit = async (values) => {
    console.log(values);
    const action = saveShipping({ ...values, accountId: User.accountId });
    await dispatch(action).unwrap();
    const action1 = fetchShippingsData(User.accountId);
    await dispatch(action1).unwrap();
    setisShowAddForm(!isShowAddForm);
  };
  const handleCheckout = () => {
    if (shippingId === null) {
      alert("Bạn cần phải chọn địa chỉ giao hàng !");
    } else {
      const newOrder = orderAPI
        .addOrder({
          accountId: User.accountId,
          shippingId: shippingId,
          orderStatus: "0",
          total: sumMoney,
          orderDate: "2022-06-15",
        })
        .then(function (response) {
          // handle success
          console.log(response.data.orderId);
          carts.forEach((element) => {
            orderDetailAPI.addOrderDetail({
              productId: element.productId,
              productQuanity: element.cartProductQuanity,
              orderId: response.data.orderId,
            });
          });

          CartDetailAPI.deleteCartDetailByAccountId(User.accountId);
          alert("Đặt hàng thành công!");
          navigate("/");
        });
    }
  };
  let sumMoney = 0;
  const [shippingId, setShippingId] = useState(null);
  const handleChooseShipping = (e) => {
    setShippingId(e.target.value);
  };

  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
  });
  return (
    <>
      <HomeHeader />
      <Container>
        <Row>
          <Col md={12}>
            <div className="orderHeader">Thông tin đơn hàng</div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="left">
              <div className="left__footer">
                <form action="">
                  {listShipping.map((item) => {
                    return (
                      <>
                        <input
                          onChange={handleChooseShipping}
                          type="radio"
                          id={item.shippingId}
                          name="fav_language"
                          value={item.shippingId}
                          className="shipRaido"
                        />
                        <label for={item.shippingId}>
                          <div
                            className={
                              shippingId == item.shippingId
                                ? "addressWrap ac"
                                : "addressWrap"
                            }
                          >
                            <div className="addressName">
                              {item.shippingName}
                            </div>
                            <div className="addressPhone">
                              <Phone />
                              {item.shippingPhone}
                            </div>
                            <div className="addressLocation">
                              <LocationOn />
                              {item.shippingAddress}
                            </div>
                          </div>
                        </label>
                        <br />
                      </>
                    );
                  })}
                </form>
                <span
                  className="addnewAdress"
                  onClick={() => setisShowAddForm(!isShowAddForm)}
                >
                  <AddCircleOutline /> Thêm địa chỉ mới
                </span>
              </div>
              {isShowAddForm && (
                <div className="left__content">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                  >
                    {(formik) => {
                      return (
                        <Form>
                          <FormikControl
                            control="input"
                            type="text"
                            label="Tên nhận hàng"
                            name="shippingName"
                          />
                          <FormikControl
                            control="input"
                            type="text"
                            label="SĐT"
                            name="shippingPhone"
                          />
                          <FormikControl
                            control="input"
                            type="text"
                            label="Địa chỉ nhận hàng"
                            name="shippingAddress"
                          />

                          <FormikControl
                            control="input"
                            type="text"
                            label="Email"
                            name="shippingEmail"
                          />

                          <FormikControl
                            control="input"
                            type="text"
                            label="ghi chú"
                            name="shippingNote"
                          />

                          <Button
                            variant="primary"
                            type="submit"
                            id="addnewShippingBtn"
                            disabled={!formik.isValid}
                          >
                            Thêm
                          </Button>
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
              )}
            </div>
          </Col>
          <Col md={6}>
            <div className="right">
              <Table striped bordered hover>
                <thead>
                  <tr className="concho">
                    <th>STT</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                  </tr>
                </thead>
                <tbody>
                  {carts &&
                    carts.map((cartItem) => {
                      return (
                        <>
                          {products.map((product) => {
                            if (product.product_id === cartItem.productId) {
                              return (
                                <>
                                  <tr className="concho">
                                    <td>1</td>
                                    <td> {product.product_name}</td>
                                    <td>
                                      <div className="imgItem">
                                        <img src={product.product_img} alt="" />
                                      </div>
                                    </td>
                                    <td> x{cartItem.cartProductQuanity}</td>
                                    <td>
                                      {" "}
                                      {formatter.format(
                                        product.product_price *
                                          cartItem.cartProductQuanity
                                      )}{" "}
                                      đ
                                      <div style={{ display: "none" }}>
                                        {
                                          (sumMoney +=
                                            product.product_price *
                                            cartItem.cartProductQuanity)
                                        }
                                      </div>
                                    </td>
                                  </tr>
                                </>
                              );
                            }
                          })}
                        </>
                      );
                    })}
                </tbody>
              </Table>

              <div className="right__content">
                <div className="listItem">
                  <div className="sumOrder">
                    <AttachMoney />
                    <span> Thành tiền:</span> {formatter.format(sumMoney)} đ
                  </div>
                </div>
              </div>
              <span className="addnewAdress" onClick={handleCheckout}>
                Thanh toán
              </span>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="container__checkout"></div>
    </>
  );
}

export default checkoutPage;
