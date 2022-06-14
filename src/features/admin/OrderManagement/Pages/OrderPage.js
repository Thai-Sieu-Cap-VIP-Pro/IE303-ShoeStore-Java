
import React, { useState } from 'react'
import { Card, Form, Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import OrderRow from '../Components/OrderRow'
import { fetchOrdersData, selectOrders, showDetailOrder, sortOrder } from '../OrderSlice'
import ReactPaginate from "react-paginate"


function OrderPage() {
  React.useEffect(() => {
    dispatch(fetchOrdersData())
  }, [])
  const dispatch = useDispatch()
  const orders = useSelector(selectOrders);
  const itemsPerPage = 2
  const [currentItems, setCurrentItems] = useState(orders);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  React.useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(orders.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(orders.length / itemsPerPage));
  }, [orders])
  React.useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(orders.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(orders.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % orders.length;
    setItemOffset(newOffset);
  };

  const handleSortOrder = (e) => {
    console.log(e.target.value)
    dispatch(sortOrder(e.target.value))
  }
  return (
    <div>
    <Card>
      <Card.Header as="h5">Quản lí đơn hàng</Card.Header>
      <Form.Select onChange={handleSortOrder} aria-label="Default select example">
                <option value="1">Sắp xếp</option>
                <option value="2">Thành tiền: tăng dần</option>
                <option value="3">Thành tiền: giảm dần</option>
                <option value="4">Mới nhất</option>
      </Form.Select>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="text-center">Mã đơn hàng</th>
              <th className="text-center">Mã giao hàng</th>
              <th className="text-center">Mã khách hàng</th>
              <th className="text-center">Trạng thái</th>
              <th className="text-center">Thành tiền</th>
              <th className="text-center">Xem chi tiết</th>
            </tr>
          </thead>
          <tbody>
            {
              currentItems.map((order, index) => {
                return (
                  <OrderRow key={index} order={order}/>
                )
              })
            }
          </tbody>
        </Table>
        <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            breakLabel="..."
            pageRangeDisplayed={5}
            renderOnZeroPageCount={null}
            activeClassName={"paginationActive"}
            containerClassName={"paginationBtns"}
            previousLinkClassName={"prevBtn"}
            nextLinkClassName={"nextBtn"}
            pageClassName={"numberBtn"}
            disabledLinkClassName={"paginationDisabled"}
          />
      </Card.Body>
    </Card>
  </div>
  )
}

export default OrderPage