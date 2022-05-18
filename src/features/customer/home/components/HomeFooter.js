import React from 'react'
import Login from '../../login_register/login';
import Register from "../../login_register/register";
import bootstrap from 'bootstrap'

const HomeFooter = () => {
    return (
        <div className="homepage">
            <div className="homefooter">
                <div className="footer__1">
                    <div className='footer__gioithieu'>GIỚI THIỆU</div>
                    <p>Chào mừng bạn đến với ngôi nhà UIT Shoes! Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử, và đang không ngừng phát triển lớn mạnh.</p>
                </div>
                <div className="footer__2">
                    <div className='footer__diachi'> ĐỊA CHỈ
                    <p>ĐHCNTT-ĐHQGHCM </p>
                    <p>033 987 6802</p>
                    <p>thanhtra1882001@gmail.com</p>
                    </div>
                </div>
                <div className="footer__3">
                    <div className='footer__menu'>MENU
                    <p>Trang chủ</p>
                    <p>Cửa hàng</p>
                    <p>Hệ thống</p>
                    <p>Tin tức</p>
                    <p>Liên hệ</p>
                    </div>
                </div>
                <div className="footer__4">
                <div className='footer__mangxahoi'>MẠNG XÃ HỘI
                    <p>fb</p>
                    <p>ig</p>
                    <p>tw</p>
                    <p>ptt</p>
                    <p>yt</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeFooter