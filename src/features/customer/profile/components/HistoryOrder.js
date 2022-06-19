import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import orderAPI from "../../../../api/OrderApi";
import OrderDetail from "../../../admin/OrderManagement/Components/OrderDetail";
import { showDetailOrder } from "../../../admin/OrderManagement/OrderSlice";
import "./ProfileBody.css";

function HistoryOrder() {
  let User = JSON.parse(localStorage.getItem("user"));
  const [orders, setOrders] = useState([]);
  const { isShow, OrderId } = useSelector((state) => state.orders);
  console.log(isShow);
  console.log(OrderId);
  useEffect(() => {
    orderAPI.getAllOrdersByAccountId(User.accountId).then((res) => {
      setOrders(res.data);
    });
  }, []);
  const dispatch = useDispatch();
  const handleShow = (order_id) => {
    dispatch(showDetailOrder(order_id));
  };
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
  });
  return (
    <>
      <Row>
        <Col md={12}>
          <h4 className="ll">Lịch sử đơn hàng</h4>
        </Col>
      </Row>
      <Row>
        <Table striped className="hkldfd">
          <thead>
            <tr>
              <th>Mã đơn hàng</th>
              <th>Ngày hóa đơn</th>
              <th>Tổng tiền</th>
              <th>Tình trạng hóa đơn</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order) => {
                console.log(order);
                return (
                  <>
                    <tr>
                      <td>{order.orderId}</td>
                      <td>{order.orderDate}</td>
                      <td>{formatter.format(order.total)} đ</td>
                      <td>
                        {order.orderStatus == 0 ? "Đang xử lý" : "Đã xử lý"}
                      </td>
                      <Button
                        variant="success"
                        size="sm"
                        onClick={() => handleShow(order.orderId)}
                      >
                        {" "}
                        Chi tiết đơn hàng{" "}
                      </Button>
                      {isShow && OrderId === order.orderId && (
                        <OrderDetail
                          orderId={order.orderId}
                          shippingId={order.shippingId}
                          accountId={order.accountId}
                          total={order.total}
                        />
                      )}
                    </tr>
                  </>
                );
              })}
          </tbody>
        </Table>
      </Row>
    </>
  );
}

export default HistoryOrder;
