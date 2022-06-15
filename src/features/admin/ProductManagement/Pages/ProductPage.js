import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeleteProduct, fetchProductsData, filterProductByBrand, selectProducts, showAddProductForm, sortProduct } from '../ProductSlice';
import { Card, Button, Table, Form } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import AddNewProductForm from '../Components/AddNewProductForm'
import { getAllBrands } from "../../brandManagement/brandSlice";
import "./productPage.css"
import ReactPaginate from "react-paginate"
//import { fetchCartDetailData, selectCartDetails } from "../../../customer/cart/CartSlice";

export default function ProductPage() {
  // const cart = useSelector(selectCartDetails)
  // console.log(cart)
  // useEffect(() => {
  //   dispatch(fetchCartDetailData())
  // })


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProductsData())
    dispatch(getAllBrands())
  }, [])
  const products = useSelector(selectProducts)
  const { listBrands } = useSelector((state) => state.brand);
  const itemsPerPage = 4
  const [currentItems, setCurrentItems] = useState(products);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [products])
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const [isEdit, setIsEdit] = useState(false)
  const [pId, setPId] = useState("")
  const handleDelete = async (productId) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm không?")) 
      { 
        console.log(productId)
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

  const handleFilterByBrand = (e) => {
    console.log(e.target.value)
    dispatch(filterProductByBrand(e.target.value))
  }
  const handleSortProduct = (e) => {
    console.log(e.target.value)
    dispatch(sortProduct(e.target.value))
  }
   return (
    <div>
      <Card>
        <Card.Header as="h5">Quản lý sản phẩm</Card.Header>
        <div className="filterProduct">
          <Form.Select onChange={handleFilterByBrand} aria-label="Default select example">
            <option value="-1">Tất cả thương hiệu</option>
            {listBrands.map((brand) => {
              return (
                <>
                  <option value={brand.category_id}>{brand.category_name}</option>
                </>
              )
            })}
          </Form.Select>
          <Form.Select onChange={handleSortProduct} aria-label="Default select example">
                <option value="1">Sắp xếp</option>
                <option value="2">Giá tăng dần</option>
                <option value="3">Giá giảm dần</option>
                <option value="4">Mới nhất</option>
          </Form.Select>

        </div>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="text-center">Hình ảnh</th>
                <th className="text-center">Tên sản phẩm</th>
                <th className="text-center">Mô tả sản phẩm</th>
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
                currentItems.map((product) => (
                  <tr key={product.product_id} >
                    <td className="imgTd" ><div className="imgWrap">
                
                    <img src={product.product_img} alt="" />
                      </div></td>
                    <td className="text-center align-middle">{product.product_name}</td>
                    <td className="text-center align-middle">{product.product_desc}</td>
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
  );
}
