import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"

const BodyProduct = () => {
    const navigate = useNavigate()
    const handleShowDetail = () => {
        navigate("/detail")

    }
    return (
        <Container fluid className="homepage">
            <h3>-SẢN PHẨM MỚI-</h3>
            <Row>
                <Col sm={3}>
                    <Card >
                        <Card.Img variant="top" src="https://kingshoes.vn/data/upload/media/jordan-1-mid-tuft-orange-bq6931-802-king-shoes-sneaker-real-hcm-1624273330.jpeg" />
                        <Card.Body>
                            <Card.Title>AIR JORDAN 1 LOW SHATTERED BACKBOARD</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleShowDetail()}>View Detail</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card >
                        <Card.Img variant="top" src="https://kingshoes.vn/data/upload/media/nike-air-force-1-shadow-crimson-tint-ci0919-107-king-shoes-sneaker-real-hcm-1624262153.jpeg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleShowDetail()}>View Detail</Button>
                        </Card.Body>
                    </Card>
                </Col><Col sm={3}>
                    <Card >
                        <Card.Img variant="top" src="https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-nmd-r1-gz9289-king-shoes-1-1642591968.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleShowDetail()}>View Detail</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card >
                        <Card.Img variant="top" src="https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-forum-fy7756-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-1-1648009425.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleShowDetail()}>View Detail</Button>
                        </Card.Body>
                    </Card>
                </Col><Col sm={3}>
                    <Card >
                        <Card.Img variant="top" src="https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-forum-low-green-gy8556-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-1-1648013432.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleShowDetail()}>View Detail</Button>
                        </Card.Body>
                    </Card>
                </Col><Col sm={3}>
                    <Card >
                        <Card.Img variant="top" src="https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-ultraboost-tra%CC%86%CC%81ng-fz4007-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-1-1647670125.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleShowDetail()}>View Detail</Button>
                        </Card.Body>
                    </Card>
                </Col><Col sm={3}>
                    <Card >
                        <Card.Img variant="top" src="https://kingshoes.vn/data/upload/media/ultraboost-20-grey-eg0755-nam-chinh-hang-tphcm-king-shoes-sneaker-real-shop-tan-binh-1-1628245718.jpeg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleShowDetail()}>View Detail</Button>
                        </Card.Body>
                    </Card>
                </Col><Col sm={3}>
                    <Card >
                        <Card.Img variant="top" src="https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-day-jogger-dash-green-linen-fw4829-king-shoes-sneaker-real-hcm-1-1634566222.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleShowDetail()}>View Detail</Button>
                        </Card.Body>
                    </Card>
                </Col><Col sm={3}>
                    <Card >
                        <Card.Img variant="top" src="https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-zx-2k-boost-trang-gz7456-king-shoes-sneaker-real-hcm-1-1637740091.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleShowDetail()}>View Detail</Button>
                        </Card.Body>
                    </Card>
                </Col><Col sm={3}>
                    <Card >
                        <Card.Img variant="top" src="https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-day-jogger-dash-green-linen-fw4829-king-shoes-sneaker-real-hcm-1-1634566222.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleShowDetail()}>View Detail</Button>
                        </Card.Body>
                    </Card>
                </Col><Col sm={3}>
                    <Card >
                        <Card.Img variant="top" src="https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-climacool-vent-fw1222-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-1-1650359033.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleShowDetail()}>View Detail</Button>
                        </Card.Body>
                    </Card>
                </Col><Col sm={3}>
                    <Card >
                        <Card.Img variant="top" src="https://kingshoes.vn/data/upload/media/adidas-yeezy-boost-380-pepper-fz12691-king-shoes-sneaker-real-hcm-1624266015.jpeg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleShowDetail()}>View Detail</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <h3>SẢN PHẨM GIẢM GIÁ</h3>
            <Row>
                <Col sm={3}>
                    <Card >
                        <Card.Img variant="top" src="https://kingshoes.vn/data/upload/media/jordan-1-mid-tuft-orange-bq6931-802-king-shoes-sneaker-real-hcm-1624273330.jpeg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleShowDetail()}>View Detail</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card >
                        <Card.Img variant="top" src="https://kingshoes.vn/data/upload/media/jordan-1-mid-tuft-orange-bq6931-802-king-shoes-sneaker-real-hcm-1624273330.jpeg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleShowDetail()}>View Detail</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card >
                        <Card.Img variant="top" src="https://kingshoes.vn/data/upload/media/jordan-1-mid-tuft-orange-bq6931-802-king-shoes-sneaker-real-hcm-1624273330.jpeg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleShowDetail()}>View Detail</Button>
                        </Card.Body>
                    </Card>
                </Col><Col sm={3}>
                    <Card >
                        <Card.Img variant="top" src="https://kingshoes.vn/data/upload/media/jordan-1-mid-tuft-orange-bq6931-802-king-shoes-sneaker-real-hcm-1624273330.jpeg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleShowDetail()}>View Detail</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}

export default BodyProduct