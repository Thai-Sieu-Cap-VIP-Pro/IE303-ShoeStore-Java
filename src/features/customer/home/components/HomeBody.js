import React from 'react'
import Login from '../../login_register/login';
import Register from "../../login_register/register";
import bootstrap from 'bootstrap';
import Slider from './slider/Slider';
import BodyProduct from './body-product/body-product'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const HomeBody = () => {
    return (
        <Container fluid className="homepage">
            <Row>
                <Col sm={12}>
                    <Slider />
                </Col>
            </Row>

            <Row>
                <BodyProduct />
            </Row>

        </Container>
    )
}

export default HomeBody