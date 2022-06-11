import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectProducts } from "../../../admin/ProductManagement/ProductSlice";
import { useDispatch } from "react-redux";

import { getDetailproduct } from "../../../customer/home/HomeSlice";
import { TwoThumbInputRange } from "react-two-thumb-input-range";
import "./ProductsBody.css"

function ProductsBody() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const products = useSelector(selectProducts);

    const [listProducts, setListProducts] = useState(products)

    console.log(products);
    
    const handleShowDetail = (id) => {
        const product = listProducts.find((item) => item.product_id === id);
        dispatch(getDetailproduct(product));
        // navigate(`/detail/${id}`);
    };

    const [value, setValue] = useState([100, 1000])

    const onValueSChange = (values) => {
        // setValue(values)
        console.log(values)
        setListProducts(pre => pre.filter(item => {
            return item.product_price > values[0] * 1000 && item.product_price < values[1] * 1000
        }))
    }
    return (
        <Container fluid className="homepage">
            <h4>DANH MỤC SẢN PHẨM</h4>
            <Row>
                <Col md={3}>
                    <h4>THƯƠNG HIỆU</h4>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /*checked*/ />
                        <label class="form-check-label" for="flexCheckDefault">
                            Adidas
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Nike
                        </label>
                    </div>
                    <h4>KHOẢNG GIÁ</h4>
                    <TwoThumbInputRange onChange={onValueSChange} values={value} min={0} max={10000} />
                </Col>
                <Col md={9}>
                    <div className='products'>
                        <Row>
                            <div className='sort__products'>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Mặc định</option>
                                    <option value="1">Giá: Tăng dần</option>
                                    <option value="2">Giá: Giảm dần</option>
                                    <option value="3">Tên: A-Z</option>
                                    <option value="4">Tên: Z-A</option>
                                    <option value="5">Cũ nhất</option>
                                    <option value="6">Mới nhất</option>
                                </select>
                            </div>
                        </Row>
                        <Row>
                            {listProducts.map((item, index) => {
                                if (item.product_status == 1) {
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
                            <nav aria-label="...">
                                <ul class="pagination">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item active" aria-current="page">
                                        <a class="page-link" href="#">2</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductsBody