import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeleteProduct, fetchProductsData, selectProducts, showAddProductForm } from '../ProductSlice';
import { Card, Button, Table } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import AddNewProductForm from '../Components/AddNewProductForm'
import { getAllBrands } from "../../brandManagement/brandSlice";
import "./productPage.css"

export default function ProductPage() {
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
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm không?")) 
      { 
        await dispatch(fetchDeleteProduct(productId)).unwrap()
        dispatch(fetchProductsData()) 
      } 
    else {
        console.log("Không xóa");
      }
  }
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
                <th className="text-center">Hình ảnh</th>
                <th className="text-center">Tên sản phẩm</th>
                <th className="text-center">Giá</th>
                <th className="text-center">Số lượng</th>
                <th className="text-center">Trạng thái</th>
                <th className="text-center">   
                  <Button variant="success" onClick={handleShow}> Thêm sản phẩm  </Button> 
                  <AddNewProductForm isSua={isEdit}  productId={pId}/>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                products.map((product) => (
                  <tr key={product.product_id} >
                    <td className="imgTd" ><div className="imgWrap">
                
                    <img src={product.product_img} alt="" />
                      </div></td>
                    <td className="text-center align-middle">{product.product_name}</td>
                    <td className="text-center align-middle">{product.product_price}</td>
                    <td className="text-center align-middle">{product.product_quanity}</td>
                    <td className="text-center align-middle">{product.product_status == 1 ? "Ẩn" : "Hiện"}</td>
                    <td class="text-center align-middle">
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
