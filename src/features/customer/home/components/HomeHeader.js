import React from "react";
// import Login from '../../login_register/login';
// import Register from "../../login_register/register";
import bootstrap from "bootstrap";
import "./HomeHeader.css";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <div className="homepage">
      <nav className="navigation">
        <header id="header" className="nav__header">
          <div className="header-wrapper">
            <div className="header-main-show-logo">
              <div className="header__left">
                <Link to="/login" className="dangnhap">
                  Đăng Nhập
                </Link>

                <Link to="/register" className="dangky">
                  Đăng Ký
                </Link>
              </div>
              <div className="header__center">
                <div className="header__logo">
                  <a className="ps__logo">
                    <img
                      src="https://i.imgur.com/9RpupIs.png"
                      alt="Cửa hàng giày"
                    />
                  </a>
                </div>
              </div>
              <div className="header__right">
                <div className="cartIcon">🛒</div>
                <span className="badge">3</span>
                <p>Giỏ hàng</p>
              </div>
            </div>
          </div>
          <div className="navigation__column center">
            <ul className="nav__header__ul">
              <li className="menu__header" id="menu">
                <Link to={`/`}>TRANG CHỦ</Link>
              </li>
              <li className="menu__header" id="menu">
                <Link to={`/introduction`}>GIỚI THIỆU</Link>
              </li>
              <li className="menu__header" id="menu">
                <Link to={`/products`}>SẢN PHẨM</Link>
              </li>
              <li className="menu__header" id="menu">
                <Link to="/discount">KHUYẾN MÃI</Link>
              </li>
              <li className="menu__header" id="menu">
                <Link to="/news">TIN TỨC</Link>
              </li>
              <li className="menu__header" id="menu">
                <Link to="/contact">LIÊN HỆ</Link>
              </li>
            </ul>
          </div>
          <div className="navigation__column right"></div>
        </header>
      </nav>
    </div>
  );
};

export default HomeHeader;
