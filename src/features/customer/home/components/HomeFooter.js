import React from "react";
import Login from "../../login_register/login";
import Register from "../../login_register/register";
import bootstrap from "bootstrap";
import "./HomeFooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const HomeFooter = () => {
  return (
    // <div className="homepage">
    //     <div className="homefooter">
    //         <div className="footer__1">
    //             <div className='footer__gioithieu'>GIỚI THIỆU</div>
    //             <p>Chào mừng bạn đến với ngôi nhà UIT Shoes! Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử, và đang không ngừng phát triển lớn mạnh.</p>
    //         </div>
    //         <div className="footer__2">
    //             <div className='footer__diachi'> ĐỊA CHỈ
    //             <p>ĐHCNTT-ĐHQGHCM </p>
    //             <p>033 987 6802</p>
    //             <p>thanhtra1882001@gmail.com</p>
    //             </div>
    //         </div>
    //         <div className="footer__3">
    //             <div className='footer__menu'>MENU
    //             <p>Trang chủ</p>
    //             <p>Cửa hàng</p>
    //             <p>Hệ thống</p>
    //             <p>Tin tức</p>
    //             <p>Liên hệ</p>
    //             </div>
    //         </div>
    //         <div className="footer__4">
    //         <div className='footer__mangxahoi'>MẠNG XÃ HỘI
    //             <p>fb</p>
    //             <p>ig</p>
    //             <p>tw</p>
    //             <p>ptt</p>
    //             <p>yt</p>
    //             </div>
    //         </div>

    //     </div>
    // </div>
    <div className="container__footer">
      <footer>
        <div class="row primary">
          <div class="column about">
            <h3>GIỚI THIỆU</h3>
            <p>
              Chào mừng bạn đến với ngôi nhà UIT Shoes! Tại đây, mỗi một dòng
              chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn
              lịch sử, và đang không ngừng phát triển lớn mạnh.
            </p>
          </div>

          <div class="column links">
            <h3>MENU</h3>
            <ul>
              <li>
                <a href="#">Trang chủ</a>
              </li>
              <li>
                <a href="#">Cửa hàng</a>
              </li>
              <li>
                <a href="#">Hệ thống</a>
              </li>
              <li>
                <a href="#">Tin tức</a>
              </li>
              <li>
                <a href="#">Liên hệ</a>
              </li>
            </ul>
          </div>

          <div class="column links">
            <h3>TRỢ GIÚP</h3>
            <ul>
              <li>
                <a href="#faq">Trạng thái đơn hàng</a>
              </li>
              <li>
                <a href="#cookies-policy">Giao hàng</a>
              </li>
              <li>
                <a href="#terms-of-services">Hoàn trả</a>
              </li>
              <li>
                <a href="#support">Phương thức thanh toán</a>
              </li>
            </ul>
          </div>
          <div class="column links">
            <div>
              <h3>LIÊN HỆ</h3>
            </div>
            <ul>
              <li>
                <a href="#">ĐHCNTT-ĐHQGHCM</a>
              </li>
              <li>
                <a href="#">033 987 6802</a>
              </li>
              <li>
                <a href="#">thanhtra1882001@gmail@gmail.com</a>
              </li>
              <li>
                <div class="social">
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faYoutube} />
                  <FontAwesomeIcon icon={faGoogle} />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeFooter;
