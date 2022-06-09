import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { showDetailOrder, updateOrderData } from '../OrderSlice';
import OrderDetail from './OrderDetail';

function OrderRow({order}) {
    const { isShow } = useSelector((state) => state.orders);
    const dispatch = useDispatch()
    const handleShow = () => {
        dispatch(showDetailOrder());
    }
    const [status, setStatus] = useState(order.order_status)

    const handleChangeStatus = async(orderr) => {
        setStatus(!status)
        const order_status = orderr.order_status === 1 ? 0 : 1;
        const orderrr = {...orderr, order_status}
        const action = updateOrderData(orderrr)
        await dispatch(action).unwrap()
    }
  return (
    <tr key={order.order_id} >
                  <td className="text-center align-middle">{order.order_id}</td>
                  <td className="text-center align-middle">{order.shipping_id}</td>
                  <td className="text-center align-middle">{order.account_id}</td>
                  <td className="text-center align-middle"> 
                    <Form.Check 
                      type="checkbox"
                      checked={status}
                      onChange={() => handleChangeStatus(order)}
                    />
                    Chốt đơn
                  </td>
                  <td className="text-center align-middle">{order.total}</td>
                  <td className="text-center align-middle">   
                    <Button variant="success" onClick={handleShow}> Chi tiết đơn hàng </Button> 
                    {isShow && <OrderDetail  orderId={order.order_id} shippingId={order.shipping_id} accountId={order.account_id} total={order.total}/>}
                 </td> 
                </tr>
  )
}

export default OrderRow