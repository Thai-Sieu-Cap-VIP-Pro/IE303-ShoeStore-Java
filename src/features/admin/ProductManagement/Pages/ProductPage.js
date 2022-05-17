import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeleteProduct, fetchProductsData, selectProducts } from '../ProductSlice';
import { Card, Button, Table } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import AddNewProductForm from '../Components/AddNewProductForm'

function ProductPage() {
  const products = useSelector(selectProducts);
  console.log(products);
  const dispatch = useDispatch()
  useEffect(() => {
      Promise.resolve(dispatch(fetchProductsData())).then(() => Navigate('product')) 
  }, [])
  const handleDelete = async (productId) => {
   await dispatch(fetchDeleteProduct(productId)).unwrap()
   dispatch(fetchProductsData())  }
  return (
    <div>
      <Card>
        <Card.Header as="h5">Quản lí sản phẩm</Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Trạng thái</th>
                <th class="text-center"> <AddNewProductForm/> </th>
              </tr>
            </thead>
            <tbody>
              {
                products.map((product) => (
                  <tr key={product.product_id}>
                    <td>{product.product_id}</td>
                    <td>{product.product_name}</td>
                    <td>{product.product_price}</td>
                    <td>{product.product_quanity}</td>
                    <td>{product.product_status}</td>
                    <td class="text-center">
                      <Button variant="primary">Sửa</Button>
                        &emsp;
                      <Button onClick={() => handleDelete(product.product_id)} variant="danger">Xóa</Button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductPage