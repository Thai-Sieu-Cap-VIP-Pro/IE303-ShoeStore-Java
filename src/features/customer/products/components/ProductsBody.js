import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { filterProductByBrand, selectProducts, sortProduct } from "../../../admin/ProductManagement/ProductSlice";
import { useDispatch } from "react-redux";
import { getDetailproduct } from "../../../customer/home/HomeSlice";
import { TwoThumbInputRange } from "react-two-thumb-input-range";
import { fetchProductsData } from "../../../admin/ProductManagement/ProductSlice";
import "./ProductsBody.css";
import ReactPaginate from "react-paginate";
import { getAllBrands } from "../../../admin/brandManagement/brandSlice";

function ProductsBody() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsData());
    dispatch(getAllBrands())
  }, []);
  const products = useSelector(selectProducts);
  const { listBrands } = useSelector((state) => state.brand);
  console.log(listBrands)
  const itemsPerPage = 2;
  const [currentItems, setCurrentItems] = useState(products);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [products]);
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

  const handleShowDetail = (id) => {
    const product = currentItems.find((item) => item.product_id === id);
    dispatch(getDetailproduct(product));
    // navigate(`/detail/${id}`);
  };

  // const [value, setValue] = useState([100, 1000])

  // const onValueSChange = (values) => {
  //     // setValue(values)
  //     console.log(values)
  //     setListProducts(pre => pre.filter(item => {
  //         return item.product_price > values[0] * 1000 && item.product_price < values[1] * 1000
  //     }))
  // }
  const handleFilterByBrand = (e) => {
    console.log(e.target.value)
    dispatch(filterProductByBrand(e.target.value))
  }
  const handleSortProduct = (e) => {
    console.log(e.target.value)
    dispatch(sortProduct(e.target.value))
  }
  return (
    <Container fluid className="homepage">
      <h4>DANH MỤC SẢN PHẨM</h4>
      <Row>
        <Col md={3}>
          <h4>THƯƠNG HIỆU</h4>
          <Form.Select onChange={handleFilterByBrand} aria-label="Default select example">
            <option value="-1">Tất cả thương hiệu</option>
            {listBrands.map((brand) => {
              return (
                <>
                    {console.log(listBrands)}
                  <option value={brand.category_id}>{brand.category_name}</option>
                </>
              )
            })}
          </Form.Select>
          <h4>KHOẢNG GIÁ</h4>
          {/* <TwoThumbInputRange onChange={onValueSChange} values={value} min={0} max={10000} /> */}
        </Col>
        <Col md={9}>
          <div className="products">
            <Row>
                <Form.Select onChange={handleSortProduct} aria-label="Default select example">
                    <option value="1">Sắp xếp</option>
                    <option value="2">Giá tăng dần</option>
                    <option value="3">Giá giảm dần</option>
                    <option value="4">Mới nhất</option>
                </Form.Select>
            </Row>
            <Row>
              {currentItems.map((item, index) => {
                if (item.product_status == 1) {
                  console.log("first");
                  return (
                    <Col sm={4} key={index}>
                      <Card>
                        <Card.Img variant="top" src={item.product_img} />
                        <Card.Body>
                          <Card.Title>{item.product_name}</Card.Title>
                          <Card.Text>{item.product_price}</Card.Text>
                          <Link to={`/detail/${item.product_id}`}>
                            <Button
                              variant="primary"
                              onClick={() => handleShowDetail(item.product_id)}
                            >
                              View Detail
                            </Button>
                          </Link>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                }
              })}
            </Row>
            <Row>
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
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductsBody;
