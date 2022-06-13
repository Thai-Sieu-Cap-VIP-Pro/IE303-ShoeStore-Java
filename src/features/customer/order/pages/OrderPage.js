import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/nav";
import "./OrderPage.css";
export default function OrderPage() {
  return (
    <div className="container__order">
      <Nav />
      <div className="list__orders">
        <div className="order">
          <div className="process__order">
            <div className="content__process__order">ĐANG XỬ LÝ</div>
          </div>
          <div className="info__order">
            <div className="img_order">
              <img src="http://dqshop.vn/wp-content/uploads/2021/06/giay-nike-air-force-1-trang-vien-xam-like-auth-dep-chat-2-1.jpg" />
            </div>
            <div className="content__order">
              <div className="name__order">Giày Nike .....................</div>
              <div className="size__order">Size: 30</div>
              <div className="quanranty__order">x1</div>
            </div>
            <div className="price__order">100.000đ</div>
          </div>
        </div>

        <div className="order">
          <div className="process__order">
            <div className="content__process__order">ĐANG XỬ LÝ</div>
          </div>
          <div className="info__order">
            <div className="img_order">
              <img src="http://dqshop.vn/wp-content/uploads/2021/06/giay-nike-air-force-1-trang-vien-xam-like-auth-dep-chat-2-1.jpg" />
            </div>
            <div className="content__order">
              <div className="name__order">Giày Nike .....................</div>
              <div className="size__order">Size: 30</div>
              <div className="quanranty__order">x1</div>
            </div>
            <div className="price__order">100.000đ</div>
          </div>
        </div>
      </div>
    </div>
  );
}
