import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import "./ProfileBody.css"

function ProfileBody() {
    return (
        <div className='profile'>
            <Row>
                <h4><b>THÔNG TIN TÀI KHOẢN</b></h4>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Tên</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon2">Email</span>
                    <input type="text" class="form-control" placeholder="email@gmail.com" aria-label="email@gmail.com" aria-describedby="basic-addon2" />
                </div>
                
                <b>THAY ĐỔI MẬT KHẨU</b>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon3">Mật khẩu hiện tại</span>
                    <input type="password" class="form-control" id="password" />
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon4">Mật khẩu mới</span>
                    <input type="password" class="form-control" id="password" />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon5">Xác nhận mật khẩu mới</span>
                    <input type="password" class="form-control" id="password" />
                </div>
                <button type="button" class="btn btn-primary btn-sm">LƯU THAY ĐỔI</button>
            </Row>

            <Row>
                <h4><b>ĐỊA CHỈ GIAO HÀNG</b></h4>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text">$</span>
                    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
                    <span class="input-group-text">.00</span>
                </div>

                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" />
                    <span class="input-group-text">@</span>
                    <input type="text" class="form-control" placeholder="Server" aria-label="Server" />
                </div>

                <div class="input-group">
                    <span class="input-group-text">With textarea</span>
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>
            </Row>
        </div>
    )
}

export default ProfileBody