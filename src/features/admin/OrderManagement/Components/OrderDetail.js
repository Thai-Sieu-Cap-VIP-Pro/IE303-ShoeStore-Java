import React, { useEffect, useState } from 'react'
import { Modal, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import authAPI from '../../../../api/AuthApi';
import orderDetailAPI from '../../../../api/OrderDetailApi';
import productAPI from '../../../../api/ProductApi';
import shippingAPI from '../../../../api/ShippingApi';
import { hideDetailOrder } from '../OrderSlice';

function OrderDetail({orderId, shippingId, accountId, total }) {
  const dispatch = useDispatch()
  const { isShow } = useSelector((state) => state.orders);
  const [user, setUser] = useState(null)
  const [shipping, setShipping] = useState(null)
  const [orderDetail, setOrderDetail] = useState([])
  const [products, setProducts] = useState([])
  useEffect(() => {
    (async() => {
      const User = await authAPI.getInfoUser(accountId)
      setUser(User.data)
  
      const Shipping = await shippingAPI.getShippingByOrderId(shippingId)
      setShipping(Shipping.data)
  
      const OrderDetail = await orderDetailAPI.getOrderDetailsByOrderId(orderId)
      setOrderDetail(OrderDetail.data)
  
      OrderDetail.data.forEach(async orderDetail => { 
        const product = await productAPI.getProductById(orderDetail.productId)
        setProducts(p => [...p, product.data])
      }) ;
    }) ()

  }, [])
  const handleClose = () => {
    setUser(null);
    setShipping(null)
    setOrderDetail([])
    setProducts([])
    dispatch(hideDetailOrder());
  };
  return (
    <div>
      <Modal size='lg' show={isShow} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Chi tiết hóa đơn</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {user && shipping && orderDetail && products &&
            <>
            <p>Mã hóa đơn: {orderId}</p>
            <p>Mã khách hàng: {user.account_id}</p>
            <p>Tên khách hàng: {user.account_name}</p>
            <p>Số điện thoại: {shipping.shipping_phone}</p>
            <p>Địa chỉ: {shipping.shipping_address}</p>
            <p>Ghi chú: {shipping.shipping_note}</p>
            <Table>
              <thead>
                <tr>
                  <th className="text-center">STT</th>
                  <th className="text-center">Mã sản phẩm</th>
                  <th className="text-center">Tên sản phẩm</th>
                  <th className="text-center">Đơn giá</th>
                  <th className="text-center">Số lượng</th>
                  <th className="text-center">Thành tiền</th>
                </tr>
              </thead>
              <tbody>
                {
                  products.map((product, index) => (
                    <tr key={index}>
                        <td className="text-center align-middle">{index}</td>
                        <td className="text-center align-middle">{product.product_id}</td>
                        <td className="text-center align-middle">{product.product_name}</td>
                        <td className="text-center align-middle">{product.product_price}</td>
                        <td className="text-center align-middle">{orderDetail[index].productQuanity}</td>
                        <td className="text-center align-middle">{product.product_price * orderDetail[index].productQuanity}</td>
                    </tr>
                  ))  
                }
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Tổng tiền: {total}</td>
                </tr>
              </tbody>
            </Table>
            </>
          }
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default OrderDetail