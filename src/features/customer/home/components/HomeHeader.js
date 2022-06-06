import React from 'react'
// import Login from '../../login_register/login';
// import Register from "../../login_register/register";
import bootstrap from 'bootstrap'
import "./HomeHeader.css";
import {Link} from 'react-router-dom'

const HomeHeader = () => {
    return (
        <div className="homepage">
            <nav className="navigation">
                <header id="header" className="nav__header">
                    <div className="header-wrapper">
                        <div className="header-main-show-logo">
                            <div className="header__left">
                                <Link to="/login" className="dangnhap">Đăng Nhập</Link>
                                
                                <Link to="/register" className="dangky">Đăng Ký</Link>
                            </div>
                            <div className="header__center">
                                <div className="header__logo">
                                    <a className="header__name">UIT SNEAKER</a>
                                    <a className="ps__logo">
                                        <img src="https://iweb.tatthanh.com.vn/pic/3/blog/images/image(1244).png" alt="Cửa hàng giày" />
                                    </a>
                                </div>
                            </div>
                            <div className="header__right">Giỏ hàng</div>
                        </div>
                    </div>
                    <div className="navigation__column center">
                        <ul className='nav__header__ul'>
                            <li className="menu__header" id="menu">
                                <a href="home">TRANG CHỦ</a>
                            </li>
                            <li className="menu__header" id="menu">
                                <a href="gioi-thieu">GIỚI THIỆU</a>
                            </li>
                            <li className="menu__header" id="menu">
                                <a href="nu">NỮ</a>
                            </li>
                            <li className="menu__header" id="menu">
                                <a href="nam">NAM</a>
                            </li>
                            <li className="menu__header" id="menu">
                                <a href="tre-em">TRẺ EM</a>
                            </li>
                            <li className="menu__header" id="menu">
                                <a href="phu-kien-khac">PHỤ KIỆN KHÁC</a>
                            </li>
                            <li className="menu__header" id="menu">
                                <a href="tin-tuc">TIN TỨC</a>
                            </li>
                            <li className="menu__header" id="menu">
                                <a href="lien-he">LIÊN HỆ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="navigation__column right"></div>
                </header>
            </nav>
        </div>
    )
}

export default HomeHeader