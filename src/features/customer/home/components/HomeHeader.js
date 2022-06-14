import React from 'react'
import ReactDOM from 'react-dom'
// import Login from '../../login_register/login';
// import Register from "../../login_register/register";
import bootstrap from 'bootstrap'
import "./HomeHeader.css";
import {Link} from 'react-router-dom'
import { Col, Container, Nav, Row } from 'react-bootstrap';

import {ShoppingCart, Search, Reorder} from "@material-ui/icons"

const HomeHeader = () => {
    return (
        // <div className="homepage">
        //     <nav className="navigation">
        //         <header id="header" className="nav__header">
        //             <div className="header-wrapper">
        //                 <div className="header-main-show-logo">
        //                     <div className="header__left">
        //                         <Link to="/login" className="dangnhap">Đăng Nhập</Link>
                                
        //                         <Link to="/register" className="dangky">Đăng Ký</Link>
        //                     </div>
        //                     <div className="header__center">
        //                         <div className="header__logo">
        //                             <a className="header__name">UIT SNEAKER</a>
        //                             <a className="ps__logo">
        //                                 <img src="https://iweb.tatthanh.com.vn/pic/3/blog/images/image(1244).png" alt="Cửa hàng giày" />
        //                             </a>
        //                         </div>
        //                     </div>
        //                     <div className="header__right"> 
                        
        //                    <Link to={`/cart`}>Giỏ hàng</Link>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="navigation__column center">
        //                 <ul className='nav__header__ul'>
        //                     <li className="menu__header" id="menu">
        //                         <Link to={`/`}>TRANG CHỦ</Link>
        //                     </li>
        //                     <li className="menu__header" id="menu">
        //                         <Link to={`/introduction`}>GIỚI THIỆU</Link>
        //                     </li>
        //                     <li className="menu__header" id="menu">
        //                         <Link to={`/products`}>SẢN PHẨM</Link>
        //                     </li>
        //                     <li className="menu__header" id="menu">
        //                         <Link to="/discount">KHUYẾN MÃI</Link>
        //                     </li>
        //                     <li className="menu__header" id="menu">
        //                         <Link to="/news">TIN TỨC</Link>
        //                     </li>
        //                     <li className="menu__header" id="menu">
        //                         <Link to="/contact">LIÊN HỆ</Link>
        //                     </li>
        //                 </ul>
        //             </div>
        //             <div className="navigation__column right"></div>
        //         </header>
        //     </nav>
        // </div>
        <Container fluid>
            <Row className='headerTop'>
                <Col md={{ span: 3, offset: 1 }}>
                    <div className="headerTop__text">
                        Thế giới giày Adidas 
                    </div>

                </Col>
                <Col md={{ span: 2, offset: 1 }}>
                    <div className="headerTop__phone">
                        036679098
                    </div>
                </Col>
                <Col md={{ span: 3, offset: 2 }}>
                    <div className="headerTop_time">
                            t2-cn from 8pm to 21pm
                    </div>
                </Col>
            </Row>
            <Row className='headerCenter'>
            <Col md={{ span: 3, offset: 1 }}>
                    <div className="headerCenter__logo">
                        <img src="" alt="" />
                    </div>

                </Col>
                <Col md={{ span: 2, offset: 1 }}>
                    <div className="headerCenter__searchBox">
                       <input type="text" name="" id="" />
<Search/>
                    </div>
                </Col>
                <Col md={{ span: 3, offset: 2 }}>
                    <div className="headerCenter_cart">
                            <ShoppingCart/>
                            Giỏ hàng của bạn
                    </div>
                </Col>
                
            </Row>
            <Row className='headerNavbar'>
                <Col md={{ span: 10, offset: 2 }}>
                    <div className="navWrap">
                        <span>Danh mục sản phẩm</span>
                        <Reorder/>
                    <Nav>Trang chủ</Nav>
                  <Nav>Sản phẩm</Nav>
                  <Nav>Hỗ trợ khách hàng</Nav>
                  <Nav>Liên hệ</Nav>
                  <Nav>Review</Nav>
                    </div>
                 

                </Col>
               
            </Row>
        </Container>
    )
}

export default HomeHeader