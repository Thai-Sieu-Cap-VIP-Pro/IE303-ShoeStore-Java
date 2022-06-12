import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import './Intro.css'


function IntroductionBody() {
    return (
        <div className='intro'>
            <Row>
                <nav class="woocommerce-breadcrumb breadcrumbs">
                    <Link to="/home">Trang chủ</Link>
                    <span class="divider">/</span> <Link to="/gioi_thieu">Giới thiệu</Link>
                </nav>
            </Row>

            <Row>
                <Col sm={4}>
                    <Card.Img
                        variant="top"
                        src={process.env.PUBLIC_URL + `/Imgs/intro.png`}
                        className='intro__img'
                    />
                </Col>
                <Col sm={8}>
                    <h3>Giới thiệu về UIT SNEAKER</h3>
                    <p>
                        Chào mừng bạn đến với UIT SNEAKER! Tại đây chuyên thiết kế và kinh doanh các mặt hàng giày dép cho giới trẻ, là cấu nối cho bạn trẻ cả nước tiếp cận với xu hướng thời trang giày trên thế giới. "Chúng tôi mang đến sự khác biệt!".
                    </p>
                    <p>
                        Cùng với xu hướng thời trang của thế giới thì UIT SNEAKER đã và đang không ngừng đổi mới để mang đến cho các bạn trẻ các mẫu giày thời trang độc đáo, mới lạ, để tiên phong cho một phong cách thời trang mới, một phong cách biểu tượng cho giới trẻ trên cả nước.
                    </p>
                    <p>

                    </p>
                    <i>
                        Sự hài lòng của các bạn chính là mục tiêu phấn đấu của chúng tôi.
                    </i>
                </Col>
            </Row>
        </div>
    )
}

export default IntroductionBody