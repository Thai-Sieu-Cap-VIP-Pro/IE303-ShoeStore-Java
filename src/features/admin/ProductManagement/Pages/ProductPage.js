import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeleteProduct, fetchProductsData, selectProducts, showAddProductForm } from '../ProductSlice';
import { Card, Button, Table } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import AddNewProductForm from '../Components/AddNewProductForm'
import { getAllBrands } from "../../brandManagement/brandSlice";

function ProductPage() {
  const dispatch = useDispatch()
  useEffect(() => {
    const action = getAllBrands()
    dispatch(action)
  }, [])
  const [isEdit, setIsEdit] = useState(false)
  const [pId, setPId] = useState("")
  const products = useSelector(selectProducts);
  useEffect(() => {
      Promise.resolve(dispatch(fetchProductsData())).then(() => Navigate('product')) 
  }, [])
  const handleDelete = async (productId) => {
   await dispatch(fetchDeleteProduct(productId)).unwrap()
   dispatch(fetchProductsData())  }
  const handleUpdate = async (productId) => {
    setIsEdit(true)
    setPId(productId)
    dispatch(showAddProductForm())
  }
  const handleShow = () => {
    setIsEdit(false)
    dispatch(showAddProductForm());
  }
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
                <th class="text-center">   
                  <Button variant="success" onClick={handleShow}> Thêm sản phẩm  </Button> 
                  <AddNewProductForm isSua={isEdit}  productId={pId}/>
                </th>
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
                      <Button variant="primary" onClick={() => handleUpdate(product.product_id)}>Sửa</Button>
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