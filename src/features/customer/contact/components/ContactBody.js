import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import "./ContactBody.css"

function ContactBody() {
    return (
        <div className='contact'>
            <Row>
                <Card.Img
                    variant="top"
                    src={process.env.PUBLIC_URL + `/Imgs/map.png`}
                    className='map__img'
                />
            </Row>

            <div className='contact_content'>
                <h4>THÔNG TIN LIÊN HỆ</h4>
            </div>
        </div>
    )
}

export default ContactBody