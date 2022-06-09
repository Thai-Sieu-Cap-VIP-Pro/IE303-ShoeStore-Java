
import React from 'react'
import { Card, Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import OrderRow from '../Components/OrderRow'
import { fetchOrdersData, selectOrders, showDetailOrder } from '../OrderSlice'

function OrderPage() {
    const dispatch = useDispatch()
    const orders = useSelector(selectOrders);
    React.useEffect(() => {
      dispatch(fetchOrdersData())
    }, [])
    
  return (
    <div>
    <Card>
      <Card.Header as="h5">Quản lí đơn hàng</Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="text-center">Mã đơn hàng</th>
              <th className="text-center">Mã giao hàng</th>
              <th className="text-center">Mã khách hàng</th>
              <th className="text-center">Trạng thái</th>
              <th className="text-center">Thàn tiền</th>
              <th className="text-center">Xem chi tiết</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order, index) => {
                return (
                  <OrderRow key={index} order={order}/>
                )
              })
            }
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  </div>
  )
}

export default OrderPage