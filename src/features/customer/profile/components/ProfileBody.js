import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Card, Tab, Sonnet, Nav } from "react-bootstrap";
import "./ProfileBody.css"
import Info from './Info';
import HistoryOrder from './HistoryOrder';
import orderAPI from '../../../../api/OrderApi';
import OrderDetail from '../../../admin/OrderManagement/Components/OrderDetail';

function ProfileBody() {
    

    return (
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
            <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                <Nav.Item>
                    <Nav.Link eventKey="first">Thông tin cá nhân</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">Lịch sử đơn hàng</Nav.Link>
                </Nav.Item>
                </Nav>
            </Col>
            <Col sm={9}>
                <Tab.Content>
                <Tab.Pane eventKey="first">
                <Info/>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <HistoryOrder/>
                </Tab.Pane>
                </Tab.Content>
            </Col>
            </Row>

        </Tab.Container>
        </>
    )
}

export default ProfileBody