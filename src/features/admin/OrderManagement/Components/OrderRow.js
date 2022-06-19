import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOrdersData,
  showDetailOrder,
  updateOrderData,
} from "../OrderSlice";
import OrderDetail from "./OrderDetail";
import "./OrderRow.css";

function OrderRow({ order }) {
  const { isShow, OrderId } = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const handleShow = (order_id) => {
    dispatch(showDetailOrder(order_id));
  };
  const [status, setStatus] = useState(order.orderStatus);
  React.useEffect(() => {
    setStatus(order.orderStatus);
  }, [order.orderStatus]);

  const handleChangeStatus = async (orderr) => {
    console.log("1");
    setStatus(!status);
    const orderStatus = orderr.orderStatus === 1 ? 0 : 1;
    const orderrr = { ...orderr, orderStatus };
    console.log(orderrr);
    const action = updateOrderData(orderrr);
    await dispatch(action).unwrap();
    dispatch(fetchOrdersData());
  };
  return (
    <tr key={order.order_id}>
      <td className="text-center align-middle">{order.orderId}</td>
      <td className="text-center align-middle">{order.shippingId}</td>
      <td className="text-center align-middle">{order.accountId}</td>
      <td className="text-center align-middle jdjhdfjh">
        <Form.Check
          type="checkbox"
          checked={status}
          onChange={() => handleChangeStatus(order)}
          className="checkbox_check"
        />
        Chốt đơn
      </td>
      <td className="text-center align-middle">{order.total}</td>
      <td className="text-center align-middle">
        <Button
          variant="success"
          size="sm"
          onClick={() => handleShow(order.orderId)}
        >
          Chi tiết đơn hàng
        </Button>
        {isShow && OrderId === order.orderId && (
          <OrderDetail
            orderId={order.orderId}
            shippingId={order.shippingId}
            accountId={order.accountId}
            total={order.total}
          />
        )}
      </td>
    </tr>
  );
}

export default OrderRow;
