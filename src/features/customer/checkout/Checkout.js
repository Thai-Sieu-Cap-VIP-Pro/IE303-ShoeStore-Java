import React from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
function Checkout() {
  return (
    <div className="container__checkout">
      <div className="left">
        <div className="left__header">
          <h5>Thông tin mua hàng</h5>
        </div>
        <div className="left__content">
          <form>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Họ và tên" />
            <input type="text" placeholder="Số điện thoại" />
            <input type="text" placeholder="Địa chỉ" />
            <input type="text" placeholder="Ghi chú" />
          </form>
        </div>
      </div>
      <div className="right">
        <div className="right__header">
          <h5>Đơn hàng</h5>
        </div>
        <div className="right__content">
          <div className="listItem">
            <div className="item">
              <div className="imgItem">
                <img
                  src="https://cdn.shopify.com/s/files/1/0631/2978/0438/products/77895_2_grande.png?v=1649806046"
                  alt=""
                />
              </div>
              <div className="infoItem">
                <div className="nameItem">
                  NIKE AIR FORCE 1 LOW "WHITE PENDANT"
                </div>
                <div className="sizeItem">Size: 32</div>
                <div className="quantity"> x 1</div>
              </div>
              <div className="priceItem">1.500.000₫</div>
            </div>
          </div>
          <div className="coupon">
            <input type="text" placeholder="Nhập mã giảm giá" />
            <button>Áp dụng</button>
          </div>
          <div className="calPrice">
            <div className="namePriceList">
              <p>Tạm tính</p>
              <p>Phí vận chuyển</p>
              <p>Mã giảm giá</p>
            </div>
            <div className="priceList">
              <p>1.500.000₫</p>
              <p>free</p>
              <p>-</p>
            </div>
          </div>
          <div className="totalPrice">
            <p>Tổng cộng</p>
            <p>1.500.000₫</p>
          </div>
          <div className="checkout">
            <Link to="/cart">
              <div className="icon">⬅️</div>
              <p>Quay về giỏ hàng</p>
            </Link>
            <button>ĐẶT HÀNG</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
