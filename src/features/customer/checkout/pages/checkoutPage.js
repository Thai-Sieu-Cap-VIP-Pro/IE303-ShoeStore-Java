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

import { Button } from "react-bootstrap";
import { addOrderData } from "../../../admin/OrderManagement/OrderSlice";
import axios from "axios";
import orderAPI from "../../../../api/OrderApi";
import orderDetailAPI from "../../../../api/OrderDetailApi";

const validationSchema = Yup.object({
  shippingName: Yup.string().required("Bạn cần phải nhập trường này"),
  shippingPhone: Yup.number().required("Bạn cần phải nhập trường này"),
  shippingAddress: Yup.string().required("Bạn cần phải nhập trường này"),
  shippingEmail: Yup.string().required("Bạn cần phải nhập trường này"),
  shippingNote: Yup.string().required("Bạn cần phải nhập trường này"),
});
function checkoutPage() {
  const dispatch = useDispatch();

  const { listShipping } = useSelector((state) => state.checkout);

  useEffect(() => {
    dispatch(fetchCartDetailData(1));
  }, []);

  useEffect(async () => {
    const action = fetchShippingsData(1);
    await dispatch(action).unwrap();
  }, []);

  const [products, setProducts] = useState([]);
  const carts = useSelector(selectCartDetails);
  useEffect(() => {
    (async () => {
      const CartDetail = await CartDetailAPI.getCartDetailsByAccountId(1);
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
    const action = saveShipping({ ...values, accountId: 1 });
    await dispatch(action).unwrap();
    const action1 = fetchShippingsData(1);
    await dispatch(action1).unwrap();
  };
  const handleCheckout = () => {
    const newOrder = orderAPI.addOrder({account_id: "1", shipping_id: "1", order_status: "0", total: "123"}).then(function (response) {
      // handle success
      console.log(response);
      carts.forEach(element => {
        orderDetailAPI.addOrderDetail({productId: element.productId, productQuanity: element.cartProductQuanity,orderId: response.data.order_id})
      });
    })}
  return (
    <div className="container__checkout">
      <div className="left">
        <div className="left__header">orderId
          <h5>Thông tin mua hàng</h5>
        </div>
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
                    disabled={!formik.isValid}
                  >
                    Thêm
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </div>
        <div className="left__footer">
          <form action="">
            {listShipping.map((item) => {
              return (
                <>
                  {" "}
                  <input
                    type="radio"
                    id={item.shippingId}
                    name="fav_language"
                    value={item.shippingId}
                  />
                  <label for={item.shippingId}>
                    <div className="addressWrap">
                      <div className="addressName">{item.shippingName}</div>
                      <div className="addressPhone">{item.shippingPhone}</div>
                      <div className="addressLocation">
                        {item.shippingAddress}
                      </div>
                    </div>
                  </label>
                  <br />
                </>
              );
            })}
          </form>
        </div>
      </div>
      <div className="right">
        <div className="right__header">
          <h5>Đơn hàng</h5>
        </div>
        <div className="right__content">
          <div className="listItem">
            {carts &&
              carts.map((cartItem) => {
                return (
                  <>
                    {products.map((product) => {
                      if (product.product_id === cartItem.productId) {
                        return (
                          <>
                            <div className="item">
                              <div className="imgItem">
                                <img src={product.product_img} alt="" />
                              </div>
                              <div className="info">
                                <div className="nameItem">
                                  {product.product_name}
                                </div>
                                {/* <div className="sizeItem">Size: 32</div> */}
                                <div className="quantity">
                                  {cartItem.cartProductQuanity}
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      }
                    })}
                  </>
                );
              })}
          </div>
        </div>
        <Button onClick={handleCheckout}>Thanh toán</Button>
      </div>
    </div>
  );
}

export default checkoutPage;
