import React, { useEffect, useState } from "react";
import { Button, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import orderAPI from "../../../../api/OrderApi";
import OrderDetail from "../../../admin/OrderManagement/Components/OrderDetail";
import { showDetailOrder } from "../../../admin/OrderManagement/OrderSlice";

function HistoryOrder() {
  const [orders, setOrders] = useState([]);
  const { isShow, OrderId } = useSelector((state) => state.orders);
  console.log(isShow)
  console.log(OrderId)
  useEffect(() => {
    orderAPI.getAllOrdersByAccountId(1).then((res) => {
      setOrders(res.data);
    });
  }, []);
  const dispatch = useDispatch();
  const handleShow = (order_id) => {
    dispatch(showDetailOrder(order_id));
  };
  return (
    <>
      <Row>
        <h4>Lịch sử đơn hàng</h4>
      </Row>
      <Row>
        <Table striped>
          <thead>
            <tr>
              <th>Order No</th>
              <th>Order Date</th>
              <th>Order Total</th>
              <th>Order Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order) => {
                console.log(order)
                return (
                  <>
                    <tr>
                      <td>{order.orderId}</td>
                      <td>{order.orderDate}</td>
                      <td>{order.total}</td>
                      <td>
                        {order.orderStatus == 0 ? "Đang xử lý" : "Đã xử lý"}
                      </td>
                      <Button
                        variant="success"
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
