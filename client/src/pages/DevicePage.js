import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";

const DevicePage = () => {
  const device = {
    id: 1,
    name: 'Iphone',
    price: 35000,
    rating: 228,
    img: '/132'
  }

  const description = [
    {id: 1, title: 'ОЗУ', description: '5щб'},
    {id: 2, title: 'Процессор', description: 'Intel'},
    {id: 3, title: 'Камера', description: '8мп'},
    {id: 4, title: 'ПЗУ', description: '228гб'},
  ]

  return (
    <Container className={"mt-3"}>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img}/>
        </Col>
        <Col md={4} style={{width: 300, background: "lightgray"}}>
          <Row >
            <h2>{device.name}</h2>
            <div>
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className={"d-flex align-items-center justify-content-center"}
            style={{width: 300, height: 300, fontSize: 32, border: "5px solid lightgray"}}
          >
            <h3>{device.price}</h3>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className={"d-flex flex-column m-3"}>
        {description.map((info, index) =>
          <Row key={info.id} style={{background: index % 2 === 0 ? 'lightblue' : 'lightgray'}}>
            {info.title} : {info.description}
          </Row>
        )}
      </Row>
    </Container>
  );
};

export default DevicePage;