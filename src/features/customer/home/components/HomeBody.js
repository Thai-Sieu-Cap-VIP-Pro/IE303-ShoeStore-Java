import React from 'react'
import Login from '../../login_register/login';
import Register from "../../login_register/register";
import bootstrap from 'bootstrap';
import Slide from './slide/slide';
import BodyProduct from './body-product/body-product'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const HomeBody = () => {
    return (
        <Container className="homepage">
            <Row>
            <Col md={4}>
                category
                </Col>
                <Col md={8}>
                    <Slide />
                </Col>
            </Row>

            <Row>
                <BodyProduct />
            </Row>

        </Container>
    )
}

export default HomeBody